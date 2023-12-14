import React from "react";
import '../stylesheets/graph-container.css'

function GraphContainer(props){
    return(
        <div className="content-graph">
            <h1 className="titles">{props.children}</h1>
        </div>
    )
}

export default GraphContainer;