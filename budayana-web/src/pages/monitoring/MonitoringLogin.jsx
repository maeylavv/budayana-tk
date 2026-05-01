import { useNavigate } from "react-router-dom";
import "../../pages/auth/Sign_Up.css"; // Reuse the sign-up styling

export default function MonitoringLogin({ role }) {
  const navigate = useNavigate();

  const isGuru = role === "guru";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (role === 'guru') {
        navigate('/monitoring-guru/profil');
    } else if (role === 'ortu') {
        navigate('/monitoring-ortu/profil');
    };
  };

  const goToLogin = () => {
    navigate("/login"); // fallback or can be ignored
  };

  return (
    <div className='signin_page'>
      <div className='redirect'>
        <p>Sudah punya akun?</p>
        <div className='redi_button'>
          <button className='to_login' onClick={goToLogin}>
            Masuk Akun
          </button>
        </div>
      </div>

      <div className='header_form'>
        <h1>Selamat Datang di</h1>
        <img src='/assets/budayana/islands/Game Name.png' alt='Budayana'></img>
        <h2>Dashboard {isGuru ? "Guru" : "Orang Tua"}</h2>
        <p style={{ fontFamily: 'Fredoka One', color: '#955C2E', marginTop: '-10px', marginBottom: '20px', fontWeight: 'bold' }}>
          Daftar akunmu dulu yuk!
        </p>
      </div>

      <div className='signin_form'>
        <form onSubmit={handleSubmit}>
          <div className='field'>
            <label htmlFor='name'>Nama</label>
            <input type='text' id='name' placeholder='Nama Kamu' />
          </div>

          {isGuru ? (
            <>
              <div className='field'>
                <label htmlFor='guruKelas'>Guru Kelas</label>
                <input type='text' id='guruKelas' placeholder='Mengajar kelas berapa?' />
              </div>
            </>
          ) : (
            <>
              <div className='field'>
                <label htmlFor='namaAnak'>Nama Anak</label>
                <input type='text' id='namaAnak' placeholder='Nama Anak (Pastikan sama dengan akun anak)' />
              </div>
            </>
          )}

          <div className='field'>
            <label htmlFor='username'>Username</label>
            <input type='text' id='username' placeholder='Username Kamu' />
          </div>

          <div className='field'>
            <label htmlFor='password'>Password</label>
            <div className='password-wrapper'>
              <input type='password' id='password' placeholder='Password Kamu (8+ Karakter)' />
            </div>
          </div>

          <div className='field'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' placeholder='emailkamu@gmail.com' />
          </div>

          <div className='submit'>
            <button type='submit' className='register' style={{ backgroundColor: '#955C2E' }}>
              Mulai!
            </button>
          </div>
        </form>
      </div>

      <div className='background'>
        <div className='grass'>
          <img className='rumput' src='/assets/budayana/islands/Rumput.png' alt='rumput'></img>
        </div>
        <div className='animals'>
          <div className='animals_group_left'>
            <img className='buaya' src='/assets/budayana/islands/Buaya.png' alt='buaya'></img>
            <img className='monyet' src='/assets/budayana/islands/Monyet.png' alt='monyet'></img>
          </div>
          <div className='animals_group_right'>
            <img className='badak' src='/assets/budayana/islands/Badak.png' alt='badak'></img>
            <img className='harimau' src='/assets/budayana/islands/Harimau.png' alt='harimau'></img>
          </div>
        </div>
      </div>
    </div>
  );
}
