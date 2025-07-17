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
    <div className="space-y-8">
      {/* Parents Particulars */}
      <div className="bg-white rounded-lg p-6 border">
        <h3 className="text-lg font-semibold mb-4">Parents Particulars</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="fathersName">Fathers Name</Label>
            <Input
              id="fathersName"
              value={formData.fathersName}
              onChange={(e) => handleChange("fathersName", e.target.value)}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="fathersNationality">Fathers Nationality</Label>
            <Input
              id="fathersNationality"
              value={formData.fathersNationality}
              onChange={(e) =>
                handleChange("fathersNationality", e.target.value)
              }
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="mothersName">Mothers Name</Label>
            <Input
              id="mothersName"
              value={formData.mothersName}
              onChange={(e) => handleChange("mothersName", e.target.value)}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="mothersNationality">Mothers Nationality</Label>
            <Input
              id="mothersNationality"
              value={formData.mothersNationality}
              onChange={(e) =>
                handleChange("mothersNationality", e.target.value)
              }
              className="mt-1"
            />
          </div>
        </div>
      </div>

      {/* Other Details */}
      <div className="bg-white rounded-lg p-6 border">
        <h3 className="text-lg font-semibold mb-4">Other Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="foreignCitizenshipRef">
              Foreign Citizenship Assurance Ref. No.
            </Label>
            <Input
              id="foreignCitizenshipRef"
              value={formData.foreignCitizenshipRef}
              onChange={(e) =>
                handleChange("foreignCitizenshipRef", e.target.value)
              }
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="assuranceLetterDate">Assurance Letter Date</Label>
            <Input
              id="assuranceLetterDate"
              value={formData.assuranceLetterDate}
              onChange={(e) =>
                handleChange("assuranceLetterDate", e.target.value)
              }
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="issuingAuthority">Issuing Authority</Label>
            <Input
              id="issuingAuthority"
              value={formData.issuingAuthority}
              onChange={(e) => handleChange("issuingAuthority", e.target.value)}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="issuingCountry">Issuing Country</Label>
            <Select
              value={formData.issuingCountry}
              onValueChange={(value) => handleChange("issuingCountry", value)}
            >
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Pakistan">Pakistan</SelectItem>
                <SelectItem value="Poland">Poland</SelectItem>
                <SelectItem value="UK">United Kingdom</SelectItem>
                <SelectItem value="USA">United States</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="nearestForeignMission">
              Nearest Foreign Mission
            </Label>
            <Input
              id="nearestForeignMission"
              value={formData.nearestForeignMission}
              onChange={(e) =>
                handleChange("nearestForeignMission", e.target.value)
              }
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="foreignCountry">Foreign Country</Label>
            <Input
              id="foreignCountry"
              value={formData.foreignCountry}
              onChange={(e) => handleChange("foreignCountry", e.target.value)}
              className="mt-1"
            />
          </div>

          <div className="md:col-span-2">
            <Label htmlFor="foreignAddress">Foreign Address</Label>
            <Input
              id="foreignAddress"
              value={formData.foreignAddress}
              onChange={(e) => handleChange("foreignAddress", e.target.value)}
              className="mt-1"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-6">
        <Button type="button" variant="outline" onClick={onBack}>
          Go Back
        </Button>
        <Button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-700"
          onClick={() => onNext(formData)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
