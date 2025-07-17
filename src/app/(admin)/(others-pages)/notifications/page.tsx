import { NotificationsList } from "@/components/notifications/notifications-list";
import { NotificationDetail } from "@/components/notifications/notification-detail";

export default function NotificationsPage() {
  return (
    <div className="min-h-screen flex gap-2">
      <div className="w-1/4 border-r">
        <NotificationsList />
      </div>
      <div className="flex-1">
        <NotificationDetail />
      </div>
    </div>
  );
}
