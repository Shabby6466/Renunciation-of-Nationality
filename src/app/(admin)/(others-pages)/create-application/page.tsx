"use client";
import CreateForm from "@/components/new-forms/create-application";
import { useRouter } from "next/navigation";
import FormLayout from "@/components/new-forms/FormLayout";

export default function NotificationsPage() {
  const router = useRouter();

  const handleNext = (data: any) => {
    // console.log("ParentForm submitted:", data);
    router.push("/new-forms");
  };

  const handleBack = () => {
    router.push("/");
  };
  return (
    <div>
      <FormLayout>
        <CreateForm data={{}} onNext={handleNext} onBack={handleBack} />
      </FormLayout>
    </div>
  );
}
