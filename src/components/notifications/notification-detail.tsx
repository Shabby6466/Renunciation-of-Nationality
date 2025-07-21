import Image from "next/image";

export function NotificationDetail() {
  return (
    <div className="h-[889px] w-[840px] flex flex-col bg-white rounded-3xl shadow-sm ">
      <div className="p-4 border-b">
        <h1 className="text-md font-semi-bold">Website Update</h1>
      </div>

      <div className="flex-1 p-6 space-y-6">
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="DGIP Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <span className="font-medium">DGIP</span>
                <span className="text-sm text-gray-500">10:23</span>
              </div>
              <p className="text-gray-700 mt-1">
                Please be informed that the DGIP online application system will
                be temporarily unavailable due to scheduled maintenance work.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="DGIP Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <span className="font-medium">DGIP</span>
                <span className="text-sm text-gray-500">10:17</span>
              </div>
              <p className="text-gray-700 mt-1">
                We are currently experiencing a temporary technical issue with
                the DGIP online system. Our technical team is actively working
                to resolve the matter as quickly as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
