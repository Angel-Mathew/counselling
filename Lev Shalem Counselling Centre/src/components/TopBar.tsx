import{
  IconMail, 
  IconPhone, 
  IconMapPin, 
  IconBrandYoutube, 
  IconBrandFacebook, 
  IconBrandWhatsappFilled
} from '@tabler/icons-react'    

const TopBar = () => {
    return (
        <div className="topbar-root" style={{
            background:"var(--wine-deep)",
            padding:"0 24px",
            height:"var(--topbar-height)",
            display:"flex",
            alignItems:"center",
            justifyContent:"space-between",
            position:"fixed",
            top:0,
            left:0,
            right:0,
            zIndex:1000
        }}>

            <style>{`
              @media (max-width: 1024px) {
                .topbar-item-address { display: none !important; }
              }
              @media (max-width: 640px) {
                .topbar-root { padding: 0 12px !important; }
                .topbar-item-email { display: none !important; }
                .topbar-item-tel-dup { display: none !important; }
                .topbar-left { gap: 10px !important; }
              }
            `}</style>

            <div className="topbar-left" style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
        <a className="topbar-item-email" href="mailto:girijasam72@mail.com" style={{
          display: 'flex', alignItems: 'center', gap: '5px',
          color: 'rgba(255,255,255,0.6)', fontSize: '11px',
        }}>
              <IconMail size={13} color="var(--gold)" />
          girijasam72@mail.com
        </a>
        <a className="topbar-item-tel-dup" href="tel:+919744208752" style={{
            display:"flex", alignItems:"center", gap:"5px",
            color:"rgba(255,255,255,0.6", fontSize:"11px"
        }}>
          
          <IconPhone size={13} color="var(--gold)" />
          +91 97442 08752
        </a>
        <span className="topbar-item-address" style={{
          display: 'flex', alignItems: 'center', gap: '5px',
          color: 'rgba(255,255,255,0.6)', fontSize: '11px',
        }}>
          <IconMapPin size={13} color="var(--gold)" />
          Kottayam, Kerala
        </span>
        </div>
        <div className="topbar-social" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <a href="#" style={{
          width: '22px', height: '22px',
          background: 'rgba(187,148,87,0.15)',
          borderRadius: '4px',
          display: 'flex', alignItems: 'center',
          justifyContent: 'center', color: 'var(--gold)',
        }}>
          <IconBrandYoutube size={13} />
        </a>
        <a href="#" style={{
          width: '22px', height: '22px',
          background: 'rgba(187,148,87,0.15)',
          borderRadius: '4px',
          display: 'flex', alignItems: 'center',
          justifyContent: 'center', color: 'var(--gold)',
        }}>
          <IconBrandFacebook size={13} />
        </a>
         <a href="#" style={{
          width: '22px', height: '22px',
          background: 'rgba(187,148,87,0.15)',
          borderRadius: '4px',
          display: 'flex', alignItems: 'center',
          justifyContent: 'center', color: 'var(--gold)',
        }}>
          <IconBrandWhatsappFilled size={13} />
        </a>
      </div>
    </div>
  )
}
export default TopBar