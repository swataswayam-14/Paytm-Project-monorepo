"use server";
import prisma from "@repo/db/client";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth";
import axios from "axios";

export async function createOnRampTransaction(provider:string, amount:number){
    const session = await getServerSession(authOptions);
    if(!session.user || !session.user.id){
        return {
            message:"UnAuthorised request"
        }
    }
    const res = await axios.get('http://localhost:3004/banksimulation')
    const token = res.data.token;
    await prisma.onRampTransaction.create({
        data:{
            provider,
            status:"Processing",
            startTime: new Date(),
            token: token,
            userId: Number(session.user.id),
            amount: amount*100
        }
    });
    return {
        message:"Done"
    }
}
