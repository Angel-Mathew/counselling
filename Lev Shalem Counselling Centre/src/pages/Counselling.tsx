import { 
  IconBrandWhatsapp, 
  IconCalendarEvent, 
  IconUser, 
  IconUsers, 
  IconMoodBoy, 
  IconHearts, 
  IconLeaf, 
  IconRefresh, 
  IconUsersGroup,
  IconPhone,
  IconCalendarTime,
  IconVideo,
  IconHeartHandshake,
  IconInfoCircle
} from '@tabler/icons-react';

const Counselling = () => {
    const services =[
        {
            title:"Individual Counselling",
            icon:<IconUser size={24}/>,
            description:"One-on-one sessions to help you navigate personal struggles, emotional pain, grief, anxiety, identity issues, and spiritual challenges through biblical guidance and professional support.",
            tags:["Anxiety","Grief","Identity Issues","Spiritual Challenges","Emotional Pain","Personal Struggles,additions"]
        },
        {
            title: "Family & Marriage Counselling",
            icon:<IconUsers size={24}/>,
            description:"Support for couples and families to strengthen relationships, improve communication, resolve conflicts, and foster a healthy family environment.",
              tags: ["Conflict resolution", "Communication", "Parenting"]
        },
        {
            title:"Youth & Women's Counselling",
            icon:<IconMoodBoy size={24}/>,
            description:"Dedicated support for young people facing identity, peer pressure, academic stress, and relationship challenges. Women's counselling addresses emotional healing, purpose, and spiritual growth.",
            tags:["Identity","Peer Pressure","Academic Stress","Relationship Challenges","Emotional Healing","Purpose","Spiritual Growth","Mental Health","Self-Esteem","Empowerment","Trauma Recovery","confidence building","Lonliness","suicidal thoughts","Stress Management"]
        },
         {
      title: "Pre-marital",
      icon: <IconHearts size={20} />,
      desc: "Preparing couples for a strong, Christ-centered marriage. Covers communication, expectations, finances, conflict, family dynamics, and building a God-honouring relationship before the wedding.",
      tags: ["Expectations", "Finances", "Commitment"]
    },
     {
      title: "Emotional Wellness",
      icon: <IconLeaf size={20} />,
      desc: "Support for emotional healing, stress management, burnout recovery, depression, and mental wellness — integrating biblical truth with professional social work expertise for holistic healing.",
      tags: ["Depression", "Stress", "Burnout"]
    },
      {
      title: "Addiction Counselling",
      icon: <IconRefresh size={20} />,
      desc: "Christ-centered support for those battling addiction and harmful behaviours. Combines spiritual restoration with professional counselling to bring freedom, healing, and renewed purpose in Christ.",
      tags: ["Recovery", "Freedom", "Restoration"]
    }
    ];
    return(
          <div style={{ background: '#fdfaf5', minHeight: '100vh', paddingBottom: '80px' }}>

      <style>{`
        .cns-hero { padding: 60px 40px; }
        .cns-hero-title { font-size: 42px; }
        .cns-hero-actions { flex-direction: row; }
        .cns-info-box { margin: 40px auto; max-width: 1000px; }
        .cns-services-grid { grid-template-columns: 1fr 1fr; max-width: 1100px; }
        .cns-group-therapy { flex-direction: row; justify-content: space-between; padding: 25px; }
        .cns-book-section { margin: 60px auto 0; max-width: 1100px; }
        .cns-book-grid { grid-template-columns: repeat(4, 1fr); }

        @media (max-width: 1024px) {
          .cns-book-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .cns-hero { padding: 40px 20px; }
          .cns-hero-title { font-size: 28px; }
          .cns-logo-row { flex-direction: column; }
          .cns-hero-actions { flex-direction: column; align-items: stretch !important; }
          .cns-info-box { margin: 24px auto; padding: 16px !important; }
          .cns-services-grid { grid-template-columns: 1fr; padding: 0 16px !important; gap: 16px !important; }
          .cns-group-therapy { flex-direction: column; align-items: flex-start !important; gap: 20px; }
          .cns-group-therapy .cns-gt-tags { justify-content: flex-start !important; }
          .cns-book-section { margin: 40px auto 0; padding: 0 16px !important; }
          .cns-book-grid { grid-template-columns: 1fr 1fr; gap: 12px !important; }
        }

        @media (min-width: 1440px) {
          .cns-hero { padding: 80px 60px; }
          .cns-services-grid { max-width: 1300px; }
        }
      `}</style>
      
      {/* 1. HERO SECTION */}
     <div className="cns-hero" style={{ background: '#6f1d1b', textAlign: 'center', color: '#fff' }}>
  
  {/* LOGO SECTION */}
  <div className="cns-logo-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', marginBottom: '20px' }}>
    <img 
      src="/assets/logo.png" 
      alt="Lev Shalem Logo" 
      style={{ height: '80px', width: 'auto', objectFit: 'contain' }} 
    />
    <div style={{ textAlign: 'left', borderLeft: '1px solid rgba(187,148,87,0.4)', paddingLeft: '15px' }}>
      <span style={{ display: 'block', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#bb9457', fontWeight: 700 }}>
        Lev Shalem
      </span>
      <span style={{ display: 'block', fontSize: '20px', letterSpacing: '1px', textTransform: 'uppercase', color: '#fff', fontWeight: 400 }}>
        Counselling Centre
      </span>
    </div>
  </div>


        <h1 className="cns-hero-title" style={{ fontFamily: "'Playfair Display', serif", margin: '0 0 20px 0' }}>Counselling Services</h1>
        <p style={{ maxWidth: '800px', margin: '0 auto 30px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
          Professional biblical counselling provided by <strong style={{color: '#bb9457'}}>Girija Varghese (Girija Sam)</strong> — M.S.W. (Medical & Psychiatric Social Work), B.D. — offering compassionate, Christ-centred support for individuals, families and communities.
        </p>
          <div className="cns-hero-actions" style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
          <button style={{ background: '#bb9457', color: '#fff', border: 'none', padding: '12px 24px', borderRadius: '6px', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <IconCalendarEvent size={18}/> Book a Session
          </button>
          <button style={{ background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', padding: '12px 24px', borderRadius: '6px', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <IconBrandWhatsapp size={18} color="#25D366"/> WhatsApp Us
          </button>
        </div>
      </div>
      <div style={{background: "#bb9457",padding:"12px", textAlign:"center", color:"#fff", fontSize:"14px",fontStyle:"italic"}}>
        "Cast all your anxiety on him because he cares for you." — 1 Peter 5:7
      </div>
       <div className="cns-info-box" style={{ padding: '20px', border: '1px solid #e0d5c1', borderRadius: '8px', background: '#fff', display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
        <IconInfoCircle size={24} color="#bb9457" style={{ flexShrink: 0 }} />
        <p style={{ margin: 0, fontSize: '14px', color: '#666', lineHeight: 1.6 }}>
          All counselling sessions are rooted in <strong>biblical truth</strong> and professional social work practice. Sessions are available <strong>in-person and online</strong>. Confidentiality is maintained at all times. Contact Girija Sam at <strong>+91 97442 08752</strong> to schedule.
        </p>
      </div>
      <div className="cns-services-grid" style={{ margin: '0 auto', display: 'grid', gap: '24px', padding: '0 20px' }}>
        {services.map((s, i) => (
          <div key={i} style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
            <div style={{ background: '#6f1d1b', padding: '15px 20px', color: '#fff', display: 'flex', alignItems: 'center', gap: '12px' }}>
              {s.icon}
              <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>{s.title}</h3>
            </div>
            <div style={{ padding: '25px' }}>
              <p style={{ margin: '0 0 20px 0', fontSize: '14.5px', color: '#555', lineHeight: 1.6 }}>{s.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {s.tags.map(tag => (
                  <span key={tag} style={{ background: '#fdfaf5', border: '1px solid #eee', color: '#bb9457', padding: '4px 12px', borderRadius: '20px', fontSize: '12px' }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
    <div style={{ gridColumn: '1 / -1', background: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
          <div style={{ background: '#6f1d1b', padding: '15px 20px', color: '#fff', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <IconUsersGroup size={20} />
            <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>Group Therapy <span style={{fontSize: '10px', background: '#bb9457', padding: '2px 8px', borderRadius: '10px', marginLeft: '10px', verticalAlign: 'middle'}}>New</span></h3>
          </div>
          <div className="cns-group-therapy" style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
            <p style={{ margin: 0, fontSize: '14.5px', color: '#555', lineHeight: 1.6, maxWidth: '600px' }}>
              A safe, supportive group environment where individuals walk through healing together — sharing experiences, growing in faith, and encouraging one another under guided professional facilitation.
            </p>
            <div className="cns-gt-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'flex-end' }}>
              {["Shared healing", "Community support", "Faith-based", "Facilitated sessions"].map(tag => (
                <span key={tag} style={{ background: '#fdfaf5', border: '1px solid #eee', color: '#bb9457', padding: '4px 12px', borderRadius: '20px', fontSize: '12px' }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/*  HOW TO BOOK SECTION */}
      <div className="cns-book-section" style={{ padding: '0 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '30px' }}>
          <div style={{ height: '1px', flex: 1, background: '#e0d5c1' }} />
          <span style={{ fontSize: '12px', color: '#bb9457', fontWeight: 600, textTransform: 'uppercase' }}>How to Book</span>
          <div style={{ height: '1px', flex: 1, background: '#e0d5c1' }} />
        </div>
        
        <div className="cns-book-grid" style={{ display: 'grid', gap: '20px' }}>
          {[
            { step: 1, icon: <IconPhone size={24}/>, title: "Contact", text: "Call or Whatsapp +91 97442" },
            { step: 2, icon: <IconCalendarTime size={24}/>, title: "Schedule", text: "Choose a convenient date and time" },
            { step: 3, icon: <IconVideo size={24}/>, title: "Session", text: "In-person or online via Zoom" },
            { step: 4, icon: <IconHeartHandshake size={24}/>, title: "Healing", text: "Walk toward wholeness in Christ" }
          ].map((item, idx) => (
            <div key={idx} style={{ background: '#fff', padding: '30px 20px', borderRadius: '12px', textAlign: 'center', border: '1px solid #eee' }}>
              <div style={{ width: '30px', height: '30px', background: '#6f1d1b', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px', fontSize: '12px', fontWeight: 700 }}>
                {item.step}
              </div>
              <div style={{ color: '#bb9457', marginBottom: '10px' }}>{item.icon}</div>
              <h4 style={{ margin: '0 0 5px 0', fontSize: '16px', color: '#6f1d1b' }}>{item.title}</h4>
              <p style={{ margin: 0, fontSize: '12px', color: '#888', lineHeight: 1.4 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Counselling;