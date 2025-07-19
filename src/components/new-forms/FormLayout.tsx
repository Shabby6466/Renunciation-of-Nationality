import { FormHeader } from "./form-header";

export default function FormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg">
      <FormHeader />
      {children}
    </div>
  );
}
