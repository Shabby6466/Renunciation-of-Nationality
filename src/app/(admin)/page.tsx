import { FormHeatmap } from "@/components/dashboard/form-heatmap";
import { VerificationChart } from "@/components/dashboard/verification-chart";
import ApplicationsTable from "@/components/dashboard/applications-table";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";

export default function DashboardPage() {
  return (
    <main className="bg-white/80 min-h-screen p-4 rounded-3xl">
      <div className="space-y-8">
        <PageBreadcrumb
          pageTitle="Dashboard"
          // categoryInfo={true}
        />

        <div className="flex flex-cols gap-4 mb-6 ">
          <div>
            <FormHeatmap />
          </div>
          <div>
            <VerificationChart />
          </div>
        </div>

        <ApplicationsTable style={{ height: "378px", width: "1103px" }} />
      </div>
    </main>
  );
}
