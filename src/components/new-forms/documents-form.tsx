"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload, Trash2 } from "lucide-react";

interface DocumentsFormProps {
  data: any;
  onNext: (data: any) => void;
  onBack: () => void;
}

const documentRequirements = [
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
  const [uploads, setUploads] = useState(data.uploads || {});

  const handleUpload = (docId: number) => {
    // Simulate file upload
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
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Supporting Documents</h2>

      <div className="space-y-6">
        {documentRequirements.map((doc) => (
          <div key={doc.id} className="border rounded-lg p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1 pr-4">
                <p className="text-sm text-gray-700">
                  <span className="font-medium">{doc.id}.</span> {doc.title}
                </p>
              </div>

              <div className="flex items-center space-x-2">
                {uploads[doc.id] ? (
                  <>
                    <span className="text-sm text-green-600">Uploaded</span>
                    <Button
                      onClick={() => handleRemove(doc.id)}
                      className="text-red-600 hover:bg-red-50 px-2 py-1 text-sm"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </>
                ) : (
                  <Button
                    onClick={() => handleUpload(doc.id)}
                    className="bg-indigo-600 hover:bg-indigo-700 px-2 py-1 text-sm"
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

      <div className="flex justify-between pt-6">
        <Button type="button" className="border" onClick={onBack}>
          Go Back
        </Button>
        <Button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-700"
          onClick={handleSubmit}
        >
          Review Application
        </Button>
      </div>
    </div>
  );
}
