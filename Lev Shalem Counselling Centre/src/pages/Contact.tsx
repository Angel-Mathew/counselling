import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconBrandWhatsappFilled,
  IconCalendarPlus,
  IconSend,
  IconClock,
  IconUser,
  IconMessage,
} from '@tabler/icons-react'

const Contact = () => {
  return (
    <div style={{ background: 'var(--cream)' }}>

      <style>{`
        .ct-hero { padding: 32px; }
        .ct-hero-desc { max-width: 500px; }
        .ct-content { padding: 28px 32px; gap: 24px; }
        .ct-top-row { grid-template-columns: 1fr 1fr; }
        .ct-form-row { grid-template-columns: 1fr 1fr; }
        .ct-form-actions { flex-direction: row; }

        @media (max-width: 768px) {
          .ct-top-row { grid-template-columns: 1fr; }
        }

        @media (max-width: 640px) {
          .ct-hero { padding: 24px 20px; }
          .ct-content { padding: 20px 16px; gap: 16px; }
          .ct-form-row { grid-template-columns: 1fr; gap: 16px !important; }
          .ct-form-actions { flex-direction: column; align-items: stretch !important; }
          .ct-form-actions button, .ct-form-actions a { box-sizing: border-box; }
          .ct-form-actions button, .ct-form-actions a { justify-content: center; }
        }

        @media (min-width: 1440px) {
          .ct-hero { padding: 48px 64px; }
          .ct-hero-desc { max-width: 620px; }
        }
      `}</style>

      {/* PAGE HERO */}
      <div className="ct-hero" style={{
        background: 'linear-gradient(135deg, var(--wine) 0%, #8B2320 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', right: '-30px', top: '-30px',
          width: '180px', height: '180px', borderRadius: '50%',
          background: 'rgba(187,148,87,0.06)',
        }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
          <div style={{
            width: '40px', height: '40px', borderRadius: '50%',
            background: 'rgba(187,148,87,0.15)',
            border: '1.5px solid rgba(187,148,87,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <IconMail size={20} color="var(--gold)" />
          </div>
          <div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Lev Shalem Counselling Centre
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '24px', fontWeight: 700, color: '#fff' }}>
              Get in Touch
            </h1>
          </div>
        </div>
        <p className="ct-hero-desc" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', lineHeight: 1.7 }}>
          We'd love to hear from you. Reach out for counselling appointments,
          speaking engagements, course enquiries, or ministry partnerships.
        </p>
      </div>

      <div className="ct-content" style={{ display: 'flex', flexDirection: 'column' }}>

        {/* TOP ROW — Contact Info + Quick Actions */}
        <div className="ct-top-row" style={{ display: 'grid', gap: '20px' }}>

          {/* CONTACT DETAILS */}
          <div style={{
            background: '#fff', borderRadius: '12px',
            border: '0.5px solid var(--border)', overflow: 'hidden',
            boxShadow: '0 2px 12px rgba(111,29,27,0.06)',
          }}>
            <div style={{ background: 'var(--wine)', padding: '12px 20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <IconPhone size={16} color="var(--gold)" />
              <span style={{ color: 'var(--gold)', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Contact Details
              </span>
            </div>
            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                {
                  icon: <IconPhone size={18} color="var(--gold)" />,
                  label: 'Phone',
                  value: '+91 97442 08752',
                  href: 'tel:+919744208752',
                },
                {
                  icon: <IconBrandWhatsappFilled size={18} color="var(--gold)" />,
                  label: 'WhatsApp',
                  value: '+91 97442 08752',
                  href: 'https://wa.me/919744208752',
                },
                {
                  icon: <IconMail size={18} color="var(--gold)" />,
                  label: 'Email',
                  value: 'girijasam72@mail.com',
                  href: 'mailto:girijasam72@mail.com',
                },
                {
                  icon: <IconMapPin size={18} color="var(--gold)" />,
                  label: 'Address',
                  value: 'Kunnel House, Bethelehem,\nKothanalloor, Kottayam,\nKerala, India',
                  href: null,
                },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '36px', height: '36px',
                    background: 'var(--gold-pale)',
                    borderRadius: '8px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '2px' }}>
                      {item.label}
                    </div>
                    {item.href ? (
                      <a href={item.href} style={{
                        fontSize: '13px', fontWeight: 500,
                        color: 'var(--wine)', textDecoration: 'none',
                        whiteSpace: 'pre-line', lineHeight: 1.5,
                      }}>
                        {item.value}
                      </a>
                    ) : (
                      <div style={{ fontSize: '13px', color: 'var(--text-mid)', whiteSpace: 'pre-line', lineHeight: 1.5 }}>
                        {item.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* QUICK ACTIONS */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>

            <div style={{
              background: 'var(--wine)', borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 2px 12px rgba(111,29,27,0.15)',
            }}>
              <div style={{ color: 'var(--gold)', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
                Book a Counselling Session
              </div>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px', lineHeight: 1.6, marginBottom: '14px' }}>
                Available in-person and online via Zoom. All sessions are confidential and Christ-centred.
              </p>
              <a href="https://wa.me/919744208752" style={{
                display: 'flex', alignItems: 'center', gap: '7px',
                background: 'var(--gold)', color: '#fff',
                fontSize: '12px', fontWeight: 600,
                padding: '10px 18px', borderRadius: '6px',
                textDecoration: 'none', width: 'fit-content',
              }}>
                <IconCalendarPlus size={14} /> Book via WhatsApp
              </a>
            </div>

            <div style={{
              background: '#fff', borderRadius: '12px',
              border: '0.5px solid var(--border)',
              padding: '20px',
              boxShadow: '0 2px 12px rgba(111,29,27,0.06)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <IconClock size={16} color="var(--gold)" />
                <div style={{ color: 'var(--wine)', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Availability
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {[
                  { day: 'Monday – Friday', time: 'By appointment' },
                  { day: 'Saturday', time: 'By appointment' },
                  { day: 'Online Sessions', time: 'Flexible timing (Zoom)' },
                ].map((a, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                    <span style={{ color: 'var(--text-mid)', fontWeight: 500 }}>{a.day}</span>
                    <span style={{ color: 'var(--text-muted)' }}>{a.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div style={{
          background: '#fff', borderRadius: '12px',
          border: '0.5px solid var(--border)', overflow: 'hidden',
          boxShadow: '0 2px 12px rgba(111,29,27,0.06)',
        }}>
          <div style={{ background: 'var(--wine)', padding: '12px 20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <IconSend size={16} color="var(--gold)" />
            <span style={{ color: 'var(--gold)', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Send a Message
            </span>
          </div>
          <div style={{ padding: '24px' }}>
            <div className="ct-form-row" style={{ display: 'grid', gap: '16px', marginBottom: '16px' }}>
              <div>
                <label style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11px', fontWeight: 600, color: 'var(--wine)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  <IconUser size={12} /> Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  style={{
                    width: '100%', padding: '10px 14px',
                    border: '1.5px solid var(--border)',
                    borderRadius: '6px', fontSize: '13px',
                    color: 'var(--text)', outline: 'none',
                    fontFamily: 'inherit',
                    background: 'var(--cream)',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11px', fontWeight: 600, color: 'var(--wine)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  <IconPhone size={12} /> Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Your phone number"
                  style={{
                    width: '100%', padding: '10px 14px',
                    border: '1.5px solid var(--border)',
                    borderRadius: '6px', fontSize: '13px',
                    color: 'var(--text)', outline: 'none',
                    fontFamily: 'inherit',
                    background: 'var(--cream)',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11px', fontWeight: 600, color: 'var(--wine)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                <IconMail size={12} /> Email Address
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                style={{
                  width: '100%', padding: '10px 14px',
                  border: '1.5px solid var(--border)',
                  borderRadius: '6px', fontSize: '13px',
                  color: 'var(--text)', outline: 'none',
                  fontFamily: 'inherit',
                  background: 'var(--cream)',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11px', fontWeight: 600, color: 'var(--wine)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Enquiry Type
              </label>
              <select style={{
                width: '100%', padding: '10px 14px',
                border: '1.5px solid var(--border)',
                borderRadius: '6px', fontSize: '13px',
                color: 'var(--text)', outline: 'none',
                fontFamily: 'inherit',
                background: 'var(--cream)',
                boxSizing: 'border-box',
              }}>
                <option value="">Select an enquiry type</option>
                <option>Counselling Appointment</option>
                <option>Speaking / Seminar Invitation</option>
                <option>Course Enquiry</option>
                <option>Ministry Partnership</option>
                <option>General Enquiry</option>
              </select>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11px', fontWeight: 600, color: 'var(--wine)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                <IconMessage size={12} /> Your Message
              </label>
              <textarea
                placeholder="Write your message here..."
                rows={5}
                style={{
                  width: '100%', padding: '10px 14px',
                  border: '1.5px solid var(--border)',
                  borderRadius: '6px', fontSize: '13px',
                  color: 'var(--text)', outline: 'none',
                  fontFamily: 'inherit',
                  background: 'var(--cream)',
                  resize: 'vertical',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            <div className="ct-form-actions" style={{ display: 'flex', gap: '10px' }}>
              <button style={{
                display: 'flex', alignItems: 'center', gap: '7px',
                background: 'var(--wine)', color: '#fff',
                fontSize: '13px', fontWeight: 600,
                padding: '12px 24px', borderRadius: '6px',
                cursor: 'pointer', border: 'none',
                fontFamily: 'inherit',
              }}>
                <IconSend size={15} /> Send Message
              </button>
              <a href="https://wa.me/919744208752" style={{
                display: 'flex', alignItems: 'center', gap: '7px',
                background: 'rgba(37,211,102,0.1)',
                border: '1.5px solid rgba(37,211,102,0.4)',
                color: '#25D366', fontSize: '13px', fontWeight: 600,
                padding: '12px 24px', borderRadius: '6px',
                textDecoration: 'none',
              }}>
                <IconBrandWhatsappFilled size={15} /> WhatsApp Instead
              </a>
            </div>
          </div>
        </div>

        {/* MAP PLACEHOLDER */}
        <div style={{
          background: '#fff', borderRadius: '12px',
          border: '0.5px solid var(--border)', overflow: 'hidden',
          boxShadow: '0 2px 12px rgba(111,29,27,0.06)',
        }}>
          <div style={{ background: 'var(--wine)', padding: '12px 20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <IconMapPin size={16} color="var(--gold)" />
            <span style={{ color: 'var(--gold)', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Location
            </span>
          </div>
          
          <div style={{ padding: '14px 20px', background: 'var(--gold-pale)', borderTop: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <IconMapPin size={14} color="var(--gold)" style={{ marginTop: '1px', flexShrink: 0 }} />
              <span style={{ fontSize: '13px', color: 'var(--text-mid)' }}>
                Kunnel House, Bethelehem, Kothanalloor, Kottayam, Kerala, India
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact