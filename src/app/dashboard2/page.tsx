"use client";

export default function DashboardPage() {
  const courses = [
    {
      name: "Building Scalable APIs With GraphQL",
      selling: 42,
      amount: 18432,
      period: "06 months",
    },
    {
      name: "Building Scalable APIs With GraphQL",
      selling: 36,
      amount: 20560,
      period: "09 months",
    },
    {
      name: "Building Scalable APIs With GraphQL",
      selling: 44,
      amount: 45550,
      period: "12 months",
    },
    {
      name: "Building Scalable APIs With GraphQL",
      selling: 65,
      amount: 22568,
      period: "18 months",
    },
    {
      name: "Building Scalable APIs With GraphQL",
      selling: 75,
      amount: 36980,
      period: "08 months",
    },
  ];

  return (
    <>
      <main className="min-h-screen bg-white text-black">
        {/* (نوبار و  کادر بنفش رنگ)  هدر سایت   */}
        <header>
          {/* 1. Navbar - با استفاده از Flex */}
          <div className="bg-white h-20 w-full flex items-center px-8 border-b border-gray-100">
            {/* بخش اول: 60 درصد (لوگو و لینک‌ها) */}
            <div className="w-[60%] h-full flex items-center gap-8">
              {/* لوگو */}
              <div className="flex items-center gap-2 ml-20">
                {" "}
                <img src="/logo.png" alt="logo" />
                <span className="font-bold text-2xl text-blue-900">
                  {" "}
                  LearnUp{" "}
                </span>{" "}
              </div>
              {/* لینک‌ها */}
              <nav className="flex gap-8 text-gray-700 text-base font-semibold">
                <a href="#" className="hover:text-blue-600 text-blue-600">
                  Home
                </a>
                <a href="#" className="hover:text-blue-600">
                  Courses
                </a>
                <a href="#" className="hover:text-blue-600">
                  Pages
                </a>
                <a href="#" className="hover:text-blue-600">
                  Accounts
                </a>
              </nav>
            </div>
            {/* بخش دوم: 40 درصد (دکمه و پروفایل) */}
            <div className="w-[40%] h-full flex items-center justify-end gap-6 mr-20">
              {/* دکمه Create Course */}
              <button className="flex items-center gap-2 bg-white border border-blue-950 px-5 py-3 rounded-full text-sm font-medium hover:bg-blue-950  hover:text-white ">
                <span>➕</span> Create Course
              </button>
              {/* تصویر پروفایل */}
              <img
                src="https://api.dicebear.com/7.x/thumbs/svg?seed=adam"
                className="w-10 h-10 rounded-full border border-gray-200"
                alt=""
              />
            </div>
          </div>
          {/* نوار بنفش گرادینت که در تصویر زیر Navbar قرار دارد */}
          <div className="w-full h-50 bg-linear-to-r from-pink-400 to-blue-500"></div>
        </header>
        {/* 2. ظرف جدید برای اینکه Sidebar و Content کنار هم باشند */}
        <div className="flex ">
          {/* Sidebar */}
          <aside className="w-56 bg-white border border-blue-100 rounded-xl p-5  ml-14 -mt-20  relative z-10 shadow-lg flex flex-col items-center">
            <img
              src="https://api.dicebear.com/7.x/thumbs/svg?seed=instructor"
              className="w-16 h-16 rounded-full border border-blue-200 mb-3"
              alt=""
            />
            <h3 className="text-lg font-bold text-gray-800">Adam L. Markram</h3>
            <p className="text-gray-500 text-sm">
              ⭐ 4.9 <span className="text-gray-400">(2,158 reviews)</span>
            </p>
            <div className="flex justify-between w-full px-2 mt-4 mb-8">
              <span className="text-gray-600 text-sm font-medium">
                42,570 Students
              </span>
              <span className="text-gray-600 text-sm font-medium">
                46 Courses
              </span>
            </div>
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

          {/* 3. Main Content - حالا این بخش در کنار aside قرار می‌گیرد */}
          <section className="flex-1 p-10">
            <div className="flex justify-between items-center mb-10">
              <h1 className="text-3xl font-bold text-gray-800">
                Instructor Dashboard
              </h1>
              <div className="flex items-center gap-6">
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-xl">
                  🔔
                </div>
                <img
                  src="https://api.dicebear.com/7.x/thumbs/svg?seed=adam"
                  className="w-12 h-12 rounded-full border border-blue-200"
                  alt=""
                />
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-2xl text-blue-600">
                  📘
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-700">
                    Total Courses
                  </h2>
                  <p className="text-blue-600 text-3xl font-bold">42</p>
                </div>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-2xl text-blue-600">
                  👥
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-700">
                    Total Students
                  </h2>
                  <p className="text-blue-600 text-3xl font-bold">44k</p>
                </div>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-2xl text-blue-600">
                  🎓
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-700">
                    Enrolled Students
                  </h2>
                  <p className="text-blue-600 text-3xl font-bold">17k</p>
                </div>
              </div>
            </div>

            {/* Courses Table */}
            <div className="bg-white border border-gray-200 px-6 py-6 rounded-xl">
              <h2 className="text-sm font-bold text-gray-800 mb-2">
                Recent Selling Courses
              </h2>
              <div className="border-b border-gray-300 w-[calc(100%+48px)]   -ml-6   mb-6"></div>
              <table className="w-full text-left">
                <thead>
                  <tr className="text-white">
                    <th className="py-3 px-2 bg-[#1e1e1e] rounded-tl-xl">
                      Course Name
                    </th>
                    <th className="px-2 bg-[#1e1e1e]">Selling</th>
                    <th className="px-2 bg-[#1e1e1e]">Amount</th>
                    <th className="px-2 bg-[#1e1e1e]">Period</th>
                    <th className="px-2 bg-[#1e1e1e] rounded-tr-xl">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((c, i) => (
                    <tr key={i} className="border-b border-gray-200">
                      <td className="py-4 text-gray-700 flex items-center gap-3">
                        <img
                          src="https://api.dicebear.com/7.x/shapes/svg?seed=course"
                          className="w-10 h-10 rounded-lg border border-gray-200"
                          alt=""
                        />
                        {c.name}
                      </td>
                      <td className="text-gray-700">{c.selling}</td>
                      <td className="text-gray-700">
                        ${c.amount.toLocaleString()}
                      </td>
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
        </div>{" "}
        {/* --- این همان div با کلاس flex است که اضافه کردیم */}
      </main>

      
     <footer className="bg-slate-800 text-slate-100 flex pl-19 gap-15 text-xs pt-10 pb-10">
        <div>
          <div className="flex items-center">
            <img src="/logo2.png" alt="logo"/>
            <span className="text-2xl"> LearnUp </span>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm"> 4967 Sardis Sta, Victoria 8007, </p>
             <p className="text-sm"> Montreal </p>
              <p className="text-sm"> United State </p>
          </div>
          <div className="pt-5">
            <p>   
               +1 246-345-0695</p>
            <p>  support@learnup.com </p>
          </div>
        </div>
        <div className="">
          <h3 className="text-xl font-semibold ">Navigations</h3>
          <ul className="space-y-3 text-slate-300">
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">FAQs Page</a></li>
            <li><a href="#" className="hover:text-white transition">Checkout</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
            <li><a href="#" className="hover:text-white transition">Blog</a></li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-xl font-semibold ">New Categories</h3>
          <ul className="space-y-3 text-slate-300">
            <li><a href="#" className="hover:text-white transition">Designing</a></li>
            <li><a href="#" className="hover:text-white transition">Nusiness</a></li>
            <li><a href="#" className="hover:text-white transition">Software</a></li>
            <li><a href="#" className="hover:text-white transition">WordPress</a></li>
            <li><a href="#" className="hover:text-white transition">PHP</a></li>
          </ul>
        </div>  
      <div>
          <h3 className="text-xl font-semibold ">Help & Support</h3>
          <ul className="space-y-3 text-slate-300 ">
            <li><a href="#" className="hover:text-white transition">Documentation</a></li>
            <li><a href="#" className="hover:text-white transition">Live Chat</a></li>
            <li><a href="#" className="hover:text-white transition">Mail Us</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy</a></li>
            <li><a href="#" className="hover:text-white transition">Faqs</a></li>
          </ul>
      </div>
<div className="flex flex-col ">
  <h3 className="text-xl  font-semibold">Download Apps</h3>
  <a href="#" className="inline-flex items-center gap-4 pl-3 pr-12 py-2 mt-5 text-white bg-[#1C3144] border border-slate-600  rounded-lg transition duration-300 shadow-lg">
    <img src="/logo3.png"  alt="Logo"/>
    <div className="flex flex-col items-start">
      <span className="text-xl font-bold">Google Play</span>
      <span className="text-sm text-slate-400">Get It Now</span>
    </div>
  </a>
<a href="#" className="inline-flex items-center gap-4 pl-3 pr-14 py-1 mt-5  text-white bg-[#1C3144] border border-slate-600  rounded-lg transition duration-300 shadow-lg">
    <img src="/logo4.png"  alt="Logo"/>
    <div className="flex flex-col items-start">
      <span className="text-xl font-bold">App Store</span>
      <span className="text-sm text-slate-400">Now it Available</span>
    </div>
  </a>
  
</div>
      </footer>
    </>
  );
}
