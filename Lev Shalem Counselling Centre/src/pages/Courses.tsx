import React from 'react';
import { IconDownload } from '@tabler/icons-react';

// Define the shape of our course notice data for TypeScript
interface CourseNotice {
  id: number;
  img: string;
}

const Courses: React.FC = () => {
  // Paths in public folder should start with /assets/ (remove /public)
  const courseNotices: CourseNotice[] = [
    { id: 1, img: '/assets/notice 1.jpeg' }, 
    { id: 2, img: '/assets/notice2.jpeg' },
    { id: 3, img: '/assets/notice3.jpeg' },
  ];

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>

      <style>{`
        .crs-wrap { padding: 60px 32px; }
        .crs-pill-row { max-width: 1100px; margin: 0 auto 40px; flex-direction: row; }
        .crs-card { max-width: 1100px; margin: 0 auto; }
        .crs-header { padding: 35px 45px; flex-direction: row; }
        .crs-title { font-size: 32px; }
        .crs-notices-grid { padding: 45px; grid-template-columns: repeat(3, 1fr); }
        .crs-specs-bar { padding: 45px; grid-template-columns: repeat(4, 1fr); }
        .crs-cta-row { padding: 0 45px 65px; flex-direction: row; }

        @media (max-width: 1024px) {
          .crs-notices-grid { grid-template-columns: repeat(2, 1fr); gap: 20px !important; }
          .crs-specs-bar { grid-template-columns: repeat(2, 1fr); row-gap: 24px !important; }
        }

        @media (max-width: 640px) {
          .crs-wrap { padding: 32px 16px; }
          .crs-pill-row { flex-direction: column; align-items: flex-start; gap: 16px; margin-bottom: 24px; }
          .crs-header { flex-direction: column; align-items: flex-start !important; gap: 16px; padding: 24px 20px; }
          .crs-title { font-size: 22px; }
          .crs-notices-grid { grid-template-columns: 1fr; padding: 24px 16px; gap: 20px; }
          .crs-notices-grid img { height: 280px !important; }
          .crs-specs-bar { grid-template-columns: 1fr 1fr; padding: 24px 16px; row-gap: 20px !important; }
          .crs-specs-bar > div { border-right: none !important; }
          .crs-cta-row { flex-direction: column; padding: 0 20px 40px; gap: 14px; }
          .crs-cta-row a { box-sizing: border-box; }
          .crs-cta-row a { padding-left: 0 !important; padding-right: 0 !important; justify-content: center; text-align: center; }
        }

        @media (min-width: 1440px) {
          .crs-wrap { padding: 80px 32px; }
          .crs-card { max-width: 1300px; }
        }
      `}</style>
      
      {/* SECTION PILL HEADER */}
      <div className="crs-wrap">
      <div className="crs-pill-row" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <div style={{
          border: '1.5px solid #bb9457',
          padding: '10px 35px',
          borderRadius: '30px',
          color: '#bb9457',
          fontWeight: 700,
          fontSize: '15px',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          Courses Offered
        </div>
        <div style={{ flex: 1, height: '1.5px', background: '#e0d5c1' }} />
      </div>

      {/* MAIN COURSE CONTAINER */}
      <div className="crs-card" style={{ 
        background: '#fff', 
        borderRadius: '16px', 
        overflow: 'hidden', 
        border: '1px solid #bb9457',
        boxShadow: '0 10px 40px rgba(111,29,27,0.06)'
      }}>
        
        {/* WINE COLORED HEADER */}
        <div className="crs-header" style={{ 
          background: '#6f1d1b', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}>
          <div>
            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', fontWeight: 500, letterSpacing: '0.5px' }}>
              Covenant School of Theology and Counseling
            </div>
            <h1 className="crs-title" style={{ fontFamily: "'Playfair Display', serif", color: '#bb9457', margin: '6px 0 0', fontWeight: 700 }}>
              Diploma in Life Skills and Counselling
            </h1>
          </div>
          <div style={{ 
            background: '#bb9457', 
            color: '#fff', 
            padding: '12px 30px', 
            borderRadius: '30px', 
            fontWeight: 800, 
            fontSize: '15px',
            whiteSpace: 'nowrap',
          }}>
            Admission Open
          </div>
        </div>

        {/* IMAGE NOTICES GRID */}
        <div className="crs-notices-grid" style={{ 
          display: 'grid', 
        }}>
          {courseNotices.map((notice) => (
            <div key={notice.id} style={{ 
              border: '1px solid #ffffff', 
              borderRadius: '12px', 
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(82, 6, 6, 0.32)'
            }}>
              <img 
                src={notice.img} 
                alt={`Course Notice ${notice.id}`} 
                style={{ width: '100%', height: '440px', objectFit: 'contain', background: '#fcfcfc', display: 'block' }} 
              />
              
              {/* DOWNLOAD LINK FOR INDIVIDUAL NOTICE */}
              <a 
                href={notice.img} 
                download={`Notice-${notice.id}.jpeg`} 
                style={{ textDecoration: 'none' }}
              >
                <div style={{ 
                  background: '#c3964f', 
                  color: '#fff', 
                  padding: '15px', 
                  textAlign: 'center', 
                  fontWeight: 700, 
                  fontSize: '17px',
                  fontStyle: 'italic',
                  cursor: 'pointer',
                  width: '100%',
                }}>
                  Download notice
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* HORIZONTAL DIVIDER */}
        <div style={{ padding: '0 45px' }}>
          <div style={{ height: '1.5px', background: '#e0d5c1' }} />
        </div>

        {/* COURSE INFO SPECS BAR */}
        <div className="crs-specs-bar" style={{ 
          display: 'grid', 
          textAlign: 'center'
        }}>
          <div style={{ borderRight: '1.5px solid #e0d5c1' }}><div style={{ fontSize: '21px', fontWeight: 700, color: '#bb9457' }}>One Year</div></div>
          <div style={{ borderRight: '1.5px solid #e0d5c1' }}><div style={{ fontSize: '21px', fontWeight: 700, color: '#bb9457' }}>Online (Zoom)</div></div>
          <div style={{ borderRight: '1.5px solid #e0d5c1' }}><div style={{ fontSize: '21px', fontWeight: 700, color: '#bb9457' }}>Rs. 1,500 Total</div></div>
          <div><div style={{ fontSize: '21px', fontWeight: 700, color: '#bb9457' }}>9744208752</div></div>
        </div>

        {/* CALL TO ACTION BUTTONS */}
        <div className="crs-cta-row" style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <a href="https://wa.me/919744208752" target="_blank" rel="noopener noreferrer" style={{
            background: '#6f1d1b',
            color: '#fff',
            textDecoration: 'none',
            padding: '16px 60px',
            borderRadius: '10px',
            fontWeight: 800,
            fontSize: '17px',
            boxShadow: '0 6px 20px rgba(111,29,27,0.2)'
          }}>
            Apply Now
          </a>

          {/* DOWNLOAD BROCHURE LINK */}
          <a 
            href="/assets/notice3.jpeg" 
            download="Course_Brochure.jpeg"
            style={{
              background: '#bb9457',
              color: '#fff',
              padding: '16px 50px',
              borderRadius: '10px',
              fontWeight: 800,
              fontSize: '17px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none'
            }}
          >
            <IconDownload size={22} />
            Download Brochure
          </a>
        </div>

      </div>
      </div>
    </div>
  );
};

export default Courses;