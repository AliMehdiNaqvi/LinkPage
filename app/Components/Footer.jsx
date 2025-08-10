"use client"
export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-600 via-purple-600 to-yellow-500 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="text-lg font-bold mb-3">LinkPage</h3>
          <p>Build your bio link presence. Join millions using LinkPage to connect their content and grow their audience.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Product</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Templates</a></li>
            <li><a href="#" className="hover:underline">Marketplace</a></li>
            <li><a href="#" className="hover:underline">Pricing</a></li>
            <li><a href="#" className="hover:underline">Claim Link</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Legal</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Terms</a></li>
            <li><a href="#" className="hover:underline">Privacy</a></li>
            <li><a href="#" className="hover:underline">Security</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm mt-10 text-white/80">
        &copy; {new Date().getFullYear()} LinkPage. All rights reserved.
      </div>
    </footer>
  );
}