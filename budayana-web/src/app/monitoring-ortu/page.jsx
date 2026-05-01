import MonitoringSidebar from "../../components/MonitoringSidebar";
import ScoreTable from "../../components/ScoreTable";
import { PARENT_STUDENT } from "../../lib/dummyData";
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend
} from 'recharts';
import "../../pages/Profile.css";
import "../../pages/Results.css";

// Data dinormalisasi ke persentase (0-100%)
const radarData = [
  { subject: 'Ingatan (L1)', Student: 80, Target: 60, fullMark: 100 },
  { subject: 'Analisis (L2)', Student: 75, Target: 60, fullMark: 100 },
  { subject: 'Pendapat (L3)', Student: 66, Target: 60, fullMark: 100 },
];

const barData = [
  { name: 'Makanan', 'Skor Siswa': 85, 'Rata-rata Kelas': 75 },
  { name: 'Rumah Adat', 'Skor Siswa': 90, 'Rata-rata Kelas': 80 },
  { name: 'Tarian', 'Skor Siswa': 70, 'Rata-rata Kelas': 65 },
];

export default function MonitoringOrtuDashboard() {
  const student = PARENT_STUDENT;

  return (
    <div className="flex bg-[#FEF6DF] min-h-screen w-full" style={{ fontFamily: "'Fredoka One', sans-serif" }}>
      <MonitoringSidebar role="ortu" />
      
      <main className="flex-1 p-10 box-border overflow-x-hidden">
        <section className="profile-top">
          <div className="profile-avatar-circle" style={{ fontSize: '3rem', width: '120px', height: '120px', borderColor: '#7B4F2E', backgroundColor: '#e2cfab', padding: 0, overflow: 'hidden' }}>
            <img src="/assets/budayana/islands/Bocah1 1.png" alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="profile-top-text" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
            <h1 className="profile-name" style={{ color: '#7B4F2E', fontSize: '2.5rem', fontWeight: '800' }}>{student.name}</h1>
            <div className="profile-grade-badge" style={{ backgroundColor: '#f3a64c', color: 'white', fontSize: '1.2rem', padding: '6px 24px', borderRadius: '999px', fontWeight: 'bold' }}>
              Kelas {student.class}
            </div>
          </div>
        </section>

        <section style={{ marginTop: '30px' }}>
          <h2 className="results-section-title" style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Statistik</h2>
          <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            <div className="stat-card green" style={{ border: 'none', borderRadius: '24px' }}>
              <div className="stat-value">4/8</div>
              <div className="stat-label">Cerita Selesai</div>
            </div>
            <div className="stat-card purple" style={{ border: 'none', borderRadius: '24px' }}>
              <div className="stat-value">{student.totalXP}</div>
              <div className="stat-label">Total XP</div>
            </div>
            <div className="stat-card pink" style={{ border: 'none', borderRadius: '24px' }}>
              <div className="stat-value" style={{ fontSize: '1.5rem' }}>🏆 {student.title}</div>
              <div className="stat-label">Gelar Saat Ini</div>
            </div>
            <div className="stat-card orange" style={{ border: 'none', borderRadius: '24px' }}>
              <div className="stat-value">{student.averageScore}%</div>
              <div className="stat-label">Rata-rata<br/>Nilai Quiz</div>
            </div>
          </div>
        </section>

        <section style={{ marginTop: '30px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div style={{ border: '3px solid #955C2E', borderRadius: '16px', padding: '20px', backgroundColor: 'white' }}>
            <h3 style={{ color: '#955C2E', fontWeight: 'bold', marginBottom: '20px' }}>Analisis Level Literasi Siswa</h3>
            <div style={{ height: '300px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" tick={{ fontSize: 10 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} />
                  <Radar name="Target/Rata-rata" dataKey="Target" stroke="#B0BEC5" fill="#CFD8DC" fillOpacity={0.6} />
                  <Radar name="Siswa" dataKey="Student" stroke="#4CAF50" fill="#4CAF50" fillOpacity={0.6} />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div style={{ border: '3px solid #955C2E', borderRadius: '16px', padding: '20px', backgroundColor: 'white' }}>
            <h3 style={{ color: '#955C2E', fontWeight: 'bold', marginBottom: '20px' }}>Minat Budaya Terbesar</h3>
            <div style={{ height: '300px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} domain={[0, 100]} />
                  <Tooltip />
                  <Legend iconType="circle" wrapperStyle={{ fontSize: '12px' }} />
                  <Bar dataKey="Skor Siswa" fill="#f3a64c" />
                  <Bar dataKey="Rata-rata Kelas" fill="#955C2E" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        <section style={{ marginTop: '40px' }}>
          <h2 className="results-section-title" style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Riwayat Pengerjaan</h2>
          <ScoreTable history={student?.scoreHistory || []} />
        </section>
      </main>
    </div>
  );
}
