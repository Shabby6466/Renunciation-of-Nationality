"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRightIcon } from "@/icons";

interface ReviewFormProps {
  data: any;
  onBack: () => void;
  onSubmit: (data: any) => void;
  isLastStep: boolean;
}

export default function ReviewForm({
  data,
  onBack,
  onSubmit,
}: ReviewFormProps) {
  const handleSubmit = () => {
    onSubmit(data);
  };

  return (
    <div className="w-[840px] h-[1344px] mx-auto bg-white shadow-md rounded-2xl  flex flex-col ">
      <div className="border-b pb-8">
        <div className="relative pt-6 pb-4 pr-4 mb-12 mt-4">
          <h2 className="text-2xl font-semibold text-center absolute left-1/2 transform -translate-x-1/2">
            Review Application
          </h2>
        </div>
        <div className="relative">
          <Image
            src="/placeholder.png"
            alt="Applicant Photo"
            width={150}
            height={150}
            className="rounded-lg border absolute right-16 transform -translate-x-0"
          />
        </div>

        {/* Applicant Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-24 pt-6">
          <div className="md:col-span-2 space-y-6">
            <div className="grid grid-cols-2 gap-6 text-sm">
              <div>
                <span className="text-gray-600">Full name</span>
                <div className="font-medium">Faraz Asad</div>
              </div>
              <div>
                <span className="text-gray-600">Fathers Name</span>
                <div className="font-medium">Asad</div>
              </div>
              <div>
                <span className="text-gray-600">Pakistan Address</span>
                <div className="font-medium">House 123 Street 123</div>
              </div>
              <div>
                <span className="text-gray-600">Gender</span>
                <div className="font-medium">Male</div>
              </div>
              <div>
                <span className="text-gray-600">Contact Number</span>
                <div className="font-medium">+92 3311170170</div>
              </div>
              <div>
                <span className="text-gray-600">Marital Status</span>
                <div className="font-medium">Single</div>
              </div>
              <div>
                <span className="text-gray-600">Profession or Occupation</span>
                <div className="font-medium">Teacher</div>
              </div>
              <div>
                <span className="text-gray-600">Spouse Name</span>
                <div className="font-medium">Mariam</div>
              </div>
              <div>
                <span className="text-gray-600">Place of Birth</span>
                <div className="font-medium">Poland</div>
              </div>
              <div>
                <span className="text-gray-600">Date of Birth</span>
                <div className="font-medium">12-08-1988</div>
              </div>
              <div>
                <span className="text-gray-600">Birth Country</span>
                <div className="font-medium">Poland</div>
              </div>
              <div>
                <span className="text-gray-600">Pakistan Passport Number</span>
                <div className="font-medium">P4366918</div>
              </div>
            </div>

            {/* Parent Details */}
            <div className="grid grid-cols-2 gap-6 text-sm border-b border-t py-8">
              <div>
                <span className="text-gray-600">Fathers Name</span>
                <div className="font-medium">Asad</div>
              </div>
              <div>
                <span className="text-gray-600">Fathers Nationality</span>
                <div className="font-medium">Pakistani</div>
              </div>
              <div>
                <span className="text-gray-600">Mothers Name</span>
                <div className="font-medium">Fatima</div>
              </div>
              <div>
                <span className="text-gray-600">Mothers Nationality</span>
                <div className="font-medium">Pakistani</div>
              </div>
            </div>

            {/* Other Details */}
            <div className="grid grid-cols-2 gap-6 text-sm pb-6">
              <div>
                <span className="text-gray-600">
                  Foreign Citizenship Assurance Ref. No.
                </span>
                <div className="font-medium">FCA-PAK-2024-9834721</div>
              </div>
              <div>
                <span className="text-gray-600">Assurance Letter Date</span>
                <div className="font-medium">15-06-2024</div>
              </div>
              <div>
                <span className="text-gray-600">Issuing Authority</span>
                <div className="font-medium">
                  Ministry of Interior, Islamabad
                </div>
              </div>
              <div>
                <span className="text-gray-600">Issuing Country</span>
                <div className="font-medium">Pakistan</div>
              </div>
              <div>
                <span className="text-gray-600">Nearest Foreign Mission</span>
                <div className="font-medium">
                  British High Commission, Islamabad
                </div>
              </div>
              <div>
                <span className="text-gray-600">Foreign Country</span>
                <div className="font-medium">Poland</div>
              </div>
              <div className="md:col-span-2">
                <span className="text-gray-600">Foreign Address</span>
                <div className="font-medium">House 123 Street 123</div>
              </div>
            </div>
          </div>
        </div>

        {/* Children Particulars */}
        <div>
          <div className="relative pt-6 pb-4 pr-4 mb-4 ">
            <h2 className="text-2xl font-semibold text-center absolute left-1/2 transform -translate-x-1/2">
              Children Particulars
            </h2>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.png"
              alt="Child Photo"
              width={150}
              height={150}
              className="rounded-lg border absolute right-16 transform -translate-x-0"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-24 pt-12 pb-8">
            <div className="md:col-span-2 space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Full name</span>
                  <div className="font-medium">Faraz Asad</div>
                </div>
                <div>
                  <span className="text-gray-600">Applicant Relation</span>
                  <div className="font-medium">Guardian</div>
                </div>
                <div>
                  <span className="text-gray-600">Nationality</span>
                  <div className="font-medium">British</div>
                </div>
                <div>
                  <span className="text-gray-600">Gender</span>
                  <div className="font-medium">Male</div>
                </div>
                <div>
                  <span className="text-gray-600">CNIC</span>
                  <div className="font-medium">61101-3082523-9</div>
                </div>
                <div>
                  <span className="text-gray-600">Place of Birth</span>
                  <div className="font-medium">Poland</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-4 mr-12">
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
            Submit
            <ArrowRightIcon className="mt-1" />
          </Button>
        </div>
      </div>
    </div>
  );
}
