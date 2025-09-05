
import NotesApp from "./NotesApp";

const products = [
  {
    name: "iPhone 16 Pro Max",
    price: 133900,
    description: "Latest iPhone with A16 Bionic chip, 256 GB Storage",
    imageUrl: "/iphone_16pm.jpg"
  },
  {
    name: "MacBook Air",
    price: 115990,
    description: "Lightweight laptop with M4 chip, 16 GB Ram & 512 GB Storage",
    imageUrl: "/macbook_air.jpg"
  },
  {
    name: "AirPods Pro",
    price: 22990,
    description: "Apple AirPods Pro (2nd Generation) with MagSafe Case (USB‑C) ​​​​​​​(White)",
    imageUrl: "/airpods_pro.jpg"
  }
]

function App() {
  

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6  ">
      <ProfileCard
        name="Code N Pray"
        role="Hackathon Hackers"
        image="/codenpray.png"
        bio="Team consits Ajay, Arsh, Om."
      />
      {/* <Counter/>
      <LiveText/> */}
    </div>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <Counter/>
      <LiveText/>
    </div>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <TodoList />
    </div>
     <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <StudentDirectory />
    </div>

    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-10">
      <h1 className="text-3xl font-bold mb-6">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </div>
    </div>

    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <TodoApp />
    </div>

    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <NotesApp />
    </div>
    </>
  )
}

export default App
