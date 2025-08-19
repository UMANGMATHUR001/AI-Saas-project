import React, { useState, useEffect } from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

function MenuLink({ title, desc }) {
  return (
    <a
      href="#"
      className="flex gap-3 p-3 rounded-xl hover:bg-gray-50"
      onClick={(e) => e.preventDefault()}
    >
      <div className="h-6 w-6 rounded-md border flex items-center justify-center text-xs">⬡</div>
      <div>
        <div className="font-semibold">{title}</div>
        {desc && <div className="text-sm text-gray-600">{desc}</div>}
      </div>
    </a>
  );
}

export default function Navbar() {
  const [toolsOpen, setToolsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [loginInProgress, setLoginInProgress] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const handleGoogleLogin = async () => {
    if (loginInProgress) return;
    setLoginInProgress(true);

    try {
      const result = await signInWithPopup(auth, provider);
      const idToken = await result.user.getIdToken();

      const res = await fetch("http://localhost:5000/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken }),
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem("user", JSON.stringify(data.user));
        setUser(data.user);
      } else {
        alert("Login failed: " + data.message);
      }
    } catch (err) {
      console.error("Google login error:", err);
      alert("Login failed");
    } finally {
      setLoginInProgress(false);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-white/90 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-16 items-center justify-between">
            <a href="/" className="text-2xl font-black tracking-tight">
              Logo
            </a>

            <nav className="hidden md:flex items-center gap-8">
              <div className="relative">
                <button
                  onMouseEnter={() => setToolsOpen(true)}
                  onMouseLeave={() => setToolsOpen(false)}
                  className="text-gray-800 hover:text-black"
                >
                  Tools
                </button>

                {toolsOpen && (
                  <div
                    onMouseEnter={() => setToolsOpen(true)}
                    onMouseLeave={() => setToolsOpen(false)}
                    className="absolute left-0 mt-4 w-[900px] rounded-2xl border bg-white p-6 shadow-xl"
                  >
                    <div className="grid grid-cols-12 gap-8">
                      <div className="col-span-4">
                        <div className="text-sm font-semibold text-gray-500 mb-4">
                          Quick Links
                        </div>
                        <div className="space-y-2">
                          <MenuLink title="Home" desc="Explore our innovative AI tools today!" />
                          <MenuLink title="Blog" desc="Latest insights and updates" />
                          <MenuLink title="Support" desc="Get assistance with your AI tools" />
                          <MenuLink title="Contact" desc="Reach out for inquiries and feedback" />
                        </div>
                      </div>
                      <div className="col-span-4">
                        <div className="text-sm font-semibold text-gray-500 mb-4">
                          Featured Articles
                        </div>
                        <div className="space-y-3">
                          <MenuLink title="AI Trends" desc="Discover the latest in AI technology" />
                          <MenuLink title="Productivity Tips" desc="Maximize efficiency with AI tools" />
                          <MenuLink title="User Stories" desc="See how others succeed with our tools" />
                          <MenuLink title="Updates" desc="Stay informed about new features" />
                        </div>
                      </div>
                      <div className="col-span-4">
                        <div className="text-sm font-semibold text-gray-500 mb-4">From Our Blog</div>
                        <div className="space-y-6">
                          <a href="#" className="text-sm text-gray-600 underline" onClick={(e) => e.preventDefault()}>
                            Read more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <a href="#" className="hover:text-black" onClick={(e) => e.preventDefault()}>
                Pricing
              </a>
              <a href="#" className="hover:text-black" onClick={(e) => e.preventDefault()}>
                Community
              </a>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              {user ? (
                <>
                  <span className="text-sm font-medium">Welcome, {user.name}</span>
                  <button
                    onClick={handleLogout}
                    className="rounded-xl border px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={handleGoogleLogin}
                  className="rounded-xl border px-4 py-2 hover:bg-green-100 hover:text-black"
                  disabled={loginInProgress}
                >
                  {loginInProgress ? "Logging in..." : "Join with Google"}
                </button>
              )}
              <button className="rounded-xl bg-black px-4 py-2 text-white">Start</button>
            </div>

            <button className="md:hidden rounded-lg border px-3 py-2">Menu</button>
          </div>
        </div>
      </header>

      {user && (
        <div className="w-full border-b bg-gray-50 py-4">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex gap-6 mb-4">
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-black" onClick={(e) => e.preventDefault()}>
                Dashboard
              </a>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-black" onClick={(e) => e.preventDefault()}>
                Analytics
              </a>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-black" onClick={(e) => e.preventDefault()}>
                Projects
              </a>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-black" onClick={(e) => e.preventDefault()}>
                Profile
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="rounded-xl border p-4 bg-white shadow-sm">
                <div className="text-sm text-gray-500">Users</div>
                <div className="text-xl font-bold">1,250</div>
              </div>
              <div className="rounded-xl border p-4 bg-white shadow-sm">
                <div className="text-sm text-gray-500">Revenue</div>
                <div className="text-xl font-bold">$4,320</div>
              </div>
              <div className="rounded-xl border p-4 bg-white shadow-sm">
                <div className="text-sm text-gray-500">Projects</div>
                <div className="text-xl font-bold">18</div>
              </div>
              <div className="rounded-xl border p-4 bg-white shadow-sm">
                <div className="text-sm text-gray-500">Growth</div>
                <div className="text-xl font-bold">+12%</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

