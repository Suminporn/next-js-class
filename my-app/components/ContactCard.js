export default function ContactCard({name,description,imageUrl = "/img1.png"}) {
    return (
        <div className="bg-orange-50 shadow-md rounded-[20px] flex items-center gap-[10px]">
            <img src={imageUrl} className="w-[48px] h-[48px] rounded-[100px]"/>
            <div>
            <h2 className="text-[16px] font-bold pt-[7px]">{name}</h2>
            <p className="text-[12px] pb-[7px]">{description}</p>
            </div>
        </div>
    )
}