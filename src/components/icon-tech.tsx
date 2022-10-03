import React from "react";

export function IconTech(props:any) {

    const path = '/img/tech/' +props.img  

    return (
      <div className="flex items-center flex-row p-1">
      <img className="mr-2 w-8 h-8" src={path} alt={props.name} />
      { props.name }
    </div>);
}