
import React from 'react'


export const BentoGrid = ({ className, children }) => {
    return (
        <div className={className(
            "grid md:auto-rows-[24rem] grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto",
            className
        )}
        >
            {children}
       </div>
    );
};

  return (
    <div>BentoGrid</div>
  )


export default BentoGrid;