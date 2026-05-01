import "./Landing.css";
import { useNavigate } from "react-router-dom";

export default function Landing() {
    const navigate = useNavigate();
    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className="page_landing">
            <div className="lnd-navbar-container">
                <div className="lnd-navbar">
                    <img src="/assets/budayana/islands/Budayana text.png" alt="Budayana" className="lnd-logo" onClick={() => window.scrollTo(0, 0)} />
                    <nav className="lnd-links">
                        <button onClick={() => scrollToSection("about")}>Tentang Kami</button>
                        <button onClick={() => scrollToSection("features")}>Fitur Utama</button>
                        <button onClick={() => scrollToSection("contact")}>Kontak</button>
                    </nav>
                    <div className="relative inline-block group">
                        <button className="lnd-masuk-btn">Masuk</button>
                        <div className="absolute right-0 mt-2 w-56 bg-white border border-[#E8D9C0] rounded-xl shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                            <button onClick={() => navigate('/login')} className="w-full text-left px-4 py-2 hover:bg-[#FDF5E6] font-fredoka-one text-[#955C2E] font-semibold transition-colors">Masuk sebagai Siswa</button>
                            <button onClick={() => navigate('/monitoring-login-guru')} className="w-full text-left px-4 py-2 hover:bg-[#FDF5E6] font-fredoka-one text-[#955C2E] font-semibold transition-colors">Masuk sebagai Guru</button>
                            <button onClick={() => navigate('/monitoring-login-ortu')} className="w-full text-left px-4 py-2 hover:bg-[#FDF5E6] font-fredoka-one text-[#955C2E] font-semibold transition-colors">Masuk sebagai Orang Tua</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lnd-hero">
                <img src="/assets/budayana/islands/Landing Group.png" alt="Mascot Group" className="lnd-hero-mascots" />
                <div className="lnd-hero-text">
                    <img src="/assets/budayana/islands/Game Name.png" alt="Banner" className="lnd-banner" />
                    <h2 className="lnd-hero-sub">Platform Literasi<br/>Budaya untuk Siswa</h2>
                    <div className="relative inline-block group">
                        <button className="lnd-daftar-btn">Daftar Akun</button>
                        <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-56 bg-white border border-[#E8D9C0] rounded-xl shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                            <button onClick={() => navigate('/sign-up')} className="w-full text-center px-4 py-2 hover:bg-[#FDF5E6] font-fredoka-one text-[#955C2E] font-semibold transition-colors">Daftar Siswa</button>
                            <button onClick={() => navigate('/monitoring-login-guru')} className="w-full text-center px-4 py-2 hover:bg-[#FDF5E6] font-fredoka-one text-[#955C2E] font-semibold transition-colors">Daftar Guru</button>
                            <button onClick={() => navigate('/monitoring-login-ortu')} className="w-full text-center px-4 py-2 hover:bg-[#FDF5E6] font-fredoka-one text-[#955C2E] font-semibold transition-colors">Daftar Orang Tua</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <img src="/assets/budayana/islands/rumput pendek.png" alt="Ground Wave" className="lnd-ground-wave" />

            <div id="about" className="lnd-about">
                <h1 className="lnd-title-brown">Tentang Kami</h1>
                <div className="lnd-about-content">
                    <div className="lnd-about-img-circle">
                        <img src="/assets/budayana/islands/Harimau.png" alt="Harimau" />
                    </div>
                    <div className="lnd-about-text-content">
                        <p>Budayana adalah platform pembelajaran digital yang dirancang untuk membantu siswa mengenal dan memahami budaya Indonesia melalui pendekatan literasi berbasis cerita.</p>
                        <p>Kami menggabungkan teknologi dan nilai budaya untuk menciptakan pengalaman belajar yang ramah anak, mudah digunakan, dan relevan dengan kebutuhan pendidikan saat ini.</p>
                    </div>
                </div>
            </div>

            <div className="lnd-interaktif">
               <h1 className="lnd-title-white">Kuis Budaya Interaktif</h1>
               <p className="lnd-subtitle-white">Jelajahi kekayaan budaya Indonesia dari 8 pulau<br/>dengan cara yang menyenangkan!</p>
               <div className="lnd-grid-islands">
                  <IslandCard img="Sumatra.png" name="Sumatra" navigate={navigate} />
                  <IslandCard img="Jawa.png" name="Jawa" navigate={navigate} />
                  <IslandCard img="Kalimantan.png" name="Kalimantan" navigate={navigate} />
                  <IslandCard img="Sulawesi.png" name="Sulawesi" navigate={navigate} />
                  <IslandCard img="Papua.png" name="Papua" navigate={navigate} />
                  <IslandCard img="Bali.png" name="Bali" navigate={navigate} />
                  <IslandCard img="Maluku.png" name="Maluku" navigate={navigate} />
                  <IslandCard img="Nusa Tenggara.png" name="Nusa Tenggara" navigate={navigate} />
               </div>
               <div className="relative inline-block group">
                   <button className="lnd-btn-jelajah">Mulai Jelajah Sekarang! 🚀</button>
                   <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 bg-white border border-[#E8D9C0] rounded-xl shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                       <button onClick={() => navigate('/login')} className="w-full text-center px-4 py-2 hover:bg-[#FDF5E6] font-fredoka-one text-[#955C2E] font-semibold transition-colors">Masuk sebagai Siswa</button>
                       <button onClick={() => navigate('/monitoring-login-guru')} className="w-full text-center px-4 py-2 hover:bg-[#FDF5E6] font-fredoka-one text-[#955C2E] font-semibold transition-colors">Masuk sebagai Guru</button>
                       <button onClick={() => navigate('/monitoring-login-ortu')} className="w-full text-center px-4 py-2 hover:bg-[#FDF5E6] font-fredoka-one text-[#955C2E] font-semibold transition-colors">Masuk sebagai Orang Tua</button>
                   </div>
               </div>
            </div>

            <div id="features" className="lnd-features">
               <h1 className="lnd-title-brown">Fitur Utama</h1>
               <p className="lnd-subtitle-brown">Jelajahi kekayaan budaya Indonesia dari 8 pulau<br/>dengan cara yang menyenangkan!</p>
               <div className="lnd-features-content" style={{ position: 'relative', width: '100%' }}>
                 <div style={{ position: 'relative', border: '2px solid #7B4F2E', backgroundColor: '#FDEBCC', borderRadius: '24px', display: 'flex', width: '100%', maxWidth: '800px', margin: '40px auto', paddingBottom: '20px' }}>
                    
                    {/* Kolom Cerita Rakyat */}
                    <div style={{ flex: 1, borderRight: '2px dashed #955C2E', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '40px', position: 'relative' }}>
                       <div style={{ position: 'absolute', top: '-24px', backgroundColor: '#BE6E3A', borderRadius: '12px', padding: '12px 40px', color: 'white', fontWeight: '800', fontSize: '1.4rem' }}>
                         Cerita Rakyat
                       </div>
                       
                       {/* Connector Line */}
                       <div style={{ position: 'absolute', width: '2px', backgroundColor: '#7B4F2E', top: '100px', bottom: '80px', zIndex: 1 }}></div>

                       <FlowCircle img="tahap 1.png" text="Pre-Test" />
                       <FlowCircle img="tahap 2.png" text="Story" />
                       <FlowCircle img="tahap 3.png" text="Post-Test" />
                    </div>

                    {/* Kolom Quiz Kultur */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '40px', position: 'relative' }}>
                       <div style={{ position: 'absolute', top: '-24px', backgroundColor: '#BE6E3A', borderRadius: '12px', padding: '12px 40px', color: 'white', fontWeight: '800', fontSize: '1.4rem' }}>
                         Quiz Kultur
                       </div>
                       
                       {/* Connector Line */}
                       <div style={{ position: 'absolute', width: '2px', backgroundColor: '#7B4F2E', top: '100px', bottom: '80px', zIndex: 1 }}></div>

                       <FlowCircle img="tahap 1.png" text="Pilih Pulau" />
                       <FlowCircle img="tahap 2.png" text="Pilih Topik" />
                       <FlowCircle img="tahap 3.png" text="Pilih Level" />
                    </div>
                 </div>
                 
                 <img src="/assets/budayana/islands/Badak.png" alt="Badak" className="lnd-badak-float" style={{ right: '-50px', bottom: '-50px', zIndex: 4 }} />
               </div>
            </div>

            <div className="lnd-wave-footer">
               <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C69.67,36.57,143.27,65.89,217.39,78.23Z" fill="#5c4333"></path>
               </svg>
            </div>

            <div id="contact" className="lnd-kontak">
                <h1 className="lnd-title-white">Kontak Kami</h1>
                <p className="lnd-kontak-sub">Punya pertanyaan, saran, atau ingin berkolaborasi? Jangan ragu untuk mengirimkan pesan kepada kami.</p>
                <div className="lnd-contact-info">
                   <div className="lnd-contact-row">
                      <img src="/assets/budayana/islands/email.png" alt="email" />
                      <span>budayana@gmail.com</span>
                   </div>
                   <div className="lnd-contact-row">
                      <span>📞 0895-000-000</span>
                   </div>
                </div>
            </div>
        </div>
    );
}

function IslandCard({ img, name, navigate }) {
    return (
        <div className="lnd-island-card" onClick={() => navigate('/login')}>
            <img src={`/assets/budayana/islands/${img}`} alt={name} />
            <span>{name}</span>
        </div>
    );
}

function FlowCircle({ img, text }) {
    return (
        <div style={{ 
            width: '180px', height: '120px', 
            borderRadius: '50%', backgroundColor: 'white', 
            border: '3px solid #7B4F2E', 
            display: 'flex', flexDirection: 'column', 
            justifyContent: 'center', alignItems: 'center', 
            zIndex: 2, margin: '20px 0' 
        }}>
            <img src={`/assets/budayana/islands/${img}`} alt={text} style={{ width: '45px', height: '45px', objectFit: 'contain', marginBottom: '8px' }} />
            <span style={{ color: '#955C2E', fontWeight: '800', fontSize: '1.1rem' }}>{text}</span>
        </div>
    );
}