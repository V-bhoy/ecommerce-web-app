export function formatDate(date){
    return new Date(date).toLocaleString("en-US", {
        timeZone: "Asia/Kolkata",
    })
}