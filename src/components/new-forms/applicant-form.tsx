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

interface ApplicantFormProps {
  data: any;
  onNext: (data: any) => void;
  onBack: () => void;
}

export function ApplicantForm({ data, onNext, onBack }: ApplicantFormProps) {
  const [formData, setFormData] = useState({
    fullName: data.fullName || "Faraz Asad",
    fathersName: data.fathersName || "Asad",
    pakistaniAddress: data.pakistaniAddress || "House 123 Street 123",
    gender: data.gender || "Male",
    contactNumber: data.contactNumber || "+92 3311170170",
    maritalStatus: data.maritalStatus || "Single",
    profession: data.profession || "Teacher",
    spouseName: data.spouseName || "Mariam",
    placeOfBirth: data.placeOfBirth || "Poland",
    dateOfBirth: data.dateOfBirth || "12-08-1988",
    birthCountry: data.birthCountry || "Poland",
    pakistaniPassportNumber: data.pakistaniPassportNumber || "P4366918",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-1">
        <div className="relative">
          <Label
            htmlFor="fullName"
            className="absolute left-3 top-3 text-xs text-gray-500"
          >
            Full name
          </Label>
          <Input
            id="fullName"
            value={formData.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
            className="mt-1 pt-6"
          />
        </div>

        <div className="relative">
          <Label
            htmlFor="fathersName"
            className="absolute left-3 top-3 text-xs text-gray-500"
          >
            Fathers Name
          </Label>
          <Input
            id="fathersName"
            value={formData.fathersName}
            onChange={(e) => handleChange("fathersName", e.target.value)}
            className="mt-1 pt-6"
          />
        </div>

        <div className="relative">
          <Label
            htmlFor="pakistaniAddress"
            className="absolute left-3 top-3 text-xs text-gray-500"
          >
            Pakistani Address
          </Label>
          <Input
            id="pakistaniAddress"
            value={formData.pakistaniAddress}
            onChange={(e) => handleChange("pakistaniAddress", e.target.value)}
            className="mt-1 pt-6"
          />
        </div>

        <div className="relative">
          <Label
            htmlFor="gender"
            className="absolute left-3 top-3 text-xs text-gray-500"
          >
            Gender
          </Label>
          <Select
            value={formData.gender}
            onValueChange={(value: string) => handleChange("gender", value)}
          >
            <SelectTrigger className="mt-1 pt-8 pb-4 ">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-white ">
              <SelectItem value="Male">Male</SelectItem>
              <SelectItem value="Female">Female</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="relative">
          <Label
            htmlFor="contactNumber"
            className="absolute left-3 top-3 text-xs text-gray-500"
          >
            Contact Number
          </Label>
          <Input
            id="contactNumber"
            value={formData.contactNumber}
            onChange={(e) => handleChange("contactNumber", e.target.value)}
            className="mt-1 pt-6"
          />
        </div>

        <div className="relative">
          <Label
            htmlFor="maritalStatus"
            className="absolute left-3 top-3 text-xs text-gray-500"
          >
            Marital Status
          </Label>
          <Select
            value={formData.maritalStatus}
            onValueChange={(value: string) =>
              handleChange("maritalStatus", value)
            }
          >
            <SelectTrigger className="mt-1 pt-8 pb-4">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="Single">Single</SelectItem>
              <SelectItem value="Married">Married</SelectItem>
              <SelectItem value="Divorced">Divorced</SelectItem>
              <SelectItem value="Widowed">Widowed</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="relative">
          <Label
            htmlFor="profession"
            className="absolute left-3 top-3 text-xs text-gray-500"
          >
            Profession or Occupation
          </Label>
          <Input
            id="profession"
            value={formData.profession}
            onChange={(e) => handleChange("profession", e.target.value)}
            className="mt-1 pt-6"
          />
        </div>
        {formData.maritalStatus === "Married" && (
          <div className="relative">
            <Label
              htmlFor="spouseName"
              className="absolute left-3 top-3 text-xs text-gray-500"
            >
              Spouse Name
            </Label>
            <Input
              id="spouseName"
              value={formData.spouseName}
              onChange={(e) => handleChange("spouseName", e.target.value)}
              className="mt-1 pt-6"
            />
          </div>
        )}

        <div className="relative">
          <Label
            htmlFor="placeOfBirth"
            className="absolute left-3 top-3 text-xs text-gray-500"
          >
            Place of Birth
          </Label>
          <Input
            id="placeOfBirth"
            value={formData.placeOfBirth}
            onChange={(e) => handleChange("placeOfBirth", e.target.value)}
            className="mt-1 pt-6"
          />
        </div>
        <div className="relative">
          <Label
            htmlFor="dateOfBirth"
            className="absolute left-3 top-3 text-xs text-gray-500"
          >
            Date of Birth
          </Label>
          <Input
            id="dateOfBirth"
            type="date"
            value={formData.dateOfBirth}
            onChange={(e) => handleChange("dateOfBirth", e.target.value)}
            className="mt-1 pt-6"
          />
        </div>

        <div className="relative">
          <Label
            htmlFor="birthCountry"
            className="absolute left-3 top-3 text-xs text-gray-500"
          >
            Birth Country
          </Label>
          <Select
            value={formData.birthCountry}
            onValueChange={(value: string) =>
              handleChange("birthCountry", value)
            }
          >
            <SelectTrigger className="mt-1 pt-8 pb-4">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-white border-r">
              <SelectItem value="Poland">Poland</SelectItem>
              <SelectItem value="Pakistan">Pakistan</SelectItem>
              <SelectItem value="UK">United Kingdom</SelectItem>
              <SelectItem value="USA">United States</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="relative">
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
            className="mt-1 pt-6"
          />
        </div>
      </div>
      <div className="flex justify-between mt-8 ">
        {/* <FormProgress /> */}
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
      </div>{" "}
    </form>
  );
}
