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

interface CreateFormProps {
  data: any;
  onNext: (data: any) => void;
  onBack: () => void;
}

export default function CreateForm({ data, onNext, onBack }: CreateFormProps) {
  const [formData, setFormData] = useState({
    fullName: data.fullName || "Faraz Asad",
    pakistaniPassportNumber: data.pakistaniPassportNumber || "P4366918",
    cnic: data.pakistaniPassportNumber || "61101-3082523-9",
    remarks: data.remarks || "Urgent",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex flex-col items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-3xl shadow-md px-4 py-6 w-[840px] h-[297px] flex flex-col "
      >
        <div className="relative pt-3 pb-14 pr-4">
          <h3 className="text-2xl font-semibold text-center absolute left-1/2 transform -translate-x-1/2">
            Create Application
          </h3>
        </div>
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

          <div className="relative">
            <Label
              htmlFor="cnic"
              className="absolute left-3 top-3 text-xs text-gray-500"
            >
              CNIC
            </Label>
            <Input
              id="fathersName"
              value={formData.cnic}
              onChange={(e) => handleChange("cnic", e.target.value)}
              className="mt-1 pt-6"
            />
          </div>

          <div className="relative">
            <Label
              htmlFor="remarks"
              className="absolute left-3 top-3 text-xs text-gray-500"
            >
              Remarks
            </Label>
            <Input
              id="pakistaniAddress"
              value={formData.remarks}
              onChange={(e) => handleChange("remarks", e.target.value)}
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
              Create Application <ArrowRightIcon className="mt-1" />
            </Button>
          </div>
        </div>
      </form>
      <div className="w-[839px] h-[137px] bg-white border border-gray-200 rounded-2xl p-4 text-sm text-gray-700 mt-4">
        <p className="mb-2">
          <strong>Note:</strong> Renunciation is only allowed for those who have
          already acquired a foreign nationality and are prepared to permanently
          give up their Pakistani citizenship. The applicant must be a full
          foreign national at the time of application and must no longer intend
          to maintain dual status.
        </p>
        <p>
          This policy is in line with international best practices and national
          law, ensuring that applicants are of legal age and can make an
          informed, permanent decision regarding their citizenship status.
        </p>
      </div>
    </div>
  );
}
