import { lusitana } from "@/assets/font";
import { Suspense } from "react";
import { PlansSkeleton } from "@/components/dashboard/planCard/skeleton";
import { Metadata } from "next";
import { SelectPlanForm } from "@/components/dashboard/planForm";

export const metadata: Metadata = {
  title: "Dashboard",
};

const plans_data = [
  {
    id: 0,
    title: "Free",
    price: 0,
    discount: "",
    description: {
      info: "For small Teams",
      benefits: [
        "Real-time contact syncing",
        "Automatic data enrichment",
        "Up to 3 seats",
        "Up to 3 seats",
      ],
    },
  },
  {
    id: 1,
    title: "Premium",
    price: 39,
    discount: "15%",
    description: {
      info: "For Growing Teams",
      benefits: [
        "Private lists",
        "Enhanced email sending",
        "No seat limits",
        "Up to 3 seats",
      ],
    },
  },
  {
    id: 2,
    title: "Elite",
    price: 59,
    discount: "15%",
    description: {
      info: "For Scaling Businesses",
      benefits: [
        "Fully adjustable permissions",
        "Advanced data enrichment",
        "Priority support",
        "Up to 3 seats",
      ],
    },
  },
];

export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Legistai Pro
      </h1>
      <div className="flex flex-col gap-3 bg-[#ffff] rounded-lg p-10">
        <p className="font-bold text-2xl">Select Subscrition</p>
        <div className="grid gap-6 w-full sm:grid-cols-2 lg:grid-cols-3 ">
          <Suspense fallback={<PlansSkeleton />}>
            {plans_data.map((plan) => (
              <SelectPlanForm key={plan.id} plan={plan} />
            ))}
          </Suspense>
        </div>
      </div>
    </main>
  );
}
