import "./Landing.css";
import { useNavigate } from "react-router-dom";
import MusicToggle from "../components/MusicToggle";
import Watermark from "../components/Watermark";

export default function Landing() {
    const navigate = useNavigate();
    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className="page_landing">
            <MusicToggle style={{ position: "absolute", top: "1%", left: "4%", zIndex: 1001 }} />
            <div className="lnd-navbar-container">

                <div className="lnd-navbar">
                    <img src="/assets/budayana/islands/Cerita Budayana text.png" alt="Budayana" className="lnd-logo" onClick={() => window.scrollTo(0, 0)} />
                    <nav className="lnd-links">
                        <button onClick={() => scrollToSection("about")}>Tentang Kami</button>
                        <button onClick={() => scrollToSection("features")}>Fitur Utama</button>
                        <button onClick={() => scrollToSection("contact")}>Kontak</button>
                    </nav>
                    <button className="lnd-masuk-btn" onClick={() => navigate('/login')}>Masuk</button>
                </div>
            </div>

            <div className="lnd-hero">
                <img src="/assets/budayana/islands/Landing Group.png" alt="Mascot Group" className="lnd-hero-mascots" />
                <div className="lnd-hero-text">
                    <img src="/assets/budayana/islands/Game Name.png" alt="Banner" className="lnd-banner" />
                    
                    <h2 className="lnd-hero-sub">Platform Literasi<br/>Budaya untuk Siswa</h2>
                    <button className="lnd-daftar-btn" onClick={() => navigate('/sign-up')}>Daftar Akun</button>
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
                        <p>Cerita Budayana adalah platform pembelajaran digital yang dirancang untuk membantu siswa mengenal dan memahami budaya Indonesia melalui pendekatan literasi berbasis cerita.</p>
                        <p>Kami menggabungkan teknologi and nilai budaya untuk menciptakan pengalaman belajar yang ramah anak, mudah digunakan, dan relevan dengan kebutuhan pendidikan saat ini.</p>
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
               <button className="lnd-btn-jelajah" onClick={() => navigate('/login')}>Mulai Jelajah Sekarang! 🚀</button>
            </div>

            <div id="features" className="lnd-features">
               <h1 className="lnd-title-brown">Fitur Utama</h1>
               <p className="lnd-subtitle-brown">Jelajahi kekayaan budaya Indonesia dari 8 pulau<br/>dengan cara yang menyenangkan!</p>
               <div className="lnd-features-content w-full flex justify-center mt-[-20px] mb-12">
                 <img src="/assets/budayana/islands/newest landing.png" alt="Features" className="w-[85%] max-w-[1000px] object-contain drop-shadow-xl" />
               </div>
            </div>

            <div className="lnd-wave-footer">
               <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C69.67,36.57,143.27,65.89,217.39,78.23Z" fill="#5c4333"></path>
               </svg>
            </div>

            <div id="contact" className="lnd-kontak">
                <h1 className="lnd-title-white">Kontak Kami</h1>
                <p className="lnd-kontak-sub">Punya pertanyaan, saran, atau ingin berkolaborasi?<br></br> Jangan ragu untuk mengirimkan pesan kepada kami.</p>
                <div className="lnd-contact-info">
                   <div className="lnd-contact-row">
                      <img src="/assets/budayana/islands/email.png" alt="email" />
                      <a href="mailto:budayana3ra@gmail.com" class="no-underline hover:underline">budayana3ra@gmail.com</a>
                   </div>
                </div>
            </div>

            <Watermark />
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