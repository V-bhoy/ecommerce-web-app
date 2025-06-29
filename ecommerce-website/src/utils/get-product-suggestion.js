
export default function getProductSuggestion(value){
    if(value === 1){
        return "Just Okay";
    }
    else if(value === 2){
        return "Fine";
    }
    else if(value === 3){
        return "Just Right";
    }
    else if(value === 4){
        return  "Good To Go";
    }
    else if(value === 5){
        return "Excellent";
    } else {
        return "Could not estimate!"
    }

}