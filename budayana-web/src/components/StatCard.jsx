export default function StatCard({ value, label, bg, textColor = "text-white", icon }) {
  return (
    <div className={`rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm ${bg} ${textColor}`}>
      <div className="font-fredoka-one font-bold text-3xl mb-1 flex items-center gap-2">
        {icon && <span>{icon}</span>}
        <span>{value}</span>
      </div>
      <div className="font-fredoka-one font-medium text-sm opacity-90">
        {label}
      </div>
    </div>
  );
}
