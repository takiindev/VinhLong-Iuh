import React from 'react'

function BlogList() {
  const articles = [
    {
      id: 1,
      title: "Đời sống và sự nghiệp của Nguyễn Đình Chiểu",
      category: "Lịch sử",
      date: "15 Tháng 5, 2024",
      excerpt: "Tìm hiểu về cuộc đời, sự nghiệp và những đóng góp của nhà thơ yêu nước Nguyễn Đình Chiểu.",
      image: "https://ta-img.tatinta.com/resize/1024/webp/destination/file-1730784262166.jpg"
    },
    {
      id: 2,
      title: "Kiến trúc truyền thống của các di tích Vĩnh Long",
      category: "Kiến trúc",
      date: "10 Tháng 5, 2024",
      excerpt: "Khám phá đặc điểm kiến trúc độc đáo của các ngôi đền, miếu và nhà cổ tại địa phương.",
      image: "https://upload.wikimedia.org/wikipedia/commons/b/b7/C%E1%BB%ADa_H%E1%BB%AFu_th%C3%A0nh_Long_H%E1%BB%93.jpg"
    },
    {
      id: 3,
      title: "Những lễ hội truyền thống tại Vĩnh Long",
      category: "Văn hóa",
      date: "5 Tháng 5, 2024",
      excerpt: "Các lễ hội văn hóa truyền thống, tầm quan trọng và ý nghĩa trong cộng đồng địa phương.",
      image: "https://top7vietnam.sgtiepthi.vn/wp-content/uploads/2024/11/nha-co-cai-cuong.jpg"
    },
    {
      id: 4,
      title: "Tác phẩm văn học nổi tiếng của Nguyễn Đình Chiểu",
      category: "Văn học",
      date: "1 Tháng 5, 2024",
      excerpt: "Tìm hiểu về những tác phẩm nổi tiếng như 'Lục Vân Tiên' và vai trò của chúng trong văn học Việt.",
      image: "https://baovinhlong.com.vn/file/e7837c027f6ecd14017ffa4e5f2a0e34/dataimages/201707/original/images1943895_1.jpg"
    },
    {
      id: 5,
      title: "Quy trình tu bổ và bảo tồn di tích",
      category: "Di tích",
      date: "25 Tháng 4, 2024",
      excerpt: "Tìm hiểu về công tác bảo tồn, tu bổ và phát triển bền vững các di tích Quốc gia.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKbpj9nXmU34gw7k1rARUynYP9-6Oke5nvTw&s"
    },
    {
      id: 6,
      title: "Ảnh hưởng của sông Mekong đến văn hóa Vĩnh Long",
      category: "Địa phương",
      date: "20 Tháng 4, 2024",
      excerpt: "Khám phá mối liên hệ sâu sắc giữa sông Mekong và sự phát triển văn hóa của vùng đất Vĩnh Long.",
      image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGYA3Rqpq_3g_j25XFmeTJa0RpGW-n4WYklDIgvO0YuHVyZUN2RJKvbn3j4MM2neLYT4spnkDpfoaWRcHB6ybKr89bdr8QRmPu9tH1mRG0xMnTdEY17H6w5ZMFvddXD4HLHRAQGp8zMLeDX=w270-h312-n-k-no"
    }
  ]

  return (
    <div className="space-y-6">
      <ul className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 items-stretch">
        {articles.map((article) => (
          <li key={article.id}>
            <article className="group relative flex flex-col h-full overflow-hidden rounded-2xl bg-white border border-[#ebe6df] shadow-sm transition-shadow hover:shadow-md">
              <a 
                className="group/cover relative block overflow-hidden bg-ivory aspect-[16/10]" 
                aria-hidden="true" 
                tabIndex={-1} 
                href={`/bai-viet/${article.id}`}
              >
                <img 
                  alt={article.title} 
                  loading="lazy" 
                  decoding="async" 
                  className="object-cover w-full h-full group-hover/cover:scale-105 transition-transform duration-300" 
                  src={article.image} 
                />
              </a>
              <div className="flex-1 flex flex-col gap-3 p-6 md:p-7 justify-between">
                <div className="flex items-center gap-2 text-xs text-ink-muted">
                  <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide bg-[#f0f6ef] text-[#556445]">
                    {article.category}
                  </span>
                  <time dateTime="2024-05-06T00:00:00.000Z">{article.date}</time>
                </div>
                <h3 className="font-display font-medium leading-tight text-ink text-xl">
                  <a 
                    className="hover:text-[#44543a] transition-colors" 
                    href={`/bai-viet/${article.id}`}
                  >
                    {article.title}
                  </a>
                </h3>
                <p className="text-ink-muted leading-relaxed line-clamp-2 text-sm">
                  {article.excerpt}
                </p>
                <a 
                  className="text-sm font-medium text-[#556445] hover:text-[#44543a] transition-colors inline-flex items-center gap-1 w-fit"
                  href={`/bai-viet/${article.id}`}
                >
                  Đọc tiếp <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BlogList
