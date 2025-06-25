import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#232946] text-white py-8 px-6 max-w-full mx-auto mt-12 shadow-lg">
      <div className="flex flex-col md:flex-row gap-10 mx-10 justify-between">
        {/* Left Section */}
        <div className="flex flex-wrap gap-12">
          {/* About */}
          <div>
            <h3 className="font-bold text-sm mb-3 tracking-widest">BETTERCV</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a href="#">Giới thiệu</a>
              </li>
              <li>
                <a href="#">Blog nghề nghiệp</a>
              </li>
              <li>
                <a href="#">Đối tác tuyển dụng</a>
              </li>
            </ul>
          </div>
          {/* Features */}
          <div>
            <h3 className="font-bold text-sm mb-3 tracking-widest">
              TÍNH NĂNG
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a href="#">Tạo CV chuyên nghiệp</a>
              </li>
              <li>
                <a href="#">Thư xin việc</a>
              </li>
              <li>
                <a href="#">Gợi ý từ AI</a>
              </li>
              <li>
                <a href="#">So sánh CV & JD</a>
              </li>
            </ul>
          </div>
          {/* Student Section */}
          <div>
            <h3 className="font-bold text-sm mb-3 tracking-widest">
              DÀNH CHO SINH VIÊN
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a href="#">Hướng dẫn tạo CV đầu tiên</a>
              </li>
              <li>
                <a href="#">Mẹo phỏng vấn</a>
              </li>
              <li>
                <a href="#">Kinh nghiệm thực tập</a>
              </li>
            </ul>
          </div>
          {/* Support */}
          <div>
            <h3 className="font-bold text-sm mb-3 tracking-widest">HỖ TRỢ</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a href="#">Câu hỏi thường gặp</a>
              </li>
              <li>
                <a href="#">Hướng dẫn sử dụng</a>
              </li>
              <li>
                <a href="#">Liên hệ</a>
              </li>
            </ul>
          </div>
          {/* Legal */}
          <div>
            <h3 className="font-bold text-sm mb-3 tracking-widest">PHÁP LÝ</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a href="#">Điều khoản sử dụng</a>
              </li>
              <li>
                <a href="#">Chính sách bảo mật</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-6">
          {/* Newsletter */}
          <div>
            <span className="block mb-2 text-sm">
              Nhận mẹo viết CV & cập nhật mới
            </span>
            <form className="flex">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="rounded-l-md px-3 py-2 text-gray-900 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#eebbc3] text-[#232946] font-semibold px-4 py-2 rounded-r-md hover:bg-[#ffd6e0] transition"
              >
                ĐĂNG KÝ
              </button>
            </form>
          </div>

          {/* Social Media */}
          <div>
            <span className="block mb-2 text-sm">Kết nối với chúng tôi</span>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-[#4267B2] p-2 rounded-md hover:scale-110 transition"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                className="bg-[#1DA1F2] p-2 rounded-md hover:scale-110 transition"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-2 rounded-md hover:scale-110 transition"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="bg-[#0077B5] p-2 rounded-md hover:scale-110 transition"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className=" text-center text-sm text-gray-400 border-t border-gray-600 py-4">
        © {new Date().getFullYear()} BetterCV. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
