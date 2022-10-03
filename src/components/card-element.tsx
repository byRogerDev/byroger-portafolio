
import React from "react";
import { Link } from "react-router-dom";
import { IconTech } from "./icon-tech";
import { IconCard } from "./icon-card";
import moment from 'moment'
import 'moment/locale/es';
import Masonry from 'react-masonry-css'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


moment.locale('es');

export function ElementCV(element: any) {

    const breakpointColumnsObj = {
      default: element.gallery?.length > 3 ? 3: element.gallery?.length,
      1100: element.gallery?.length === 1 ? 1: 2,
      700: element.gallery?.length === 1 ? 1: 2,
      500: 1
    }; 

    const classAcademyAux = (element.index && element.index > 0 && 'place' in element)?'md:col-start-2':'';
    const isCurrent = (moment(element.end).format('MM/Y') === moment().format('MM/Y'))?true:false;

    const classAux = (element.index && element.index%2 !== 0 && ( (element.tag && element.tag !== 'academy') || !element.tag))?'relative  md:pt-20':'relative';

    return (<div className={classAux + ' ' + classAcademyAux}>
    <dt>
      { element.img  &&  <IconCard url={'img/' + element.img}></IconCard>  }
      { element.img === undefined && <div className="absolute flex h-14 w-14 items-center justify-center rounded-md bg-indigo-500 text-white"       >
        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg> 
      </div>} 
      {element.link && <p className="ml-16 text-lg font-medium leading-6 text-gray-900 text-left"><Link to={'/projects/' + element.link}>{element.name}</Link></p>}
      {!element.link && <p className="ml-16 text-lg font-medium leading-6 text-gray-900 text-left">{element.name}</p>}
    </dt>
    {element.start == null && <dd className="mt-2 ml-16 text-base text-gray-500 text-left"><strong>{element.year} - { element.place}</strong></dd> }
    {element.start && <dd className="mt-2 ml-16 text-base text-gray-500 text-left"><strong>{moment(element.start).format('MM/Y')} - { !isCurrent && moment(element.end).format('MM/Y')}{ isCurrent && 'Actualidad'} · {  moment(element.start).from(element.end).replace('hace', 'Durante') }</strong></dd> }
    {element.description && !Array.isArray(element.description) && <dd className="mt-2 ml-16 text-base text-gray-500 text-left">{element.description}</dd> }

    
    {element.description && Array.isArray(element.description) && element.description.map( ( ele: string, index: number) => (
      <dd className="mt-2 ml-16 text-base text-gray-500 text-left">{ele}</dd>
    ))}


    <dd className="mt-2 ml-16 text-base text-gray-500 text-left">
    {element?.techs?.map(({ name, img }:any, index: number) => (
      <IconTech  id={index} name={name} img={img}></IconTech>
    ))}
    </dd>


    {element?.gallery && <dd>
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid mt-5"
      columnClassName="my-masonry-grid_column">

      {element?.gallery?.map(({ alt, img, type }:any, index: number) => (
        <div>
        { type && type === "img" &&
        <figure className="mb-5 border-2 rounded-t border-separate	">
          <Zoom>
            <img
              alt={alt}
              src={'img/' + img}
              width="500"
            />
          </Zoom>
          <figcaption>{alt}</figcaption>
        </figure> }
        
        { type && type === "video" &&
        <div className="aspect-w-16 aspect-h-9">
          <iframe title={'video'+ index} src={img} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        }
        
        </div>
      ))}
    </Masonry>
    </dd>}
  </div>);
}