"use client";
import React from "react";
import { useRouter } from "next/navigation";
import FormLayout from "@/components/new-forms/FormLayout";
import { DocumentsForm } from "@/components/new-forms/documents-form";

export default function ParentFormPage() {
  const router = useRouter();

  const handleNext = (data: any) => {
    // console.log("ParentForm submitted:", data);
    router.push("/review-form");
  };

  const handleBack = () => {
    router.push("/");
  };

  return (
    <div>
      <FormLayout>
        <DocumentsForm data={{}} onNext={handleNext} onBack={handleBack} />
      </FormLayout>
    </div>
  );
}
