"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // for app router use
// import { useRouter } from "next/router"; // for pages router
import { ApplicantForm } from "./applicant-form";

interface ApplicantData {
  fullName: string;
  fathersName: string;
  pakistaniAddress: string;
  gender: string;
  contactNumber: string;
  maritalStatus: string;
  profession: string;
  spouseName?: string;
  placeOfBirth: string;
  dateOfBirth: string;
  birthCountry: string;
  pakistaniPassportNumber: string;
}

export default function NewForm() {
  const [applicationData, setApplicationData] = useState<
    Partial<ApplicantData>
  >({});
  const router = useRouter();

  const handleNextStep = (formDataFromApplicant: ApplicantData) => {
    console.log("Data from ApplicantForm:", formDataFromApplicant);
    // Save it via context/global/localStorage if needed
    router.push("/parent-form"); // ✅ this now navigates to the new route
  };

  const handleBackStep = () => {
    console.log("Back button clicked.");
    // Logic for back/cancel if needed
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-3xl w-full">
      <h1 className="text-3xl font-bold mb-8">Applicant Particulars</h1>
      <ApplicantForm
        data={applicationData}
        onNext={handleNextStep}
        onBack={handleBackStep}
      />
    </div>
  );
}
