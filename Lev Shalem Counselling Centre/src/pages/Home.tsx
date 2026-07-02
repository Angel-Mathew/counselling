import { 
  IconPlayerPlay, 
  IconCalendarPlus, 
  IconBrandWhatsapp, 
  IconBrandYoutube,
  IconClock,
  IconCreditCard,
  IconSchool,
  IconMicrophone2, 
  IconUsers 
} from '@tabler/icons-react';

const Home = () => {
  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      
      {/* HERO VIDEO SECTION */}
      <div style={{ position: 'relative', width: '100%', height: '480px', overflow: 'hidden' }}>
        <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }}>
          <source src="/assets/hero_section.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(111,29,27,0.85) 0%, rgba(0,0,0,0.4) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', padding: '0 48px' }}>
          <div style={{ maxWidth: '600px' }}>
             <h1 style={{ color: '#fff', fontSize: '42px', fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
               Girija Varghese <br/><span style={{ color: '#bb9457' }}>(Girija Sam)</span>
             </h1>
             <p style={{ color: '#ccc', fontStyle: 'italic', marginBottom: '24px', fontSize: '18px' }}>"Healing Hearts • Building Lives • Inspiring Hope"</p>
             <a href="https://wa.me/919744208752?text=I%20want%20to%20book%20a%20counselling%20session" target="_blank" rel="noreferrer" style={{ background: '#bb9457', color: '#fff', padding: '14px 28px', borderRadius: '6px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', fontWeight: 600 }}>
               <IconCalendarPlus size={20}/> Book Counselling
             </a>
          </div>
        </div>
      </div>

      {/* SCRIPTURE BAND */}
      <div style={{ background: 'linear-gradient(90deg, #bb9457, #d4ae7a)', padding: '16px', textAlign: 'center' }}>
        <p style={{ fontFamily: "'Lora', serif", color: '#fff', fontSize: '16px', margin: 0 }}>
          "He heals the brokenhearted and binds up their wounds." 
          <span style={{ fontSize: '12px', opacity: 0.8 }}> — Psalm 147:3</span>
        </p>
      </div>

      {/* STATS SECTION */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderBottom: '1px solid #eee' }}>
        {[
          { num: '33+', label: 'Years of Ministry' },
          { num: '17', label: 'Power Vision Episodes' },
          { num: '10+', label: 'Theological Colleges' },
          { num: '7', label: 'Counselling Services' },
        ].map((stat, i) => (
          <div key={i} style={{ padding: '24px', textAlign: 'center', borderRight: i < 3 ? '1px solid #eee' : 'none' }}>
            <div style={{ fontSize: '32px', fontWeight: 700, color: '#6f1d1b' }}>{stat.num}</div>
            <div style={{ fontSize: '12px', color: '#666', fontWeight: 500 }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* RESTORED LATEST MESSAGES SECTION */}
      <div style={{ padding: '32px 28px', background: '#fdfaf5' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', color: '#6f1d1b', fontWeight: 600 }}>Latest Messages</h2>
          <div style={{ flex: 1, height: '1px', background: '#eee' }} />
          <a href="https://youtu.be/MIjrvKjKJWY?si=lhmsMKPoSjaL-BwP" target="_blank" rel="noreferrer" style={{ color: '#bb9457', fontSize: '13px', fontWeight: 500, textDecoration: 'none' }}>
            View all →
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {[
            { title: 'Role of Women in Family', sub: 'Power Vision TV · Ep. 1' },
            { title: 'Bible Teaching Message', sub: 'Bible Teaching Series' },
            { title: "Women's Conference Talk", sub: "Women's Ministry" },
          ].map((video, i) => (
            <div key={i} style={{
              background: '#fff',
              borderRadius: '10px',
              border: '0.5px solid #eee',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(111,29,27,0.06)',
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #1a0a09, #2a1210)',
                aspectRatio: '16/9',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                cursor: 'pointer',
              }}>
                <div style={{
                  width: '40px', height: '40px',
                  background: '#bb9457',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <IconPlayerPlay size={18} color="#fff" style={{ marginLeft: '3px' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'rgba(187,148,87,0.7)', fontSize: '11px' }}>
                  <IconBrandYoutube size={14} />
                  YouTube
                </div>
              </div>
              <div style={{ padding: '12px 14px' }}>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#6f1d1b', marginBottom: '3px' }}>
                  {video.title}
                </div>
                <div style={{ fontSize: '11px', color: '#666' }}>
                  {video.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT & COUNSELING SECTION */}
      <div style={{ padding: '48px 32px', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '24px' }}>
        <div style={{ border: '2px solid #bb9457', borderRadius: '12px', overflow: 'hidden' }}>
          <div style={{ background: '#6f1d1b', padding: '12px', textAlign: 'center', color: '#fff', fontWeight: 600 }}>About GIRIJA VARGHESE</div>
          <div style={{ padding: '32px', display: 'flex', gap: '24px' }}>
            <img src="/assets/profile.png" alt="Girija" style={{ width: '120px', height: '150px', borderRadius: '8px', objectFit: 'cover' }} />
            <div>
              <h3 style={{ color: '#6f1d1b', fontSize: '22px', margin: '0 0 10px 0' }}>Counselor · Teacher · Speaker</h3>
              <p style={{ color: '#444', lineHeight: 1.6 }}>
                B.A. · M.S.W. · B.D. · L.Th. <br />
                Serving alongside Rev. K. K. Sam for over 33 years in Biblical counseling and theological education.
              </p>
            </div>
          </div>
        </div>

        <div style={{ border: '2px solid #6f1d1b', borderRadius: '20px', overflow: 'hidden' }}>
          <div style={{ background: '#bb9457', padding: '12px', textAlign: 'center', color: '#fff', fontWeight: 600 }}>Counseling Services</div>
          <div style={{ padding: '32px', textAlign: 'center' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px' }}>
              {['Individual', 'Family', 'Marriage', 'Youth', "Women's", 'Wellness'].map(s => (
                <div key={s} style={{ background: '#6f1d1b', color: '#fff', padding: '10px', borderRadius: '6px', fontSize: '13px' }}>{s}</div>
              ))}
            </div>
            <a 
              href="https://wa.me/919744208752?text=I%20want%20to%20book%20a%20session" 
              target="_blank" 
              rel="noreferrer" 
              style={{ background: '#bb9457', color: '#fff', border: 'none', padding: '12px 32px', borderRadius: '25px', fontWeight: 700, cursor: 'pointer', textDecoration: 'none', display: 'inline-block' }}
            >
              Book a session
            </a>
          </div>
        </div>
      </div>

      {/*  MINISTRY, TEACHING & SPEAKING */}
      <div style={{ margin: '0 32px 48px', border: '1px solid #eee', borderRadius: '12px', overflow: 'hidden', background: '#fff' }}>
        <div style={{ background: '#6f1d1b', padding: '16px', textAlign: 'center', color: '#fff', fontWeight: 600, fontSize: '18px' }}>
          Ministry, Teaching & Speaking
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '40px', padding: '40px' }}>
          <div>
            <h4 style={{ color: '#bb9457', borderBottom: '1px solid #eee', paddingBottom: '8px', marginBottom: '15px' }}>Teaching</h4>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '13px', lineHeight: 1.7, color: '#444' }}>
              <li>• Zion Bible College</li><li>• Doulos Seminary</li><li>• Peniel Bible School</li><li>• Jesus & Friends</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: '#bb9457', borderBottom: '1px solid #eee', paddingBottom: '8px', marginBottom: '15px' }}>Ministry</h4>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '13px', lineHeight: 2, color: '#444' }}>
              <li>• Bible Teaching</li><li>• Family Ministry</li><li>• Women's Ministry</li><li>• Discipleship</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: '#bb9457', borderBottom: '1px solid #eee', paddingBottom: '8px', marginBottom: '15px' }}>Public Speaking</h4>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '13px', lineHeight: 2, color: '#444' }}>
              <li>• Family Seminars</li><li>• Youth Conferences</li><li>• Women's Meetings</li><li>• Bible Conferences</li>
            </ul>
          </div>
        </div>
      </div>

      {/*  NOW ENROLLING */}
      <div style={{ margin: '0 32px 64px', border: '1px solid #eee', borderRadius: '12px', overflow: 'hidden' }}>
        <div style={{ background: '#6f1d1b', padding: '24px 40px', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2 style={{ color: '#bb9457', margin: 0, fontSize: '24px' }}>Now Enrolling</h2>
            <h3 style={{ margin: '8px 0', fontSize: '20px' }}>Diploma in Life Skills and Counselling</h3>
            <p style={{ margin: 0, opacity: 0.8 }}>One Year · Online (Zoom) · For Men & Women</p>
          </div>
          <button style={{ background: '#bb9457', color: '#fff', border: 'none', padding: '12px 32px', borderRadius: '25px', fontWeight: 700 }}>Start on July</button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '40px', gap: '40px' }}>
          <div>
            <h4 style={{ color: '#6f1d1b', borderBottom: '1px solid #bb9457', paddingBottom: '8px', marginBottom: '16px' }}>Schedule</h4>
            <p style={{ color: '#bb9457', fontWeight: 700, marginBottom: '10px' }}>1st & 3rd Sundays monthly</p>
            <div style={{ color: '#666', display: 'flex', gap: '8px', marginBottom: '8px' }}><IconClock size={18}/> 9:30–10:30 PM IST</div>
            <div style={{ color: '#666', display: 'flex', gap: '8px' }}><IconCreditCard size={18}/> Installment options available</div>
          </div>
          <div style={{ background: '#bb955784', border: '2px dashed #bb9457', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '20px' }}>
            <a href="https://wa.me/919744208752?text=I%20want%20details%20about%20the%20Diploma%20Course%20Fee%20Structure" target="_blank" rel="noreferrer" style={{ color: '#6f1d1b', fontWeight: 600, textDecoration: 'none' }}>
              Fee structure and registration details provided upon enquiry.
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;