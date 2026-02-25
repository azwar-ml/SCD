import Link from "next/link";

export default function Home() {
  return (
    
    <div className="min-h-screen bg-red-600 font-sans">
      
      {/* Container (White, 80% width, centered) */}
      <div className="mx-auto w-[80%] bg-white">
        
        {/* Header */}
        <header className="flex h-37.5 items-center">
          <div className="w-[20%] text-center text-2xl font-bold">
            azwar
          </div>
          
          {/* Banner with Background Image */}
          {/* We use inline style for the image URL because it's easier than configuring Tailwind for one image */}
          <div 
            className="h-full w-[80%] bg-cover bg-center"
            style={{ backgroundImage: "url('/download.jpg')" }}
          >
          </div>
        </header>

        {/* Navigation */}
        <nav className="bg-black p-4">
          <Link href="#" className="mr-8 font-bold text-white no-underline">Home</Link>
          <Link href="#" className="mr-8 font-bold text-white no-underline">About Us</Link>
          <Link href="#" className="mr-8 font-bold text-white no-underline">Products</Link>
          <Link href="#" className="mr-8 font-bold text-white no-underline">Contact Us</Link>
        </nav>

        {/* Main Content */}
        <div className="flex h-100 text-white">
          <div className="w-[30%] bg-green-700 p-2">
            Left
          </div>
          <div className="w-[70%] bg-orange-400 p-2">
            Right
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-blue-700 p-5 text-white">
          Footer Section
        </footer>

      </div>
    </div>
  );
}