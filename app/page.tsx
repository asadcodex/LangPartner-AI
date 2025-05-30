// app/page.tsx
import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import {getAllCompanions, getRecentSessions} from "@/lib/actions/companion.actions";
import Link from "next/link";
import Image from "next/image";

export const dynamic = 'force-dynamic';

const Page = async () => {
  return (
    <div className="relative h-full flex flex-col overflow-hidden">
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-robot.jpg')" }}
      />
      <main className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col items-center justify-start gap-8 bg-transparent px-4 pb-10 pt-10 sm:px-14">
        <div className="mt-auto flex w-full flex-col items-center">
          <button className="btn-primary flex items-center gap-2 px-6 py-3 w-fit mb-[100px] ml-[25px]">
            <Link href="/companions/new" className="no-underline">
                <p className="m-0 text-base font-bold">Create Language Partner</p>
            </Link>
          </button>
        </div>
      </main>
    </div>
  );
}

export default Page;
