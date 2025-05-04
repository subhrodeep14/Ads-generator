"use client"

import { api } from '@/convex/_generated/api'
import { useUser } from '@clerk/nextjs'
import { useMutation } from 'convex/react'
import React, { useEffect } from 'react'

const WorkspaceProvider = ({children}) => {

    const newUserMutation =useMutation(api.users.CreateNewUser);
    const {user} =useUser();

    useEffect(()=>{
        user && CreateNewUser()
    },[user])

    const CreateNewUser=async() =>{
        const result =await newUserMutation({
            name:user?.firstName,
            email:user?.primaryEmailAddress.emailAddress,
            image:user?.imageUrl,
        });
        console.log(result)
    }
  return (
    <div>{children}</div>
  )
}

export default WorkspaceProvider