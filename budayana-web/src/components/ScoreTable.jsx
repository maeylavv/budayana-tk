import { ISLAND_COLORS, TOPIC_ICONS } from "../lib/dummyData";

export default function ScoreTable({ history }) {
  const getBloomColor = (bloom) => {
    if (bloom === "C1-C2") return "text-blue-600 bg-blue-50";
    if (bloom === "C3-C4") return "text-purple-600 bg-purple-50";
    if (bloom === "C5-C6") return "text-red-600 bg-red-50";
    return "text-gray-600 bg-gray-50";
  };

  const getScoreColor = (percent) => {
    if (percent >= 80) return "text-green-600";
    if (percent >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="history-table-container" style={{ display: 'flex', flexDirection: 'column', height: '400px' }}>
      <div className="history-header" style={{ display: 'grid', gridTemplateColumns: '1.5fr 2fr 1fr 1fr 1fr 1fr 1.5fr', padding: '16px 24px', borderBottom: '1px solid #E8D9C0', backgroundColor: '#955c2e', color: 'white', alignItems: 'center' }}>
        <div style={{ textAlign: 'center', fontWeight: 'bold' }}>Pulau</div>
        <div style={{ textAlign: 'center', fontWeight: 'bold' }}>Topic</div>
        <div style={{ textAlign: 'center', fontWeight: 'bold' }}>Level</div>
        <div style={{ textAlign: 'center', fontWeight: 'bold' }}>Bloom</div>
        <div style={{ textAlign: 'center', fontWeight: 'bold' }}>Skor</div>
        <div style={{ textAlign: 'center', fontWeight: 'bold' }}>Waktu</div>
        <div style={{ textAlign: 'center', fontWeight: 'bold' }}>Tanggal</div>
      </div>
      <div className="history-body" style={{ overflowY: 'auto', flex: '1 1 0%' }}>
        {history.length > 0 ? (
          history.map((item, index) => (
            <div key={index} className="history-row" style={{ display: 'grid', gridTemplateColumns: '1.5fr 2fr 1fr 1fr 1fr 1fr 1.5fr', padding: '16px 24px', borderBottom: '1px solid #E8D9C0', alignItems: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${ISLAND_COLORS[item.island] || 'bg-gray-100'}`}>
                  {item.island}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <span>{TOPIC_ICONS[item.topic] || "📝"}</span>
                <span>{item.topic}</span>
              </div>
              <div style={{ textAlign: 'center' }}>{item.level}</div>
              <div style={{ textAlign: 'center' }}>
                <span className={`px-2 py-1 rounded-md text-xs font-bold ${getBloomColor(item.bloom)}`}>
                  {item.bloom}
                </span>
              </div>
              <div className={`text-center font-bold ${getScoreColor(item.scorePercent)}`}>
                {item.score}
              </div>
              <div style={{ textAlign: 'center' }}>{item.time}</div>
              <div style={{ textAlign: 'center' }}>{item.date}</div>
            </div>
          ))
        ) : (
          <div className="empty-message" style={{ textAlign: 'center', padding: '20px' }}>
            Belum ada riwayat pengerjaan.
          </div>
        )}
      </div>
    </div>
  );
}
