"use client";

import { Secular_One } from "next/font/google";
import Button from "../Button";

const secularOne = Secular_One({
  subsets: ["latin"],
  weight: ["400"],
});

const JoinUsSection = () => {
  const openLink = (link: string) => () => {
    window.open(link, "_blank");
  };

  return (
    <div className="bg-white h-96 flex items-center justify-center flex-col">
      <h1 className={`text-4xl font-medium mb-4 ${secularOne.className}`}>
        Join Us
      </h1>
      <p className="text-gray-500 text-center">
        Join our programming Meetup if you live near Frankfurt and are
        interested in coding.
      </p>
      <div className="flex gap-2 mt-8 flex-col md:flex-row">
        <Button
          className="w-60"
          color="yellow"
          onClick={openLink("https://open.kakao.com/o/g5kt2Fbf")}
        >
          Kakao Group Chat
        </Button>
        <Button
          className="w-60"
          color="gray"
          onClick={openLink(
            "https://join.slack.com/t/frankfurtcodetalks/shared_invite/zt-1ukuo1dgm-BuVrNjAz7yX~qJyHegNSQw"
          )}
        >
          Slack
        </Button>
      </div>
    </div>
  );
};

export default JoinUsSection;
