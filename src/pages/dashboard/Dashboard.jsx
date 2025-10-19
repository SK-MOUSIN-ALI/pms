

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Dashboard Overview</h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-sm font-medium text-gray-500">Total Projects</h3>
          <p className="text-2xl font-bold text-indigo-600 mt-2">24</p>
        </div>

        <div className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-sm font-medium text-gray-500">Active Tasks</h3>
          <p className="text-2xl font-bold text-indigo-600 mt-2">134</p>
        </div>

        <div className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-sm font-medium text-gray-500">Team Members</h3>
          <p className="text-2xl font-bold text-indigo-600 mt-2">12</p>
        </div>

        <div className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-sm font-medium text-gray-500">Pending Reviews</h3>
          <p className="text-2xl font-bold text-indigo-600 mt-2">8</p>
        </div>
      </div>
    </div>
  );
}
