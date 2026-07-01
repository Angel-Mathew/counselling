import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import TopBar from './TopBar'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev)
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--cream)' }}>

      {/* TOP BAR — fixed */}
      <TopBar />

      {/* HEADER — fixed below topbar */}
      <Header sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* BODY — below topbar + header */}
      <div style={{
        display: 'flex',
        marginTop: 'calc(var(--topbar-height) + var(--header-height))',
        minHeight: 'calc(100vh - var(--topbar-height) - var(--header-height))',
      }}>

        {/* SIDEBAR */}
        <Sidebar isOpen={sidebarOpen} />

        {/* MAIN CONTENT */}
        <main style={{
          flex: 1,
          minWidth: 0,
          overflowX: 'hidden',
        }}>
          <Outlet />
        </main>

      </div>
    </div>
  )
}

export default Layout