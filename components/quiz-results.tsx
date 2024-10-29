"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getConfidenceLevel, confidenceFeedback } from "@/lib/quiz-data";
import { ArrowRight, Brain, Target, Trophy } from "lucide-react";
import Link from "next/link";

interface QuizResultsProps {
  answers: number[];
}

export function QuizResults({ answers }: QuizResultsProps) {
  const confidenceLevel = getConfidenceLevel(answers);
  const feedback = confidenceFeedback[confidenceLevel];
  const score = Math.round((answers.reduce((a, b) => a + b, 0) / (answers.length * 4)) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
      <div className="container max-w-4xl pt-24 px-4">
        <Card className="p-8 backdrop-blur-sm bg-white/50 dark:bg-gray-950/50">
          <div className="text-center mb-8">
            <Trophy className="w-16 h-16 mx-auto mb-4 text-primary" />
            <h1 className="text-4xl font-bold mb-4">{feedback.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Your confidence score: {score}%
            </p>
            <p className="text-lg">{feedback.description}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Brain className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-semibold">Key Insights</h2>
              </div>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                {feedback.tips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Target className="w-6 h-6 text-secondary" />
                <h2 className="text-xl font-semibold">Next Steps</h2>
              </div>
              <div className="space-y-4">
                <Link href="/interview-prep">
                  <Button className="w-full justify-between">
                    Practice Interviews
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button variant="outline" className="w-full justify-between">
                    Return to Dashboard
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}