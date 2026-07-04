import { Link, useLocation } from 'react-router-dom'
import {
  IconHome,
  IconUser,
  IconHeartHandshake,
  IconBook2,
  IconCertificate,
  IconMail,
  IconPhone,
  IconBrandYoutube,
  IconBrandFacebook,
  IconBrandWhatsappFilled,
  IconChevronDown,
  IconBuildingChurch,
  IconMapPin,
} from '@tabler/icons-react'

interface SidebarProps {
  isOpen: boolean
}

interface NavItem {
  path: string
  label: string
  icon: React.ReactNode
  sub?: string[]
}

const navItems: NavItem[] = [
  { path: '/', label: 'Home', icon: <IconHome size={16} /> },
  {
    path: '/about',
    label: 'About',
    icon: <IconUser size={16} />,
    sub: ['· Biography', '· Qualifications', '· With Rev. K. K. Sam'],
  },
  {
    path: '/counselling',
    label: 'Counselling',
    icon: <IconHeartHandshake size={16} />,
    sub: [
      '· Individual',
      '· Family & Marriage',
      "· Youth & Women's",
      '· Pre-marital',
      '· Emotional Wellness',
      '· Addiction',
      '· Group Therapy',
    ],
  },
  {
    path: '/bible-teaching',
    label: 'Bible Teaching',
    icon: <IconBook2 size={16} />,
    sub: [
      '· Sermons & Messages',
      '· Bible Colleges',
      "· Women's Seminars",
    ],
  },
  { path: '/courses', label: 'Courses', icon: <IconCertificate size={16} /> },
  { path: '/contact', label: 'Contact', icon: <IconMail size={16} /> },
]

const Sidebar = ({ isOpen }: SidebarProps) => {
  const location = useLocation()

  return (
    <div className={isOpen ? 'sidebar-root sidebar-open' : 'sidebar-root sidebar-closed'} style={{
      width: isOpen ? 'var(--sidebar-width)' : '0',
      minWidth: isOpen ? 'var(--sidebar-width)' : '0',
      background: 'var(--wine-dark)',
      height: '100%',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      borderRight: '1px solid rgba(187,148,87,0.12)',
      display: 'flex',
      flexDirection: 'column',
      position: 'sticky',
      top: 'calc(var(--topbar-height) + var(--header-height))',
      alignSelf: 'flex-start',
      maxHeight: 'calc(100vh - var(--topbar-height) - var(--header-height))',
    }}>

     <style>{`
  @media (max-width: 1024px) {
    .sidebar-open {
      position: fixed !important;
      top: calc(var(--topbar-height) + var(--header-height)) !important;
      left: 0 !important;
      width: 200px !important;
      min-width: 200px !important;
      height: calc(100vh - var(--topbar-height) - var(--header-height)) !important;
      z-index: 1000 !important;
      box-shadow: 4px 0 24px rgba(0,0,0,0.35) !important;
    }
  }
  @media (max-width: 640px) {
    .sidebar-open {
      width: 175px !important;
      min-width: 175px !important;
    }
    .sidebar-scroll img { width: 52px !important; height: 52px !important; }
  }
  @media (max-width: 340px) {
    .sidebar-open {
      width: 155px !important;
      min-width: 155px !important;
    }
    .sidebar-scroll img { width: 44px !important; height: 44px !important; }
  }
`}</style>



     <div className="sidebar-scroll" style={{ overflowY: 'auto', flex: 1 }}>

        {/* PROFILE CARD */}
        <div style={{
          padding: '16px 12px',
          background: 'rgba(0,0,0,0.25)',
          borderBottom: '1px solid rgba(187,148,87,0.12)',
          textAlign: 'center',
        }}>
          <img
            src="/assets/profileinhomepg.png"
            alt="Girija Varghese"
            style={{
              width: '64px', height: '64px',
              borderRadius: '50%',
              border: '2.5px solid var(--gold)',
              objectFit: 'cover',
              margin: '0 auto 8px',
              display: 'block',
            }}
          />
          <div style={{ color: '#fff', fontSize: '13px', fontWeight: 600, marginBottom: '2px' }}>
            Girija Varghese
          </div>
          <div style={{ color: 'var(--gold)', fontSize: '10px', marginBottom: '8px' }}>
            Girija Sam
          </div>

          {/* TAGS */}
          <div style={{
            display: 'flex', flexWrap: 'wrap',
            gap: '3px', justifyContent: 'center', marginBottom: '10px',
          }}>
            {['Counselor', 'Bible Teacher', 'Speaker', 'Life Skills Trainer'].map((tag: string) => (
              <span key={tag} style={{
                background: 'rgba(187,148,87,0.15)',
                color: 'var(--gold)',
                fontSize: '8px', padding: '2px 6px', borderRadius: '10px',
              }}>
                {tag}
              </span>
            ))}
          </div>

          {/* DETAILS */}
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.08)',
            paddingTop: '8px',
            display: 'flex', flexDirection: 'column',
            gap: '5px', textAlign: 'left',
          }}>
            {[
              { icon: <IconCertificate size={11} color="var(--gold)" />, text: 'B.A. · M.S.W. · B.D. · L.Th.' },
              { icon: <IconBuildingChurch size={11} color="var(--gold)" />, text: '33+ Years with Rev. K. K. Sam' },
              { icon: <IconHeartHandshake size={11} color="var(--gold)" />, text: 'Peniel Bible School, Kottayam' },
              { icon: <IconMapPin size={11} color="var(--gold)" />, text: 'Kothanalloor, Kottayam, Kerala' },
            ].map((item: { icon: React.ReactNode; text: string }, i: number) => (
              <div key={i} style={{ display: 'flex', gap: '6px', alignItems: 'flex-start' }}>
                <span style={{ marginTop: '1px', flexShrink: 0 }}>{item.icon}</span>
                <span style={{ color: 'rgba(255, 255, 255, 0.81)', fontSize: '10px', lineHeight: 1.5 }}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* NAV */}
        <div style={{ padding: '8px 6px' }}>
          <div style={{
            fontSize: '10px', fontWeight: 600,
            textTransform: 'uppercase', letterSpacing: '0.1em',
            color: 'rgba(255, 255, 255, 0.98)', padding: '8px 8px 4px',
          }}>
            Main Menu
          </div>

          {navItems.map((item: NavItem) => {
            const isActive = location.pathname === item.path
            return (
              <div key={item.path}>
                <Link
                  to={item.path}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    padding: '8px 10px', borderRadius: '6px', marginBottom: '1px',
                    background: isActive ? 'rgba(187,148,87,0.15)' : 'transparent',
                    borderLeft: isActive ? '3px solid var(--gold)' : '3px solid transparent',
                    transition: 'all 0.15s',
                    whiteSpace: 'nowrap',
                    textDecoration: 'none',
                  }}
                >
                  <span style={{ color: isActive ? 'var(--gold)' : 'rgba(187,148,87,0.6)', flexShrink: 0 }}>
                    {item.icon}
                  </span>
                  <span style={{
                    fontSize: '12px',
                    color: isActive ? 'var(--gold)' : 'rgba(255,255,255,0.65)',
                    fontWeight: isActive ? 500 : 400,
                    flex: 1,
                  }}>
                    {item.label}
                  </span>
                  {item.sub && <IconChevronDown size={10} color="rgba(255,255,255,0.25)" />}
                </Link>

                {/* SUB ITEMS */}
                {item.sub && isActive && (
                  <div style={{ padding: '0 6px 4px 28px' }}>
                    {item.sub.map((s: string) => (
                      <div key={s} style={{
                        padding: '3px 6px',
                        fontSize: '10px',
                        color: 'rgba(255,255,255,0.4)',
                      }}>
                        {s}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}

          {/* DIVIDER */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', margin: '8px 6px' }} />

          {/* QUICK CONTACT */}
          <div style={{
            background: 'rgba(0,0,0,0.2)',
            borderRadius: '8px', margin: '0 4px 4px',
            padding: '11px 10px',
          }}>
            <div style={{
              color: 'var(--gold)', fontSize: '9px', fontWeight: 600,
              textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px',
            }}>
              Quick Contact
            </div>
            {[
              { icon: <IconPhone size={11} />, text: '+91 97442 08752' },
              { icon: <IconBrandWhatsappFilled size={11} />, text: 'WhatsApp Chat' },
              { icon: <IconMail size={11} />, text: 'girijasam72@mail.com' },
              { icon: <IconMapPin size={11} />, text: 'Kunnel House, Bethelehem,\nKothanalloor, Kottayam' },
            ].map((item: { icon: React.ReactNode; text: string }, i: number) => (
              <div key={i} style={{
                display: 'flex', gap: '6px',
                alignItems: 'flex-start', marginBottom: '6px',
              }}>
                <span style={{ color: 'var(--gold)', marginTop: '1px', flexShrink: 0 }}>
                  {item.icon}
                </span>
                <span style={{
                  color: 'rgba(255,255,255,0.45)',
                  fontSize: '9.5px', lineHeight: 1.5,
                  whiteSpace: 'pre-line',
                }}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* SOCIAL */}
          <div style={{ display: 'flex', gap: '7px', padding: '8px 10px 12px' }}>
            {[
              { icon: <IconBrandYoutube size={14} />, href: '#' },
              { icon: <IconBrandFacebook size={14} />, href: '#' },
              { icon: <IconBrandWhatsappFilled size={14} />, href: 'https://wa.me/919744208752' },
            ].map((item: { icon: React.ReactNode; href: string }, i: number) => (
              <a key={i} href={item.href} style={{
                width: '28px', height: '28px',
                background: 'rgba(187,148,87,0.12)',
                borderRadius: '6px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--gold)', textDecoration: 'none',
                
              }}>
                {item.icon}
              </a>
              
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar