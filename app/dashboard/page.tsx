"use client";

import { Card } from "@/components/ui/card";
import { Brain, MessageSquare, User } from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
      <div className="container py-16">
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Welcome to EmpowerHer
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/confidence-quiz" className="transform hover:scale-105 transition-all">
            <Card className="p-8 backdrop-blur-sm bg-white/50 dark:bg-gray-950/50 border-2 border-primary/20 hover:border-primary">
              <Brain className="w-16 h-16 mb-6 text-primary" />
              <h2 className="text-2xl font-bold mb-3 text-primary">Confidence Quiz</h2>
              <p className="text-foreground/80 text-lg">
                Assess and boost your confidence level through our specialized quiz
              </p>
            </Card>
          </Link>
          <Link href="/interview-prep" className="transform hover:scale-105 transition-all">
            <Card className="p-8 backdrop-blur-sm bg-white/50 dark:bg-gray-950/50 border-2 border-secondary/20 hover:border-secondary">
              <MessageSquare className="w-16 h-16 mb-6 text-secondary" />
              <h2 className="text-2xl font-bold mb-3 text-secondary">Interview Prep</h2>
              <p className="text-foreground/80 text-lg">
                Practice with our AI-powered interview simulator
              </p>
            </Card>
          </Link>
          <Link href="/about" className="transform hover:scale-105 transition-all">
            <Card className="p-8 backdrop-blur-sm bg-white/50 dark:bg-gray-950/50 border-2 border-accent/20 hover:border-accent">
              <User className="w-16 h-16 mb-6 text-accent" />
              <h2 className="text-2xl font-bold mb-3 text-accent">About</h2>
              <p className="text-foreground/80 text-lg">
                Learn more about EmpowerHer and our mission
              </p>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}