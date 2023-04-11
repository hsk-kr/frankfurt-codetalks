"use client";

import { useState } from "react";
import Image from "next/image";
import { Secular_One } from "next/font/google";
import CodeAnimationViewer, { Language } from "../CodeAnimationViewer";

const secularOne = Secular_One({
  subsets: ["latin"],
  weight: ["400"],
});

const codeList: {
  code: string;
  language: Language;
}[] = [
  {
    language: "python",
    code: `def join_us():
  print('Hello FCT!')

join_us()`,
  },
  {
    language: "javascript",
    code: `function joinUs() {
  console.log('Hello FCT!');
}

joinUs();
`,
  },
  {
    language: "c",
    code: `#include <stdio.h>
int main() {
  printf("Hello FCT!");
  return 0;
}`,
  },
  {
    language: "go",
    code: `package main

import "fmt"

func main() {
  fmt.Println("Hello FCT!");
}`,
  },
  {
    language: "java",
    code: `class JoinUs {
  public static void main(String[] args) {
    System.out.println("Hello FCT!");
  }
}`,
  },
];

/**
 * Section that shows title and kakao group chatroom link
 */
const TopSection = () => {
  const [codeOrderNo, setCodeOrderNo] = useState(0);

  const handleCodeFinish = () => {
    setTimeout(() => {
      setCodeOrderNo((prevOrderNo) => (prevOrderNo + 1) % codeList.length);
    }, 1000);
  };

  return (
    <div className="h-screen relative">
      <div className="absolute h-screen inset-0 z-back fixed">
        <Image
          className="w-full h-full object-cover opacity-60 top-0 fixed"
          src="/imgs/bg-ffa.jpg"
          alt="Frankfurt"
          width={2000}
          height={1000}
          priority
        />
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex flex-col pb-16 items-center">
          <h1
            className={`text-5xl font-bold text-center mb-12 ${secularOne.className}`}
          >
            Frankfurt CodeTalks
          </h1>
          <div className="mx-8 w-72 md:w-96 h-80">
            <CodeAnimationViewer
              code={codeList[codeOrderNo].code}
              language={codeList[codeOrderNo].language}
              onFinish={handleCodeFinish}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
