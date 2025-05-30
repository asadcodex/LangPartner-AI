import CompanionForm from "@/components/CompanionForm";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import CornerElements from "@/components/CornerElements";

const NewCompanion = async () => {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  return (
    <div className="relative h-full flex flex-col items-center justify-center overflow-hidden p-4">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hang-bg.png')" }}
      />
      <main className="min-lg:w-1/3 min-md:w-2/3 items-center justify-center">
        <article className="w-full gap-4 flex flex-col relative p-[10px]">
          <CornerElements />
          <h1 className="text-center">Design a New Partner</h1>

          <CompanionForm />
        </article>
      </main>
    </div>
  );
};

export default NewCompanion;
