import 'react-inner-image-zoom/lib/styles.min.css';
import InnerImageZoom from "react-inner-image-zoom";

export default function MagnifyProduct(){
    return <InnerImageZoom className={"border border-gray-200 w-[50%]"}
                           imgAttributes={{className: "!h-[70vh] w-full !object-contain"}}
                           zoomScale={1.5}
                           zoomSrc={"https://cdn.pixabay.com/photo/2019/08/07/07/05/woman-4390055_1280.jpg"}
                           src={"https://cdn.pixabay.com/photo/2019/08/07/07/05/woman-4390055_1280.jpg"}/>

}