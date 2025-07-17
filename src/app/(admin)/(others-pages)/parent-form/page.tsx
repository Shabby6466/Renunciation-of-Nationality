"use client";
import React from "react";
import ParentForm from "@/components/new-forms/parent-form"; // adjust if path differs
import { useRouter } from "next/navigation";

export default function ParentFormPage() {
  const router = useRouter();

  const handleNext = (data: any) => {
    console.log("ParentForm submitted:", data);
    // maybe router.push("/confirmation")
  };

  const handleBack = () => {
    router.push("/new-form");
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-3xl w-full">
      <ParentForm data={{}} onNext={handleNext} onBack={handleBack} />
    </div>
  );
}
