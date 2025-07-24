import { DashboardStats } from "./dashboard-stats";

export function FormHeatmap() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const weeks = Array.from({ length: 12 }, (_, i) => i);

  // Generate activity data that matches the screenshot pattern
  const getActivityLevel = (day: string, week: number) => {
    // Create a pattern similar to the screenshot
    const intensity = Math.random();
    if (intensity < 0.1) return "bg-slate-100";
    if (intensity < 0.3) return "bg-indigo-200";
    if (intensity < 0.5) return "bg-indigo-400";
    if (intensity < 0.7) return "bg-indigo-600";
    return "bg-indigo-800";
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-md w-[580px] h-[404px] ml-7 flex flex-col justify-between">
      <h2 className="text-xl font-semibold mb-6">Form Heatstamp</h2>

      <DashboardStats />

      {/* <div className="space-y-1">
        {days.map((day) => (
          <div key={day} className="flex items-center gap-1">
            <div className="w-10 text-xs text-gray-600 font-medium">{day}</div>
            <div className="flex gap-1">
              {weeks.map((week) => (
                <div
                  key={week}
                  className={`w-3 h-3 rounded-sm ${getActivityLevel(day, week)}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}
