"use client";
import Home from "@/app/page";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from "@/components/ui/sidebar"
import { House } from "lucide";
import Link from "next/link";

export function AppSidebar() {
  return (
    <Sidebar>
        <SidebarHeader>
        <h1 className="text-lg font-semibold" onClick={() => {}}>
          Admin Sidebar
        </h1>
        </SidebarHeader>
      <SidebarContent>
        <SidebarGroup/> 
        <SidebarGroupLabel>Navigation</SidebarGroupLabel>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
                <Link href="/admin">
            
                <span>Home</span>
                </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
                <Link href="/admin/categories">Categories</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}

