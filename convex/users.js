import { v } from "convex/values";
import { mutation } from "./_generated/server";


export  const CreateNewUser=mutation({
    args: { 
        name: v.string(),
        email: v.string(),
        image: v.string(),

    },

    handler:async(ctx,args) => {
        //if User already exists, return the user
        const userData= await ctx.db.query("users").filter(q=>q.eq(q.field("email"),args.email)).collect()

        //if not, create a new user
        if(userData?.length==0){
            const data={
                name: args.name,
                email: args.email,
                image: args.image,
                credits: "30",
                paymentId: null
            }
            const result= await ctx.db.insert("users",{
                ...data,
            });
            console.log("User Created",result);
            return {
                ...data,
                _id: result,
            }
           
    }
    return userData;
}})