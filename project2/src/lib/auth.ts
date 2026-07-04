import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "./db";
import User from "@/model/user.model";
import bcrypt from "bcryptjs";

const authOptions : AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {label: 'Email', type: 'text'},
                password: {label: 'Password', type: 'password'}
            },
            async authorize(credentials, req) {
                const email = credentials?.email;
                const password = credentials?.password;

                if(!email || !password) throw new Error("Email or Password is not found");
                await connectDB();

                const user = await User.findOne({email});
                if(!user) throw new Error("user not found");

                const isPasswordCorrect = await bcrypt.compare(password, user.password);
                if(!isPasswordCorrect) throw new Error("Incorrect password");

                return {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    image: user.image
                }
            }
        })
    ],
    callbacks: {},
    session: {},
    pages: {},
    secret: ""
}

export default authOptions