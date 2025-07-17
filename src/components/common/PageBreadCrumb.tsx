"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface BreadcrumbProps {
  pageTitle: string;
  btnAdvertiser?: boolean;
  btnCampaign?: boolean;
  btnInventory?: boolean;
}

const PageBreadcrumb: React.FC<BreadcrumbProps> = ({
  pageTitle,
  btnCampaign,
  btnInventory,
  btnAdvertiser,
}) => {
  const router = useRouter();

  const handleAddAdvertiser = () => {
    router.push("/add-advertiser");
  };

  const handleAddCampaign = () => {
    router.push("/add-campaign");
  };

  const handleCreateInventory = () => {
    router.push("/create-inventory");
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
      {/* Page Title Only */}
      <h2 className="text-2xl p-3 font-semibold text-gray-800 dark:text-white/90">
        {pageTitle}
      </h2>
    </div>
  );
};

export default PageBreadcrumb;
