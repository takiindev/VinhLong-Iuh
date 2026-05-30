import React from 'react'
import img1 from '../assets/images/vinhlong.1.jpg'

function FeaturedSites() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-terracotta-600">Từ sổ tay</p>
            <h2 className="font-display font-medium text-ink text-3xl sm:text-4xl lg:text-5xl">Các di tích nổi bật ở Vĩnh Long</h2>
          </div>
          <a className="text-sm font-medium text-[#556445] hover:text-[#44543a] focus-ring rounded inline-flex items-center gap-1" href="/di-tich">Xem tất cả di tích<span aria-hidden="true">→</span></a>
        </div>

        <div className="mt-10 space-y-8">
          <article className="group relative flex flex-col h-full overflow-hidden rounded-2xl bg-white border border-[#ebe6df] shadow-sm transition-shadow hover:shadow-md md:flex-row">
            <a className="group/cover relative block overflow-hidden bg-ivory md:w-1/2 aspect-[16/10] md:aspect-auto" aria-hidden="true" tabIndex={-1} href="/di-tich/den-tho-nguyen-dinh-chieu#chua-vinh-long">
              <img alt="Chùa Vĩnh Long" decoding="async" className="object-cover w-full h-full" src={img1} />
            </a>
            <div className="flex-1 flex flex-col gap-3 p-6 md:p-7 md:w-1/2 justify-between">
              <div className="flex items-center gap-2 text-xs text-ink-muted">
                <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide bg-[#f0f6ef] text-[#556445]">Di tích lịch sử</span>
                <time dateTime="2025-04-15T00:00:00.000Z">15 Tháng 4, 2025</time>
              </div>
                <h3 className="font-display font-medium leading-tight text-ink text-2xl md:text-3xl">
                <a className="focus-ring rounded-md hover:text-[#44543a] transition-colors" aria-label="Chùa Vĩnh Long" href="/di-tich/den-tho-nguyen-dinh-chieu#chua-vinh-long">
                  Chùa Vĩnh Long
                </a>
              </h3>
              <p className="text-ink-muted leading-relaxed line-clamp-2">Ngôi chùa cổ có kiến trúc truyền thống, lưu giữ nhiều hiện vật và di chúc quan trọng liên quan đến lịch sử địa phương.</p>
                <ul className="mt-1 flex flex-wrap gap-1.5">
                <li><a className="text-xs text-ink-muted hover:text-[#556445] rounded" href="/di-tich/den-tho-nguyen-dinh-chieu#chua-vinh-long">#chùa</a></li>
              </ul>
            </div>
          </article>

          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
            <li>
              <article className="group relative flex flex-col h-full overflow-hidden rounded-2xl bg-white border border-[#ebe6df] shadow-sm transition-shadow">
                <a className="group/cover relative block overflow-hidden bg-ivory aspect-[16/10]" aria-hidden="true" tabIndex={-1} href="/di-tich/den-tho-nguyen-dinh-chieu#dinh-long-ho">
                  <img alt="Đình Long Hồ" loading="lazy" decoding="async" className="object-cover w-full h-full" src="https://upload.wikimedia.org/wikipedia/commons/b/b7/C%E1%BB%ADa_H%E1%BB%AFu_th%C3%A0nh_Long_H%E1%BB%93.jpg" />
                </a>
                <div className="flex-1 flex flex-col gap-3 p-6 md:p-7 justify-between">
                  <div className="flex items-center gap-2 text-xs text-ink-muted">
                    <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide bg-[#f0f6ef] text-[#556445]">Đình, miếu</span>
                    <time dateTime="2024-05-06T00:00:00.000Z">6 Tháng 5, 2024</time>
                  </div>
                    <h3 className="font-display font-medium leading-tight text-ink text-xl">
                    <a className="hover:text-[#44543a] transition-colors" href="/di-tich/den-tho-nguyen-dinh-chieu#dinh-long-ho">Đình Long Hồ</a>
                  </h3>
                  <p className="text-ink-muted leading-relaxed line-clamp-2">Đình làng với lịch sử lâu đời, nơi lưu giữ nhiều truyền thống văn hóa và lễ hội đặc trưng.</p>
                </div>
              </article>
            </li>

            <li>
              <article className="group relative flex flex-col h-full overflow-hidden rounded-2xl bg-white border border-[#ebe6df] shadow-sm transition-shadow">
                <a className="group/cover relative block overflow-hidden bg-ivory aspect-[16/10]" aria-hidden="true" tabIndex={-1} href="/di-tich/den-tho-nguyen-dinh-chieu#nha-co">
                  <img alt="Nhà cổ" loading="lazy" decoding="async" className="object-cover w-full h-full" src="https://top7vietnam.sgtiepthi.vn/wp-content/uploads/2024/11/nha-co-cai-cuong.jpg" />
                </a>
                <div className="flex-1 flex flex-col gap-3 p-6 md:p-7 justify-between">
                  <div className="flex items-center gap-2 text-xs text-ink-muted">
                    <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide bg-[#f0f6ef] text-[#556445]">Kiến trúc</span>
                    <time dateTime="2024-05-01T00:00:00.000Z">1 Tháng 5, 2024</time>
                  </div>
                  <h3 className="font-display font-medium leading-tight text-ink text-xl"><a className="hover:text-[#44543a] transition-colors" href="/di-tich/den-tho-nguyen-dinh-chieu#nha-co">Nhà cổ Vĩnh Long</a></h3>
                  <p className="text-ink-muted leading-relaxed line-clamp-2">Những ngôi nhà cổ lưu giữ phong cách xây dựng xưa, gợi lại ký ức kiến trúc vùng sông nước.</p>
                </div>
              </article>
            </li>

            <li>
              <article className="group relative flex flex-col h-full overflow-hidden rounded-2xl bg-white border border-[#ebe6df] shadow-sm transition-shadow">
                <a className="group/cover relative block overflow-hidden bg-ivory aspect-[16/10]" aria-hidden="true" tabIndex={-1} href="/di-tich/den-tho-nguyen-dinh-chieu#den-tho-nguyen-dinh-chieu">
                  <img alt="Đền thờ và mộ Nguyễn Đình Chiểu" loading="lazy" decoding="async" className="object-cover w-full h-full" src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAGYA3Rqpq_3g_j25XFmeTJa0RpGW-n4WYklDIgvO0YuHVyZUN2RJKvbn3j4MM2neLYT4spnkDpfoaWRcHB6ybKr89bdr8QRmPu9tH1mRG0xMnTdEY17H6w5ZMFvddXD4HLHRAQGp8zMLeDX=w270-h312-n-k-no" />
                </a>
                <div className="flex-1 flex flex-col gap-3 p-6 md:p-7 justify-between">
                  <div className="flex items-center gap-2 text-xs text-ink-muted">
                    <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide bg-[#f0f6ef] text-[#556445]">Đền thờ</span>
                    <time dateTime="2024-04-22T00:00:00.000Z">22 Tháng 4, 2024</time>
                  </div>
                  <h3 className="font-display font-medium leading-tight text-ink text-xl"><a className="hover:text-[#44543a] transition-colors" href="/di-tich/den-tho-nguyen-dinh-chieu#den-tho-nguyen-dinh-chieu">Đền thờ và mộ Danh nhân Nguyễn Đình Chiểu</a></h3>
                  <p className="text-ink-muted leading-relaxed line-clamp-2">Đền thờ và lăng mộ của Nguyễn Đình Chiểu — nơi tưởng niệm và lưu giữ di sản văn học, lịch sử của danh nhân.</p>
                </div>
              </article>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default FeaturedSites
