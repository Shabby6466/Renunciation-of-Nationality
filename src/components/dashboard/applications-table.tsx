"use client";
import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter, Download } from "lucide-react";
// import Select from "../form/Select";
import GenericSearchField from "../atoms/generic-search-field/generic-search-field";
import { ExportIcon } from "@/icons";

interface ApplicationsTableProps {
  className?: string;
  style?: React.CSSProperties;
}

const applications = [
  {
    name: "Leslie Alexander",
    contact: "+92 3311170170",
    status: "Approved",
    formId: "UK192",
  },
  {
    name: "Brooklyn Simmons",
    contact: "+92 3311170170",
    status: "Pending",
    formId: "UK234",
  },
  {
    name: "Wade Warren",
    contact: "+92 3311170170",
    status: "Pending",
    formId: "UK575",
  },
  {
    name: "Cameron Williamson",
    contact: "+92 3311170170",
    status: "Rejected",
    formId: "UK157",
  },
  {
    name: "Guy Hawkins",
    contact: "+92 3311170170",
    status: "Approved",
    formId: "UK126",
  },
];

const ApplicationsTable: React.FC<ApplicationsTableProps> = ({
  className = "",
  style,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div
      className="bg-white rounded-3xl p-6 shadow-md ml-8 ${className}"
      style={style}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            className="rounded-3xl px-4 py-5 flex items-center gap-3 bg-gray-200 text-md"
          >
            Filters
            <Filter className="h-4 w-4 mr-2" />
          </Button>
          <Select defaultValue="name">
            <SelectTrigger className="w-32 rounded-3xl px-4 py-5 flex items-center gap-1 bg-gray-200 text-md">
              <SelectValue placeholder="Sort" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="date">Date</SelectItem>
              <SelectItem value="status">Status</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative w-80">
            <GenericSearchField
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search"
              aria-label="Search categories"
            />
            {/* <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Search" className="pl-10 w-64" /> */}
          </div>
          <Button
            variant="outline"
            size="sm"
            className="rounded-3xl px-4 py-5 flex items-center gap-4 bg-gray-200 text-md "
          >
            Export
            <ExportIcon className="h-4 w-4" />
            {/* <Download className="h-4 w-4 mr-2 " /> */}
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 px-4 font-medium text-gray-600">
                Applicant Name
              </th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">
                Contact
              </th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">
                Verification Status
              </th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">
                Form ID
              </th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{app.name}</td>
                <td className="py-3 px-4">{app.contact}</td>
                <td className="py-3 px-4">
                  <Badge
                    variant={
                      app.status === "Approved"
                        ? "default"
                        : app.status === "Pending"
                          ? "secondary"
                          : "destructive"
                    }
                    className={
                      app.status === "Approved"
                        ? "bg-green-100 text-green-800 hover:bg-green-100"
                        : app.status === "Pending"
                          ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                          : "bg-red-100 text-red-800 hover:bg-red-100"
                    }
                  >
                    {app.status}
                  </Badge>
                </td>
                <td className="py-3 px-4">{app.formId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationsTable;
