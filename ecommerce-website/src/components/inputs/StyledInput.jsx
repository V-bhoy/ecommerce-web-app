export default function StyledInput({error, ...props}){
    return <>
    <div className={`flex gap-2 items-center border-1 ${error ? "border-red-500" : "border-gray-300"} rounded-sm text-[13px] py-[7px] px-3`}>
        <input  {...props} className={"w-full focus:outline-none"}/>
    </div>
    <p className={"!mt-[-5px] px-[5px] text-xs text-red-600"}>{error}</p>
    </>
}