import MenuBar from "@/components/Menubar";

export default function Home() {
  return (
    <div className="wrapper p-[16px] pb-[100px]">
      <header className="flex justify-between items-center mb-[16px]">
        <h1 className="text-[58px] font-bold">Your Task</h1>
        <img className="w-[48px] h-[40px]" src="/hamburger.png" />
      </header>
      <main className="flex flex-col gap-[20px]">
        <input type="text" placeholder="Search" className="p-[16px] pl-[24px] border-gray-300 border-[1px] rounded-[100px] w-[100%] "/>
        <img className="rounded-[24px] width-[100%]" src="img1.png" />
        <img className="rounded-[24px] width-[100%]" src="img1.png" />
      </main>
    </div>
  )
}