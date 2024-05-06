import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';

export function Projects()  {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
        {
            items.map((item, i) => (
                <BentoGridItem 
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                className={i===3 || i === 6 ? "md:col-span-1" : ""}
                url={item.url}
                />
            ))
        }

    </BentoGrid>

  )
}

export default Projects;