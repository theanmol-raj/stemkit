import CreateQuestionPaper from "@/components/QuestionPaper/CreateQuestionPaper";
import NextStepsModel from "@/components/QuestionPaper/NextStepsModel";
import CreateQProvider from "@/providers/QuestionPaper/Create";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" mx-auto max-w-[100rem] w-full flex-1 gap-2 flex flex-col">
      <CreateQProvider>
        <CreateQuestionPaper />
        <NextStepsModel />
      </CreateQProvider>
    </main>
  );
}
