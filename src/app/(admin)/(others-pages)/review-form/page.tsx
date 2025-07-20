"use client";
import React from "react";
import { useRouter } from "next/navigation";
import FormLayout from "@/components/new-forms/FormLayout";
import ReviewForm from "@/components/new-forms/review-form";

export default function ParentFormPage() {
  const router = useRouter();

  const handleNext = (data: any) => {
    // console.log("ParentForm submitted:", data);
    router.push("/");
  };

  const handleBack = () => {
    router.push("/");
  };

  return (
    <div>
      <FormLayout>
        <ReviewForm data={{}} onNext={handleNext} onBack={handleBack} />
      </FormLayout>
    </div>
  );
}
