import Image from "next/image";
import React from "react";

export default function Cva() {
  return (
    <div className="my-8 flex w-[800px] mx-auto bg-[#f4f6f8] min-h-screen font-sans shadow-lg text-black">
      {/* Left Sidebar */}
      <div className="w-1/3 bg-[#909399] p-8 flex flex-col font-bold text-white">
        <div className="my-2">
          <Image
            width={96}
            height={96}
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="avatar"
            className="w-40 h-40 object-cover border-3 shadow mx-auto border-yellow-500"
          />
        </div>
        <div className="mb-6">
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
        {/* SKILLS */}
        <div className="mb-6">
          <h2 className="text-xs font-bold tracking-widest  mb-2">SKILLS</h2>
          <div className="border-b border-gray-400 mb-2"></div>
          <ul className="list-disc list-inside text-xs  space-y-1">
            <li>Quản lý & phát triển nhân sự</li>
            <li>Xây dựng hệ thống quản trị nhân sự</li>
            <li>Kỹ năng lãnh đạo & giao tiếp</li>
            <li>Tin học văn phòng & phần mềm HRM</li>
          </ul>
        </div>
        {/* LANGUAGES */}
        <div className="mb-6">
          <h2 className="text-xs font-bold tracking-widest  mb-2">LANGUAGES</h2>
          <div className="border-b border-gray-400 mb-2 w-1/5"></div>
          <ul className="list-disc list-inside text-xs  space-y-1">
            <li>
              Tiếng Việt <span className=" ml-2">Bản ngữ</span>
            </li>
            <li>
              Tiếng Anh <span className=" ml-2">Khá</span>
            </li>
          </ul>
        </div>
        {/* CERTIFICATES */}
        <div className="mb-6">
          <h2 className="text-xs font-bold tracking-widest  mb-2">
            CERTIFICATES
          </h2>
          <div className="border-b border-gray-400 mb-2"></div>
          <ul className="list-disc list-inside text-xs  space-y-1">
            <li>
              Chứng chỉ Quản trị nhân sự chuyên nghiệp{" "}
              <span className="block  ml-2">2022</span>
            </li>
            <li>
              Chứng chỉ Tin học văn phòng{" "}
              <span className="block  ml-2">2021</span>
            </li>
          </ul>
        </div>
      </div>
      {/* Main Content */}
      <div className="w-2/3 p-8 flex flex-col">
        <div className="">
          <h1 className="text-2xl font-bold mb-2">Nguyễn Thị Mai</h1>
          <p className="text-sm text-gray-600 mb-4">
            Trưởng phòng Hành chính Nhân sự
          </p>
        </div>
        {/* PROFILE */}
        <div className="mb-6">
          <h2 className="text-xs font-bold tracking-widest text-gray-700 mb-2">
            PROFILE
          </h2>
          <div className="border-b border-gray-400 mb-2"></div>
          <p className="text-xs text-gray-700">
            Với hơn 5 năm kinh nghiệm tại các vị trí Quản lý phòng Hành chính
            Nhân sự, tôi đã xây dựng và tối ưu hệ thống quản trị nhân sự, nâng
            cao hiệu quả tuyển dụng, đào tạo và phát triển đội ngũ. Tôi có kinh
            nghiệm thiết kế chính sách lương – thưởng – phúc lợi, quản lý quan
            hệ lao động và xây dựng văn hóa doanh nghiệp. Mục tiêu của tôi trong
            2-3 năm tới là trở thành Giám đốc nhân sự, đóng góp vào chiến lược
            phát triển dài hạn, giúp doanh nghiệp thu hút và giữ chân nhân tài.
          </p>
        </div>
        {/* PROJECTS */}
        <div className="mb-6">
          <h2 className="text-xs font-bold tracking-widest text-gray-700 mb-2">
            PROJECTS
          </h2>
          <div className="border-b border-gray-400 mb-2"></div>
          <div className="mb-4">
            <div className="font-semibold text-sm">
              Xây dựng hệ thống quản trị nhân sự
            </div>
            <div className="text-xs text-gray-500">
              Công ty TNHH VTU, 2022 – Nay
            </div>
            <div className="text-xs text-gray-700 mt-1">
              Thiết lập quy trình, chính sách, quy chế nội bộ, đảm bảo tuân thủ
              luật lao động và phát triển nhân tài.
            </div>
          </div>
          <div className="mb-4">
            <div className="font-semibold text-sm">
              Tuyển dụng, đào tạo & tối ưu năng suất lao động
            </div>
            <div className="text-xs text-gray-500">
              Công ty TNHH VTU, 2022 – Nay
            </div>
            <div className="text-xs text-gray-700 mt-1">
              Trực tiếp tuyển dụng 50+ nhân sự cấp nhân viên và cấp cao trong
              vòng 3 năm, xây dựng lộ trình đào tạo cho các phòng ban, nâng cao
              năng suất lao động.
            </div>
          </div>
        </div>
        {/* EXPERIENCE */}
        <div className="mb-6">
          <h2 className="text-xs font-bold tracking-widest text-gray-700 mb-2">
            EXPERIENCE
          </h2>
          <div className="border-b border-gray-400 mb-2"></div>
          <div className="mb-4">
            <div className="font-semibold text-sm">
              Trưởng phòng Hành chính nhân sự
            </div>
            <div className="text-xs text-gray-500">
              Công ty TNHH VTU{" "}
              <span className="float-right ">11/2022 – Nay</span>
            </div>
            <div className="text-xs text-gray-700 mt-1 font-semibold">
              Chiến lược nhân sự & quản trị nhân sự
            </div>
            <ul className="list-disc list-inside text-xs text-gray-700 mt-1 space-y-1">
              <li>
                Tham mưu và triển khai chiến lược nhân sự, giúp công ty tăng
                trưởng nhân sự 30% trong 2 năm và duy trì tỷ lệ nghỉ việc dưới
                10%/năm
              </li>
              <li>
                Xây dựng hệ thống quản trị nhân sự, tuyển dụng, đào tạo và phát
                triển nhân tài
              </li>
              <li>
                Ban hành 15+ quy chế, chính sách, quy định nội bộ, đảm bảo tuân
                thủ pháp luật và nâng cao hiệu quả quản trị
              </li>
            </ul>
            <div className="text-xs text-gray-700 mt-2 font-semibold">
              Tuyển dụng, đào tạo & tối ưu năng suất lao động
            </div>
            <ul className="list-disc list-inside text-xs text-gray-700 mt-1 space-y-1">
              <li>
                Trực tiếp tuyển dụng 50+ nhân sự cấp nhân viên và cấp cao trong
                vòng 3 năm, đảm bảo chất lượng nguồn nhân lực
              </li>
              <li>
                Xây dựng lộ trình đào tạo cho các phòng ban, tổ chức đào tạo nội
                bộ, nâng cao kỹ năng và hiệu suất làm việc
              </li>
              <li>
                Triển khai hệ thống đánh giá KPI, giúp cải thiện hiệu suất làm
                việc trung bình 15%/năm
              </li>
            </ul>
          </div>
        </div>
        {/* EDUCATION */}
        <div className="mb-6">
          <h2 className="text-xs font-bold tracking-widest text-gray-700 mb-2">
            EDUCATION
          </h2>
          <div className="border-b border-gray-400 mb-2"></div>
          <div className="mb-2">
            <div className="font-semibold text-sm text-black">
              Chuyên ngành: quản trị nhân lực
              <span className="float-right text-gray-500">2012 – 2016</span>
            </div>
            <div className="text-xs text-gray-700">Đại học TopCV</div>
            <div className="text-xs text-gray-700">
              GPA: 3.5 - Tốt nghiệp loại Giỏi
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
