import React from "react";

export default function CvSimple() {
  return (
    <div className="my-8 flex w-[800px] mx-auto bg-[#f4f6f8] min-h-screen font-sans shadow-lg">
      {/* Left Sidebar */}
      <div className="w-1/3 bg-[#e5e7eb] p-8 flex flex-col">
        <div>
          <h1 className="text-2xl font-bold tracking-wide mb-1 text-black">
            Robyn
            <br />
            Kingsley
          </h1>
          <div className="text-xs text-gray-700 mb-2">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-orange-500 rounded-full"></span>
              <span>UX/UI DESIGNER</span>
            </div>
            <div className="ml-4">
              PRODUCT DESIGNER
              <br />
              UX RESEARCHER
            </div>
          </div>
          <div className="flex items-center text-xs text-gray-500 mb-2 mt-2">
            <svg
              className="w-4 h-4 mr-1 inline"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M17.657 16.657L13.414 12.414a4 4 0 1 0-5.657 5.657l4.243 4.243a8 8 0 1 1 5.657-5.657z" />
            </svg>
            Berlin, Germany
          </div>
        </div>
        {/* EDUCATION */}
        <div className="mt-2">
          <h2 className="text-xs font-bold tracking-widest text-gray-700 mb-2">
            EDUCATION
          </h2>
          <div className="border-b border-gray-400 mb-2"></div>
          <div className="mb-2">
            <div className="font-semibold text-sm text-black">Course</div>
            <div className="text-xs text-gray-500">University</div>
            <div className="text-xs text-gray-400">2016 – 2018</div>
            <div className="text-xs text-gray-600 mt-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus
              commodo viverra maecenas accumsan lacus. Sed lectus vestibulum
              mattis ullamcorper velit sed ullamcorper.
            </div>
          </div>
        </div>
        {/* SKILLS */}
        <div className="mt-2">
          <h2 className="text-xs font-bold tracking-widest text-gray-700 mb-2">
            SKILLS
          </h2>
          <div className="border-b border-gray-400 mb-2"></div>
          <ul className="list-disc list-inside text-xs text-gray-700 space-y-1">
            <li>User experience</li>
            <li>User interface</li>
            <li>App design</li>
            <li>Adaptive web design</li>
            <li>Product design</li>
            <li>Design system</li>
            <li>CSS</li>
            <li>AB testing</li>
            <li>User research</li>
          </ul>
        </div>
        <div className="mt-4">
          <h2 className="text-xs font-bold tracking-widest text-gray-700 mb-2">
            LANGUAGES
          </h2>
          <div className="border-b border-gray-400 mb-2 w-1/5"></div>
          <ul className="list-disc list-inside text-xs text-gray-700 space-y-1">
            <li>
              English <span className="text-gray-400 ml-2">Fluent</span>
            </li>
            <li>
              German <span className="text-gray-400 ml-2">Intermediate</span>
            </li>
            <li>
              French <span className="text-gray-400 ml-2">Basic</span>
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <h2 className="text-xs font-bold tracking-widest text-gray-700 mb-2">
            CERTIFICATES
          </h2>
          <div className="border-b border-gray-400 mb-2"></div>
          <ul className="list-disc list-inside text-xs text-gray-700 space-y-1">
            <li>
              Google UX Design Certificate
              <span className="block text-gray-400 ml-2">Coursera, 2022</span>
            </li>
            <li>
              TOEIC 900+
              <span className="block text-gray-400 ml-2">
                IIG Vietnam, 2021
              </span>
            </li>
            <li>
              React Developer Certificate
              <span className="block text-gray-400 ml-2">Udemy, 2023</span>
            </li>
          </ul>
        </div>
      </div>
      {/* Main Content */}
      <div className="w-2/3 p-8 flex flex-col">
        {/* Avatar & Contact */}
        <div className="flex items-center gap-6 mb-6">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="avatar"
            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow"
          />
          <div className="text-xs text-gray-700 space-y-1">
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
                <path d="M12 14v7m0 0H9m3 0h3" />
              </svg>
              hi.robyn.kingsley@mail.com
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M3 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5zm16 0a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V5z" />
              </svg>
              +88 533 000 250
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M16 8a6 6 0 1 1-12 0 6 6 0 0 1 12 0z" />
                <path d="M2 20h20" />
              </svg>
              www.linkedin.com/in/robynkingsley
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M16 8a6 6 0 1 1-12 0 6 6 0 0 1 12 0z" />
              </svg>
              www.behance.net/robynkingsley
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12h8M12 8v8" />
              </svg>
              dribbble.com/robyn_kingsley
            </div>
          </div>
        </div>
        {/* PROFILE */}
        <div className="mb-6">
          <h2 className="text-xs font-bold tracking-widest text-gray-700 mb-2">
            PROFILE
          </h2>
          <div className="border-b border-gray-400 mb-2"></div>
          <p className="text-xs text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus
            commodo viverra maecenas accumsan lacus. Sed lectus vestibulum
            mattis ullamcorper velit sed ullamcorper.
          </p>
        </div>
        {/* PROJECTS */}
        <div>
          <h2 className="text-xs font-bold tracking-widest text-gray-700 mb-2">
            PROJECTS
          </h2>
          <div className="border-b border-gray-400 mb-2"></div>
          <div className="mb-4">
            <div className="font-semibold text-sm">SmartCV Platform</div>
            <div className="text-xs text-gray-500">2023 – present</div>
            <div className="text-xs text-gray-700 mt-1">
              Xây dựng nền tảng tạo CV thông minh, hỗ trợ nhiều template, xuất
              PDF, đăng nhập OAuth.
            </div>
            <ul className="list-disc list-inside text-xs text-gray-700 mt-2 space-y-1">
              <li>Thiết kế UI/UX hiện đại, responsive</li>
              <li>Tích hợp Next.js, Tailwind CSS, NextAuth</li>
              <li>Triển khai trên Vercel</li>
            </ul>
          </div>
          <div className="mb-4">
            <div className="font-semibold text-sm">E-commerce Website</div>
            <div className="text-xs text-gray-500">2022</div>
            <div className="text-xs text-gray-700 mt-1">
              Phát triển website bán hàng với React, Node.js, MongoDB.
            </div>
            <ul className="list-disc list-inside text-xs text-gray-700 mt-2 space-y-1">
              <li>Chức năng giỏ hàng, thanh toán, quản lý đơn hàng</li>
              <li>Đăng nhập bằng Google, Facebook</li>
            </ul>
          </div>
        </div>
        {/* EXPERIENCE */}
        <div>
          <h2 className="text-xs font-bold tracking-widest text-gray-700 mb-2">
            EXPERIENCE
          </h2>
          <div className="border-b border-gray-400 mb-2"></div>
          <div className="mb-4">
            <div className="font-semibold text-sm">Job position</div>
            <div className="text-xs text-gray-500">
              Company, Country{" "}
              <span className="float-right text-gray-400">2021 – present</span>
            </div>
            <div className="text-xs text-gray-700 mt-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus
              commodo viverra maecenas accumsan lacus. Sed lectus vestibulum
              mattis ullamcorper velit sed ullamcorper. Purus ut faucibus
              pulvinar elementum. Eget aliquet nibh praesent tristique magna
              sit.
            </div>
            <ul className="list-disc list-inside text-xs text-gray-700 mt-2 space-y-1">
              <li>Unique experience highlight</li>
              <li>Unique experience highlight</li>
              <li>Unique experience highlight</li>
            </ul>
          </div>
          {/* Repeat for more jobs */}
          <div className="mb-4">
            <div className="font-semibold text-sm">Job position</div>
            <div className="text-xs text-gray-500">
              Company, Country{" "}
              <span className="float-right text-gray-400">2021 – present</span>
            </div>
            <div className="text-xs text-gray-700 mt-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus
              commodo viverra maecenas accumsan lacus.
            </div>
            <ul className="list-disc list-inside text-xs text-gray-700 mt-2 space-y-1">
              <li>Unique experience highlight</li>
              <li>Unique experience highlight</li>
              <li>Unique experience highlight</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
