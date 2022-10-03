import React from "react";

export function IconCard(url: any) {

    return (
        <div className="absolute flex h-14 w-14 items-center justify-center rounded-md text-white" 
      style={{ 
        backgroundImage: `url(${ url.url })`,
        backgroundSize: 'cover' 
      }}>
      </div>
    );
}