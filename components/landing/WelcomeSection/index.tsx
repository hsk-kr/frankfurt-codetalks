"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faDumbbell,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";

const WelcomeSection = () => {
  return (
    <div className="py-16 min-h-screen bg-white flex justify-center items-center">
      <div>
        <h1 className="text-center text-4xl mb-16 font-medium mx-4">
          Welcome to Frankfurt CodeTalks
        </h1>
        <div className="flex justify-between items-center md:items-normal flex-col md:flex-row mx-8 gap-y-5 gap-x-12">
          <div className="max-w-xs border border-gray-300 p-4 flex flex-col items-center justify-center h-80 hover:bg-green-300 transition group">
            <FontAwesomeIcon
              icon={faDumbbell}
              className="w-8 h-8 mb-4 text-green-600"
            />
            <h2 className="text-xl font-medium mb-4 transition group-hover:text-slate-100">
              Self Development
            </h2>
            <p className="text-center text-gray-500">
              Our programming study group is focused on helping you grow both
              personally and professionally.
            </p>
          </div>
          <div className="max-w-xs border border-gray-300 p-4 flex flex-col items-center justify-center h-80 hover:bg-green-300 transition group">
            <FontAwesomeIcon
              icon={faBook}
              className="w-8 h-8 mb-4 text-green-600"
            />
            <h2 className="text-xl font-medium mb-4 transition group-hover:text-slate-100">
              Study Together
            </h2>
            <p className="text-center text-gray-500">
              Our group offers a collaborative approach to learning programming,
              where members can work together to solve problems and share
              resources.
            </p>
          </div>
          <div className="max-w-xs border border-gray-300 p-4 flex flex-col items-center justify-center h-80 hover:bg-green-300 transition group">
            <FontAwesomeIcon
              icon={faPeopleGroup}
              className="w-8 h-8 mb-4 text-green-600"
            />
            <h2 className="text-xl font-medium mb-4 transition group-hover:text-slate-100">
              Community
            </h2>
            <p className="text-center text-gray-500">
              Join our programming study group and become part of a welcoming
              and inclusive community of like-minded individuals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
