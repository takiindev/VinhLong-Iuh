import React, { useEffect } from 'react'
import Header from '../components/Header'
import Layout from '../components/Layout'
import heroImg from '../assets/images/vinhlong.1.jpg'

function SiteDetail() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    const hash = window.location.hash
    if (!hash) return
    const id = hash.replace('#', '')
    const el = document.getElementById(id)
    if (!el) return
    // smooth scroll and highlight
    setTimeout(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
      el.classList.add('ring-2', 'ring-[#556445]', 'rounded-lg', 'bg-amber-50')
      setTimeout(() => {
        el.classList.remove('ring-2', 'ring-[#556445]', 'rounded-lg', 'bg-amber-50')
      }, 2600)
    }, 120)
  }, [])
  return (
    <>
      <Header />
      <Layout>
        <div
          className="fixed inset-0 -z-20 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('https://thamhiemmekong.com/wp-content/uploads/2020/06/langmonguyendinhchieu.jpg')" }}
          aria-hidden="true"
        />
        <div className="fixed inset-0 -z-10 bg-[#1f2519]/55" aria-hidden="true" />

        <article className="px-4 sm:px-6 lg:px-10 py-10">
          <div className="rounded-3xl border border-white/70 bg-white/92 backdrop-blur-sm shadow-xl p-6 sm:p-8">
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-display font-semibold text-ink mb-3">Đền thờ và mộ Danh nhân Nguyễn Đình Chiểu</h1>
              <p className="text-ink-muted">Di tích Mộ và Khu tưởng niệm Nguyễn Đình Chiểu, An Đức, Ba Tri — Di tích Quốc gia đặc biệt.</p>
            </header>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="md:col-span-2">
                <div className="rounded-xl overflow-hidden shadow-sm mb-6">
                  <img src="https://ta-img.tatinta.com/resize/1024/webp/destination/file-1730784262166.jpg" alt="Đền thờ và mộ Nguyễn Đình Chiểu" className="w-full h-75 object-cover" />
                </div>

                <section className="prose max-w-none space-y-4">
                <p>Di tích Mộ và Khu tưởng niệm Nguyễn Đình Chiểu, thuộc địa bàn xã An Đức, huyện Ba Tri, tỉnh Bến Tre, là nơi thờ và an táng nhà thơ yêu nước Nguyễn Đình Chiểu, cùng vợ là Lê Thị Điền và con gái là Nguyễn Thị Ngọc Khuê (Sương Nguyệt Anh). Nguyễn Đình Chiểu (1822 - 1888) là đại diện tiêu biểu cho lớp sĩ phu yêu nước dùng văn thơ làm phương tiện đấu tranh với thực dân Pháp xâm lược bằng tư tưởng. Hầu hết tác phẩm văn, thơ của ông đều viết bằng chữ Nôm, vừa thể hiện tính chiến đấu bền bỉ, vừa mang nặng nỗi lòng về vận mệnh dân tộc và tình yêu thương con người.</p>

                <p>Nguyễn Đình Chiểu đóng một vai trò quan trọng trong cuộc kháng chiến chống Pháp; ông chiến đấu bằng ngòi bút, hòa mình trong cuộc chiến đấu của nhân dân và trở thành người phát ngôn của phong trào yêu nước chống Pháp. Ông là nhà thơ Việt Nam đầu tiên nói đến chiến tranh nhân dân, đề cao vai trò người nông dân, trong các cuộc khởi nghĩa chống Pháp với ý thức về nhiệm vụ và quyền lợi của mình: bảo vệ "tấc đất ngọn rau, bát cơm manh áo" của chính mình, bảo vệ chủ quyền đất nước thiêng liêng.</p>

                <p>Trong những tác phẩm nổi tiếng như “Lục Vân Tiên”, “Văn tế nghĩa sĩ Cần Giuộc”, “Lục tích sĩ dân trận vong”... ông ca ngợi tinh thần nghĩa khí và những tấm gương chiến đấu anh hùng của những nghĩa sĩ nông dân. Đối với các lãnh tụ nghĩa quân như Trương Định, Phan Ngọc Tòng..., Nguyễn Đình Chiểu đã dành những lời thơ biểu đạt nghệ thuật, tính trữ tình và anh hùng ca.</p>

                <p>Di tích có tổng diện tích 14.187,9 m², bao gồm các hạng mục chính: nhà bia (xây dựng 2000–2002, cao 12m), đền thờ mới (2000–2002, cao 21m), đền thờ cũ (1972, diện tích 84m²), và khu mộ (tôn tạo 1958) gồm mộ cụ Đồ Chiểu, mộ cụ bà và mộ con gái Nguyễn Thị Ngọc Khuê (Sương Nguyệt Anh). Tại di tích có phòng trưng bày lưu giữ hình ảnh, hiện vật và các ấn phẩm tiêu biểu của Nguyễn Đình Chiểu.</p>

                <p>Hằng năm, chính quyền và nhân dân tỉnh Bến Tre tổ chức Lễ hội truyền thống văn hóa vào ngày 1 và ngày 3 tháng 7 (ngày sinh và ngày mất của Nguyễn Đình Chiểu) với nhiều chương trình phong phú. Với giá trị lịch sử, văn hóa đặc biệt, di tích được Thủ tướng Chính phủ xếp hạng là Di tích Quốc gia đặc biệt ngày 22/12/2016.</p>

                <p className="text-sm text-ink-muted">Nguồn: Cục Di sản văn hóa.</p>
                </section>

                <section id="chua-vinh-long" className="mt-8 rounded-lg p-4 border border-[#ebe6df] bg-white/92 backdrop-blur-sm">
                  <h3 className="font-display font-medium text-xl mb-2">Chùa Vĩnh Long</h3>
                  <p className="text-ink-muted text-sm">Ngôi chùa cổ có kiến trúc truyền thống, lưu giữ nhiều hiện vật và di chúc quan trọng liên quan đến lịch sử địa phương.</p>
                </section>

                <section id="dinh-long-ho" className="mt-6 rounded-lg p-4 border border-[#ebe6df] bg-white/92 backdrop-blur-sm">
                  <h3 className="font-display font-medium text-xl mb-2">Đình Long Hồ</h3>
                  <p className="text-ink-muted text-sm">Đình làng với lịch sử lâu đời, nơi lưu giữ nhiều truyền thống văn hóa và lễ hội đặc trưng.</p>
                </section>

                <section id="nha-co" className="mt-6 rounded-lg p-4 border border-[#ebe6df] bg-white/92 backdrop-blur-sm">
                  <h3 className="font-display font-medium text-xl mb-2">Nhà cổ Vĩnh Long</h3>
                  <p className="text-ink-muted text-sm">Những ngôi nhà cổ lưu giữ phong cách xây dựng xưa, gợi lại ký ức kiến trúc vùng sông nước.</p>
                </section>
              </div>

              <aside className="md:col-span-1">
                <div className="bg-white/92 backdrop-blur-sm border border-white/70 rounded-lg shadow-sm p-4">
                  <h4 className="font-medium mb-2">Giới thiệu nhanh</h4>
                  <p className="text-sm text-ink-muted">Di tích Mộ và Khu tưởng niệm Nguyễn Đình Chiểu — khu di tích lịch sử văn hóa tiêu biểu, được xếp hạng Di tích Quốc gia đặc biệt. Trang này tập trung giới thiệu giá trị và lịch sử di tích (không hiển thị lịch tham quan hay thông tin giá vé).</p>

                  <div className="mt-4 grid gap-4">
                    <article className="group relative flex flex-col h-full overflow-hidden rounded-2xl bg-white border border-[#ebe6df] shadow-sm transition-shadow">
                        <a className="group/cover relative block overflow-hidden bg-ivory aspect-[16/10]" aria-hidden="true" tabIndex={-1} href="/di-tich/den-tho-nguyen-dinh-chieu#dinh-long-ho">
                        <img alt="Đình Long Hồ" loading="lazy" decoding="async" className="object-cover w-full h-full" src="https://baovinhlong.com.vn/file/e7837c027f6ecd14017ffa4e5f2a0e34/dataimages/201707/original/images1943895_1.jpg" />
                      </a>
                      <div className="flex-1 flex flex-col gap-3 p-4 justify-between">
                        <div className="flex items-center gap-2 text-xs text-ink-muted">
                          <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide bg-[#f0f6ef] text-[#556445]">Đình, miếu</span>
                          <time dateTime="2024-05-06T00:00:00.000Z">6 Tháng 5, 2024</time>
                        </div>
                        <h3 className="font-display font-medium leading-tight text-ink text-lg">
                          <a className="hover:text-[#44543a] transition-colors" href="/di-tich/den-tho-nguyen-dinh-chieu#dinh-long-ho">Đình Long Hồ</a>
                        </h3>
                        <p className="text-ink-muted leading-relaxed line-clamp-2 text-sm">Đình làng với lịch sử lâu đời, nơi lưu giữ nhiều truyền thống văn hóa và lễ hội đặc trưng.</p>
                      </div>
                    </article>

                    <article className="group relative flex flex-col h-full overflow-hidden rounded-2xl bg-white border border-[#ebe6df] shadow-sm transition-shadow">
                        <a className="group/cover relative block overflow-hidden bg-ivory aspect-[16/10]" aria-hidden="true" tabIndex={-1} href="/di-tich/den-tho-nguyen-dinh-chieu#nha-co">
                        <img alt="Nhà cổ" loading="lazy" decoding="async" className="object-cover w-full h-full" src="https://thamhiemmekong.com/wp-content/uploads/2020/06/langmonguyendinhchieu01.jpg" />
                      </a>
                      <div className="flex-1 flex flex-col gap-3 p-4 justify-between">
                        <div className="flex items-center gap-2 text-xs text-ink-muted">
                          <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide bg-[#f0f6ef] text-[#556445]">Kiến trúc</span>
                          <time dateTime="2024-05-01T00:00:00.000Z">1 Tháng 5, 2024</time>
                        </div>
                        <h3 className="font-display font-medium leading-tight text-ink text-lg"><a className="hover:text-[#44543a] transition-colors" href="/di-tich/den-tho-nguyen-dinh-chieu#nha-co">Nhà cổ Vĩnh Long</a></h3>
                        <p className="text-ink-muted leading-relaxed line-clamp-2 text-sm">Những ngôi nhà cổ lưu giữ phong cách xây dựng xưa, gợi lại ký ức kiến trúc vùng sông nước.</p>
                      </div>
                    </article>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </article>
      </Layout>
    </>
  )
}

export default SiteDetail
