export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Support</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Contact Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Returns</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Shipping Info</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Follow Us</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Facebook</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Twitter</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Instagram</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">LinkedIn</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Subscribe</h3>
              <p className="mt-4 text-gray-300">Sign up for our newsletter to receive the latest updates.</p>
              <form className="mt-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full px-3 py-2 text-gray-900 rounded-md"
                />
                <button type="submit" className="mt-2 w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-md">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
            <p>© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }
  