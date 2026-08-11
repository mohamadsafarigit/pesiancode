"use client";

export default function Dashboard2Page() {
  const courses = [
    { name: "Building Scalable APIs With GraphQL", selling: 42, amount: 18432, period: "06 months" },
    { name: "Building Scalable APIs With GraphQL", selling: 36, amount: 20560, period: "09 months" },
    { name: "Building Scalable APIs With GraphQL", selling: 44, amount: 45550, period: "12 months" },
    { name: "Building Scalable APIs With GraphQL", selling: 65, amount: 22568, period: "18 months" },
    { name: "Building Scalable APIs With GraphQL", selling: 75, amount: 36980, period: "08 months" },
  ];

  return (
    <main className="min-h-screen bg-white    text-black flex">

{/* Sidebar */}
<aside className="w-56 bg-white border border-blue-100 rounded-xl p-5 ml-14 mt-10 flex flex-col items-center">

  {/* Profile Image */}
  <img
    src="https://api.dicebear.com/7.x/thumbs/svg?seed=instructor"
    className="w-16 h-16 rounded-full border border-blue-200 mb-3"
  />

  {/* Instructor Name */}
  <h3 className="text-lg font-bold text-gray-800">Adam L. Markram</h3>

  {/* Rating */}
  <p className="text-gray-500 text-sm">
    ⭐ 4.9 <span className="text-gray-400">(2,158 reviews)</span>
  </p>

  {/* Students & Courses */}
  <div className="flex justify-between w-full px-2 mt-4 mb-8">
    <span className="text-gray-600 text-sm font-medium">42,570 Students</span>
    <span className="text-gray-600 text-sm font-medium">46 Courses</span>
  </div>

  
  {/* Menu */}
  <nav className="flex flex-col gap-4 text-gray-600 text-base w-full">
    {[
      { icon: "🏠", label: "Dashboard" },
      { icon: "📚", label: "Courses" },
      { icon: "➕", label: "Create Course" },
      { icon: "💰", label: "Earning" },
      { icon: "👥", label: "Students" },
      { icon: "🛒", label: "My Orders" },
      { icon: "⭐", label: "Reviews" },
      { icon: "💳", label: "Payout" },
      { icon: "❓", label: "Help & Support" },
    ].map((item, i) => (
      <button
        key={i}
        className="flex items-center gap-3 hover:text-blue-600 transition"
      >
        <div className="w-7 h-7 bg-blue-50 rounded-full flex items-center justify-center text-lg">
          {item.icon}
        </div>
        {item.label}
      </button>
    ))}
  </nav>

</aside>

      {/* Main Content */}
      <section className="flex-1 p-10">

        {/* Top Header */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800">Instructor Dashboard</h1>

          <div className="flex items-center gap-6">
            <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-xl">
              🔔
            </div>
            <img
              src="https://api.dicebear.com/7.x/thumbs/svg?seed=adam"
              className="w-12 h-12 rounded-full border border-blue-200"
            />
          </div>
        </div>

        
       {/* Stats Cards */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

  {/* Card 1 */}
  <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm flex items-center gap-4">
    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-2xl text-blue-600">
      📘
    </div>
    <div>
      <h2 className="text-xl font-bold text-gray-700">Total Courses</h2>
      <p className="text-blue-600 text-3xl font-bold">42</p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm flex items-center gap-4">
    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-2xl text-blue-600">
      👥
    </div>
    <div>
      <h2 className="text-xl font-bold text-gray-700">Total Students</h2>
      <p className="text-blue-600 text-3xl font-bold">44k</p>
    </div>
  </div>

  {/* Card 3 */}
  <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm flex items-center gap-4">
    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-2xl text-blue-600">
      🎓
    </div>
    <div>
      <h2 className="text-xl font-bold text-gray-700">Enrolled Students</h2>
      <p className="text-blue-600 text-3xl font-bold">17k</p>
    </div>
  </div>

</div>

        {/* Courses Table */}
        <div className="bg-white border border-gray-200 px-6 py-6 rounded-xl">
          <h2 className="text-sm font-bold text-gray-800 mb-2">
  Recent Selling Courses
</h2>

<div className="border-b border-gray-300 w-[calc(100%+48px)] ml-[-24px] mb-6"></div>


          <table className="w-full text-left">
            <thead>
  <tr className="text-white">
    <th className="py-3 px-2 bg-[#1e1e1e] rounded-tl-xl ">
      Course Name
    </th>
    <th className="px-2 bg-[#1e1e1e] ">
      Selling
    </th>
    <th className="px-2 bg-[#1e1e1e] ">
      Amount
    </th>
    <th className="px-2 bg-[#1e1e1e]">
      Period
    </th>
    <th className="px-2 bg-[#1e1e1e] rounded-tr-xl ">
      Action
    </th>
  </tr>
</thead>




            <tbody>
  {courses.map((c, i) => (
    <tr key={i} className="border-b border-gray-200">

      {/* Thumbnail + Course Name */}
      <td className="py-4 text-gray-700 flex items-center gap-3">
        <img
          src="https://api.dicebear.com/7.x/shapes/svg?seed=course"
          className="w-10 h-10 rounded-lg border border-gray-200"
        />
        {c.name}
      </td>

      <td className="text-gray-700">{c.selling}</td>
      <td className="text-gray-700">${c.amount.toLocaleString()}</td>
      <td className="text-gray-700">{c.period}</td>

      <td>
        <button className="text-blue-600 hover:text-blue-800">
          View
        </button>
      </td>

    </tr>
  ))}
</tbody>

          </table>
        </div>

      </section>
    </main>
  );
}

