import {
  IconCertificate,
  IconBuildingChurch,
  IconHeartHandshake,
  IconSchool,
  IconMapPin,
  IconBook2,
  IconUsers,
  IconStar,
} from '@tabler/icons-react'


const About = () => {
    return(
        <div style={{background:'var(--cream)'}}>

          <style>{`
            .about-hero { padding: 36px 32px; }
            .about-hero-img { width: 150px; height: 150px; }
            .about-hero-title { font-size: 28px; }
            .about-qualifications-grid { grid-template-columns: 1fr 1fr; }
            .about-teaching-grid { grid-template-columns: 1fr 1fr; }
            .about-ministry-grid { grid-template-columns: repeat(4, 1fr); }

            @media (max-width: 1024px) {
              .about-ministry-grid { grid-template-columns: repeat(2, 1fr); }
            }

            @media (max-width: 640px) {
              .about-hero { padding: 24px 20px; }
              .about-hero-img { width: 100px; height: 100px; }
              .about-hero-title { font-size: 22px; }
              .about-qualifications-grid { grid-template-columns: 1fr; }
              .about-teaching-grid { grid-template-columns: 1fr; }
              .about-ministry-grid { grid-template-columns: 1fr 1fr; }
            }

            @media (max-width: 340px) {
              .about-ministry-grid { grid-template-columns: 1fr; }
            }

            @media (min-width: 1440px) {
              .about-hero { padding: 48px 64px; }
            }
          `}</style>

         <div className="about-hero" style={{
        background: 'linear-gradient(135deg, var(--wine) 0%, #8B2320 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', right: '-30px', top: '-30px',
          width: '200px', height: '200px', borderRadius: '50%',
          background: 'rgba(187,148,87,0.06)',
        }} />
           <img
            className="about-hero-img"
            src="/assets/profile.png"
            alt="Girija Varghese"
            style={{
              borderRadius: '80%',
              border: '3px solid var(--gold)',
              objectFit: 'cover',
              marginTop: '-20px',
              flexShrink: 0,
              boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
            }}
          />
          <div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px',marginTop:'10px' }}>
              Lev Shalem Counselling Centre
        <h1 className="about-hero-title" style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              color: '#fff', lineHeight: 1.2, marginBottom: '4px',
            }}>
                Girija Varghese
              <span style={{ color: 'var(--gold)', fontSize: '20px' }}> (Girija Sam)</span>
            </h1>
            <p style={{
              fontFamily: "'Lora', serif",
              color: 'rgba(255,255,255,0.7)',
              fontSize: '13px', fontStyle: 'italic', marginBottom: '12px',
            }}>
            "Healing Hearts • Building Lives • Inspiring Hope"
            </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {['Christian Counselor', 'Bible Teacher', 'Public Speaker', 'Life Skills Trainer'].map(tag => (
                <span key={tag} style={{
                  background: 'rgba(187,148,87,0.2)',
                  border: '1px solid rgba(187,148,87,0.4)',
                  color: '#d4ae7a',
                  fontSize: '11px', fontWeight: 500,
                  padding: '4px 12px', borderRadius: '20px',
                }}>
                  {tag}
                </span>
                  ))}
            </div>
          </div>
        </div>
      </div>
      <div style={{
          background: '#fff', borderRadius: '12px',
          border: '0.5px solid var(--border)',
          overflow: 'hidden',
          boxShadow: '0 2px 12px rgba(111,29,27,0.06)',
        }}>
          <div style={{
            background: 'var(--wine)', padding: '12px 20px',
            display: 'flex', alignItems: 'center', gap: '8px',
          }}>
            <IconUsers size={16} color="var(--gold)" />
            <span style={{ color: 'var(--gold)', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Biography
            </span>
          </div>
          <div style={{ padding: '20px' }}>
            <p style={{
              fontSize: '14px', color: 'var(--text-mid)',
              lineHeight: 1.9, marginBottom: '14px',
            }}>
              I am <strong style={{ color: 'var(--wine)' }}>Girija Varghese (Girija Sam)</strong>, a Christian Counselor,
              Bible Teacher, Public Speaker, and Life Skills Trainer with over{' '}
              <strong style={{ color: 'var(--wine)' }}>33 years of ministry experience</strong>. Together with my husband,{' '}
              <strong style={{ color: 'var(--wine)' }}>Rev. K. K. Sam</strong>, I have served the Church through biblical
              teaching, counselling, discipleship, leadership development, and family ministry.
            </p>
            <p style={{
              fontSize: '14px', color: 'var(--text-mid)',
              lineHeight: 1.9,
            }}>
              My passion is to help individuals, families, and churches experience{' '}
              <strong style={{ color: 'var(--wine)' }}>spiritual growth, emotional healing, and purposeful living</strong>{' '}
              through biblical truth and professional counselling. I currently serve as a Counsellor at{' '}
              <strong style={{ color: 'var(--wine)' }}>Peniel Bible School and Counselling Institute, Kottayam</strong> and
              teach at multiple Bible colleges and seminaries across Kerala.
            </p>
          </div>
        </div>
 {/* ===== QUALIFICATIONS ===== */}
        <div style={{
          background: '#fff', borderRadius: '12px',
          border: '0.5px solid var(--border)',
          overflow: 'hidden',
          boxShadow: '0 2px 12px rgba(111,29,27,0.06)',
        }}>
          <div style={{
            background: 'var(--wine)', padding: '12px 20px',
            display: 'flex', alignItems: 'center', gap: '8px',
          }}>
            <IconCertificate size={16} color="var(--gold)" />
            <span style={{ color: 'var(--gold)', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Qualifications
            </span>
          </div>
          <div className="about-qualifications-grid" style={{ padding: '20px', display: 'grid', gap: '12px' }}>
            {[
              { short: 'B.A.', full: 'Bachelor of Arts' },
              { short: 'M.S.W.', full: 'Master of Social Work — Medical & Psychiatric Social Work' },
              { short: 'B.D.', full: 'Bachelor of Divinity — Senate of Serampore College (University)' },
              { short: 'L.Th.', full: 'Licentiate in Biblical Theology' },
              ].map((q, i) => (
              <div key={i} style={{
                background: 'var(--gold-pale)',
                borderRadius: '8px',
                padding: '14px 16px',
                borderLeft: '4px solid var(--gold)',
              }}>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '20px', fontWeight: 700,
                  color: 'var(--wine)', marginBottom: '4px',
                }}>
                  {q.short}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-mid)', lineHeight: 1.5 }}>
                  {q.full}
                </div>
              </div>
            ))}
          </div>
        </div>
         {/* ===== TEACHING EXPERIENCE ===== */}
        <div style={{
          background: '#fff', borderRadius: '12px',
          border: '0.5px solid var(--border)',
          overflow: 'hidden',
          boxShadow: '0 2px 12px rgba(111,29,27,0.06)',
        }}>
          <div style={{
            background: 'var(--wine)', padding: '12px 20px',
            display: 'flex', alignItems: 'center', gap: '8px',
          }}>
            <IconSchool size={16} color="var(--gold)" />
            <span style={{ color: 'var(--gold)', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Teaching Experience
            </span>
             </div>
          <div style={{ padding: '20px' }}>

            {/* Currently Teaching */}
            <div style={{ marginBottom: '20px' }}>
              <div style={{
                fontSize: '12px', fontWeight: 600,
                color: 'var(--gold)', textTransform: 'uppercase',
                letterSpacing: '0.07em', marginBottom: '10px',
                display: 'flex', alignItems: 'center', gap: '6px',
              }}>
                <IconStar size={12} />
                Currently Teaching
              </div>
               <div className="about-teaching-grid" style={{ display: 'grid', gap: '8px' }}>
                {[
                  { name: 'Zion Bible College', loc: 'Mallappally', status: 'Current' },
                  { name: 'Doulos Theological Seminary', loc: 'Tiruvalla', status: 'Current' },
                  { name: 'Peniel Bible School & Counselling Institute', loc: 'Kottayam', status: 'Present' },
                  { name: 'Jesus & Friends College and Seminary', loc: 'Kulakkada (Online)', status: 'Current' },
                ].map((t, i) => (
                  <div key={i} style={{
                    background: 'var(--gold-pale)',
                    borderRadius: '8px', padding: '12px 14px',
                    borderLeft: '3px solid var(--gold)',
                  }}>
                    <span style={{
                      background: i === 2 ? '#EAF3DE' : '#FAEEDA',
                      color: i === 2 ? '#3B6D11' : '#854F0B',
                      fontSize: '8px', fontWeight: 600,
                      padding: '2px 7px', borderRadius: '8px',
                      textTransform: 'uppercase', display: 'inline-block',
                      marginBottom: '5px',
                    }}>
                      {t.status}
                    </span>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--wine)', marginBottom: '2px' }}>
                      {t.name}
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <IconMapPin size={10} color="var(--gold)" />
                      {t.loc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Former Faculty */}
            <div>
              <div style={{
                fontSize: '12px', fontWeight: 600,
                color: 'var(--text-muted)', textTransform: 'uppercase',
                letterSpacing: '0.07em', marginBottom: '10px',
              }}>
                Former Faculty
              </div>
              <div className="about-teaching-grid" style={{ display: 'grid', gap: '8px' }}>
                {[
                  { name: 'Reach Out Theological Seminary', loc: 'Velloor' },
                  { name: 'Asian Bible College', loc: 'Palarivattom' },
                  { name: 'Kerala Theological Seminary', loc: 'Pulamon, Kottarakkara' },
                  { name: 'Doulos Biblical Seminary', loc: 'Vechoochira' },
                ].map((t, i) => (
                  <div key={i} style={{
                    background: '#f8f5ff',
                    borderRadius: '8px', padding: '12px 14px',
                    borderLeft: '3px solid rgba(187,148,87,0.4)',
                  }}>
                    <span style={{
                      background: '#f0ecf8', color: '#6b4fa0',
                      fontSize: '8px', fontWeight: 600,
                      padding: '2px 7px', borderRadius: '8px',
                      textTransform: 'uppercase', display: 'inline-block',
                      marginBottom: '5px',
                    }}>
                      Former
                    </span>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--wine)', marginBottom: '2px' }}>
                      {t.name}
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <IconMapPin size={10} color="var(--gold)" />
                      {t.loc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ===== MINISTRY EXPERIENCE ===== */}
        <div style={{
          background: '#fff', borderRadius: '12px',
          border: '0.5px solid var(--border)',
          overflow: 'hidden',
          boxShadow: '0 2px 12px rgba(111,29,27,0.06)',
        }}>
          <div style={{
            background: 'var(--wine)', padding: '12px 20px',
            display: 'flex', alignItems: 'center', gap: '8px',
          }}>
            <IconBuildingChurch size={16} color="var(--gold)" />
            <span style={{ color: 'var(--gold)', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Ministry Experience — 33+ Years with Rev. K. K. Sam
            </span>
          </div>
          <div className="about-ministry-grid" style={{ padding: '20px', display: 'grid', gap: '10px' }}>
            {[
              { icon: <IconBook2 size={22} />, label: 'Bible Teaching' },
              { icon: <IconHeartHandshake size={22} />, label: 'Christian Counselling' },
              { icon: <IconUsers size={22} />, label: 'Family Ministry' },
              { icon: <IconUsers size={22} />, label: "Women's Ministry" },
              { icon: <IconUsers size={22} />, label: 'Youth Ministry' },
              { icon: <IconStar size={22} />, label: 'Leadership Training' },
              { icon: <IconBuildingChurch size={22} />, label: 'Discipleship' },
              { icon: <IconBook2 size={22} />, label: 'Life Skills Training' },
            ].map((m, i) => (
              <div key={i} style={{
                background: 'var(--gold-pale)',
                borderRadius: '8px', padding: '14px 10px',
                textAlign: 'center',
                border: '0.5px solid var(--border)',
              }}>
                <div style={{ color: 'var(--gold)', marginBottom: '6px' }}>{m.icon}</div>
                <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--wine)' }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        
        </div>

      
    
  )
}

export default About