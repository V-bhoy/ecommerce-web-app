export default function ServiceCard({icon: Icon,title, details}){
    return <div className={"flex flex-col items-center gap-1 group w-[15%]"}>
        <Icon className={"group-hover:text-primary group-hover:-translate-y-1 transition"} size={"2.5rem"}/>
        <h3 className={"text-[15px] font-[500]"}>{title}</h3>
        <p className={"text-[12px] text-gray-500 font-[500]"}>{details}</p>
    </div>
}