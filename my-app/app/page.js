import MenuBar from "@/components/Menubar";

export default function Home() {
  return (
    <><MenuBar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
        <h1 className="text-4xl font-bold text-orange-500">Homepage</h1>
        <p className="mt-4 text-lg text-gray-700">ยินดีต้อนรับสู่เว็บของเรา</p>
      </main>
    </>
  )
}