function Layout({ children }) {
    return (
        <>
            <main className="layout container mx-auto max-w-7xl">
                {children}
            </main>
        </>
    )
}

export default Layout