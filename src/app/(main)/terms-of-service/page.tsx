import React from "react";

function Term() {
  return (
    <div className="max-w-3xl mx-auto my-8 p-6 bg-white rounded shadow text-gray-800">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Điều khoản sử dụng BetterCV
      </h1>
      <p className="mb-4">
        Chào mừng bạn đến với BetterCV! Khi sử dụng nền tảng của chúng tôi, bạn
        đồng ý với các điều khoản dưới đây. Vui lòng đọc kỹ để đảm bảo quyền lợi
        của bạn.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">1. Sử dụng dịch vụ</h2>
      <ul className="list-disc list-inside space-y-1 mb-4">
        <li>
          BetterCV cung cấp công cụ tạo, chỉnh sửa và lưu trữ CV trực tuyến cho
          mục đích cá nhân và nghề nghiệp.
        </li>
        <li>
          Bạn cam kết cung cấp thông tin chính xác, không sử dụng dịch vụ cho
          mục đích vi phạm pháp luật hoặc gây hại cho người khác.
        </li>
      </ul>

      <h2 className="text-lg font-semibold mt-6 mb-2">
        2. Quyền sở hữu nội dung
      </h2>
      <ul className="list-disc list-inside space-y-1 mb-4">
        <li>
          Bạn giữ toàn quyền sở hữu đối với nội dung CV do bạn tạo ra trên
          BetterCV.
        </li>
        <li>
          BetterCV không sử dụng, chia sẻ hoặc bán dữ liệu cá nhân, nội dung CV
          của bạn cho bên thứ ba mà không có sự đồng ý của bạn.
        </li>
      </ul>

      <h2 className="text-lg font-semibold mt-6 mb-2">3. Quyền riêng tư</h2>
      <ul className="list-disc list-inside space-y-1 mb-4">
        <li>
          Chúng tôi cam kết bảo mật thông tin cá nhân và tuân thủ các quy định
          về bảo vệ dữ liệu.
        </li>
        <li>Bạn có thể yêu cầu xóa tài khoản và dữ liệu bất cứ lúc nào.</li>
      </ul>

      <h2 className="text-lg font-semibold mt-6 mb-2">
        4. Trách nhiệm người dùng
      </h2>
      <ul className="list-disc list-inside space-y-1 mb-4">
        <li>
          Bạn chịu trách nhiệm về nội dung đăng tải, chỉnh sửa và chia sẻ trên
          BetterCV.
        </li>
        <li>
          Không đăng tải nội dung vi phạm pháp luật, bản quyền, hoặc thông tin
          sai sự thật.
        </li>
      </ul>

      <h2 className="text-lg font-semibold mt-6 mb-2">
        5. Thay đổi điều khoản
      </h2>
      <ul className="list-disc list-inside space-y-1 mb-4">
        <li>
          BetterCV có thể cập nhật điều khoản sử dụng bất cứ lúc nào. Thông báo
          sẽ được gửi tới người dùng khi có thay đổi quan trọng.
        </li>
      </ul>

      <p className="mt-6 text-sm text-gray-600">
        Nếu bạn có bất kỳ câu hỏi nào về điều khoản sử dụng, vui lòng liên hệ
        với chúng tôi qua email hỗ trợ trên trang chủ.
      </p>
    </div>
  );
}

export default Term;
