import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-12">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Top section: 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Column 1 */}
          <div>
            <div className="font-semibold mb-3">Follow Us</div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#">LinkedIn Page</a></li>
              <li><a href="#">Twitter Feed</a></li>
              <li><a href="#">Github Repo</a></li>
              <li><a href="#">Instagram Profile</a></li>
              <li><a href="#">YouTube Channel</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <div className="font-semibold mb-3">Stay Connected</div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#">Newsletter Sign-up</a></li>
              <li><a href="#">Latest Updates</a></li>
              <li><a href="#">New Features</a></li>
              <li><a href="#">Product News</a></li>
              <li><a href="#">Special Offers</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <div className="font-semibold mb-3">Get Involved</div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#">Join Our Community</a></li>
              <li><a href="#">Follow Our Blog</a></li>
              <li><a href="#">Explore Our Tools</a></li>
              <li><a href="#">Connect With Us</a></li>
              <li><a href="#">Stay Informed</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 border-t pt-6 text-xs text-gray-600">
          <div>© 2025 AI Tools. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Settings</a>
          </div>
          <div className="flex items-center gap-3 text-base">
            <span>◎</span><span>◉</span><span>◍</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
