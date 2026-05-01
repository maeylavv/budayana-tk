import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import MonitoringSidebar from "../../components/MonitoringSidebar";
import { STUDENTS } from "../../lib/dummyData";
import {
  PieChart, Pie, Cell,
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  LineChart, Line
} from 'recharts';
import "../../pages/Profile.css";
import "../../pages/Results.css";

// Dummy Data for Charts
const donutData = [
  { name: 'Aktif', value: 85, color: '#4CAF50' },
  { name: 'Tidak Aktif', value: 15, color: '#F44336' }
];

const bloomData = [
  { name: 'Ingatan', nilai: 85 },
  { name: 'Analisis', nilai: 70 },
  { name: 'Pendapat', nilai: 60 },
];

const islandCompletionData = [
  { name: 'Sumatra', rate: 90 },
  { name: 'Jawa', rate: 85 },
  { name: 'Kalimantan', rate: 60 },
  { name: 'Sulawesi', rate: 45 },
  { name: 'Papua', rate: 30 }
];

const timeAnalysisData = [
  { name: 'Mon', time: 120 },
  { name: 'Tue', time: 150 },
  { name: 'Wed', time: 180 },
  { name: 'Thu', time: 140 },
  { name: 'Fri', time: 200 }
];

export default function MonitoringGuruDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredStudents = STUDENTS.filter(student => 
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex bg-[#FEF6DF] min-h-screen w-full" style={{ fontFamily: "'Fredoka One', sans-serif" }}>
      <MonitoringSidebar role="guru" />
      
      <main className="flex-1 p-10 box-border overflow-x-hidden">
        <div style={{ marginBottom: '30px' }}>
            <h1 className="results-section-title" style={{ fontSize: '2rem', marginBottom: '4px' }}>Ringkasan Hasil Siswa</h1>
            <hr className="profile-divider" style={{ borderTop: '2px solid #E8D9C0', marginTop: '10px' }} />
        </div>

        <section>
            <h2 className="results-section-title" style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Statistik Kelas</h2>
            
            {/* Top 3 Charts */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '20px' }}>
              {/* Gauge (using Pie half) */}
              <div style={{ border: '2px solid #955C2E', borderRadius: '16px', padding: '20px', backgroundColor: 'white' }}>
                <h3 style={{ color: '#955C2E', fontWeight: 'bold', marginBottom: '10px' }}>Rata-rata Kenaikan</h3>
                <div style={{ height: '200px' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={[{ value: 75 }, { value: 25 }]} cx="50%" cy="85%" startAngle={180} endAngle={0} innerRadius={90} outerRadius={120} dataKey="value">
                        <Cell fill="#4CAF50" />
                        <Cell fill="#E0E0E0" />
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <p style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: 'bold', color: '#4CAF50', marginTop: '-30px' }}>75%</p>
              </div>

              {/* Donut Chart */}
              <div style={{ border: '2px solid #955C2E', borderRadius: '16px', padding: '20px', backgroundColor: 'white' }}>
                <h3 style={{ color: '#955C2E', fontWeight: 'bold', marginBottom: '10px' }}>Siswa Aktif vs Tidak</h3>
                <div style={{ height: '200px' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={donutData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} dataKey="value">
                        {donutData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Bar Chart Rata-rata Kelas per Level Bloom */}
              <div style={{ border: '2px solid #955C2E', borderRadius: '16px', padding: '20px', backgroundColor: 'white' }}>
                <h3 style={{ color: '#955C2E', fontWeight: 'bold', marginBottom: '10px' }}>Rata-rata Kelas per Level</h3>
                <div style={{ height: '200px' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={bloomData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                      <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                      <YAxis domain={[0, 100]} tickFormatter={(v) => `${v}%`} tick={{ fontSize: 11 }} width={38} />
                      <Tooltip formatter={(value) => [`${value}%`, 'Rata-rata']} />
                      <Bar dataKey="nilai" fill="#955C2E" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Bottom 2 Charts */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
              {/* Island Completion Rate */}
              <div style={{ border: '2px solid #955C2E', borderRadius: '16px', padding: '20px', backgroundColor: 'white' }}>
                <h3 style={{ color: '#955C2E', fontWeight: 'bold', marginBottom: '10px' }}>Island Completion Rate</h3>
                <div style={{ height: '250px' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={islandCompletionData} layout="vertical">
                      <XAxis type="number" />
                      <YAxis dataKey="name" type="category" width={80} tick={{ fontSize: 12 }} />
                      <Tooltip />
                      <Bar dataKey="rate" fill="#f3a64c" radius={[0, 4, 4, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Analisis Waktu (Line Chart proxy for Histogram) */}
              <div style={{ border: '2px solid #955C2E', borderRadius: '16px', padding: '20px', backgroundColor: 'white' }}>
                <h3 style={{ color: '#955C2E', fontWeight: 'bold', marginBottom: '10px' }}>Analisis Waktu</h3>
                <div style={{ height: '250px' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={timeAnalysisData}>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="time" stroke="#955C2E" strokeWidth={3} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
        </section>

        <section style={{ marginTop: '40px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h2 className="results-section-title" style={{ fontSize: '1.2rem', margin: 0 }}>Tabel Siswa</h2>
              <div style={{ position: 'relative', width: '250px' }}>
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari..." 
                  style={{ width: '100%', padding: '8px 16px', borderRadius: '999px', border: '2px solid #955C2E', outline: 'none', fontFamily: "'Fredoka One', sans-serif", color: '#5C3A1E' }}
                />
                <Search style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', color: '#955C2E' }} size={18} />
              </div>
            </div>
            
            <div className="history-table-container" style={{ display: 'flex', flexDirection: 'column', height: '500px' }}>
              <div className="history-header" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', backgroundColor: '#955C2E', color: 'white', padding: '16px 24px', alignItems: 'center' }}>
                <div style={{ paddingLeft: '24px' }}>Nama</div>
                <div style={{ textAlign: 'center' }}>Kelas</div>
                <div style={{ textAlign: 'center' }}>Total XP</div>
                <div style={{ textAlign: 'center' }}>Rata-rata Peningkatan Belajar</div>
                <div style={{ textAlign: 'center' }}>Aksi</div>
              </div>
              <div className="history-body" style={{ overflowY: 'auto', flex: 1 }}>
                {filteredStudents.map((student) => (
                  <div key={student.id} className="history-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', padding: '16px 24px', borderBottom: '2px solid #955C2E', alignItems: 'center', backgroundColor: '#FEF6DF' }}>
                    <div style={{ fontWeight: '800', color: '#333' }}>{student.name}</div>
                    <div style={{ textAlign: 'center', fontWeight: '800', color: '#333' }}>{student.class}</div>
                    <div style={{ textAlign: 'center', fontWeight: '800', color: '#333' }}>{student.totalXP}</div>
                    <div style={{ textAlign: 'center', fontWeight: '800', color: '#333' }}>75%</div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Link to={`/monitoring-guru/hasil/${student.id}`} style={{ backgroundColor: '#f3a64c', color: 'white', padding: '10px 16px', borderRadius: '12px', textDecoration: 'none', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '1rem', border: 'none', cursor: 'pointer' }}>
                            Lihat Dashboard <Search size={16} />
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
