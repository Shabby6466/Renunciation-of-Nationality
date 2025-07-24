import { FormHeader } from "./form-header";

export default function FormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center">
      <FormHeader />
      {children}
    </div>
  );
}
