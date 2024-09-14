export default function Newsletter() {
  return (
    <div className="container mx-auto my-8 px-4">
      <div className="text-center">
        <h3 className="text-2xl font-semibold mb-2">Subscribe to Our Newsletter</h3>
        <p className="text-gray-600 mb-4">Stay updated with the latest news and events.</p>
        <form id="newsletter-form" className="flex flex-col items-center">
          <div className="flex w-full max-w-md mb-4">
            <input
              type="email"
              className="form-input w-full py-2 px-4 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              aria-label="Enter your email"
              required
            />
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="submit"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
