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
    <div className="mx-auto p-2 space-y-2">
      {/* <div className=""></div> */}
      <ApplicantForm
        data={applicationData}
        onNext={handleNextStep}
        onBack={handleBackStep}
      />
    </div>
  );
}
