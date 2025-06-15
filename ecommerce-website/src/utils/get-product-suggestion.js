
export default function getProductSuggestion(value){
    if(value >=0 && value < 30){
        return "Just Okay";
    }
    else if(value>=30 && value < 50){
        return "Fine";
    }
    else if(value>=50  && value <70){
        return "Just Right";
    }
    else if(value>=70 && value<85){
        return  "Good To Go";
    }
    else if(value>=85){
        return "Excellent";
    } else {
        return "Could not estimate!"
    }

}