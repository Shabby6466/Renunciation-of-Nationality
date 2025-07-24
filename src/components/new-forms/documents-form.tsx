"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload, Trash2 } from "lucide-react";
import { ArrowRightIcon } from "@/icons";

interface DocumentsFormProps {
  data: { uploads?: Record<number, string> };
  onNext: (data: { uploads: Record<number, string> }) => void;
  onBack: () => void;
}

interface DocumentRequirement {
  id: number;
  title: string;
}

const documentRequirements: DocumentRequirement[] = [
  {
    id: 1,
    title:
      "Foreign Passport/ Assurance letter (with English translation) issued by the competent authorities for grant of Nationality/ Citizenship of the respective country.",
  },
  {
    id: 2,
    title:
      "Declaration of Renunciation of Pakistan Citizenship on prescribed Form \"X\" (in triplicate) signed by the applicant and duly attested by concerned Pakistan Mission and with name official Seal (copies of form 'X' enclosed).",
  },
  {
    id: 3,
    title:
      "All previous original Pakistani passports with Photocopies and (Copy of valid Machine Readable Passports.",
  },
  {
    id: 4,
    title:
      "Original CNIC/NICOP alongwith copies of the same and CNIC/NICOP/ CRC cancelation slip of NADRA.",
  },
  {
    id: 5,
    title:
      'Five colored photographs with white background of size "2×1½" one duly attested by the Mission.',
  },
  {
    id: 6,
    title: "Fee receipt equivalent to Pak Rs 500/-",
  },
];

export function DocumentsForm({ data, onNext, onBack }: DocumentsFormProps) {
  const [uploads, setUploads] = useState<Record<number, string>>(
    data.uploads || {},
  );

  const handleUpload = (docId: number) => {
    setUploads((prev) => ({
      ...prev,
      [docId]: `document_${docId}.pdf`,
    }));
  };

  const handleRemove = (docId: number) => {
    setUploads((prev) => {
      const updated = { ...prev };
      delete updated[docId];
      return updated;
    });
  };

  const handleSubmit = () => {
    onNext({ uploads });
  };

  return (
    <div className="w-[840px] min-h-[502px] mb-10 mx-auto bg-white shadow-md rounded-2xl flex flex-col">
      <div className="border-b pb-8">
        <div className="relative pt-6 pb-4 pr-4 mb-12 mt-4">
          <h2 className="text-2xl font-semibold text-center absolute left-1/2 transform -translate-x-1/2">
            Supporting Documents
          </h2>
        </div>

        <div className="space-y-8">
          {documentRequirements.map((doc) => (
            <div key={doc.id} className="border-b mx-12 pb-4">
              <div className="flex flex-col justify-between gap-4">
                <div className="flex-1 pr-4">
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">{doc.id}.</span> {doc.title}
                  </p>
                </div>

                <div className="flex items-center justify-between space-x-2 mt-8">
                  <div></div>
                  {uploads[doc.id] ? (
                    <>
                      <span className="text-sm text-green-600">Uploaded</span>
                      <Button
                        onClick={() => handleRemove(doc.id)}
                        className="rounded-full bg-[#D5393C] text-white hover:bg-[#A82C2E] h-[32px] w-[32px] px-3 py-1 text-sm"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </>
                  ) : (
                    <Button
                      onClick={() => handleUpload(doc.id)}
                      className="bg-[#525EB1] hover:bg-[#414c99] h-[32px] text-white rounded-3xl"
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      Upload
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-4 mx-4 mb-10">
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
            Review Application
            <ArrowRightIcon className="mt-1" />
          </Button>
        </div>
      </div>
    </div>
  );
}
