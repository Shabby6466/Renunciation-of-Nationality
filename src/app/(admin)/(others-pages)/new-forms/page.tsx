import { Metadata } from "next";
import NewForm from "@/components/new-forms/new-form";
import FormLayout from "@/components/new-forms/FormLayout";

import React from "react";

// export const metadata: Metadata = {
//   title: "Recent Forms",
//   description: "Recent Forms",
// };
export default function page() {
  return (
    // max-w-8xl mx-auto p-8 bg-white shadow-md rounded-3xl w-full
    <div>
      {/* <PageBreadcrumb pageTitle="Applicant Particulars" /> */}
      <FormLayout>
        <NewForm />
      </FormLayout>
    </div>
  );
}
