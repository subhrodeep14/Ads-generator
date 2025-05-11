import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar"
import Image from "next/image"
import { Button } from "./ui/button"
import { LayoutDashboardIcon, Settings, VideoIcon, Videotape, WalletCards } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const sidebarItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboardIcon,
    path: "/workspace",
  },
  {
    title: " Create Ad ",
    icon: VideoIcon,
    path: "/workspace/create-ad",
  },{
    title: " My Ads ",
    icon: Videotape,
    path: "/workspace/my-ads",
  },  {
    title: "Settings",
    icon: Settings,
    path: "/workspace/settings",
  },
  {
    title: "Billing",
    icon: WalletCards,
    path: "/workspace/billing",
  },
  
]
  
  export function AppSidebar() {
    const path=usePathname(); 
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
              <h2 className="text-sm font-semibold text-muted-foreground">Application</h2>
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {sidebarItems.map((item,index) => (
                  <SidebarMenuItem

                    key={index}
                    
                  >
                    <SidebarMenuButton asChild className={"p-5"}>
                      <Link href={item.path} className={`flex items-center text-[20px] text-primary-muted hover:text-primary ${path==item.path&&'text-primary bg-voilet-100'}`}>
                        <item.icon className="mr-2 h-10 w-10" />
                        <span>{item.title}</span>
                        </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    )
  }
  