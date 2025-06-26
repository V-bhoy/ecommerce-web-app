import 'react-inner-image-zoom/lib/styles.min.css';
import InnerImageZoom from "react-inner-image-zoom";

export default function MagnifyProduct({imageUrl}){
    return <InnerImageZoom className={"border border-gray-200 w-[50%]"}
                           imgAttributes={{className: "!h-[70vh] w-full !object-contain", alt: "Poster-image"}}
                           zoomScale={1.5}
                           zoomSrc={imageUrl}
                           src={imageUrl}
    />

}