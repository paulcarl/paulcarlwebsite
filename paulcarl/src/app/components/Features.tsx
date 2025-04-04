export default function Features() {
  return (
    <section className="py-16 bg-gray-50" id="magnum-opus">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            My Magnum Opus
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My magnum opus, or "great work", is the convergence of my three obsessions: eCommerce, marketing, and workflow optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4">
              <img
                src="/images/feature1.svg"
                alt="Innovation Icon"
                className="w-full h-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Over 36,000 Transactions
            </h3>
            <p className="text-gray-600">
              Every online transaction is an opportunity to learn to improve your systems. I've capitalized on over 36,000 just on my personal eBay account.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4">
              <img
                src="/images/feature2.svg"
                alt="Support Icon"
                className="w-full h-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              24/7 Support
            </h3>
            <p className="text-gray-600">
              Round-the-clock assistance ensures your business never misses a beat.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4">
              <img
                src="/images/feature3.svg"
                alt="Security Icon"
                className="w-full h-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Enterprise Security
            </h3>
            <p className="text-gray-600">
              Bank-grade security protocols protect your data and give you peace of mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 