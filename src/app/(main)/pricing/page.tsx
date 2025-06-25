import React from "react";

function Pricing() {
  return (
    <div className="max-w-3xl mx-auto my-10 p-6 bg-white rounded shadow text-gray-800">
      <h1 className="text-3xl font-bold mb-2 text-center text-[#20124d]">
        Bảng giá BetterCV
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Chọn gói phù hợp để tối ưu hóa trải nghiệm tạo CV của bạn. CV đầu tiên
        luôn miễn phí!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Free Plan */}
        <div className="border rounded-lg p-6 flex flex-col items-center shadow-sm">
          <h2 className="text-xl font-bold mb-2 text-[#20124d]">Miễn phí</h2>
          <div className="text-3xl font-bold mb-2">0₫</div>
          <ul className="text-sm text-gray-700 mb-4 space-y-2">
            <li>✔️ Tạo 1 CV cơ bản</li>
            <li>✔️ Không watermark</li>
            <li>✔️ Tải CV PDF chất lượng cao</li>
            <li>✔️ Sử dụng tất cả mẫu thiết kế</li>
          </ul>
          <button className="bg-[#20124d] text-white px-6 py-2 rounded font-semibold mt-auto">
            Bắt đầu miễn phí
          </button>
        </div>
        {/* Pro Plan */}
        <div className="border-2 border-[#20124d] rounded-lg p-6 flex flex-col items-center shadow-lg bg-[#f4f6fa]">
          <h2 className="text-xl font-bold mb-2 text-[#20124d]">Pro</h2>
          <div className="text-3xl font-bold mb-2">49.000₫/tháng</div>
          <ul className="text-sm text-gray-700 mb-4 space-y-2">
            <li>✔️ Tạo & quản lý nhiều CV</li>
            <li>✔️ Gợi ý nội dung bằng AI</li>
            <li>✔️ So sánh CV với JD</li>
            <li>✔️ Ưu tiên hỗ trợ khách hàng</li>
            <li>✔️ Không quảng cáo</li>
          </ul>
          <button className="bg-[#20124d] text-white px-6 py-2 rounded font-semibold mt-auto">
            Nâng cấp Pro
          </button>
        </div>
        {/* Enterprise Plan */}
        <div className="border rounded-lg p-6 flex flex-col items-center shadow-sm">
          <h2 className="text-xl font-bold mb-2 text-[#20124d]">
            Doanh nghiệp
          </h2>
          <div className="text-3xl font-bold mb-2">Liên hệ</div>
          <ul className="text-sm text-gray-700 mb-4 space-y-2">
            <li>✔️ Quản lý & đánh giá nhiều hồ sơ</li>
            <li>✔️ Tích hợp API tuyển dụng</li>
            <li>✔️ Tùy chỉnh tính năng theo nhu cầu</li>
            <li>✔️ Hỗ trợ triển khai riêng</li>
          </ul>
          <button className="bg-[#20124d] text-white px-6 py-2 rounded font-semibold mt-auto">
            Liên hệ tư vấn
          </button>
        </div>
      </div>
      <p className="text-center text-gray-500 text-sm mt-8">
        Mọi gói đều đảm bảo bảo mật dữ liệu và quyền sở hữu CV của bạn.
      </p>
    </div>
  );
}

export default Pricing;
