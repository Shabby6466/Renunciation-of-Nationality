import { NotificationsList } from "@/components/notifications/notifications-list";
import { NotificationDetail } from "@/components/notifications/notification-detail";

export default function NotificationsPage() {
  return (
    <div className="h-[889px] flex gap-1">
      {/* <div className="border-r"> */}
      <NotificationsList />
      {/* </div> */}
      {/* <div className="flex-1"> */}
      <NotificationDetail />
      {/* </div> */}
    </div>
  );
}
