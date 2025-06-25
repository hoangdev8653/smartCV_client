import React from "react";

function Contact() {
  return (
    <div className="max-w-xl mx-auto my-10 p-6 bg-white rounded shadow text-gray-800">
      <h1 className="text-2xl font-bold mb-4 text-center text-[#20124d]">
        Liên hệ BetterCV
      </h1>
      <p className="mb-6 text-center text-gray-600">
        Nếu bạn có câu hỏi, góp ý hoặc cần hỗ trợ, hãy liên hệ với chúng tôi qua
        form dưới đây hoặc qua email hỗ trợ.
      </p>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold" htmlFor="name">
            Họ và tên
          </label>
          <input
            id="name"
            type="text"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#20124d]"
            placeholder="Nhập họ và tên"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#20124d]"
            placeholder="Nhập email của bạn"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold" htmlFor="message">
            Nội dung
          </label>
          <textarea
            id="message"
            rows={5}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#20124d]"
            placeholder="Nhập nội dung liên hệ..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-[#20124d] text-white font-semibold py-2 rounded hover:bg-[#3a2d7d] transition"
        >
          Gửi liên hệ
        </button>
      </form>
      <div className="mt-8 text-center text-gray-600 text-sm">
        Hoặc gửi email về:{" "}
        <a
          href="mailto:support@bettercv.vn"
          className="text-[#20124d] underline font-semibold"
        >
          support@bettercv.vn
        </a>
      </div>
    </div>
  );
}

export default Contact;
