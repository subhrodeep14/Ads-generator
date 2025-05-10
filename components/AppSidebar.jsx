import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
  } from "@/components/ui/sidebar"
import Image from "next/image"
import { Button } from "./ui/button"
import { LayoutDashboardIcon, VideoIcon } from "lucide-react"

const sidebarItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboardIcon,
    path: "/dashboard",
  },
  {
    title: " Create Ad ",
    icon: VideoIcon,
    path: "/workspace/create-ad",
  },{
    title: " Create Ad ",
    icon: VideoIcon,
    path: "/workspace/create-ad",
  }, 
  {
    title: "Settings",
    icon: "/icons/settings.svg",
  },
  
]
  
  export function AppSidebar() {
    return (
      <Sidebar>
        <SidebarHeader >
          <Image src="/logo.svg" alt="Logo" width={50} height={50} />
        </SidebarHeader>
        <hr></hr>
        <SidebarContent>
          <SidebarGroup>
            <Button className='mt-5'>+ Create New Ad Video</Button>
          </SidebarGroup>
          <SidebarGroup >
            <SidebarGroupLabel>

            </SidebarGroupLabel>
            <SidebarGroupContent>

            </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    )
  }
  