import express from "express";
import axios from "axios";
import db from "@repo/db/client";
const app = express();
let token = "";

app.get('/banksimulation',async(req,res)=>{
    token = (Math.random() * 1000).toString();
    fn();
    res.json({
        token:token
    })
})

async function fn() {

    const data = {
        token: "",
        user_identifier: 0,
        amount: "0"
    };
    try {
        const transaction = await db.onRampTransaction.findUnique({
            where:{
                token:token
            }
        })
        if(transaction){
            data.token = token
            data.user_identifier = transaction.userId
            data.amount = String(transaction.amount)
        }
        const status = transaction?.status;
        if(status == "Processing"){
            setTimeout(()=>{
                axios.post('http://localhost:3003/hdfcWebhook', data)
                .then(response => {
                  console.log(response.data);
                })
                .catch(error => {
                  console.error(error);
                });
            },2000)
        }

    } catch (error) {
        console.log(error);
        
    }
}

app.listen(3004,()=>{
    console.log('Bank server is listening at port 3004');
    
})