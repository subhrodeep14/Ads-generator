import React from 'react'
import WorkspaceProvider from './provider'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'

const WorkspaceLayout = ({children}) => {
  return (
    <SidebarProvider>
    <div>
        <WorkspaceProvider>
          <SidebarTrigger/>
        {children}
        </WorkspaceProvider>
    </div>
    </SidebarProvider>
  )
}

export default WorkspaceLayout