import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Square } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Providers from "@/components/providers/providers";
import { ModeToggle } from "@/components/mode-toggle";
import HeaderMenu from "@/components/header-menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s - The World Needs Better Carousel",
    default: "The World Needs Better Carousel",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <header className="container py-5 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Link href={"/"} className="flex items-center">
                <Square className="size-5 text-muted-foreground" />
                <Square className="size-7" />
                <Square className="size-5 text-muted-foreground" />
              </Link>

              <HeaderMenu />
            </div>

            <ModeToggle />
          </header>

          {children}
        </Providers>
      </body>
    </html>
  );
}
