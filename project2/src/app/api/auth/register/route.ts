import connectDB from "@/lib/db";
import User from "@/model/user.model";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req : NextRequest) => {
    try {
        const {name, email, password} = await req.json();
        await connectDB();

        const userAlreadyExist = await User.findOne({email});
        if(userAlreadyExist) {
            return NextResponse.json({message: "User already exists"}, {status: 400});
        }

        if(password.length < 6) {
            return NextResponse.json({message: "Password must be atleast 6 characters long"}, {status: 400});
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        return NextResponse.json({
            _id: user._id,
            name,
            email
        }, {status: 201});
    } catch (error) {
        return NextResponse.json({message: `Error while registering user: ${error}`}, {status: 500});
    }
}