"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

interface ReviewFormProps {
  data: any
  onBack: () => void
  onSubmit: (data: any) => void
  isLastStep: boolean
}

export function ReviewForm({ data, onBack, onSubmit }: ReviewFormProps) {
  const handleSubmit = () => {
    onSubmit(data)
  }

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold">Review Application</h2>

      {/* Applicant Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <div className="grid grid-cols-2 gap-4 text-sm">
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
          <div className="grid grid-cols-2 gap-4 text-sm">
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
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-600">Foreign Citizenship Assurance Ref. No.</span>
              <div className="font-medium">FCA-PAK-2024-9834721</div>
            </div>
            <div>
              <span className="text-gray-600">Assurance Letter Date</span>
              <div className="font-medium">15-06-2024</div>
            </div>
            <div>
              <span className="text-gray-600">Issuing Authority</span>
              <div className="font-medium">Ministry of Interior, Islamabad</div>
            </div>
            <div>
              <span className="text-gray-600">Issuing Country</span>
              <div className="font-medium">Pakistan</div>
            </div>
            <div>
              <span className="text-gray-600">Nearest Foreign Mission</span>
              <div className="font-medium">British High Commission, Islamabad</div>
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

        <div className="flex justify-center">
          <Image src="/placeholder.png" alt="Applicant Photo" width={150} height={150} className="rounded-lg border" />
        </div>
      </div>

      {/* Children Particulars */}
      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold mb-4">Children Particulars</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

          <div className="flex justify-center">
            <Image src="/placeholder.png" alt="Child Photo" width={100} height={100} className="rounded-lg border" />
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-6">
        <Button type="button" variant="outline" onClick={onBack}>
          Go Back
        </Button>
        <Button type="button" className="bg-indigo-600 hover:bg-indigo-700" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  )
}
