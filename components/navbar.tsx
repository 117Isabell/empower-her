"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-sm bg-background/80 border-b">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center space-x-2">
          <GraduationCap className="w-8 h-8 text-primary" />
          <span className="text-xl font-bold">EmpowerHer</span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link 
            href="/about"
            className={cn(
              "text-sm transition-colors hover:text-primary",
              pathname === "/about" && "text-primary"
            )}
          >
            About
          </Link>
          <Link 
            href="/confidence-quiz"
            className={cn(
              "text-sm transition-colors hover:text-primary",
              pathname === "/confidence-quiz" && "text-primary"
            )}
          >
            Confidence Quiz
          </Link>
          <Link 
            href="/interview-prep"
            className={cn(
              "text-sm transition-colors hover:text-primary",
              pathname === "/interview-prep" && "text-primary"
            )}
          >
            Interview Prep
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/login">
            <Button variant="ghost" size="sm">Log in</Button>
          </Link>
          <Link href="/signup">
            <Button size="sm">Sign up</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}