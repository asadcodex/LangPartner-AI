// app/page.tsx
import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import {getAllCompanions, getRecentSessions} from "@/lib/actions/companion.actions";
import Link from "next/link";
import Image from "next/image"; // Import Image for the icon

export const dynamic = 'force-dynamic';

const Page = async () => {
    // Fetching data - kept as is
    // const companions = await getAllCompanions({ limit: 3 });
    // const recentSessionsCompanions = await getRecentSessions(10);

  return (
    // Wrapper for the page with background
    // Changed min-h-screen to h-screen and added overflow-hidden
    <div className="relative h-full flex flex-col overflow-hidden">
      {/* Background Image Div - specific to this page */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-robot.jpg')" }}
      />

      {/* Main content container */}
      {/* flex-1 allows this to take available space within the h-screen parent */}
      <main className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col items-center justify-start gap-8 bg-transparent px-4 pb-10 pt-10 sm:px-14"> {/* Adjusted pb for button spacing */}
        {/* Your actual page content would go here.
          For now, it's commented out to focus on the button and scroll.
          Uncomment and adapt as needed.
        */}
        {/*
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>

        <section className="home-section w-full">
            {companions.map((companion) => (
                <CompanionCard
                    key={companion.id}
                    {...companion}
                />
            ))}
        </section>

        <section className="home-section w-full">
            <CompanionsList
                title="Recently completed sessions"
                companions={recentSessionsCompanions}
                classNames="w-full lg:w-2/3 bg-card/80 backdrop-blur-sm rounded-4xl border border-border p-7"
            />
            <CTA />
        </section>
        */}

        {/* Button Container - Pushed to the bottom and centered */}
        {/* mt-auto pushes it down, pb-10 was on the container, now adjusted on main's padding */}
        <div className="mt-auto flex w-full flex-col items-center">
          <button className="btn-primary flex items-center gap-2 px-6 py-3 w-fit mb-[100px] ml-[25px]"> {/* Added flex, items-center, gap, and w-fit */}
            <Link href="/companions/new" className="no-underline">
                <p className="m-0 text-base font-bold">Create Language Partner</p> {/* Ensure text styles are appropriate */}
            </Link>
          </button>
        </div>
      </main>
    </div>
  );
}

export default Page;
