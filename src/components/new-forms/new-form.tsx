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
    <div className="w-[840px]  mx-auto p-2 space-y-2">
      <div className="bg-white rounded-3xl shadow-md px-4 py-6 w-[840px] h-[572px]">
        <div className="relative pt-3 pb-14 pr-4">
          <h3 className="text-2xl font-semibold text-center absolute left-1/2 transform -translate-x-1/2">
            Applicant Particulars
          </h3>
        </div>{" "}
        <ApplicantForm
          data={applicationData}
          onNext={handleNextStep}
          onBack={handleBackStep}
        />
      </div>
    </div>
  );
}
