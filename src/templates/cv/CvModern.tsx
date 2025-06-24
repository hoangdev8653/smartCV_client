import React from "react";

export default function CvModern() {
  return (
    <div className="flex w-[800px] my-8 mx-auto bg-white min-h-screen font-sans shadow-lg">
      {/* Left Sidebar */}
      <div className="w-1/3 bg-[#f6f7f9] p-8 flex flex-col border-r border-gray-200">
        {/* Personal Info */}
        <div className="flex flex-col items-center mb-8">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="avatar"
            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow mb-4"
          />
          <h1 className="text-2xl font-bold text-gray-800 text-center leading-tight">
            Mónica Fidalgo
          </h1>
          <div className="text-lg text-blue-500 font-semibold text-center mb-2">
            Frontend Developer
          </div>
          <div className="text-xs text-gray-600 flex flex-col gap-1 items-center">
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-blue-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
                <path d="M12 14v7m0 0H9m3 0h3" />
              </svg>
              yourmail@gmail.com
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-blue-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M3 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5zm16 0a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V5z" />
              </svg>
              +351 919999999
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-blue-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M17.657 16.657L13.414 12.414a4 4 0 1 0-5.657 5.657l4.243 4.243a8 8 0 1 1 5.657-5.657z" />
              </svg>
              Lisbon, Portugal
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-blue-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M16 8a6 6 0 1 1-12 0 6 6 0 0 1 12 0z" />
                <path d="M2 20h20" />
              </svg>
              <a
                href="https://linkedin.com/in/yourlinkedin/"
                className="text-blue-500 hover:underline"
              >
                linkedin.com/in/yourlinkedin/
              </a>
            </div>
          </div>
        </div>
        {/* PROFILE / SUMMARY */}
        <div className="mb-8">
          <h2 className="text-xs font-bold tracking-widest text-gray-700 mb-2">
            SUMMARY
          </h2>
          <div className="border-b border-gray-300 mb-2"></div>
          <p className="text-xs text-gray-700">
            Frontend developer with special care on the user experience.
            Passionate for learning new technologies and methodologies.
          </p>
        </div>
        {/* SKILLS */}
        <div className="mb-8">
          <h2 className="text-xs font-bold tracking-widest text-gray-700 mb-2">
            SKILLS
          </h2>
          <div className="border-b border-gray-300 mb-2"></div>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
              HTML
            </span>
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
              CSS/CSS3
            </span>
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
              SASS/SCSS
            </span>
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
              LESS
            </span>
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
              JavaScript
            </span>
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
              Vue.js
            </span>
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
              Bootstrap 4
            </span>
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
              jQuery
            </span>
          </div>
        </div>
        {/* LANGUAGES */}
        <div className="mb-8">
          <h2 className="text-xs font-bold tracking-widest text-gray-700 mb-2">
            LANGUAGES
          </h2>
          <div className="border-b border-gray-300 mb-2"></div>
          <ul className="list-disc list-inside text-xs text-gray-700 space-y-1">
            <li>
              Portuguese <span className="text-gray-400 ml-2">Native</span>
            </li>
            <li>
              English <span className="text-gray-400 ml-2">Proficient</span>
            </li>
          </ul>
        </div>
        {/* CERTIFICATES */}
        <div className="mb-8">
          <h2 className="text-xs font-bold tracking-widest text-gray-700 mb-2">
            CERTIFICATES
          </h2>
          <div className="border-b border-gray-300 mb-2"></div>
          <ul className="list-disc list-inside text-xs text-gray-700 space-y-1">
            <li>Responsive Web Design - freeCodeCamp, 2019</li>
            <li>Frontend Developer - Lisbon School of Design, 2018</li>
          </ul>
        </div>
      </div>
      {/* Main Content */}
      <div className="w-2/3 p-10 flex flex-col">
        {/* EXPERIENCE */}
        <div className="mb-8">
          <h2 className="text-xs font-bold tracking-widest text-gray-700 mb-2">
            EXPERIENCE
          </h2>
          <div className="border-b border-gray-300 mb-2"></div>
          <div className="mb-4">
            <div className="font-bold text-base text-gray-800">
              Frontend Developer{" "}
              <span className="font-normal text-gray-600">Evident</span>
            </div>
            <div className="text-xs text-gray-500 mb-1">
              Feb 2019 - Present, Lisbon
            </div>
            <ul className="list-disc list-inside text-xs text-gray-700 space-y-1">
              <li>
                Build a new web app with Vue.js in the Frontend, taking close
                attention to write well maintained code from the beginning
              </li>
              <li>
                Directly collaborated with Product Owner to work on the website
                redesign, actively giving suggestions for an improvement of UI
                and UX experience
              </li>
              <li>
                Launch of a website using the e-commerce platform, Intershop.
                All the FE was customized to attend to the client business. New
                features were developed to meet the user needs
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <div className="font-bold text-base text-gray-800">
              Frontend Developer{" "}
              <span className="font-normal text-gray-600">
                Accenture Portugal
              </span>
            </div>
            <div className="text-xs text-gray-500 mb-1">
              Sep 2018 - Jan 2019, Lisbon
            </div>
            <ul className="list-disc list-inside text-xs text-gray-700 space-y-1">
              <li>
                Worked together with the CRO and marketing team in order to
                develop of A/B testing using mainly Google Optimize code editor,
                JavaScript and CSS3.
              </li>
            </ul>
          </div>
        </div>
        {/* EDUCATION */}
        <div className="mb-8">
          <h2 className="text-xs font-bold tracking-widest text-gray-700 mb-2">
            EDUCATION
          </h2>
          <div className="border-b border-gray-300 mb-2"></div>
          <div className="mb-4">
            <div className="font-bold text-sm text-gray-800">
              Responsive Web Design
            </div>
            <div className="text-xs text-blue-600 font-semibold">
              freeCodeCamp
            </div>
            <div className="text-xs text-gray-500">2019, Lisbon</div>
          </div>
          <div className="mb-4">
            <div className="font-bold text-sm text-gray-800">
              Web Design & Frontend Develop
            </div>
            <div className="text-xs text-blue-600 font-semibold">
              Lisbon School of Design
            </div>
            <div className="text-xs text-gray-500">2017 - 2018, Lisbon</div>
          </div>
        </div>
        {/* PROJECTS */}
        <div className="mb-8">
          <h2 className="text-xs font-bold tracking-widest text-gray-700 mb-2">
            PROJECTS
          </h2>
          <div className="border-b border-gray-300 mb-2"></div>
          <div className="mb-4">
            <div className="font-bold text-sm text-gray-800">
              SmartCV Platform
            </div>
            <div className="text-xs text-gray-500">2023 – present</div>
            <div className="text-xs text-gray-700 mt-1">
              Xây dựng nền tảng tạo CV thông minh, hỗ trợ nhiều template, xuất
              PDF, đăng nhập OAuth.
            </div>
          </div>
          <div className="mb-4">
            <div className="font-bold text-sm text-gray-800">
              E-commerce Website
            </div>
            <div className="text-xs text-gray-500">2022</div>
            <div className="text-xs text-gray-700 mt-1">
              Phát triển website bán hàng với React, Node.js, MongoDB.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
