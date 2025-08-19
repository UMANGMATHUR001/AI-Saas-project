// import React from "react";
// import { useState } from "react";

// function MenuLink({ title, desc }) {
//   return (
//     <a href="#" className="flex gap-3 p-3 rounded-xl hover:bg-gray-50">
//       <div className="h-6 w-6 rounded-md border flex items-center justify-center text-xs">⬡</div>
//       <div>
//         <div className="font-semibold">{title}</div>
//         {desc && <div className="text-sm text-gray-600">{desc}</div>}
//       </div>
//     </a>
//   );
// }

// export default function Navbar() {
//   const [toolsOpen, setToolsOpen] = useState(false);
//   const [authOpen, setAuthOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-40 w-full border-b bg-white/90 backdrop-blur">
//       <div className="mx-auto max-w-7xl px-6">
//         <div className="flex h-16 items-center justify-between">
//           {/* Logo */}
//           <a href="#" className="text-2xl font-black tracking-tight">Logo</a>

//           {/* Primary nav */}
//           <nav className="hidden md:flex items-center gap-8">
//             <div className="relative">
//               <button
//                 onMouseEnter={() => setToolsOpen(true)}
//                 onMouseLeave={() => setToolsOpen(false)}
//                 className="text-gray-800 hover:text-black"
//               >
//                 Tools
//               </button>

//               {/* Mega menu */}
//               {toolsOpen && (
//                 <div
//                   onMouseEnter={() => setToolsOpen(true)}
//                   onMouseLeave={() => setToolsOpen(false)}
//                   className="absolute left-0 mt-4 w-[900px] rounded-2xl border bg-white p-6 shadow-xl"
//                 >
//                   <div className="grid grid-cols-12 gap-8">
//                     {/* Quick Links */}
//                     <div className="col-span-4">
//                       <div className="text-sm font-semibold text-gray-500 mb-4">Quick Links</div>
//                       <div className="space-y-2">
//                         <MenuLink title="Home" desc="Explore our innovative AI tools today!" />
//                         <MenuLink title="Blog" desc="Latest insights and updates from our community" />
//                         <MenuLink title="Support" desc="Get assistance with your AI tools" />
//                         <MenuLink title="Contact" desc="Reach out for inquiries and feedback" />
//                       </div>
//                     </div>

//                     {/* Featured Articles */}
//                     <div className="col-span-4">
//                       <div className="text-sm font-semibold text-gray-500 mb-4">Featured Articles</div>
//                       <div className="space-y-3">
//                         <MenuLink title="AI Trends" desc="Discover the latest in AI technology" />
//                         <MenuLink title="Productivity Tips" desc="Maximize your efficiency with AI tools" />
//                         <MenuLink title="User Stories" desc="See how others succeed with our tools" />
//                         <MenuLink title="Updates" desc="Stay informed about new features and improvements" />
//                       </div>
//                     </div>

//                     {/* From Our Blog */}
//                     <div className="col-span-4">
//                       <div className="text-sm font-semibold text-gray-500 mb-4">From Our Blog</div>
//                       <div className="space-y-6">
//                         <a href="#" className="text-sm text-gray-600 underline">Read more</a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>

//             <a href="#" className="hover:text-black">Pricing</a>
//             <a href="#" className="hover:text-black">Community</a>

//             <div className="relative">
//               <button
//                 onClick={() => setAuthOpen((s) => !s)}
//                 className="hover:text-black"
//               >
//                 Login/Signup ▾
//               </button>
//               {authOpen && (
//                 <div className="absolute right-0 mt-3 w-44 overflow-hidden rounded-xl border bg-white shadow-md">
//                   <a className="block px-4 py-2 hover:bg-gray-50" href="#">Login</a>
//                   <a className="block px-4 py-2 hover:bg-gray-50" href="#">Signup</a>
//                 </div>
//               )}
//             </div>
//           </nav>

//           {/* Right buttons */}
//           <div className="hidden md:flex items-center gap-3">
//             <button className="rounded-xl border px-4 py-2">Join</button>
//             <button className="rounded-xl bg-black px-4 py-2 text-white">Start</button>
//           </div>

//           {/* Mobile hamburger */}
//           <button className="md:hidden rounded-lg border px-3 py-2">Menu</button>
//         </div>
//       </div>
//     </header>
//   );
// }
                         //AuthContext ka simple useState banaya hai Navbar me (later tu alag AuthContext bana sakta hai)
import React, { useState, useEffect } from "react";

function MenuLink({ title, desc }) {
  return (
    <a href="#" className="flex gap-3 p-3 rounded-xl hover:bg-gray-50">
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

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    const query = new URLSearchParams(window.location.search);
    const userData = query.get("user");
    if (userData) {
      try {
        const parsedUser = JSON.parse(decodeURIComponent(userData));
        localStorage.setItem("user", JSON.stringify(parsedUser));
        setUser(parsedUser);
        window.history.replaceState({}, document.title, window.location.pathname);
      } catch (err) {
        console.error("Failed to parse user data from URL", err);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.href = "/";
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/api/auth/google";
  };

  return (
    <>
      {/* Navbar */}
      <header className="sticky top-0 z-40 w-full border-b bg-white/90 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <a href="/" className="text-2xl font-black tracking-tight">Logo</a>

            {/* Primary nav */}
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
                      {/* Quick Links */}
                      <div className="col-span-4">
                        <div className="text-sm font-semibold text-gray-500 mb-4">Quick Links</div>
                        <div className="space-y-2">
                          <MenuLink title="Home" desc="Explore our innovative AI tools today!" />
                          <MenuLink title="Blog" desc="Latest insights and updates from our community" />
                          <MenuLink title="Support" desc="Get assistance with your AI tools" />
                          <MenuLink title="Contact" desc="Reach out for inquiries and feedback" />
                        </div>
                      </div>

                      {/* Featured Articles */}
                      <div className="col-span-4">
                        <div className="text-sm font-semibold text-gray-500 mb-4">Featured Articles</div>
                        <div className="space-y-3">
                          <MenuLink title="AI Trends" desc="Discover the latest in AI technology" />
                          <MenuLink title="Productivity Tips" desc="Maximize your efficiency with AI tools" />
                          <MenuLink title="User Stories" desc="See how others succeed with our tools" />
                          <MenuLink title="Updates" desc="Stay informed about new features and improvements" />
                        </div>
                      </div>

                      {/* From Our Blog */}
                      <div className="col-span-4">
                        <div className="text-sm font-semibold text-gray-500 mb-4">From Our Blog</div>
                        <div className="space-y-6">
                          <a href="#" className="text-sm text-gray-600 underline">Read more</a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <a href="#" className="hover:text-black">Pricing</a>
              <a href="#" className="hover:text-black">Community</a>
            </nav>

            {/* Right buttons */}
            <div className="hidden md:flex items-center gap-3">
              {user ? (
                <>
                  <span className="text-sm font-medium">Welcome, {user.name}</span>
                  <button 
                    onClick={handleLogout}
                    className="rounded-xl border px-4 py-2"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <button 
                  onClick={handleGoogleLogin}
                  className="rounded-xl border px-4 py-2"
                >
                  Join with Google
                </button>
              )}
              <button className="rounded-xl bg-black px-4 py-2 text-white">Start</button>
            </div>

            {/* Mobile hamburger */}
            <button className="md:hidden rounded-lg border px-3 py-2">Menu</button>
          </div>
        </div>
      </header>

      {/* Dashboard (links + widgets) */}
      {user && (
        <div className="w-full border-b bg-gray-50 py-4">
          <div className="mx-auto max-w-7xl px-6">
            {/* Links row */}
            <div className="flex gap-6 mb-4">
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-black">Dashboard</a>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-black">Analytics</a>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-black">Projects</a>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-black">Profile</a>
            </div>

            {/* Demo widgets row */}
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
