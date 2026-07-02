import{IconCalendarPlus, IconLayoutSidebarLeftCollapse,  IconLayoutSidebarLeftExpand } from '@tabler/icons-react'
import {Link} from 'react-router-dom'

interface HeaderProps {
sidebarOpen: boolean
toggleSidebar: () => void
}
const Header =({sidebarOpen, toggleSidebar}: HeaderProps) => {
  return (
    <div className="header-root" style={{
        background: 'var(--wine)',
      padding: '0 20px',
      height: 'var(--header-height)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'fixed',
      top: 'var(--topbar-height)',
      left: 0,
      right: 0,
      zIndex: 999,
      borderBottom: '3px solid var(--gold)',
      boxShadow: '0 4px 20px rgba(111, 28, 27, 0.87)',
    }}>

      <style>{`
        @media (max-width: 640px) {
          .header-root { padding: 0 12px !important; }
          .header-brand-text { display: none !important; }
          .header-phone-block { display: none !important; }
          .header-book-btn { padding: 10px 14px !important; font-size: 0 !important; gap: 0 !important; }
          .header-book-btn svg { font-size: 16px !important; }
        }
        @media (max-width: 1024px) {
          .header-phone-block { display: none !important; }
        }
      `}</style>

      <div className="header-left" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button onClick={toggleSidebar} style={{
          width: '36px',
            height: '36px',
            background: 'rgba(197, 136, 38, 0.15)',
            border: '1.5px solid rgb(187, 149, 87)',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--gold)',
            cursor: 'pointer',
            transition: 'background 0.2s',
          }}
        >
              {sidebarOpen
            ? <IconLayoutSidebarLeftCollapse size={18} />
            : <IconLayoutSidebarLeftExpand size={18} />
          }
        </button>
         <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img
            src="/assets/logo.png"
            alt="Lev Shalem Logo"
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              border: '2.5px solid var(--gold)',
              objectFit: 'cover',
              background: '#fff',
            }}
          />
               <div className="header-brand-text">
            <div style={{
              color: '#fff',
              fontSize: '15px',
              fontWeight: 600,
              lineHeight: 1.2,
              fontFamily: "'Playfair Display', serif",
            }}>
              Lev Shalem Counselling Centre
            </div>
            <div style={{
              color: 'var(--gold)',
              fontSize: '9px',
              letterSpacing: '0.05em',
              marginTop: '2px',
            }}>
              Girija Varghese · Healing Hearts, Restoring Lives  
                </div> 
                </div>
        </Link>
      </div>
       <div className="header-right" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div className="header-phone-block" style={{ textAlign: 'right' }}>
          <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '9px' }}>
            Need help?
          </div>
          <a href="tel:+919744208752" style={{
            color: 'var(--gold)',
            fontSize: '13px',
            fontWeight: 600,
            letterSpacing: '0.02em',
          }}>
            +91 97442 08752
          </a>
        </div>

        <div className="header-phone-block" style={{
          width: '1px',
          height: '36px',
          background: 'rgba(255,255,255,0.2)',
        }} />
         <Link to="/contact" className="header-book-btn" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '7px',
          background: 'var(--gold)',
          color: '#fff',
          fontSize: '13px',
          fontWeight: 600,
          padding: '10px 20px',
          borderRadius: '6px',
          letterSpacing: '0.02em',
          transition: 'background 0.2s',
          whiteSpace: 'nowrap',
        }}>
          <IconCalendarPlus size={16} />
          Book a Session
        </Link>
      </div>
    </div>
  )
}

export default Header