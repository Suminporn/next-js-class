import ContactCard from "@/components/ContactCard";
import MenuBar from "@/components/Menubar";

export default function Contact() {
  return (
    <div className="wrapper p-[16px] flex flex-col gap-[16px]">
      <h1 className="text-[24px] font-bold items-center">Contact</h1>
      <ContactCard name="John" description="a merchant selling everything" imageUrl="https://avatar.iran.liara.run/public/22" />
      <ContactCard name="Fletch" description="a kind granny" imageUrl="https://avatar.iran.liara.run/public/69" />
      <ContactCard name="Theodore" description="a boy who loves adventure" imageUrl="https://avatar.iran.liara.run/public/46" />
      <ContactCard name="Rayne" description="a green fingers farmer" imageUrl="https://avatar.iran.liara.run/public/61" />
    </div>
  )
}