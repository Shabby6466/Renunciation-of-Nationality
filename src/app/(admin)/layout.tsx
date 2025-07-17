"use client";

import { useSidebar } from "@/context/SidebarContext";
// import AppHeader from "@/layout/AppHeader";
import AppSidebar from "@/layout/AppSidebar";
import Backdrop from "@/layout/Backdrop";
import React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  // Calculate left margin based on sidebar state
  const mainContentMargin = isMobileOpen
    ? "ml-0"
    : isExpanded || isHovered
      ? "ml-[256px]"
      : "ml-[90px]";

  return (
    <div className="bg-[#F5F7FE] min-h-screen w-full">
      {/* Sidebar */}
      <AppSidebar />

      {/* Backdrop for mobile toggle */}
      <Backdrop />

      {/* Main Content */}
      <main
        className={`transition-all duration-300 ease-in-out ${mainContentMargin} m-1`}
      >
        <div className="max-w-screen-2xl mx-auto space-y-6">{children}</div>
      </main>
    </div>
  );
}
