import React from "react";

function AboutUs() {
  return (
    <div className="max-w-2xl mx-auto my-4 p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Một chiếc CV tốt - bắt đầu từ BetterCV
      </h1>
      <div className="my-2">
        <p className="my-1">
          BetterCV là nền tảng tạo CV trực tuyến thông minh, giúp bạn thiết kế
          hồ sơ xin việc chuyên nghiệp, đẹp mắt và chuẩn nhà tuyển dụng chỉ
          trong vài phút.
        </p>
        <p className="my-1">
          Với sự hỗ trợ của AI, BetterCV không chỉ giúp bạn chọn mẫu phù hợp mà
          còn gợi ý nội dung, tối ưu kỹ năng và so sánh CV với mô tả công việc
          (JD), từ đó gia tăng cơ hội được gọi phỏng vấn.
        </p>
      </div>
      <ul className="my-6 space-y-4 text-base">
        <li className="flex items-start gap-2">
          <span className="text-2xl">👉</span>
          <span>
            <span className="font-bold">
              Không thu phí ẩn, không watermark, không bất ngờ
            </span>{" "}
            khi tải CV của bạn
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-2xl">👉</span>
          <span>
            <span className="font-bold">CV đầu tiên luôn miễn phí</span>, truy
            cập đầy đủ mọi tính năng thiết kế
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-2xl">👉</span>
          <span>
            Bạn chỉ trả phí nếu muốn quản lý nhiều phiên bản CV hoặc mở khóa các
            tính năng AI nâng cao
          </span>
        </li>
      </ul>
      <p className="mt-6 text-base text-gray-700">
        BetterCV được xây dựng để hỗ trợ thành công nghề nghiệp của bạn — không
        phải để tối đa hóa lợi nhuận.
      </p>

      {/* Đoạn mới thêm vào dưới cùng */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          Vì sao BetterCV khác biệt?
        </h2>
        <p className="mb-4 text-base">
          Không giống các công cụ thiết kế đa năng như Canva, Word hay Adobe,
          BetterCV được xây dựng chuyên biệt cho{" "}
          <span className="font-bold">tạo CV xin việc</span> — không phải cho
          thuyết trình, poster hay tài liệu marketing. Điều đó có nghĩa là:
        </p>
        <ul className="space-y-3 text-base">
          <li className="flex items-start gap-2">
            <span className="text-2xl text-green-500">✅</span>
            <span>
              Hướng dẫn từng bước giúp bạn biết nên viết gì cho từng mục
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-2xl text-green-500">✅</span>
            <span>Mẫu CV tuân theo chuẩn nhà tuyển dụng</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-2xl text-green-500">✅</span>
            <span>
              Tự do chỉnh sửa thiết kế mà vẫn đảm bảo dễ đọc, chuyên nghiệp
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-2xl text-green-500">✅</span>
            <span>Không cần kỹ năng thiết kế hay công nghệ</span>
          </li>
        </ul>
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Let Get Started
          </h2>
          <p className="mb-6 text-lg text-gray-800">
            Chúng tôi ở đây để giúp bạn tìm được công việc tiếp theo với ít áp
            lực hơn và nhiều tự tin hơn.
          </p>
          <a
            href="/cv-builder"
            className="inline-flex items-center gap-2 bg-[#20124d] hover:bg-[#3a2d7d] text-white font-semibold text-lg px-8 py-4 rounded-xl shadow transition mb-2"
          >
            <span className="text-2xl">👉</span>
            <span>Bắt đầu tạo CV của bạn</span>
          </a>
          <div className="mt-2 italic text-gray-500 text-base">
            Miễn phí, nhanh chóng và bạn toàn quyền sở hữu CV của mình.
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Bạn muốn hợp tác?
            </h2>
            <p className="text-base text-gray-800">
              Bạn là chuyên gia hướng nghiệp, influencer, nền tảng tuyển dụng
              hoặc đối tác muốn hỗ trợ người tìm việc? BetterCV luôn sẵn sàng
              hợp tác ý nghĩa cùng bạn.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
