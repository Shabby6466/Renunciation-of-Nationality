"use client";

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
import { Plus, Upload, Trash2 } from "lucide-react";
import Image from "next/image";

interface ChildrenFormProps {
  data: any;
  onNext: (data: any) => void;
  onBack: () => void;
}

export function ChildrenForm({ data, onNext, onBack }: ChildrenFormProps) {
  const [children, setChildren] = useState(
    data.children || [
      {
        fullName: "Faraz Asad",
        nationality: "British",
        cnic: "61101-3082523-9",
        placeOfBirth: "Poland",
        dateOfBirth: "12-08-1988",
        gender: "Male",
        applicantRelation: "Guardian",
        photo: "/placeholder.png",
      },
    ],
  );

  const addChild = () => {
    setChildren([
      ...children,
      {
        fullName: "",
        nationality: "",
        cnic: "",
        placeOfBirth: "",
        dateOfBirth: "",
        gender: "",
        applicantRelation: "",
        photo: null,
      },
    ]);
  };

  const removeChild = (index: number) => {
    setChildren(children.filter((_, i) => i !== index));
  };

  const updateChild = (index: number, field: string, value: string) => {
    const updated = [...children];
    updated[index] = { ...updated[index], [field]: value };
    setChildren(updated);
  };

  const handleSubmit = () => {
    onNext({ children });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Children Particulars</h2>
        <Button
          onClick={addChild}
          className="bg-indigo-600 hover:bg-indigo-700"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add
        </Button>
      </div>

      {children.map((child, index) => (
        <div key={index} className="bg-white border rounded-lg p-6">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label>Full name</Label>
                <Input
                  value={child.fullName}
                  onChange={(e) =>
                    updateChild(index, "fullName", e.target.value)
                  }
                  className="mt-1"
                />
              </div>

              <div>
                <Label>Nationality</Label>
                <Input
                  value={child.nationality}
                  onChange={(e) =>
                    updateChild(index, "nationality", e.target.value)
                  }
                  className="mt-1"
                />
              </div>

              <div>
                <Label>CNIC</Label>
                <Input
                  value={child.cnic}
                  onChange={(e) => updateChild(index, "cnic", e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label>Place of Birth</Label>
                <Input
                  value={child.placeOfBirth}
                  onChange={(e) =>
                    updateChild(index, "placeOfBirth", e.target.value)
                  }
                  className="mt-1"
                />
              </div>

              <div>
                <Label>Date of Birth</Label>
                <Input
                  type="date"
                  value={child.dateOfBirth}
                  onChange={(e) =>
                    updateChild(index, "dateOfBirth", e.target.value)
                  }
                  className="mt-1"
                />
              </div>

              <div>
                <Label>Gender</Label>
                <Select
                  value={child.gender}
                  onValueChange={(value: string) =>
                    updateChild(index, "gender", value)
                  }
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="md:col-span-2">
                <Label>Applicant Relation</Label>
                <Input
                  value={child.applicantRelation}
                  onChange={(e) =>
                    updateChild(index, "applicantRelation", e.target.value)
                  }
                  className="mt-1"
                />
              </div>
            </div>

            <div className="ml-6 flex flex-col items-center space-y-2">
              <div className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center overflow-hidden">
                {child.photo ? (
                  <Image
                    src={child.photo || "/placeholder.png"}
                    alt="Child photo"
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                ) : (
                  <div className="text-gray-400 text-center">
                    <Upload className="h-6 w-6 mx-auto mb-1" />
                    <span className="text-xs">Photo</span>
                  </div>
                )}
              </div>

              <div className="flex space-x-1">
                <Button className="bg-indigo-600 text-white hover:bg-indigo-700 px-2 py-1 text-sm">
                  <Upload className="h-3 w-3 mr-1" />
                  Upload New
                </Button>
                <Button className="text-red-600 hover:bg-red-50 bg-transparent px-2 py-1 text-sm">
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>

          {children.length > 1 && (
            <div className="flex justify-end">
              <Button
                onClick={() => removeChild(index)}
                className="text-red-600 hover:bg-red-50 px-2 py-1 text-sm"
              >
                Remove Child
              </Button>
            </div>
          )}
        </div>
      ))}

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-gray-700">
        <p className="mb-2">
          <strong>Note:</strong> Please mention details of those minor children
          (below 21 years), if they are residing abroad, as their pakistani
          citizenship will also be ceased with applicant
        </p>
        <p>
          Children below 21 years of age can Renounce Pakistan Citizenship
          alongwith their father on prescribed form 'X' of a male person, who
          are residing abroad and their Pakistani Citizenship, needs to be
          cancelled. The names of children residing in Pakistan shall not be
          mentioned in form X. Copies of CNIC/NICOP Form B/CRC along with
          Cancelation slip of NADRA.
        </p>
      </div>

      <div className="flex justify-between pt-6">
        <Button type="button" className="border" onClick={onBack}>
          Go Back
        </Button>
        <Button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-700"
          onClick={handleSubmit}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
