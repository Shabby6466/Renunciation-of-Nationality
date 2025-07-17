import RecentForms from "@/components/recent-forms/recent-forms";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";

import React from "react";

export const metadata: Metadata = {
  title: "Recent Forms",
  description: "Recent Forms",
};
export default function page() {
  return (
    <div className="bg-white/85 rounded-3xl p-6 shadow-sm min-h-screen h-full flex flex-col ">
      <PageBreadcrumb pageTitle="Recent Forms" />
      <RecentForms />
    </div>
  );
}
