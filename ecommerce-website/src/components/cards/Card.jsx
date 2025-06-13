export default function Card({category}) {
    return <div
        className={"item transition-all h-[25vh] rounded-sm bg-white " +
            "flex flex-col items-center justify-start gap-2 " +
            "text-center shadow-[0_1px_3px_#0000001f,_0_1px_2px_#0000003d]"}>
        <img className={"w-full h-[82%] rounded-t-sm object-cover"}
             src={category.imageUrl} alt={"poster-image"}/>
        <h3 className={"text-[13px] font-[500]"}>{category.title}</h3>
    </div>
}