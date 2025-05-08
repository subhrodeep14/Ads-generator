"use client"

import { AppSidebar } from '@/components/AppSidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { UserDetailContext } from '@/context/UserDetailContext'
import { api } from '@/convex/_generated/api'
import { useUser } from '@clerk/nextjs'
import { useMutation } from 'convex/react'
import React, { useEffect } from 'react'

const WorkspaceProvider = ({children}) => {

    const newUserMutation =useMutation(api.users.CreateNewUser);
    const {user} =useUser();

    const [userDetail, setUserDetail] = React.useState();
    useEffect(()=>{
        user && CreateNewUser()
    },[user])

    const CreateNewUser=async() =>{
        const result =await newUserMutation({
            name:user?.fullName,
            email:user?.primaryEmailAddress?.emailAddress,
            image:user?.imageUrl,
        });
        console.log(result)
        console.log("hey");
        setUserDetail(result);
        
    }
  return (
    <UserDetailContext.Provider value={{userDetail,setUserDetail}}>
    <SidebarProvider>
      <AppSidebar/>
    <div>
     
      {children}
    </div>
    </SidebarProvider>
    
    </UserDetailContext.Provider>
  )
}

export default WorkspaceProvider