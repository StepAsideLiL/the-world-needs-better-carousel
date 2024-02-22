"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";

const headerMenus = [
  {
    title: "Shadcn",
    href: "/shadcn",
  },
];

export default function HeaderMenu() {
  const pathname = usePathname();

  return (
    <>
      {headerMenus.length !== 0 && (
        <Separator orientation="vertical" className="h-10" />
      )}

      <nav>
        {headerMenus.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-muted-foreground hover:underline",
              item.href === pathname && "text-foreground underline"
            )}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </>
  );
}
