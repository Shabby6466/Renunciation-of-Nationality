import Image from "next/image";

export function FormHeader() {
  return (
    <div className=" m-4 mt-0">
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex items-center justify-center">
          <Image
            src="/Images/logo/government-logo.svg"
            alt="Government of Pakistan Logo"
            width={256}
            height={256}
            // className="rounded-full"
          />
          {/* <div className="ml-4 text-center">
            <div className="text-sm text-gray-600">Government of Pakistan</div>
            <div className="font-semibold text-gray-800">
              Directorate General of
            </div>
            <div className="font-semibold text-gray-800">
              Immigration and Passport
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
