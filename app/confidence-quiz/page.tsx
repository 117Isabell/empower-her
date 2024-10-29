"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { quizQuestions } from "@/lib/quiz-data";
import { QuizResults } from "@/components/quiz-results";

export default function ConfidenceQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    if (currentQuestion < quizQuestions.length - 1) {
      setAnswers(newAnswers);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setAnswers(newAnswers);
      setShowResults(true);
    }
  };

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  if (showResults) {
    return <QuizResults answers={answers} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
      <Navbar />
      <div className="container max-w-4xl pt-24 px-4">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Confidence Assessment Quiz</h1>
            <p className="text-xl text-muted-foreground">
              Question {currentQuestion + 1} of {quizQuestions.length}
            </p>
            <Progress value={progress} className="w-full h-2" />
          </div>

          <Card className="p-8 backdrop-blur-sm bg-white/50 dark:bg-gray-950/50">
            <h2 className="text-2xl font-semibold mb-8">
              {quizQuestions[currentQuestion].question}
            </h2>
            <div className="grid gap-4">
              {quizQuestions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="p-6 text-lg justify-start h-auto font-normal hover:bg-primary/10"
                  onClick={() => handleAnswer(option.score)}
                >
                  {option.text}
                </Button>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}