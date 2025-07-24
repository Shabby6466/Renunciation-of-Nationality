import { NotificationsList } from "@/components/notifications/notifications-list";
import { NotificationDetail } from "@/components/notifications/notification-detail";

export default function NotificationsPage() {
  return (
    <div className="h-[889px] w-full flex gap-1">
      <div className="">
        <NotificationsList />
      </div>
      <div className="w-[840px]">
        <NotificationDetail />
      </div>
    </div>
  );
}
