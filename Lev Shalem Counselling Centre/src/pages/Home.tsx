import { 
  IconPlayerPlay, 
  IconCalendarPlus, 
  IconBrandWhatsapp, 
  IconBrandYoutube,
  IconClock,
  IconCreditCard,
  IconSchool,
  IconMicrophone2, // Icon for Public Speaking
  IconUsers // Icon for Ministry
} from '@tabler/icons-react';

const Home = () => {
  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      
      {/*  HERO VIDEO SECTION */}
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
             <a href="/contact" style={{ background: '#bb9457', color: '#fff', padding: '14px 28px', borderRadius: '6px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', fontWeight: 600 }}>
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

      {/* ABOUT & COUNSELING SECTION */}
      <div style={{ padding: '48px 32px', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '24px' }}>
        <div style={{ border: '2px solid #bb9457', borderRadius: '12px', overflow: 'hidden' }}>
          <div style={{ background: '#6f1d1b', padding: '12px', textAlign: 'center', color: '#fff', fontWeight: 600 }}>About GIRIJA VARGHESE</div>
          <div style={{ padding: '32px', display: 'flex', gap: '24px' }}>
            <img src="/assets/profileinhomepg.png" alt="Girija" style={{ width: '120px', height: '150px', borderRadius: '8px', objectFit: 'cover' }} />
            <div>
              <h3 style={{ color: '#6f1d1b', fontSize: '22px', margin: '10px 12px 15px 14px' }}>Counselor · Teacher · Speaker</h3>
              <p style={{ color: '#444', lineHeight: 1.6 }}>
                B.A. · M.S.W. · B.D. · L.Th. <br />
                Serving alongside Rev. K. K. Sam for over 33 years in Biblical counseling and theological education across Kerala.
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
            <button style={{ background: '#bb9457', color: '#fff', border: 'none', padding: '12px 32px', borderRadius: '25px', fontWeight: 700, cursor: 'pointer' }}>Book a session</button>
          </div>
        </div>
      </div>

      {/*  MINISTRY, TEACHING & PUBLIC SPEAKING (3 COLUMN LAYOUT) */}
      <div style={{ margin: '0 32px 48px', border: '1px solid #eee', borderRadius: '12px', overflow: 'hidden', background: '#fff' }}>
        <div style={{ background: '#6f1d1b', padding: '16px', textAlign: 'center', color: '#fff', fontWeight: 600, fontSize: '18px' }}>
          Ministry, Teaching & Speaking
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '40px', padding: '40px' }}>
          
          {/*  Teaching */}
          <div>
            <h4 style={{ color: '#bb9457', borderBottom: '1px solid #eee', paddingBottom: '8px', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <IconSchool size={20}/> Teaching
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '13px', lineHeight: 1.7, color: '#444' }}>
              <li style={{ fontWeight: 600, color: '#6f1d1b', marginBottom: '4px' }}>Current:</li>
              <li>• Zion Bible College, Mallappally</li>
              <li>• Doulos Theological Seminary, Tiruvalla</li>
              <li>• Peniel Bible School, Kottayam</li>
              <li>• Jesus & Friends Seminary (Online)</li>
              <li style={{ fontWeight: 600, color: '#999', marginTop: '10px', marginBottom: '4px' }}>Previously:</li>
              <li>• Reach Out Theo. Seminary, Velloor</li>
              <li>• Asian Bible College, Palarivattom</li>
              <li>• Kerala Theo. Seminary, Pulamon</li>
              <li>• Doulos Biblical Seminary, Vechhochira</li>
            </ul>
          </div>

          {/*  Ministry */}
          <div>
            <h4 style={{ color: '#bb9457', borderBottom: '1px solid #eee', paddingBottom: '8px', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <IconUsers size={20}/> Ministry
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '13px', lineHeight: 2, color: '#444' }}>
              <li>• Bible Teaching & Counselling</li>
              <li>• Family Ministry</li>
              <li>• Women's & Youth Ministry</li>
              <li>• Leadership Training</li>
              <li>• Discipleship & Life Skills</li>
            </ul>
          </div>

          {/*  Public Speaking */}
          <div>
            <h4 style={{ color: '#bb9457', borderBottom: '1px solid #eee', paddingBottom: '8px', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <IconMicrophone2 size={20}/> Public Speaking
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '13px', lineHeight: 2, color: '#444' }}>
              <li>• Family & Leadership Seminars</li>
              <li>• Youth Conferences</li>
              <li>• Women's Meetings</li>
              <li>• Bible Conferences</li>
              <li>• Life Skills Workshops</li>
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
            <span style={{ color: '#6f1d1b', fontWeight: 600 }}>Fee structure and registration details provided upon enquiry.</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;