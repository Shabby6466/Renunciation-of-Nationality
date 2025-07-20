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
import { ArrowRightIcon } from "@/icons";

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
        photo: "/placeholder.svg",
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
    <div className="w-[840px] h-[502px] mx-auto p-2 bg-white shadow-md rounded-2xl  flex flex-col ">
      <div className="relative pt-6 pb-4 pr-4">
        <h2 className="text-2xl font-semibold text-center absolute left-1/2 transform -translate-x-1/2">
          Children Particulars
        </h2>
        <div className="flex justify-end pl-6">
          <Button
            onClick={addChild}
            className="bg-[#525EB1] hover:bg-[#414c99]  text-white rounded-3xl"
          >
            Add
            <Plus className="h-4 w-4 " />
          </Button>
        </div>
      </div>

      {children.map((child, index) => (
        <div key={index} className=" px-2 py-2">
          <div className="flex items-start justify-between mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-2 w-full">
              <div className="flex flex-col space-y-4">
                <div className="relative">
                  <Label className="absolute left-3 top-3 text-xs text-gray-500">
                    Full name
                  </Label>
                  <Input
                    value={child.fullName}
                    onChange={(e) =>
                      updateChild(index, "fullName", e.target.value)
                    }
                    className="mt-1 pt-6"
                  />
                </div>

                <div className="relative">
                  <Label className="absolute left-3 top-3 text-xs text-gray-500">
                    Nationality
                  </Label>
                  <Input
                    value={child.nationality}
                    onChange={(e) =>
                      updateChild(index, "nationality", e.target.value)
                    }
                    className="mt-1 pt-6"
                  />
                </div>

                <div className="relative">
                  <Label className="absolute left-3 top-3 text-xs text-gray-500">
                    CNIC
                  </Label>
                  <Input
                    value={child.cnic}
                    onChange={(e) => updateChild(index, "cnic", e.target.value)}
                    className="mt-1 pt-6"
                  />
                </div>

                <div className="relative">
                  <Label className="absolute left-3 top-3 text-xs text-gray-500">
                    Place Of Birth
                  </Label>
                  <Input
                    value={child.placeOfBirth}
                    onChange={(e) =>
                      updateChild(index, "placeOfBirth", e.target.value)
                    }
                    className="mt-1 pt-6"
                  />
                </div>

                <div className="relative">
                  <Label className="absolute left-3 top-3 text-xs text-gray-500">
                    Gender
                  </Label>
                  <Select
                    value={child.gender}
                    onValueChange={(value: string) =>
                      updateChild(index, "gender", value)
                    }
                  >
                    <SelectTrigger className="mt-1 pt-8 pb-4">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex flex-col  space-y-5">
                <div>
                  <div className="ml-6 flex flex-col items-center gap-4">
                    <div className="w-32 h-32  flex items-center justify-center overflow-hidden">
                      {child.photo ? (
                        <Image
                          src={child.photo || "/placeholder.svg"}
                          alt="Child photo"
                          width={128}
                          height={128}
                          className="object-cover rounded-full"
                        />
                      ) : (
                        <div className="text-gray-400 text-center">
                          <Upload className="h-6 w-6 mx-auto mb-1" />
                          <span className="text-xs">Photo</span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center space-x-1 pl-5">
                      <Button className="bg-[#525EB1] hover:bg-[#414c99] h-[32px] text-white rounded-3xl">
                        Upload New
                        <Upload className="h-3 w-3 mr-1" />
                      </Button>
                      <Button className="rounded-full bg-[#D5393C] text-white hover:bg-[#A82C2E] h-[32px] w-[32px]  px-3 py-1 text-sm">
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-y-4 mt-2">
                  <div className="relative">
                    <Label className="absolute left-3 top-3 text-gray-600 ">
                      Date Of Birth
                    </Label>
                    <Input
                      value={child.dateOfBirth}
                      onChange={(e) =>
                        updateChild(index, "dateOfBirth", e.target.value)
                      }
                      className="mt-1 pt-6"
                    />
                  </div>

                  <div className="relative">
                    <Label className="absolute left-3 top-3 text-gray-600">
                      Applicant Relation
                    </Label>
                    <Input
                      value={child.applicantRelation}
                      onChange={(e) =>
                        updateChild(index, "applicantRelation", e.target.value)
                      }
                      className="mt-1 pt-6"
                    />
                  </div>
                </div>
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
          <div className="flex justify-between mt-2 ">
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
      ))}

      <div className="w-[839px] h-[137px] bg-white border border-gray-200 rounded-2xl p-4 text-sm text-gray-700 mt-8">
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
    </div>
  );
}
