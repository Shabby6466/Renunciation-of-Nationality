"use client";

import { useSidebar } from "@/context/SidebarContext";
import AppSidebar from "@/layout/AppSidebar";
import Backdrop from "@/layout/Backdrop";
import { usePathname } from "next/navigation";
import React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();
  const pathname = usePathname();

  // Hide sidebar for New Form route
  const routesToHideSidebar = [
    "/new-forms",
    "/parent-form",
    "/children-form",
    "/supporting-documents",
    "/review-form",
  ];
  const hideSidebar = routesToHideSidebar.some((path) =>
    pathname?.startsWith(path),
  );

  const mainContentMargin =
    isExpanded || isHovered ? "lg:ml-[256px]" : "lg:ml-[90px]";

  return (
    <div className="bg-[#F5F7FE] h[889px] w-full">
      {!hideSidebar && <AppSidebar />}
      {/* {!hideSidebar && <Backdrop />} */}

      <main
        className={`transition-all duration-300 ease-in-out m-1  ${
          hideSidebar ? "ml-0" : mainContentMargin
        } `}
      >
        <div className="max-w-screen-2xl mx-auto space-y-6">{children}</div>
      </main>
    </div>
  );
}
