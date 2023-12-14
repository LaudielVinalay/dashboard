import React from "react";
import '../stylesheets/info-container.css'

function InfoContainer(props){
    return(
        <div className="content-info">
          <h1 className="titles">{props.children}</h1>
        </div>
    )
}

export default InfoContainer;