"use client"

import { SidebarTrigger } from "@/components/ui/sidebar"

export function Header() {
  return (
    <header className="border-b bg-white px-6 py-4">
      <div className="flex items-center">
        <SidebarTrigger />
      </div>
    </header>
  )
}
