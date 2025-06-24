import React from "react";

export default function CvClassic() {
  return (
    <div className="w-[800px] mx-auto bg-white shadow   text-[15px] text-gray-400 my-4">
      <div className="flex flex-col items-center mb-6 ">
        <h1 className="text-xl font-bold tracking-wide my-1">Đặng Ngọc Linh</h1>
        <div className="text-xs text-gray-700 font-semibold mb-2 ">
          Nhân viên tư vấn
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-gray-700 text-sm mb-1">
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M22 16.92V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2.08a2 2 0 0 1 .84-1.63l8-5.2a2 2 0 0 1 2.32 0l8 5.2a2 2 0 0 1 .84 1.63z" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            0123 456 789
          </div>
          <div className="flex items-center gap-1">
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
            tech.growth@topcv.vn
          </div>
          <div className="flex items-center gap-1">
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
            be.net/tencuaban
          </div>
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M17.657 16.657L13.414 12.414a4 4 0 1 0-5.657 5.657l4.243 4.243a8 8 0 1 1 5.657-5.657z" />
            </svg>
            Hoàng Mai, Hà Nội
          </div>
        </div>
      </div>
      <div
        className="px-2  border-b-2 border-black uppercase text-[14px] mb-2 mt-4 pb-2"
        title="MỤC TIÊU NGHỀ NGHIỆP"
      >
        <p>
          Tôi mong muốn ứng tuyển vào vị trí Tổng đài viên Chăm sóc khách hàng
          để tận dụng 3 năm kinh nghiệm xử lý yêu cầu và phản hồi khách hàng
          chuyên nghiệp, cùng với khả năng giao tiếp tiếng Anh tốt và tinh thần
          làm việc năng động, linh hoạt. Mục tiêu của tôi là không ngừng nâng
          cao trải nghiệm khách hàng, góp phần xây dựng hình ảnh chuyên nghiệp
          và thân thiện cho doanh nghiệp.
        </p>
      </div>

      <div className="px-3" title="HỌC VẤN">
        <div>
          <div className="font-semibold">
            ĐH TopCV <span className="float-right">2016 - 2020</span>
          </div>
          <div>Quản trị kinh doanh</div>
          <div className="text-gray-600">Tốt nghiệp loại Giỏi</div>
        </div>
      </div>

      <div className="px-3" title="KINH NGHIỆM LÀM VIỆC">
        <div>
          <div className="font-semibold">
            SVT Finance Innovation Co.{" "}
            <span className="float-right">08/2020 - Nay</span>
          </div>
          <div className="font-semibold mt-1">
            Tổng Đài Viên Chăm Sóc Khách Hàng
          </div>
          <ul className="list-disc list-inside ml-4 mt-1">
            <li>
              Tiếp nhận và giải đáp thắc mắc của phụ huynh liên quan đến khóa
              học, lịch học, học phí, chính sách hoàn trả qua điện thoại, Zalo
              và email.
            </li>
            <li>
              Gọi điện nhắc lịch học, lịch kiểm tra, lịch đóng phí và tư vấn các
              chương trình ưu đãi mới phù hợp với từng nhóm học viên.
            </li>
            <li>
              Phối hợp với bộ phận học vụ và giáo viên để xử lý các phản hồi từ
              phụ huynh về chất lượng giảng dạy hoặc tiến độ học tập của học
              viên.
            </li>
            <li>
              Theo dõi mức độ hài lòng của phụ huynh, ghi nhận các phản hồi và
              đề xuất cải thiện trải nghiệm dịch vụ.
            </li>
            <li>
              Cập nhật và quản lý thông tin khách hàng trên hệ thống CRM, đảm
              bảo dữ liệu đầy đủ, chính xác và dễ truy xuất.
            </li>
            <li>
              Thành tích: Duy trì tỷ lệ hài lòng của phụ huynh trên 95% trong 12
              tháng liên tiếp (dựa trên khảo sát nội bộ sau khóa học).
            </li>
          </ul>
        </div>
      </div>

      <div className="px-3" title="KỸ NĂNG">
        <table className="w-full text-[15px]">
          <tbody>
            <tr className="border-b border-gray-400">
              <td className="py-1 font-semibold w-1/2">Kỹ năng giao tiếp</td>
              <td className="py-1">
                Thành thạo trong việc lắng nghe, truyền đạt thông tin rõ ràng và
                thuyết phục
              </td>
            </tr>
            <tr className="border-b border-gray-400">
              <td className="py-1 font-semibold">
                Phân tích và giải quyết vấn đề
              </td>
              <td className="py-1">
                Có khả năng phân tích nhu cầu khách hàng, đánh giá tình huống và
                đề xuất các giải pháp
              </td>
            </tr>
            <tr>
              <td className="py-1 font-semibold">Thuyết phục và đàm phán</td>
              <td className="py-1">
                Thành thạo trong việc thuyết phục khách hàng và đàm phán để đạt
                được thỏa thuận đôi bên cùng có lợi
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="py-4">
        <div className="px-3" title="HOẠT ĐỘNG">
          <div>
            <div className="font-semibold">
              Câu lạc bộ Sự kiện, trường Đại học TopCV{" "}
              <span className="float-right">06/2016 - 09/2020</span>
            </div>
            <div className="font-semibold mt-1">Ban Sự Kiện</div>
            <ul className="list-disc list-inside ml-4 mt-1">
              <li>
                Xây dựng 5 sự kiện chào đón tân sinh viên với 5000 sinh viên
                tham gia.
              </li>
              <li>
                Hỗ trợ 500 tân sinh viên mỗi năm làm hồ sơ, tìm hiểu về nhà
                trường.
              </li>
              <li>Giao tiếp và hỗ trợ thông tin cho phụ huynh.</li>
            </ul>
          </div>
        </div>

        <div className="px-3" title="CHỨNG CHỈ">
          <ul className="list-disc list-inside ml-4">
            <li>
              Chương trình đào tạo: Kỹ Năng Bán Hàng Qua Điện Thoại{" "}
              <span className="float-right">2022</span>
            </li>
            <li>
              Đào tạo Quản Lý Chăm Sóc Khách Hàng Chuyên Nghiệp{" "}
              <span className="float-right">2021</span>
            </li>
          </ul>
        </div>

        <div className="px-3" title="DANH HIỆU VÀ GIẢI THƯỞNG">
          <ul className="list-disc list-inside ml-4">
            <li>
              Nhân viên xuất sắc quý 2 năm 2022 tại SVT Finance Innovation Co.
            </li>
            <li>Giải thưởng “Gương mặt tiêu biểu” CLB Sự kiện TopCV 2019</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
