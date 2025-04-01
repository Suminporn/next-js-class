import MenuBar from "@/components/Menubar";
import DogCard from "@/components/DogCard";
import CatFact from "@/components/CatFact";

export default async function Home() {
  {/*const response = await fetch("https://dogapi.dog/api/v2/breeds")
  const resJson = await response.json()
  const dogs = resJson.data

  console.log(dogs)*/}

  const response = await fetch("https://meowfacts.herokuapp.com/?count=10")
  const resJson = await response.json()
  const catfacts = resJson.data

  return (
    <div className="wrapper p-[16px] pb-[100px]">
      <header className="flex justify-between items-center mb-[16px]">
        <h1 className="text-[58px] font-bold">Your Task</h1>
        <img className="w-[48px] h-[40px]" src="/hamburger.png" />
      </header>

      <main className="flex flex-col gap-[20px]">
        <input type="text" placeholder="Search" className="p-[16px] pl-[24px] border-gray-300 border-[1px] rounded-[100px] w-[100%] "/>

        {catfacts.map(cat => (
          <CatFact data={cat}
          key={cat.id}/>
        ))}
        
        {/*{dogs.map(dog => (
          <DogCard name={dog.attributes.name} description={dog.attributes.description}
          key={dog.id}/>
        ))}*/}

      </main>
    </div>
  )
}