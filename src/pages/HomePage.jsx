import Header from '../components/Header'
import Hero from '../components/Hero'

function HomePage() {
    return (
        <>
            <Header />
            <Hero />
            <section className="py-12 bg-transparent">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="rounded-3xl border border-white/70 bg-white/92 backdrop-blur-sm shadow-xl p-6">
                        <h2 className="font-display font-medium text-2xl mb-3 text-ink">Những phần nổi bật trong di tích</h2>
                        <p className="text-ink-muted mb-4">Khám phá những khu vực chính tại khu di tích Mộ và Khu tưởng niệm Nguyễn Đình Chiểu.</p>

                        <ul className="grid gap-6 sm:grid-cols-3">
                            <li>
                                <a href="/di-tich/den-tho-nguyen-dinh-chieu#toa-mieu" className="block rounded-lg border border-white/70 overflow-hidden hover:shadow bg-white/92 backdrop-blur-sm">
                                    <div className="aspect-[16/10] bg-ivory">
                                        <img alt="Toà miếu (ngoại cảnh)" className="object-cover w-full h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKbpj9nXmU34gw7k1rARUynYP9-6Oke5nvTw&s" />
                                    </div>
                                    <div className="p-3">
                                        <h3 className="font-medium">Tòa miếu (ngoại cảnh)</h3>
                                        <p className="text-sm text-ink-muted">Nhìn tổng quan từ bên ngoài — kiến trúc chính của miếu và mặt đứng.</p>
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a href="/di-tich/den-tho-nguyen-dinh-chieu#noi-dien" className="block rounded-lg border border-white/70 overflow-hidden hover:shadow bg-white/92 backdrop-blur-sm">
                                    <div className="aspect-[16/10] bg-ivory">
                                        <img alt="Không gian nội điện - bàn thờ và tượng" className="object-cover w-full h-full" src="https://thamhiemmekong.com/wp-content/uploads/2020/06/ditichlangmonguyendinhchieu.jpg" />
                                    </div>
                                    <div className="p-3">
                                        <h3 className="font-medium">Không gian nội điện</h3>
                                        <p className="text-sm text-ink-muted">Bên trong miếu — nơi đặt tượng thờ, bàn hương và không gian nghi lễ.</p>
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a href="/di-tich/den-tho-nguyen-dinh-chieu#khu-tuong-niem" className="block rounded-lg border border-white/70 overflow-hidden hover:shadow bg-white/92 backdrop-blur-sm">
                                    <div className="aspect-[16/10] bg-ivory">
                                        <img alt="Khu tưởng niệm và mộ" className="object-cover w-full h-full" src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/10/14/1104660/CT-922609-03.jpg" />
                                    </div>
                                    <div className="p-3">
                                        <h3 className="font-medium">Khu tưởng niệm và mộ</h3>
                                        <p className="text-sm text-ink-muted">Khuôn viên, lối vào và khu mộ tưởng niệm — nơi diễn ra nhiều nghi lễ tưởng niệm.</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage