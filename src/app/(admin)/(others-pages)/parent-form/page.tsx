"use client";
import React from "react";
import ParentForm from "@/components/new-forms/parent-form"; // adjust if path differs
import { useRouter } from "next/navigation";
import FormLayout from "@/components/new-forms/FormLayout";

export default function ParentFormPage() {
  const router = useRouter();

  const handleNext = (data: any) => {
    // console.log("ParentForm submitted:", data);
    router.push("/children-form");
  };

  const handleBack = () => {
    router.push("/");
  };

  return (
    <div>
      <FormLayout>
        <ParentForm data={{}} onNext={handleNext} onBack={handleBack} />
      </FormLayout>
    </div>
  );
}
