import {
  IconBook2,
  IconSchool,
  IconMapPin,
  IconPlayerPlay,
  IconStar,
  IconUsers,
  IconMicrophone2,
} from '@tabler/icons-react'

const BibleTeaching = () => {
  return (
    <div style={{ background: 'var(--cream)' }}>

  <style>{`
        .bt-hero { padding: 32px; }
        .bt-hero-desc { max-width: 520px; }
        .bt-content { padding: 28px 32px; gap: 24px; }
        .bt-colleges-grid { grid-template-columns: 1fr 1fr; }
        .bt-speaking-grid { grid-template-columns: repeat(3, 1fr); }
        .bt-cta { flex-direction: row; padding: 24px 28px; }
        .bt-cta-actions { align-items: flex-end; }
 
        @media (max-width: 1024px) {
          .bt-speaking-grid { grid-template-columns: repeat(2, 1fr); }
        }
 
        @media (max-width: 640px) {
          .bt-hero { padding: 24px 20px; }
          .bt-hero-actions { flex-direction: column; align-items: stretch !important; }
          .bt-content { padding: 20px 16px; gap: 16px; }
          .bt-colleges-grid { grid-template-columns: 1fr; }
          .bt-speaking-grid { grid-template-columns: 1fr; }
          .bt-cta { flex-direction: column; align-items: flex-start !important; gap: 20px; padding: 20px; }
          .bt-cta-actions { align-items: flex-start; width: 100%; }
          .bt-cta-actions a { width: 100%; justify-content: center; box-sizing: border-box; }
        }
 
        @media (min-width: 1440px) {
          .bt-hero { padding: 48px 64px; }
          .bt-hero-desc { max-width: 640px; }
        }
      `}</style>
      {/* PAGE HERO */}
      <div className="bt-hero" style={{
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
            <IconBook2 size={20} color="var(--gold)" />
          </div>
          <div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Girija Varghese
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '24px', fontWeight: 700, color: '#fff' }}>
              Bible Teaching
            </h1>
          </div>
        </div>

        <p className="bt-hero-desc" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', lineHeight: 1.7, marginBottom: '16px' }}>
          With over <strong style={{ color: 'rgba(255,255,255,0.85)' }}>33 years of ministry</strong>, Girija Varghese
          has taught God's Word across multiple Bible colleges, seminaries, and conferences in Kerala and beyond.
        </p>

        <div className="bt-hero-actions" style={{ display: 'flex', gap: '10px' }}>
          <a
            href="https://youtu.be/dogsMpB16gU?si=XL5VFNtBZ9Ck23-_"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px',
              background: 'var(--gold)', color: '#fff',
              fontSize: '12px', fontWeight: 600,
              padding: '9px 18px', borderRadius: '6px',
              textDecoration: 'none',
            }}
          >
            <IconPlayerPlay size={14} /> Watch Messages
          </a>
          
          <a
            href="/contact"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px',
              border: '1.5px solid rgba(255,255,255,0.3)',
              color: '#fff', fontSize: '12px',
              padding: '9px 18px', borderRadius: '6px',
              textDecoration: 'none',
            }}
          >
            <IconMicrophone2 size={14} /> Invite to Speak
          </a>
        </div>
      </div>

      <div className="bt-content" style={{ display: 'flex', flexDirection: 'column' }}>

       
        
        {/* BIBLE COLLEGES */}
        <div style={{
          background: '#fff', borderRadius: '12px',
          border: '0.5px solid var(--border)', overflow: 'hidden',
          boxShadow: '0 2px 12px rgba(111,29,27,0.06)',
        }}>
          <div style={{ background: 'var(--wine)', padding: '12px 20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <IconSchool size={16} color="var(--gold)" />
            <span style={{ color: 'var(--gold)', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Bible Colleges & Seminaries
            </span>
          </div>

          <div style={{ padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 600, color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '12px' }}>
              <IconStar size={12} /> Currently Teaching
            </div>
            <div className="bt-colleges-grid" style={{ display: 'grid', gap: '10px', marginBottom: '20px' }}>
              {[
                { name: 'Zion Bible College', loc: 'Mallappally', badge: '', color: '' },
                { name: 'Doulos Theological Seminary', loc: 'Tiruvalla', badge: '', color: '' },
                { name: 'Peniel Bible School & Counselling Institute', loc: 'Kottayam', badge: 'Present', color: 'green' },
                { name: 'Jesus & Friends College and Seminary', loc: 'Kulakkada', badge: 'Online', color: 'orange' },
              ].map((c, i) => (
                <div key={i} style={{
                  background: 'var(--gold-pale)', borderRadius: '8px',
                  padding: '14px 16px', borderLeft: '3px solid var(--gold)',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                }}>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--wine)', marginBottom: '4px' }}>
                      {c.name}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: 'var(--text-muted)' }}>
                      <IconMapPin size={10} color="var(--gold)" /> {c.loc}
                    </div>
                  </div>
                  {c.badge && (
                    <span style={{
                      background: c.color === 'green' ? '#EAF3DE' : '#FAEEDA',
                      color: c.color === 'green' ? '#3B6D11' : '#854F0B',
                      fontSize: '8px', fontWeight: 600,
                      padding: '2px 7px', borderRadius: '8px',
                      textTransform: 'uppercase', flexShrink: 0,
                    }}>
                      {c.badge}
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '12px' }}>
              Former Faculty
            </div>
            <div className="bt-colleges-grid" style={{ display: 'grid', gap: '10px' }}>
              {[
                { name: 'Reach Out Theological Seminary', loc: 'Velloor' },
                { name: 'Asian Bible College', loc: 'Palarivattom' },
                { name: 'Kerala Theological Seminary', loc: 'Pulamon, Kottarakkara' },
                { name: 'Doulos Biblical Seminary', loc: 'Vechoochira' },
              ].map((c, i) => (
                <div key={i} style={{
                  background: '#f8f5ff', borderRadius: '8px',
                  padding: '14px 16px', borderLeft: '3px solid rgba(187,148,87,0.4)',
                }}>
                  <span style={{
                    background: '#f0ecf8', color: '#6b4fa0',
                    fontSize: '8px', fontWeight: 600,
                    padding: '2px 7px', borderRadius: '8px',
                    textTransform: 'uppercase', display: 'inline-block', marginBottom: '5px',
                  }}>
                    Former
                  </span>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--wine)', marginBottom: '4px' }}>
                    {c.name}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: 'var(--text-muted)' }}>
                    <IconMapPin size={10} color="var(--gold)" /> {c.loc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SPEAKING & SEMINARS */}
        <div style={{
          background: '#fff', borderRadius: '12px',
          border: '0.5px solid var(--border)', overflow: 'hidden',
          boxShadow: '0 2px 12px rgba(111,29,27,0.06)',
        }}>
          <div style={{ background: 'var(--wine)', padding: '12px 20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <IconUsers size={16} color="var(--gold)" />
            <span style={{ color: 'var(--gold)', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Speaking & Seminars
            </span>
          </div>
          <div style={{ padding: '20px' }}>
            <div className="bt-speaking-grid" style={{ display: 'grid', gap: '10px' }}>
              {[
                { icon: <IconUsers size={22} />, label: "Women's Meetings", desc: "Biblical teaching for women's conferences" },
                { icon: <IconUsers size={22} />, label: 'Family Seminars', desc: "Strengthening families through God's Word" },
                { icon: <IconMicrophone2 size={22} />, label: 'Youth Conferences', desc: 'Inspiring the next generation for Christ' },
                { icon: <IconStar size={22} />, label: 'Leadership Seminars', desc: 'Equipping leaders for effective ministry' },
                { icon: <IconBook2 size={22} />, label: 'Bible Conferences', desc: 'In-depth biblical exposition and teaching' },
                { icon: <IconUsers size={22} />, label: 'Life Skills Programs', desc: 'Practical training for purposeful living' },
              ].map((s, i) => (
                <div key={i} style={{
                  background: 'var(--gold-pale)', borderRadius: '8px',
                  padding: '16px 14px', border: '0.5px solid var(--border)',
                  textAlign: 'center',
                }}>
                  <div style={{ color: 'var(--gold)', marginBottom: '8px' }}>{s.icon}</div>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--wine)', marginBottom: '4px' }}>{s.label}</div>
                  <div style={{ fontSize: '10px', color: 'var(--text-muted)', lineHeight: 1.5 }}>{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* INVITE CTA */}
        <div className="bt-cta" style={{
          background: 'var(--wine)', borderRadius: '12px',
          display: 'flex', justifyContent: 'space-between',
          boxShadow: '0 4px 20px rgba(111,29,27,0.2)',
        }}>
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", color: '#fff', fontSize: '18px', fontWeight: 600, marginBottom: '6px' }}>
              Invite Girija to Speak
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '13px', lineHeight: 1.6 }}>
              Available for Bible conferences, women's meetings, leadership seminars,<br />
              youth conferences, family seminars and life skills programs.
            </p>
          </div>
          <div className="bt-cta-actions" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a
              href="mailto:girijasam72@mail.com"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px',
                background: 'var(--gold)', color: '#fff',
                fontSize: '12px', fontWeight: 600,
                padding: '10px 20px', borderRadius: '6px',
                textDecoration: 'none', whiteSpace: 'nowrap',
              }}
            >
              <IconMicrophone2 size={14} /> Send Speaking Request
            </a>
            
            <a
              href="https://wa.me/919744208752"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px',
                background: 'rgba(37,211,102,0.15)',
                border: '1.5px solid rgba(37,211,102,0.4)',
                color: '#25D366', fontSize: '12px', fontWeight: 600,
                padding: '10px 20px', borderRadius: '6px',
                textDecoration: 'none', whiteSpace: 'nowrap',
              }}
            >
              WhatsApp Us
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default BibleTeaching;