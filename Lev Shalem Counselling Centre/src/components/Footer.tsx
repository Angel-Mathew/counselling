import { IconMail, IconPhone, IconMapPin, IconBrandWhatsappFilled, IconSend } from '@tabler/icons-react'

const Footer = () => {
  return (
    <footer style={{
      background: '#6f1d1b',
       boxShadow: '0 4px 20px rgba(111, 28, 27, 0.87)',
      padding: '48px 64px',
      color: '#fff',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
      }}>
        
        {/* Left Side: Text and Contact Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div>
            <h2 style={{ fontSize: '32px', fontWeight: 600, margin: '0 0 8px 0', fontFamily: "'Playfair Display', serif" }}>
              Reach Out to Girija Varghese
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px', margin: 0 }}>
              Counselling, courses, or speaking engagements
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <IconMail size={22} color="#bb9457" />
              <span style={{ fontSize: '15px' }}>girijasam72@mail.com</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <IconPhone size={22} color="#bb9457" />
              <span style={{ fontSize: '15px' }}>+91 97442 08752</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <IconMapPin size={22} color="#bb9457" />
              <span style={{ fontSize: '15px' }}>Kottayam, Kerala</span>
            </div>
          </div>
        </div>

        {/* Right Side: Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', minWidth: '280px' }}>
          <a href="mailto:girijasam72@mail.com" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            background: '#bb9457', // Gold color
            color: '#fff',
            textDecoration: 'none',
            padding: '14px 24px',
            borderRadius: '8px',
            fontWeight: 600,
            fontSize: '15px'
          }}>
            <IconSend size={20} />
            Send a Message
          </a>

          <a href="https://wa.me/919744208752" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            color: '#fff',
            textDecoration: 'none',
            padding: '14px 24px',
            borderRadius: '8px',
            fontWeight: 600,
            fontSize: '15px'
          }}>
            <IconBrandWhatsappFilled size={20} color="#25D366" />
            WhatsApp us
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer