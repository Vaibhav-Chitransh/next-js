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
    callbacks: {
        async jwt({token, user}) {
            if(user) {
                token.id = user.id;
                token.name = user.name;
                token.email = user.email;
                token.image = user.image;
            }

            return token;
        },

        session({session, token}) {
            if(session.user) {
                session.user.id = token.id as string;
                session.user.name = token.name;
                session.user.email = token.email;
                session.user.image = token.image as string;
            }

            return session;
        }
    },
    session: {},
    pages: {},
    secret: ""
}

export default authOptions