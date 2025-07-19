"use client";
import React from "react";
import { useRouter } from "next/navigation";
import FormLayout from "@/components/new-forms/FormLayout";
import { ChildrenForm } from "@/components/new-forms/children-form";

export default function ParentFormPage() {
  const router = useRouter();

  const handleNext = (data: any) => {
    // console.log("ParentForm submitted:", data);
    router.push("/form/children-form");
  };

  const handleBack = () => {
    router.push("/");
  };

  return (
    <div>
      <FormLayout>
        <ChildrenForm data={{}} onNext={handleNext} onBack={handleBack} />
      </FormLayout>
    </div>
  );
}
