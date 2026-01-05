import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-gray-50 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Discover the latest</span>{' '}
                  <span className="block text-indigo-600 xl:inline">trends in fashion</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Explore our exclusive collection of cloths, purses, and accessories designed to elevate your style. Quality you can trust, styles you will love.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full relative">
            <Image
              src="/hero.png"
              alt="Fashion Hero"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-10 text-center">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Category 1 */}
          <div className="group relative">
            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 relative h-80">
              <Image
                src="/cat-clothing.png"
                alt="Clothing"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    Clothing
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">New Arrivals</p>
              </div>
            </div>
          </div>
          {/* Category 2 */}
          <div className="group relative">
            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 relative h-80">
              <Image
                src="/cat-purse.png"
                alt="Purses"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    Purses
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Trendy Styles</p>
              </div>
            </div>
          </div>
          {/* Category 3 */}
          <div className="group relative">
            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 relative h-80">
              <Image
                src="/cat-accessories.png"
                alt="Accessories"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    Accessories
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Perfect Add-ons</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
