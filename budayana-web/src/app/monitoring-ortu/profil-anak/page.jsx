import { useState } from "react";
import MonitoringSidebar from "../../../components/MonitoringSidebar";
import { STUDENTS } from "../../../lib/dummyData";
import "../../../pages/Profile.css";
import "../../../pages/Results.css";

export default function MonitoringOrtuProfilAnak() {
  const student = STUDENTS.find((s) => s.id === "s1");

  const [isEditing, setIsEditing] = useState(false);
  
  const [formData, setFormData] = useState({
    nama: student ? student.name : "",
    kelas: student ? student.class : "",
    username: student ? student.username : "",
    password: "*****",
    emailWali: "Rosidah@gmail.com"
  });

  if (!student) {
    return (
      <div className="flex bg-[#FEF6DF] min-h-screen w-full" style={{ fontFamily: "'Fredoka One', sans-serif" }}>
        <MonitoringSidebar role="ortu" />
        <main className="flex-1 p-10 box-border overflow-x-hidden">
          <p>Siswa tidak ditemukan.</p>
        </main>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      nama: student.name,
      kelas: student.class,
      username: student.username,
      password: "*****",
      emailWali: "Rosidah@gmail.com"
    });
    setIsEditing(false);
  };

  return (
    <div className="flex bg-[#FEF6DF] min-h-screen w-full" style={{ fontFamily: "'Fredoka One', sans-serif" }}>
      <MonitoringSidebar role="ortu" />
      
      <main className="flex-1 p-10 box-border overflow-x-hidden">
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <section className="profile-top">
            <div className="profile-avatar-circle" style={{ fontSize: '3rem', width: '120px', height: '120px', borderColor: '#7B4F2E', backgroundColor: '#F2E5D3' }}>
              {student.avatar}
            </div>
            <div className="profile-top-text" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
              <h1 className="profile-name" style={{ color: '#7B4F2E', fontSize: '2.5rem', fontWeight: '800' }}>{student.name}</h1>
              <div className="profile-grade-badge" style={{ backgroundColor: '#f3a64c', color: 'white', fontSize: '1.2rem', padding: '6px 24px', borderRadius: '999px', fontWeight: 'bold' }}>
                Kelas {student.class}
              </div>
            </div>
          </section>
        </div>

        <hr className="profile-divider" style={{ borderTop: '2px solid #E8D9C0', margin: '30px 0' }} />

        <div className="form_profile" style={{ maxWidth: '800px' }}>
          <section className="profile-form">
            <div className="profile-field" style={{ marginBottom: '24px' }}>
              <label style={{ color: '#955C2E', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '8px', display: 'block' }}>Nama</label>
              <input 
                type="text" 
                name="nama"
                value={formData.nama} 
                onChange={handleChange}
                readOnly={!isEditing} 
                style={{ width: '100%', padding: '16px 20px', borderRadius: '16px', border: '2px solid #E8D9C0', fontSize: '1.1rem', color: '#7B4F2E', fontWeight: 'bold', outline: 'none', backgroundColor: '#ffffff' }} 
              />
            </div>
            <div className="profile-field" style={{ marginBottom: '24px' }}>
              <label style={{ color: '#955C2E', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '8px', display: 'block' }}>Kelas</label>
              <input 
                type="text" 
                name="kelas"
                value={formData.kelas} 
                onChange={handleChange}
                readOnly={!isEditing} 
                style={{ width: '100%', padding: '16px 20px', borderRadius: '16px', border: '2px solid #E8D9C0', fontSize: '1.1rem', color: '#7B4F2E', fontWeight: 'bold', outline: 'none', backgroundColor: '#ffffff' }} 
              />
            </div>
            <div className="profile-field" style={{ marginBottom: '24px' }}>
              <label style={{ color: '#955C2E', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '8px', display: 'block' }}>Username</label>
              <input 
                type="text" 
                name="username"
                value={formData.username} 
                onChange={handleChange}
                readOnly={!isEditing} 
                style={{ width: '100%', padding: '16px 20px', borderRadius: '16px', border: '2px solid #E8D9C0', fontSize: '1.1rem', color: '#7B4F2E', fontWeight: 'bold', outline: 'none', backgroundColor: '#ffffff' }} 
              />
            </div>
            <div className="profile-field" style={{ marginBottom: '24px' }}>
              <label style={{ color: '#955C2E', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '8px', display: 'block' }}>Password</label>
              <input 
                type="text" 
                name="password"
                value={formData.password} 
                onChange={handleChange}
                readOnly={!isEditing} 
                style={{ width: '100%', padding: '16px 20px', borderRadius: '16px', border: '2px solid #E8D9C0', fontSize: '1.1rem', color: '#7B4F2E', fontWeight: 'bold', outline: 'none', backgroundColor: '#ffffff' }} 
              />
            </div>
            <div className="profile-field" style={{ marginBottom: '24px' }}>
              <label style={{ color: '#955C2E', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '8px', display: 'block' }}>Email Wali</label>
              <input 
                type="text" 
                name="emailWali"
                value={formData.emailWali} 
                onChange={handleChange}
                readOnly={!isEditing} 
                style={{ width: '100%', padding: '16px 20px', borderRadius: '16px', border: '2px solid #E8D9C0', fontSize: '1.1rem', color: '#7B4F2E', fontWeight: 'bold', outline: 'none', backgroundColor: '#ffffff' }} 
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '20px', marginTop: '40px' }}>
              {!isEditing ? (
                <>
                  <button style={{ backgroundColor: '#c53030', color: 'white', padding: '12px 30px', borderRadius: '999px', fontSize: '1.1rem', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
                    Hapus Akun
                  </button>
                  <button onClick={() => setIsEditing(true)} style={{ backgroundColor: '#955C2E', color: 'white', padding: '12px 30px', borderRadius: '999px', fontSize: '1.1rem', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
                    Ubah Data
                  </button>
                </>
              ) : (
                <>
                  <button onClick={handleCancel} style={{ backgroundColor: '#A0AEC0', color: 'white', padding: '12px 30px', borderRadius: '999px', fontSize: '1.1rem', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
                    Batalkan
                  </button>
                  <button onClick={handleSave} style={{ backgroundColor: '#008b8b', color: 'white', padding: '12px 30px', borderRadius: '999px', fontSize: '1.1rem', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
                    Konfirmasi
                  </button>
                </>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
