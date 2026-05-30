import React from 'react'
import heroImg from '../assets/images/vinhlong.1.jpg'

function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16">
      <div
        className="fixed inset-0 -z-20 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('https://thamhiemmekong.com/wp-content/uploads/2020/06/langmonguyendinhchieu.jpg')" }}
        aria-hidden="true"
      />
      <div className="fixed inset-0 -z-10 bg-[#1f2519]/55" aria-hidden="true" />
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="bg-white/92 backdrop-blur-sm border border-white/70 rounded-3xl shadow-xl p-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 lg:pr-8">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-terracotta-600">Giới thiệu di tích trọng điểm</p>
              <h1 className="font-display font-medium text-4xl sm:text-5xl lg:text-6xl leading-tight text-ink">Đền thờ và mộ Danh nhân Nguyễn Đình Chiểu</h1>
              <p className="mt-6 text-lg sm:text-xl text-ink-muted leading-relaxed max-w-xl">Khám phá giá trị lịch sử, kiến trúc và những câu chuyện liên quan đến cuộc đời và sự nghiệp của Nguyễn Đình Chiểu tại khu di tích được xếp hạng Di tích Quốc gia đặc biệt.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/di-tich/den-tho-nguyen-dinh-chieu" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#556445] text-white px-7 py-3.5 shadow hover:bg-[#44543a] transition">Tìm hiểu chi tiết</a>
                <a href="/di-tich/den-tho-nguyen-dinh-chieu#chua-vinh-long" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#ebe6df] px-6 py-3 text-sm hover:bg-[#f8faf7]">Xem các phần nổi bật</a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border border-white/70 shadow-lg bg-ivory/90">
                <div className="aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] bg-center bg-cover" style={{ backgroundImage: "url('https://thamhiemmekong.com/wp-content/uploads/2020/06/langmonguyendinhchieu.jpg')" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
