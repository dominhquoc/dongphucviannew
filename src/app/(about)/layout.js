import InsightRoll from "@/src/components/About/InsightRoll";


const insights = [
    "Đồng Phục: Giá Rẻ - Chất Lượng - Uy Tín 🏆",
    "Liên Hệ: 0907404677",
    "Miễn Phí May Mẫu",
    "Miễn Phí Tư Vấn",
    "Miễn Phí Sửa Chữa",
    "Miễn Phí Giao Hàng Trong Nội Thành",
    "32+ Năm Kinh Nghiệm May Đo📝",
    
  ];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
