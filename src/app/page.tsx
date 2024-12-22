import Link from 'next/link';


export default function Home() {
  return (
    <main className="w-full">
      <div className="min-h-screen flex flex-col">
      
        <div
          className="bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/pokemonfirstgeneration-1734861496032-5850.jpg')",
            height: '100vh', 
          }}
        ></div>

       
        <div
          className="bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8dgCxSvhEjNrpBrILNkJG2oz9ImervxxGFA&s')",
            height: '50vh',
          }}
        ></div>

        
        <div
          className="bg-cover bg-center relative"
          style={{
            backgroundImage:
              "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCULp5wAeJSuWnZmR8C-0F6x8YQBTOnzJYPQ&s')",
            height: '50vh', 
          }}
        >
         
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Discover Pokémon</h2>
              <p className="text-lg">
                Dive into the amazing world of Pokémon cards! Collect, trade, and explore.
              </p>
              
              <Link href="/card"> 
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-400 transition">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}