export default function StatsCard({ title, value }) {
  return (
    <div className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="text-2xl font-bold text-indigo-600 mt-2">{value}</p>
    </div>
  );
}
