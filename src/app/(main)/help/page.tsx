import React from "react";

function Help() {
  return (
    <div className="max-w-2xl mx-auto my-10 p-6 bg-white rounded shadow text-gray-800">
      <h1 className="text-2xl font-bold mb-4 text-center text-[#20124d]">
        Hướng dẫn & Hỗ trợ BetterCV
      </h1>
      <p className="mb-6 text-center text-gray-600">
        Dưới đây là các câu hỏi thường gặp và hướng dẫn sử dụng nền tảng
        BetterCV.
      </p>
      <div className="space-y-6">
        <div>
          <h2 className="font-semibold text-lg mb-2">
            1. Làm thế nào để tạo CV mới?
          </h2>
          <p>
            Bạn chỉ cần đăng nhập, chọn mẫu CV yêu thích và điền thông tin cá
            nhân, học vấn, kinh nghiệm... Sau đó nhấn Lưu hoặc Tải về để xuất
            file PDF.
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-lg mb-2">
            2. Tôi có thể chỉnh sửa CV sau khi đã tạo không?
          </h2>
          <p>
            Có. Bạn có thể vào mục Quản lý CV, chọn CV muốn chỉnh sửa, cập nhật
            thông tin và lưu lại bất cứ lúc nào.
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-lg mb-2">
            3. BetterCV có miễn phí không?
          </h2>
          <p>
            CV đầu tiên luôn miễn phí với đầy đủ tính năng. Bạn chỉ trả phí nếu
            muốn tạo nhiều CV hoặc sử dụng các tính năng AI nâng cao.
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-lg mb-2">
            4. Tôi gặp lỗi hoặc cần hỗ trợ thì làm thế nào?
          </h2>
          <p>
            Bạn có thể gửi phản hồi qua trang{" "}
            <a href="/contact" className="text-[#20124d] underline">
              Liên hệ
            </a>{" "}
            hoặc email{" "}
            <a
              href="mailto:support@bettercv.vn"
              className="text-[#20124d] underline"
            >
              support@bettercv.vn
            </a>
            . Đội ngũ BetterCV sẽ hỗ trợ bạn sớm nhất.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Help;
