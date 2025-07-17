export interface User {
  id: string
  name: string
  email: string
  role: "admin" | "staff" | "applicant"
  avatar?: string
}

export interface Application {
  id: string
  formId: string
  applicantName: string
  contact: string
  status: "pending" | "approved" | "rejected" | "in-progress"
  submittedAt: Date
  updatedAt: Date
  step: number
  data: ApplicationData
}

export interface ApplicationData {
  // Applicant Particulars
  fullName: string
  fathersName: string
  pakistaniAddress: string
  gender: "Male" | "Female" | "Other"
  contactNumber: string
  maritalStatus: "Single" | "Married" | "Divorced" | "Widowed"
  profession: string
  spouseName?: string
  placeOfBirth: string
  dateOfBirth: string
  birthCountry: string
  pakistaniPassportNumber: string

  // Parent Particulars
  parentDetails: {
    fathersName: string
    fathersNationality: string
    mothersName: string
    mothersNationality: string
  }

  // Other Details
  otherDetails: {
    foreignCitizenshipRef: string
    assuranceLetterDate: string
    issuingAuthority: string
    issuingCountry: string
    nearestForeignMission: string
    foreignCountry: string
    foreignAddress: string
  }

  // Children
  children: Child[]

  // Documents
  uploads: Record<number, string>
}

export interface Child {
  fullName: string
  nationality: string
  cnic: string
  placeOfBirth: string
  dateOfBirth: string
  gender: "Male" | "Female"
  applicantRelation: string
  photo?: string
}

export interface Notification {
  id: string
  title: string
  message: string
  type: "info" | "warning" | "error" | "success"
  read: boolean
  createdAt: Date
  userId?: string
}

export interface DashboardStats {
  totalApplications: number
  verified: number
  inProgress: number
  rejected: number
  verificationRate: number
}

export interface FormStep {
  id: number
  title: string
  completed: boolean
  current: boolean
}
