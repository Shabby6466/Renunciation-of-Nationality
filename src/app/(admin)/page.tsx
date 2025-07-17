import { FormHeatmap } from "@/components/dashboard/form-heatmap";
import { VerificationChart } from "@/components/dashboard/verification-chart";
import { ApplicationsTable } from "@/components/dashboard/applications-table";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";

export default function DashboardPage() {
  return (
    <main className="bg-white min-h-screen p-4 rounded-3xl">
      <div className="space-y-8">
        <PageBreadcrumb
          pageTitle="Dashboard"
          // categoryInfo={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
          <div className="lg:col-span-1 ">
            <FormHeatmap />
          </div>
          <div>
            <VerificationChart />
          </div>
        </div>

        <ApplicationsTable />
      </div>
    </main>
  );
}
