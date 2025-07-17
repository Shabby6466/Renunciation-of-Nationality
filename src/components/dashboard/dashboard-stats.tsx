export function DashboardStats() {
  const stats = [
    { label: "verified", value: "94", color: "text-gray-900" },
    { label: "in progress", value: "82", color: "text-gray-900" },
    { label: "rejected", value: "4", color: "text-gray-900" },
  ];

  return (
    <div className="grid grid-cols-3 gap-2 mb-8">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-gray-100 pl-5 pr-8 pt-20 pb-5 text-base rounded-lg"
        >
          <div className={`text-4xl font-bold ${stat.color} mb-1`}>
            {stat.value}
          </div>
          <div className="text-sm text-gray-500">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
