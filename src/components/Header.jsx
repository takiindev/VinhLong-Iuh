import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'

function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-[#ebe6df]">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3">
                    <img src={logo} alt="Logo" className="h-10 w-auto" />
                    <span className="text-lg font-semibold text-[#556445]">VinhLong</span>
                </Link>

                <nav className="hidden md:flex space-x-6">
                    <Link to="/" className="text-[#556445] hover:text-[#44543a]">Trang chủ</Link>
                    <Link to="/about" className="text-[#556445] hover:text-[#44543a]">Bài viết</Link>
                    <Link to="/contact" className="text-[#556445] hover:text-[#44543a]">Giới thiệu</Link>
                </nav>

                <div className="flex items-center gap-3">
                      <button className="text-sm px-3 py-1 rounded-md bg-[#556445] text-white hover:bg-[#44543a]">Đăng nhập</button>
                    <button className="md:hidden p-2 text-gray-700 hover:text-gray-900">☰</button>
                </div>
            </div>
        </header>
    )
}

export default Header