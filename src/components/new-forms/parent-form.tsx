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

interface ParentFormProps {
  data: any;
  onNext: (data: any) => void;
  onBack: () => void;
}

export default function ParentForm({ data, onNext, onBack }: ParentFormProps) {
  const [formData, setFormData] = useState({
    fathersName: data.fathersName || "Asad",
    fathersNationality: data.fathersNationality || "Pakistani",
    mothersName: data.mothersName || "Fatima",
    mothersNationality: data.mothersNationality || "Pakistani",
    foreignCitizenshipRef: data.foreignCitizenshipRef || "FCA-PAK-2024-9834721",
    assuranceLetterDate: data.assuranceLetterDate || "15-06-2024",
    issuingAuthority:
      data.issuingAuthority || "Ministry of Interior, Islamabad",
    issuingCountry: data.issuingCountry || "Pakistan",
    nearestForeignMission:
      data.nearestForeignMission || "British High Commission, Islamabad",
    foreignCountry: data.foreignCountry || "Poland",
    foreignAddress: data.foreignAddress || "House 123 Street 123",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="w-[840px]  mx-auto p-2 space-y-2">
      {/* Parents Particulars */}
      <div className="bg-white rounded-3xl shadow-md px-4 py-6 w-[840px] h-[252px]">
        <div className="relative pb-14 pr-4">
          <h3 className="text-2xl font-semibold text-center absolute left-1/2 transform -translate-x-1/2">
            Parent Particulars
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-1">
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
              htmlFor="fathersNationality"
              className="absolute left-3 top-3 text-xs text-gray-500"
            >
              Fathers Nationality
            </Label>
            <Input
              id="fathersNationality"
              value={formData.fathersNationality}
              onChange={(e) =>
                handleChange("fathersNationality", e.target.value)
              }
              className="mt-1 pt-6"
            />
          </div>

          <div className="relative">
            <Label
              htmlFor="mothersName"
              className="absolute left-3 top-3 text-xs text-gray-500"
            >
              Mothers Name
            </Label>
            <Input
              id="mothersName"
              value={formData.mothersName}
              onChange={(e) => handleChange("mothersName", e.target.value)}
              className="mt-1 pt-6"
            />
          </div>

          <div className="relative">
            <Label
              htmlFor="mothersNationality"
              className="absolute left-3 top-3 text-xs text-gray-500"
            >
              Mothers Nationality
            </Label>
            <Input
              id="mothersNationality"
              value={formData.mothersNationality}
              onChange={(e) =>
                handleChange("mothersNationality", e.target.value)
              }
              className="mt-1 pt-6"
            />
          </div>
        </div>
      </div>

      {/* Other Details */}
      <div className="bg-white rounded-3xl shadow-md px-4 py-6 w-[840px] h-[439px]">
        <div className="relative pt-3 pb-14 pr-4">
          <h3 className="text-2xl font-semibold text-center absolute left-1/2 transform -translate-x-1/2">
            Other Details
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-1">
          <div className="relative">
            <Label
              htmlFor="foreignCitizenshipRef"
              className="absolute left-3 top-3 text-xs text-gray-500"
            >
              Foreign Citizenship Assurance Ref. No.
            </Label>
            <Input
              id="foreignCitizenshipRef"
              value={formData.foreignCitizenshipRef}
              onChange={(e) =>
                handleChange("foreignCitizenshipRef", e.target.value)
              }
              className="mt-1 pt-6"
            />
          </div>

          <div className="relative">
            <Label
              htmlFor="assuranceLetterDate"
              className="absolute left-3 top-3 text-xs text-gray-500"
            >
              Assurance Letter Date
            </Label>
            <Input
              id="assuranceLetterDate"
              value={formData.assuranceLetterDate}
              onChange={(e) =>
                handleChange("assuranceLetterDate", e.target.value)
              }
              className="mt-1 pt-6"
            />
          </div>

          <div className="relative">
            <Label
              htmlFor="issuingAuthority"
              className="absolute left-3 top-3 text-xs text-gray-500"
            >
              Issuing Authority
            </Label>
            <Input
              id="issuingAuthority"
              value={formData.issuingAuthority}
              onChange={(e) => handleChange("issuingAuthority", e.target.value)}
              className="mt-1 pt-6"
            />
          </div>

          <div className="relative">
            <Label
              htmlFor="issuingCountry"
              className="absolute left-3 top-3 text-xs text-gray-500"
            >
              Issuing Country
            </Label>
            <Select
              value={formData.issuingCountry}
              onValueChange={(value) => handleChange("issuingCountry", value)}
            >
              <SelectTrigger className="mt-1 pt-8 pb-4 ">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-white ">
                <SelectItem value="Pakistan">Pakistan</SelectItem>
                <SelectItem value="Poland">Poland</SelectItem>
                <SelectItem value="UK">United Kingdom</SelectItem>
                <SelectItem value="USA">United States</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="relative">
            <Label
              htmlFor="nearestForeignMission"
              className="absolute left-3 top-3 text-xs text-gray-500"
            >
              Nearest Foreign Mission
            </Label>
            <Input
              id="nearestForeignMission"
              value={formData.nearestForeignMission}
              onChange={(e) =>
                handleChange("nearestForeignMission", e.target.value)
              }
              className="mt-1 pt-6"
            />
          </div>

          <div className="relative">
            <Label
              htmlFor="foreignCountry"
              className="absolute left-3 top-3 text-xs text-gray-500"
            >
              Foreign Country
            </Label>
            <Input
              id="foreignCountry"
              value={formData.foreignCountry}
              onChange={(e) => handleChange("foreignCountry", e.target.value)}
              className="mt-1 pt-6"
            />
          </div>

          <div className="relative md:col-span-2">
            <Label
              htmlFor="foreignAddress"
              className="absolute left-3 top-3 text-xs text-gray-500"
            >
              Foreign Address
            </Label>
            <Input
              id="foreignAddress"
              value={formData.foreignAddress}
              onChange={(e) => handleChange("foreignAddress", e.target.value)}
              className="mt-1 pt-6 w-[801px]"
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
        </div>
      </div>
    </div>
  );
}
