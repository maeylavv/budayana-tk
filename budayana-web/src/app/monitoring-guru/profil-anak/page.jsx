import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import MonitoringSidebar from "../../../components/MonitoringSidebar";
import { STUDENTS } from "../../../lib/dummyData";
import "../../../pages/Profile.css";
import "../../../pages/Results.css";

export default function MonitoringGuruProfilAnak() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredStudents = STUDENTS.filter(student => 
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex bg-[#FEF6DF] min-h-screen w-full" style={{ fontFamily: "'Fredoka One', sans-serif" }}>
      <MonitoringSidebar role="guru" />
      
      <main className="flex-1 p-10 box-border overflow-x-hidden">
        <section>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h2 className="results-section-title" style={{ fontSize: '2rem', margin: 0, color: '#955C2E', fontWeight: 'bold' }}>Daftar Profil Siswa</h2>
              <div style={{ position: 'relative', width: '300px' }}>
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari..." 
                  style={{ width: '100%', padding: '10px 16px', borderRadius: '999px', border: '2px solid #955C2E', outline: 'none', fontFamily: "'Fredoka One', sans-serif", color: '#5C3A1E', fontSize: '1.1rem' }}
                />
                <Search style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', color: '#955C2E' }} size={20} />
              </div>
            </div>
            
            <div className="history-table-container" style={{ height: 'auto', minHeight: '500px' }}>
              <div className="history-header" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', backgroundColor: '#955C2E', color: 'white', padding: '16px 24px', alignItems: 'center' }}>
                <div style={{ paddingLeft: '24px' }}>Nama</div>
                <div style={{ textAlign: 'center' }}>Username</div>
                <div style={{ textAlign: 'center' }}>Kelas</div>
                <div style={{ textAlign: 'center' }}>Aksi</div>
              </div>
              <div className="history-body" style={{ overflowY: 'auto' }}>
                {filteredStudents.map((student) => (
                  <div key={student.id} className="history-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', padding: '16px 24px', borderBottom: '2px solid #955C2E', alignItems: 'center', backgroundColor: '#FEF6DF' }}>
                    <div style={{ fontWeight: '800', color: '#333' }}>{student.name}</div>
                    <div style={{ textAlign: 'center', fontWeight: '800', color: '#333' }}>{student.username}</div>
                    <div style={{ textAlign: 'center', fontWeight: '800', color: '#333' }}>{student.class}</div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Link to={`/monitoring-guru/profil-anak/${student.id}`} style={{ backgroundColor: '#f3a64c', color: 'white', padding: '10px 24px', borderRadius: '12px', textDecoration: 'none', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1rem', border: 'none', cursor: 'pointer' }}>
                            Lihat Profil <Search size={18} />
                        </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </section>
      </main>
    </div>
  );
}
