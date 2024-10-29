import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Brain, MessageSquare, User, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container px-4 pt-32 pb-20">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-6xl font-bold tracking-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Empower Your Career Journey
          </h1>
          <p className="text-xl text-foreground/80">
            Prepare for success with our AI-powered interview preparation platform designed specifically for women in tech.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Link href="/login">
              <Button size="lg" className="text-lg px-8">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="text-lg px-8">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="backdrop-blur-sm bg-white/50 dark:bg-gray-950/50 p-8 rounded-2xl shadow-xl border border-primary/20">
            <Brain className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-3">Confidence Quiz</h3>
            <p className="text-foreground/80">
              Assess your confidence level and get personalized recommendations for improvement.
            </p>
          </div>
          <div className="backdrop-blur-sm bg-white/50 dark:bg-gray-950/50 p-8 rounded-2xl shadow-xl border border-secondary/20">
            <MessageSquare className="w-12 h-12 mb-4 text-secondary" />
            <h3 className="text-xl font-semibold mb-3">Interview Practice</h3>
            <p className="text-foreground/80">
              Practice with our AI interviewer and receive instant feedback on your responses.
            </p>
          </div>
          <div className="backdrop-blur-sm bg-white/50 dark:bg-gray-950/50 p-8 rounded-2xl shadow-xl border border-accent/20">
            <User className="w-12 h-12 mb-4 text-accent" />
            <h3 className="text-xl font-semibold mb-3">Personalized Feedback</h3>
            <p className="text-foreground/80">
              Get detailed insights and suggestions to improve your interview performance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}