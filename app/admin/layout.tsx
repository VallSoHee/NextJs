"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { Sidebar } from "@hugeicons/core-free-icons";   
import { AppSidebar } from "./components/sidebar/sidebar.module";
import { SidebarProvider } from "@/components/ui/sidebar";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";



export default function AppAdmin({children}: {children: React.ReactNode}) {
 return (
  <SidebarProvider>

<AppSidebar/>

    <SidebarInset>
      <div className="p-4">
        <SidebarTrigger/>
        {children}
              </div>
              </SidebarInset>
              </SidebarProvider>
 );
}
