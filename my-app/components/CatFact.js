export default function CatFact({data}) {
    return (
        <div className="shadow-md rounded-[8px] p-[16px] flex flex-col gap-[8px]">
            <div className="text-[12px] font-blue-700">{data}</div>
        </div>
    )
}