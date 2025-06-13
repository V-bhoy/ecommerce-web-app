export default function Card() {
    return <div
        className={"item transition-all h-[25vh] rounded-sm bg-white " +
            "flex flex-col items-center justify-start gap-2 " +
            "text-center shadow-[0_1px_3px_#0000001f,_0_1px_2px_#0000003d]"}>
        <img className={"w-full h-[80%] rounded-t-sm"}
             src={"https://cdn.pixabay.com/photo/2022/10/09/09/12/woman-7508618_1280.jpg"} alt={"poster-image"}/>
        <h3 className={"text-[14px] font-[500]"}>Casual Tees</h3>
    </div>
}