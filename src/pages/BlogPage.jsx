import Header from '../components/Header'
import BlogList from '../components/BlogList'
import Layout from '../components/Layout'

function BlogPage() {
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

        <section className="px-4 sm:px-6 lg:px-10 py-10">
          <div className="rounded-3xl border border-white/70 bg-white/92 backdrop-blur-sm shadow-xl p-6 sm:p-8">
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-display font-semibold text-ink mb-3">Bài viết</h1>
              <p className="text-ink-muted">Khám phá những bài viết về lịch sử, văn hóa và các di tích tại Vĩnh Long.</p>
            </header>

            <BlogList />
          </div>
        </section>
      </Layout>
    </>
  )
}

export default BlogPage
