import { ShadcnHorizontal } from "@/components/carousels/shadcn";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen container max-w-3xl mx-auto space-y-20">
      <article className="space-y-10">
        <header>
          <h1 className="text-2xl font-semibold">Shadcn Carousel</h1>
          <p className="text-muted-foreground">
            Here is a simple carousel build with{" "}
            <Link
              href={`https://ui.shadcn.com/docs/components/carousel`}
              className="underline"
            >
              Shadcn Carousel
            </Link>{" "}
            component
          </p>
        </header>

        <ShadcnHorizontal />
      </article>
    </main>
  );
}
