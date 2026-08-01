"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

/* ============================
   🔥 Toast Component
   ============================ */
type ToastProps = {
  message: string;
  type: "success" | "error";
};

function Toast({ message, type }: ToastProps) {
  return (
    <div
      className={`
        fixed top-6 right-6 px-4 py-3 rounded-xl shadow-xl text-white
        flex items-center gap-3 animate-slide-in
        ${type === "success" ? "bg-green-600" : "bg-red-600"}
      `}
    >
      <span className="text-lg">
        {type === "success" ? "✔️" : "⚠️"}
      </span>
      <span className="font-medium">{message}</span>
    </div>
  );
}

/* ============================
   🔥 Types
   ============================ */
type User = {
  name: string;
  email: string;
  password: string;
  role: "admin" | "user";
};

/* ============================
   🔥 UserManager (Admin Only)
   ============================ */
type UserManagerProps = {
  showToast: (msg: string, type?: "success" | "error") => void;
};

function UserManager({ showToast }: { showToast: (msg: string, type?: "success" | "error") => void }) {
  const [users, setUsers] = useState<User[]>(
    JSON.parse(localStorage.getItem("users") || "[]")
  );

  function saveUsers(updated: User[]) {
    setUsers(updated);
    localStorage.setItem("users", JSON.stringify(updated));
  }

  function handleDelete(email: string) {
    const updated = users.filter((u) => u.email !== email);
    saveUsers(updated);
    showToast("User deleted successfully", "success");
  }

  function handleSave(
    email: string,
    name: string,
    newEmail: string,
    password: string
  ) {
    const updated = users.map((u) =>
      u.email === email
        ? { ...u, name, email: newEmail, password }
        : u
    );

    saveUsers(updated);
    showToast("Changes saved!", "success");
  }

  return (
    <div className="space-y-4">
      {users.map((u) => {
        const [name, setName] = useState(u.name);
        const [email, setEmail] = useState(u.email);
        const [password, setPassword] = useState(u.password);

        return (
          <div
            key={u.email}
            className="bg-[#1e293b] p-4 rounded-lg border border-gray-700 space-y-3"
          >
            <div className="flex justify-between items-center">
              <span className="font-semibold">
                {u.role === "admin" ? "👑 Admin" : "👤 User"}
              </span>

              <button
                onClick={() => handleDelete(u.email)}
                className="text-red-400 hover:text-red-300 text-sm"
              >
                Delete
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {/* Name */}
              <div>
                <label className="block text-gray-300 text-sm mb-1">Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 rounded bg-[#0f172a] border border-gray-600 text-white text-sm"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-300 text-sm mb-1">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 rounded bg-[#0f172a] border border-gray-600 text-white text-sm"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-gray-300 text-sm mb-1">Password</label>
                <input
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 rounded bg-[#0f172a] border border-gray-600 text-white text-sm"
                />
              </div>
            </div>

            {/* ⭐ Save Button */}
            <button
              onClick={() => handleSave(u.email, name, email, password)}
              className="mt-3 bg-purple-600 px-4 py-2 rounded hover:bg-purple-700 transition"
            >
              Save Changes
            </button>
          </div>
        );
      })}
    </div>
  );
}


/* ============================
   🔥 Dashboard Component
   ============================ */
export default function DashboardPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  function showToast(message: string, type: "success" | "error" = "success") {
    setToast({ message, type });
    setTimeout(() => setToast(null), 2500);
  }

  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState(
    "https://api.dicebear.com/7.x/thumbs/svg?seed=default"
  );
  const [activePage, setActivePage] = useState<"overview" | "users" | "analytics" | "settings">("overview");
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("currentUser");
    if (!stored) {
      router.push("/login");
      return;
    }

    const user: User = JSON.parse(stored);
    setCurrentUser(user);

    if (user?.name) {
      setUsername(user.name);
      setAvatar(`https://api.dicebear.com/7.x/thumbs/svg?seed=${user.name}`);
    }
  }, [router]);

  function handleLogout() {
    router.push("/login");
  }

  const menuClass = (page: string) =>
    `text-left transition ${
      activePage === page
        ? "text-white font-semibold bg-[#334155] px-3 py-2 rounded-lg"
        : "text-gray-300 hover:text-white"
    }`;

  if (!currentUser) {
    return null;
  }

  return (
    <main className="min-h-screen bg-[#0f172a] text-white flex">
      {toast && <Toast message={toast.message} type={toast.type} />}

      {/* Sidebar */}
      <aside className="w-64 bg-[#1e293b] p-6 hidden md:block">
        <div className="flex items-center gap-3 mb-4">
          <img
            src={avatar}
            alt="avatar"
            className="w-6 h-6 rounded-full border border-purple-500 bg-white"
          />
          <span className="text-lg font-semibold">Hello {username} 👋</span>
        </div>

        <h2 className="text-2xl font-bold mb-8">Dashboard</h2>

        <nav className="flex flex-col gap-4">
          <button
            onClick={() => setActivePage("overview")}
            className={menuClass("overview")}
          >
            Overview
          </button>

          <button
            onClick={() => setActivePage("users")}
            className={menuClass("users")}
          >
            Users
          </button>

          <button
            onClick={() => setActivePage("analytics")}
            className={menuClass("analytics")}
          >
            Analytics
          </button>

          <button
            onClick={() => setActivePage("settings")}
            className={menuClass("settings")}
          >
            Settings
          </button>
        </nav>
      </aside>

      {/* Content */}
      <section className="flex-1 p-10">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold">Welcome back 👋</h1>

          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-purple-600 rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            Logout
          </button>
        </div>

        {/* Overview */}
        {activePage === "overview" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Overview</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-[#1e293b] p-6 rounded-xl shadow-lg hover:scale-[1.02] transition">
                <h2 className="text-xl font-bold mb-2">Users</h2>
                <p className="text-gray-300">Manage your users and accounts.</p>
              </div>

              <div className="bg-[#1e293b] p-6 rounded-xl shadow-lg hover:scale-[1.02] transition">
                <h2 className="text-xl font-bold mb-2">Analytics</h2>
                <p className="text-gray-300">Track your website performance.</p>
              </div>

              <div className="bg-[#1e293b] p-6 rounded-xl shadow-lg hover:scale-[1.02] transition">
                <h2 className="text-xl font-bold mb-2">Settings</h2>
                <p className="text-gray-300">Configure your preferences.</p>
              </div>
            </div>

            <div className="bg-[#1e293b] p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
              <ul className="space-y-3 text-gray-300">
                <li>• User “{username}” logged in</li>
                <li>• New signup created</li>
                <li>• Analytics updated</li>
              </ul>
            </div>
          </div>
        )}

        {/* Users (Admin Only) */}
        {activePage === "users" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Users</h2>

            {currentUser.role !== "admin" ? (
              <p className="text-red-400">
                You do not have permission to view this page.
              </p>
            ) : (
              <UserManager showToast={showToast} />
            )}
          </div>
        )}

        {/* Analytics */}
        {activePage === "analytics" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Analytics</h2>
            <p className="text-gray-300">Track your analytics here.</p>
          </div>
        )}

        {/* Settings */}
        {activePage === "settings" && (
          <div className="max-w-xl bg-[#1e293b] p-8 rounded-2xl shadow-xl border border-gray-700 space-y-10">
            {/* Profile */}
            <div>
              <h3 className="text-xl font-bold mb-4">Profile Information</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">
                    Display Name
                  </label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-3 rounded-xl bg-[#0f172a] border border-gray-600 text-white 
                       focus:border-purple-500 focus:ring-2 focus:ring-purple-600 outline-none transition"
                    placeholder="Your name"
                  />
                </div>

                <button
                  onClick={() => {
                    const stored = localStorage.getItem("currentUser");
                    if (!stored) return;

                    const user: User = JSON.parse(stored);
                    user.name = username;
                    localStorage.setItem("currentUser", JSON.stringify(user));
                    showToast("Name updated successfully!", "success");
                  }}
                  className="w-full py-3 bg-purple-600 rounded-xl font-semibold hover:bg-purple-700 transition"
                >
                  Save Changes
                </button>
              </div>
            </div>

            <hr className="border-gray-700" />

            {/* Security */}
            <div>
              <h3 className="text-xl font-bold mb-4">Security</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">
                    New Password
                  </label>

                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="newPass"
                      className="w-full p-3 rounded-xl bg-[#0f172a] border border-gray-600 text-white 
                         focus:border-purple-500 focus:ring-2 focus:ring-purple-600 outline-none transition"
                      placeholder="Enter new password"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-gray-400 hover:text-white transition"
                    >
                      {showPassword ? "🙈" : "👁️"}
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => {
                    const input = document.getElementById(
                      "newPass"
                    ) as HTMLInputElement | null;
                    const newPass = input?.value || "";

                    if (!newPass) {
                      showToast("Password cannot be empty!", "error");
                      return;
                    }

                    const stored = localStorage.getItem("currentUser");
                    if (!stored) return;

                    const user: User = JSON.parse(stored);
                    user.password = newPass;
                    localStorage.setItem("currentUser", JSON.stringify(user));

                    showToast("Password updated successfully!", "success");
                  }}
                  className="w-full py-3 bg-purple-600 rounded-xl font-semibold hover:bg-purple-700 transition"
                >
                  Update Password
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
