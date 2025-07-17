"use client";
import React, { useState } from "react";
import { ApplicantForm } from "./applicant-form";
import ParentForm from "./parent-form";

// --- 1. Define the shape of your form data ---
// This interface describes the structure of the data coming from ApplicantForm.
interface ApplicantData {
  fullName: string;
  fathersName: string;
  pakistaniAddress: string;
  gender: string;
  contactNumber: string;
  maritalStatus: string;
  profession: string;
  spouseName?: string; // Optional because it's conditional
  placeOfBirth: string;
  dateOfBirth: string;
  birthCountry: string;
  pakistaniPassportNumber: string;
}

export default function NewForm() {
  // --- 2. Type your state ---
  // Use Partial<ApplicantData> so the initial empty object is valid.
  const [applicationData, setApplicationData] = useState<
    Partial<ApplicantData>
  >({});
  const [currentStep, setCurrentStep] = useState(1);

  // --- 3. Type the function parameter ---
  // Now, TypeScript knows exactly what 'formDataFromApplicant' is.
  const handleNextStep = (formDataFromApplicant: ApplicantData) => {
    console.log("Data from Applicant Form:", formDataFromApplicant);

    // Merge the new data with existing data
    const updatedData = { ...applicationData, ...formDataFromApplicant };
    setApplicationData(updatedData);

    // Move to the next step
    setCurrentStep(2);
  };

  const handleBackStep = () => {
    console.log("Going back or canceling...");
    // Add your logic here to go back to a previous page or state
  };

  // Form Data logic
  // 1. Create state to hold the form's data
  const [formData, setFormData] = useState<Partial<FormData>>({});

  // 2. Create the functions that will be passed as props
  const handleNext = (dataFromForm: FormData) => {
    console.log("Form submitted, moving to next step with data:", dataFromForm);
    // Add logic to proceed to the next step
  };

  const handleBack = () => {
    console.log("Back button clicked.");
    // Add logic to go back
  };
  return (
    <div className="max-w-4xl mx-auto p-8 ">
      <h1 className="text-3xl font-bold mb-8">Applicant Particulars</h1>

      {currentStep === 1 && (
        <ApplicantForm
          data={applicationData}
          onNext={handleNextStep}
          onBack={handleBackStep}
        />
      )}

      {currentStep === 2 && (
        <div>
          {/* <h2 className="text-2xl">This would be the next step in the form.</h2> */}
          {/* You could render another form component here */}
          <ParentForm data={formData} onNext={handleNext} onBack={handleBack} />
        </div>
      )}
    </div>
  );
}
