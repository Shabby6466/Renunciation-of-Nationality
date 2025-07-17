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
    <div>
      <FormHeader />
      {/* <PageBreadcrumb pageTitle="Applicant Particulars" /> */}
      <NewForm />
    </div>
  );
}
