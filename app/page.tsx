import Image from "next/image";

export default function Home() {
  return (
    <>
      
      <nav className="w-full fixed top-0 left-0 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <span className="text-lg font-semibold text-gray-900">
            Darshika Mishra
          </span>
        </div>
      </nav>

      
      <main className="min-h-screen flex items-center justify-center px-4 bg-gray-50 text-gray-900 pt-20">
        <div className="flex flex-col items-center text-center max-w-md md:max-w-lg">

          <Image
            src="/Darshika_Mishra.jpg"
            alt="Profile picture"
            width={240}
            height={240}
            className="border-4 border-gray-500 mb-4 md:mb-6"
          />

          <h1 className="text-2xl md:text-3xl font-semibold">
            Darshika Mishra
          </h1>

          <p className="mt-2 md:mt-4 text-sm md:text-base text-gray-600">
          Hi! My name is Darshika and I'm a Math-Computer Science major at UCSD. I enjoy skiing and playing pickle ball in my free time.
          </p>

        </div>
      </main>
    </>
  );
}