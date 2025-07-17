"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, ChevronDown } from "lucide-react";

const notifications = [
  { id: 1, title: "Website Update", type: "update", unread: false },
  { id: 2, title: "System Repair", type: "system", unread: true, count: 2 },
  {
    id: 3,
    title: "Update on Documents",
    type: "documents",
    unread: true,
    count: 6,
  },
  { id: 4, title: "Tutorial", type: "tutorial", unread: false },
];

export function NotificationsList() {
  const [selectedNotification, setSelectedNotification] = useState(1);

  return (
    <div className="h-full flex flex-col bg-white rounded-3xl shadow-md w-[256px]">
      {/* Header */}
      <div className="px-4 pt-4 pb-3 border-b border-gray-200">
        <div className="relative mb-3">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search"
            className="pl-9 py-2 text-sm rounded-lg bg-gray-100 focus:bg-white"
          />
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-gray-700">Notifications</h2>
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </div>
      </div>

      {/* Notification List */}
      <div className="flex-1 overflow-y-auto">
        {notifications.map((notification) => {
          const isSelected = selectedNotification === notification.id;

          return (
            <div
              key={notification.id}
              className={`flex items-center justify-between px-4 py-3 cursor-pointer group transition-all border-l-4 ${
                isSelected
                  ? "bg-blue-50 border-blue-600"
                  : "bg-white border-transparent hover:bg-gray-50"
              }`}
              onClick={() => setSelectedNotification(notification.id)}
            >
              {/* Dot + Title */}
              <div className="flex items-center">
                <div
                  className={`w-2 h-2 rounded-full mr-3 ${
                    notification.unread ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
                <span
                  className={`text-sm font-medium ${
                    isSelected ? "text-blue-800" : "text-gray-800"
                  }`}
                >
                  {notification.title}
                </span>
              </div>

              {/* Badge */}
              {notification.count && (
                <Badge
                  variant="secondary"
                  className="text-xs font-medium bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full"
                >
                  {notification.count}
                </Badge>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
