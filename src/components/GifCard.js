import React from "react"
function GifCard(props) {
    console.log(props.src)
        return (
            
         <div key = {props.key} className = "gifBox">
         <img key= {props.id} src = {props.src}/>
         </div>

       
        )
}

export default GifCard;
