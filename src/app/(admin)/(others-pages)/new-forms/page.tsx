// import CategoriesManagement from "@/components/recent-forms/recent-forms";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import NewForm from "@/components/new-forms/new-form";
import { FormHeader } from "@/components/new-forms/form-header";

import React from "react";

// export const metadata: Metadata = {
//   title: "Recent Forms",
//   description: "Recent Forms",
// };
export default function page() {
  return (
    // max-w-8xl mx-auto p-8 bg-white shadow-md rounded-3xl w-full
    <div className="bg bg-cover bg-center min-h-screen">
      <FormHeader />
      {/* <PageBreadcrumb pageTitle="Applicant Particulars" /> */}
      <NewForm />
    </div>
  );
}
