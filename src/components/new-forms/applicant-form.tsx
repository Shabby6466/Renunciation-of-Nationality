"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRightIcon } from "@/icons";
import FormProgress from "./form-progress";

interface ApplicantFormProps {
  data: any;
  onNext: (data: any) => void;
  onBack: () => void;
}

export function ApplicantForm({ data, onNext, onBack }: ApplicantFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  const [formData, setFormData] = useState({
    firstName: data.firstName || "Faraz",
    lastName: data.lastName || "Asad",
    fathersName: data.fathersName || "Asad Javed",
    mothersName: data.mothersName || "Mariam",
    gender: data.gender || "Male",
    pakistanCity: data.pakistanCity || "Islamabad",
    birthCity: data.birthCity || "Islamabad",
    dateOfBirth: data.dateOfBirth || "12-08-1988",
    birthCountry: data.birthCountry || "Poland",
    placeOfBirth: data.placeOfBirth || "Poland",
    profession: data.profession || "Teacher",
    pakistanAddress: data.pakistanAddress || "House 123 Street 123",
    formID: data.formID || "UK 12363",
    // contactNumber: data.contactNumber || "+92 3311170170",
    // maritalStatus: data.maritalStatus || "Single",
    // spouseName: data.spouseName || "Mariam",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // const nextStep = () => {
  //   setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  // };

  // const prevStep = () => {
  //   setCurrentStep((prev) => Math.max(prev - 1, 1));
  // };
  return (
    // <form onSubmit={handleSubmit}>
    //   <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-1">
    //     <div className="relative">
    //       <Label
    //         htmlFor="fullName"
    //         className="absolute left-3 top-3 text-xs text-gray-500"
    //       >
    //         Full name
    //       </Label>
    //       <Input
    //         id="fullName"
    //         value={formData.fullName}
    //         onChange={(e) => handleChange("fullName", e.target.value)}
    //         className="mt-1 pt-6"
    //       />
    //     </div>

    //     <div className="relative">
    //       <Label
    //         htmlFor="fathersName"
    //         className="absolute left-3 top-3 text-xs text-gray-500"
    //       >
    //         Fathers Name
    //       </Label>
    //       <Input
    //         id="fathersName"
    //         value={formData.fathersName}
    //         onChange={(e) => handleChange("fathersName", e.target.value)}
    //         className="mt-1 pt-6"
    //       />
    //     </div>

    //     <div className="relative">
    //       <Label
    //         htmlFor="pakistaniAddress"
    //         className="absolute left-3 top-3 text-xs text-gray-500"
    //       >
    //         Pakistani Address
    //       </Label>
    //       <Input
    //         id="pakistaniAddress"
    //         value={formData.pakistaniAddress}
    //         onChange={(e) => handleChange("pakistaniAddress", e.target.value)}
    //         className="mt-1 pt-6"
    //       />
    //     </div>

    //     <div className="relative">
    //       <Label
    //         htmlFor="gender"
    //         className="absolute left-3 top-3 text-xs text-gray-500"
    //       >
    //         Gender
    //       </Label>
    //       <Select
    //         value={formData.gender}
    //         onValueChange={(value: string) => handleChange("gender", value)}
    //       >
    //         <SelectTrigger className="mt-1 pt-8 pb-4 ">
    //           <SelectValue />
    //         </SelectTrigger>
    //         <SelectContent className="bg-white ">
    //           <SelectItem value="Male">Male</SelectItem>
    //           <SelectItem value="Female">Female</SelectItem>
    //           <SelectItem value="Other">Other</SelectItem>
    //         </SelectContent>
    //       </Select>
    //     </div>

    //     <div className="relative">
    //       <Label
    //         htmlFor="contactNumber"
    //         className="absolute left-3 top-3 text-xs text-gray-500"
    //       >
    //         Contact Number
    //       </Label>
    //       <Input
    //         id="contactNumber"
    //         value={formData.contactNumber}
    //         onChange={(e) => handleChange("contactNumber", e.target.value)}
    //         className="mt-1 pt-6"
    //       />
    //     </div>

    //     <div className="relative">
    //       <Label
    //         htmlFor="maritalStatus"
    //         className="absolute left-3 top-3 text-xs text-gray-500"
    //       >
    //         Marital Status
    //       </Label>
    //       <Select
    //         value={formData.maritalStatus}
    //         onValueChange={(value: string) =>
    //           handleChange("maritalStatus", value)
    //         }
    //       >
    //         <SelectTrigger className="mt-1 pt-8 pb-4">
    //           <SelectValue />
    //         </SelectTrigger>
    //         <SelectContent className="bg-white">
    //           <SelectItem value="Single">Single</SelectItem>
    //           <SelectItem value="Married">Married</SelectItem>
    //           <SelectItem value="Divorced">Divorced</SelectItem>
    //           <SelectItem value="Widowed">Widowed</SelectItem>
    //         </SelectContent>
    //       </Select>
    //     </div>

    //     <div className="relative">
    //       <Label
    //         htmlFor="profession"
    //         className="absolute left-3 top-3 text-xs text-gray-500"
    //       >
    //         Profession or Occupation
    //       </Label>
    //       <Input
    //         id="profession"
    //         value={formData.profession}
    //         onChange={(e) => handleChange("profession", e.target.value)}
    //         className="mt-1 pt-6"
    //       />
    //     </div>
    //     {formData.maritalStatus === "Married" && (
    //       <div className="relative">
    //         <Label
    //           htmlFor="spouseName"
    //           className="absolute left-3 top-3 text-xs text-gray-500"
    //         >
    //           Spouse Name
    //         </Label>
    //         <Input
    //           id="spouseName"
    //           value={formData.spouseName}
    //           onChange={(e) => handleChange("spouseName", e.target.value)}
    //           className="mt-1 pt-6"
    //         />
    //       </div>
    //     )}

    //     <div className="relative">
    //       <Label
    //         htmlFor="placeOfBirth"
    //         className="absolute left-3 top-3 text-xs text-gray-500"
    //       >
    //         Place of Birth
    //       </Label>
    //       <Input
    //         id="placeOfBirth"
    //         value={formData.placeOfBirth}
    //         onChange={(e) => handleChange("placeOfBirth", e.target.value)}
    //         className="mt-1 pt-6"
    //       />
    //     </div>
    //     <div className="relative">
    //       <Label
    //         htmlFor="dateOfBirth"
    //         className="absolute left-3 top-3 text-xs text-gray-500"
    //       >
    //         Date of Birth
    //       </Label>
    //       <Input
    //         id="dateOfBirth"
    //         type="date"
    //         value={formData.dateOfBirth}
    //         onChange={(e) => handleChange("dateOfBirth", e.target.value)}
    //         className="mt-1 pt-6"
    //       />
    //     </div>

    //     <div className="relative">
    //       <Label
    //         htmlFor="birthCountry"
    //         className="absolute left-3 top-3 text-xs text-gray-500"
    //       >
    //         Birth Country
    //       </Label>
    //       <Select
    //         value={formData.birthCountry}
    //         onValueChange={(value: string) =>
    //           handleChange("birthCountry", value)
    //         }
    //       >
    //         <SelectTrigger className="mt-1 pt-8 pb-4">
    //           <SelectValue />
    //         </SelectTrigger>
    //         <SelectContent className="bg-white border-r">
    //           <SelectItem value="Poland">Poland</SelectItem>
    //           <SelectItem value="Pakistan">Pakistan</SelectItem>
    //           <SelectItem value="UK">United Kingdom</SelectItem>
    //           <SelectItem value="USA">United States</SelectItem>
    //         </SelectContent>
    //       </Select>
    //     </div>

    //     <div className="relative">
    //       <Label
    //         htmlFor="pakistaniPassportNumber"
    //         className="absolute left-3 top-3 text-xs text-gray-500"
    //       >
    //         Pakistan Passport Number
    //       </Label>
    //       <Input
    //         id="pakistaniPassportNumber"
    //         value={formData.pakistaniPassportNumber}
    //         onChange={(e) =>
    //           handleChange("pakistaniPassportNumber", e.target.value)
    //         }
    //         className="mt-1 pt-6"
    //       />
    //     </div>
    //   </div>
    //   <div className="flex justify-between mt-8 ">
    //     {/* <FormProgress /> */}
    //     <div></div>
    //     <div className="flex space-x-2">
    //       <Button
    //         type="button"
    //         className="border rounded-3xl h-[32px] bg-gray-100"
    //         onClick={onBack}
    //       >
    //         Go Back
    //       </Button>

    //       <Button
    //         type="button"
    //         className="bg-[#525EB1] hover:bg-[#414c99] text-white rounded-3xl h-[32px] flex items-center pr-2"
    //         onClick={handleSubmit}
    //       >
    //         Next
    //         <ArrowRightIcon className="mt-1" />
    //       </Button>
    //     </div>
    //   </div>{" "}
    // </form>
    <div>
      <div className="flex items-center gap-3">
        {/* NADRA FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-md px-12.5 py-5 w-[408px] h-[803px]"
        >
          <div className="flex justify-center border-b border-gray-100 w-full pb-2.5 px-4">
            <h3 className="text-2xl font-semibold">Nadra Details</h3>
          </div>

          <div className="flex flex-col justify-between gap-4">
            {/*1. FIRST NAME */}
            <div className="relative">
              <Label
                htmlFor="firstName"
                className="absolute left-3 top-3 text-xs text-gray-500"
              >
                First name
              </Label>
              <p className="mt-1 pt-6 pl-3 border-0 text-sm text-gray-800">
                {formData.firstName}
              </p>
              {/* <Input
              id="fullName"
              value={formData.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
              /> */}
            </div>

            {/*2. LAST NAME */}
            <div className="relative ">
              <Label
                htmlFor="lastName"
                className="absolute left-3 top-3 text-xs text-gray-500"
              >
                Last name
              </Label>
              <p className="mt-1 pt-6 pl-3 border-0 text-sm text-gray-800">
                {formData.lastName}
              </p>
              {/* <Input
              id="fullName"
              value={formData.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
            /> */}
            </div>

            {/*3. FATHERS NAME */}
            <div className="relative">
              <Label
                htmlFor="fathersName"
                className="absolute left-3 top-3 text-xs text-gray-500"
              >
                Fathers Name
              </Label>
              <p className="mt-1 pt-6 pl-3 border-0 text-sm text-gray-800">
                {formData.fathersName}
              </p>
              {/* <Input
              id="fathersName"
              value={formData.fathersName}
              onChange={(e) => handleChange("fathersName", e.target.value)}
              className="mt-1 pt-6 border-0"
            /> */}
            </div>

            {/*4. MOTHERS NAME */}
            <div className="relative">
              <Label
                htmlFor="mothersName"
                className="absolute left-3 top-3 text-xs text-gray-500"
              >
                Mothers Name
              </Label>
              <p className="mt-1 pt-6 pl-3 border-0 text-sm text-gray-800">
                {formData.mothersName}
              </p>
              {/* <Input
              id="fathersName"
              value={formData.fathersName}
              onChange={(e) => handleChange("fathersName", e.target.value)}
              className="mt-1 pt-6 border-0"
              /> */}
            </div>

            {/*5. GENDER */}
            <div className="relative">
              <Label
                htmlFor="gender"
                className="absolute left-3 top-3 text-xs text-gray-500"
              >
                Gender
              </Label>
              <p className="mt-1 pt-6 pl-3 border-0 text-sm text-gray-800">
                {formData.gender}
              </p>
              {/* <Select
              value={formData.gender}
              onValueChange={(value: string) => handleChange("gender", value)}
              >
              <SelectTrigger className="mt-1 pt-8 pb-4 border-0 ">
              <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-white ">
                <SelectItem value="Male">Male</SelectItem>
                <SelectItem value="Female">Female</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
              </Select> */}
            </div>

            {/*6. PAK CITY */}
            <div className="relative">
              <Label
                htmlFor="pakistanCity"
                className="absolute left-3 top-3 text-xs text-gray-500"
              >
                Pakistan City
              </Label>
              <p className="mt-1 pt-6 pl-3 border-0 text-sm text-gray-800">
                {formData.pakistanCity}
              </p>
              {/* <Input
              id="contactNumber"
              value={formData.contactNumber}
              onChange={(e) => handleChange("contactNumber", e.target.value)}
              className="mt-1 pt-6 border-0"
            /> */}
            </div>

            {/*7. DOB */}
            <div className="relative">
              <Label
                htmlFor="dateOfBirth"
                className="absolute left-3 top-3 text-xs text-gray-500"
              >
                Date of Birth
              </Label>
              <p className="mt-1 pt-6 pl-3 border-0 text-sm text-gray-800">
                {formData.dateOfBirth}
              </p>
              {/* <Input
              id="dateOfBirth"
              type="date"
              value={formData.dateOfBirth}
              onChange={(e) => handleChange("dateOfBirth", e.target.value)}
              className="mt-1 pt-6 border-0"
              /> */}
            </div>

            {/*8. BIRTH COUNTRY */}
            <div className="relative">
              <Label
                htmlFor="birthCountry"
                className="absolute left-3 top-3 text-xs text-gray-500"
              >
                Birth Country
              </Label>
              <p className="mt-1 pt-6 pl-3 border-0 text-sm text-gray-800">
                {formData.birthCountry}
              </p>
              {/* <Input
              id="profession"
              value={formData.profession}
              onChange={(e) => handleChange("profession", e.target.value)}
              className="mt-1 pt-6 border-0"
            /> */}
            </div>

            {/*9. BIRTH CITY */}
            <div className="relative">
              <Label
                htmlFor="placeOfBirth"
                className="absolute left-3 top-3 text-xs text-gray-500"
              >
                Birth City
              </Label>
              <p className="mt-1 pt-6 pl-3 border-0 text-sm text-gray-800">
                {formData.placeOfBirth}
              </p>
              {/* <Input
              id="placeOfBirth"
              value={formData.placeOfBirth}
              onChange={(e) => handleChange("placeOfBirth", e.target.value)}
              className="mt-1 pt-6 border-0"
              /> */}
            </div>

            {/*10. PROFESSION */}
            <div className="relative">
              <Label
                htmlFor="maritalStatus"
                className="absolute left-3 top-3 text-xs text-gray-500"
              >
                Profession
              </Label>
              <p className="mt-1 pt-6 pl-3 border-0 text-sm text-gray-800">
                {formData.profession}
              </p>
              {/* <Select
              value={formData.maritalStatus}
              onValueChange={(value: string) =>
                handleChange("maritalStatus", value)
              }
              >
              <SelectTrigger className="mt-1 pt-8 pb-4 border-0">
                <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white">
                <SelectItem value="Single">Single</SelectItem>
                <SelectItem value="Married">Married</SelectItem>
                <SelectItem value="Divorced">Divorced</SelectItem>
                <SelectItem value="Widowed">Widowed</SelectItem>
                </SelectContent>
            </Select> */}
            </div>
            {/*11. PAK ADDRESS */}
            <div className="relative">
              <Label
                htmlFor="pakistanAddress"
                className="absolute left-3 top-3 text-xs text-gray-500"
              >
                Pakistan Address
              </Label>
              <p className="mt-1 pt-6 pl-3 border-0 text-sm text-gray-800">
                {formData.pakistanAddress}
              </p>
              {/* <Input
              id="pakistaniAddress"
              value={formData.pakistaniAddress}
              onChange={(e) => handleChange("pakistaniAddress", e.target.value)}
              className="mt-1 pt-6 border-0"
              /> */}
            </div>

            {/* <div className="relative">
            <Label
            htmlFor="pakistaniPassportNumber"
            className="absolute left-3 top-3 text-xs text-gray-500"
            >
            Pakistan Passport Number
            </Label>
            <Input
            id="pakistaniPassportNumber"
            value={formData.pakistaniPassportNumber}
            onChange={(e) =>
            handleChange("pakistaniPassportNumber", e.target.value)
              }
              className="mt-1 pt-6 border-0"
              />
              </div> */}
          </div>
        </form>
        {/* PASSPORT DETAILS */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-md px-12.5 py-5 w-[408px] h-[803px]"
        >
          <div className="flex justify-center border-b border-gray-100 w-full pb-2.5 px-4">
            <h3 className="text-2xl font-semibold">Passport Details</h3>
          </div>

          <div className="flex flex-col justify-between gap-4">
            {/*1. FIRST NAME */}
            <div className="relative">
              <Label
                htmlFor="firstName"
                className="absolute left-3 top-3 text-xs text-gray-500"
              >
                First name
              </Label>
              <p className="mt-1 pt-6 pl-3 border-0 text-sm text-gray-800">
                {formData.firstName}
              </p>
              {/* <Input
              id="fullName"
              value={formData.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
              /> */}
            </div>

            {/*2. LAST NAME */}
            <div className="relative ">
              <Label
                htmlFor="lastName"
                className="absolute left-3 top-3 text-xs text-gray-500"
              >
                Last name
              </Label>
              <p className="mt-1 pt-6 pl-3 border-0 text-sm text-gray-800">
                {formData.lastName}
              </p>
              {/* <Input
              id="fullName"
              value={formData.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
              /> */}
            </div>

            {/*3. FATHERS NAME */}
            <div className="relative">
              <Label
                htmlFor="fathersName"
                className="absolute left-3 top-3 text-xs text-gray-500"
              >
                Fathers Name
              </Label>
              <p className="mt-1 pt-6 pl-3 border-0 text-sm text-gray-800">
                {formData.fathersName}
              </p>
              {/* <Input
              id="fathersName"
              value={formData.fathersName}
              onChange={(e) => handleChange("fathersName", e.target.value)}
              className="mt-1 pt-6 border-0"
              /> */}
            </div>

            {/*4. MOTHERS NAME */}
            <div className="relative">
              <Label
                htmlFor="mothersName"
                className="absolute left-3 top-3 text-xs text-gray-500"
              >
                Mothers Name
              </Label>
              <p className="mt-1 pt-6 pl-3 border-0 text-sm text-gray-800">
                {formData.mothersName}
              </p>
              {/* <Input
              id="fathersName"
              value={formData.fathersName}
              onChange={(e) => handleChange("fathersName", e.target.value)}
              className="mt-1 pt-6 border-0"
            /> */}
            </div>

            {/*5. GENDER */}
            <div className="relative">
              <Label
                htmlFor="gender"
                className="absolute left-3 top-3 text-xs text-gray-500"
              >
                Gender
              </Label>
              <p className="mt-1 pt-6 pl-3 border-0 text-sm text-gray-800">
                {formData.gender}
              </p>
              {/* <Select
              value={formData.gender}
              onValueChange={(value: string) => handleChange("gender", value)}
            >
              <SelectTrigger className="mt-1 pt-8 pb-4 border-0 ">
              <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-white ">
              <SelectItem value="Male">Male</SelectItem>
                <SelectItem value="Female">Female</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
                </Select> */}
            </div>

            {/*6. PAK CITY */}
            <div className="relative">
              <Label
                htmlFor="pakistanCity"
                className="absolute left-3 top-3 text-xs text-gray-500"
              >
                Pakistan City
              </Label>
              <p className="mt-1 pt-6 pl-3 border-0 text-sm text-gray-800">
                {formData.pakistanCity}
              </p>
              {/* <Input
              id="contactNumber"
              value={formData.contactNumber}
              onChange={(e) => handleChange("contactNumber", e.target.value)}
              className="mt-1 pt-6 border-0"
            /> */}
            </div>

            {/*7. DOB */}
            <div className="relative">
              <Label
                htmlFor="dateOfBirth"
                className="absolute left-3 top-3 text-xs text-gray-500"
              >
                Date of Birth
              </Label>
              <p className="mt-1 pt-6 pl-3 border-0 text-sm text-gray-800">
                {formData.dateOfBirth}
              </p>
              {/* <Input
              id="dateOfBirth"
              type="date"
              value={formData.dateOfBirth}
              onChange={(e) => handleChange("dateOfBirth", e.target.value)}
              className="mt-1 pt-6 border-0"
            /> */}
            </div>

            {/*8. BIRTH COUNTRY */}
            <div className="relative">
              <Label
                htmlFor="birthCountry"
                className="absolute left-3 top-3 text-xs text-gray-500"
              >
                Birth Country
              </Label>
              <p className="mt-1 pt-6 pl-3 border-0 text-sm text-gray-800">
                {formData.birthCountry}
              </p>
              {/* <Input
              id="profession"
              value={formData.profession}
              onChange={(e) => handleChange("profession", e.target.value)}
              className="mt-1 pt-6 border-0"
              /> */}
            </div>

            {/*9. BIRTH CITY */}
            <div className="relative">
              <Label
                htmlFor="placeOfBirth"
                className="absolute left-3 top-3 text-xs text-gray-500"
              >
                Birth City
              </Label>
              <p className="mt-1 pt-6 pl-3 border-0 text-sm text-gray-800">
                {formData.placeOfBirth}
              </p>
              {/* <Input
              id="placeOfBirth"
              value={formData.placeOfBirth}
              onChange={(e) => handleChange("placeOfBirth", e.target.value)}
              className="mt-1 pt-6 border-0"
            /> */}
            </div>

            {/*10. PROFESSION */}
            <div className="relative">
              <Label
                htmlFor="maritalStatus"
                className="absolute left-3 top-3 text-xs text-gray-500"
              >
                Profession
              </Label>
              <p className="mt-1 pt-6 pl-3 border-0 text-sm text-gray-800">
                {formData.profession}
              </p>
              {/* <Select
              value={formData.maritalStatus}
              onValueChange={(value: string) =>
              handleChange("maritalStatus", value)
              }
            >
              <SelectTrigger className="mt-1 pt-8 pb-4 border-0">
              <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-white">
              <SelectItem value="Single">Single</SelectItem>
                <SelectItem value="Married">Married</SelectItem>
                <SelectItem value="Divorced">Divorced</SelectItem>
                <SelectItem value="Widowed">Widowed</SelectItem>
                </SelectContent>
                </Select> */}
            </div>
            {/*11. PAK ADDRESS */}
            <div className="relative">
              <Label
                htmlFor="pakistanAddress"
                className="absolute left-3 top-3 text-xs text-gray-500"
              >
                Pakistan Address
              </Label>
              <p className="mt-1 pt-6 pl-3 border-0 text-sm text-gray-800">
                {formData.pakistanAddress}
              </p>
              {/* <Input
              id="pakistaniAddress"
              value={formData.pakistaniAddress}
              onChange={(e) => handleChange("pakistaniAddress", e.target.value)}
              className="mt-1 pt-6 border-0"
            /> */}
            </div>

            {/* <div className="relative">
            <Label
            htmlFor="pakistaniPassportNumber"
            className="absolute left-3 top-3 text-xs text-gray-500"
            >
            Pakistan Passport Number
            </Label>
            <Input
              id="pakistaniPassportNumber"
              value={formData.pakistaniPassportNumber}
              onChange={(e) =>
              handleChange("pakistaniPassportNumber", e.target.value)
              }
              className="mt-1 pt-6 border-0"
              />
              </div> */}
          </div>
        </form>
      </div>
      <div className="bg-white rounded-2xl shadow-md px-12.5 py-5 w-[831px] h-[134px] flex justify-between mt-2.5 mb-20.5  ">
        <div>
          <FormProgress
            currentStep={currentStep}
            totalSteps={totalSteps}
            formId={formData.formID}
          />
        </div>
        <div></div>
        <div className="flex space-x-2">
          <Button
            type="button"
            className="border rounded-3xl h-[32px] bg-gray-100"
            onClick={onBack}
          >
            Go Back
          </Button>

          <Button
            type="button"
            className="bg-[#525EB1] hover:bg-[#414c99] text-white rounded-3xl h-[32px] flex items-center pr-2"
            onClick={handleSubmit}
          >
            Next
            <ArrowRightIcon className="mt-1" />
          </Button>
        </div>
      </div>
    </div>
  );
}
