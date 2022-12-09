
import React from 'react';
import { ProfesionalProject } from '../types/profesional';
import { ElementCV } from './card-element'

export function ExperienciaLaboral(props: any) {

    //console.log(props);

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10">
                        <div className="text-left flex">
                            <div className="absolute flex h-16 w-16 p-2 items-center justify-center rounded-md bg-indigo-300 text-white">
                                <img src="./img/coin-color-currency-svgrepo-com.svg" alt="Experiencia laboral" />
                            </div>
                            <h2 className="text-4xl align-bottom  font-semibold text-indigo-500 pl-20 mt-6">Experiencia laboral</h2>
                        </div>

                        <div className="mt-10">
                            <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">

                                {props.profesional.map((profesional: ProfesionalProject, index: number) => (
                                    <ElementCV key={'ElementCV_profesional_' + index} index={index} name={profesional.name} year={profesional.year} description={profesional.description} techs={profesional.technologies} start={profesional.start} end={profesional.end?profesional.end: Date.now()} img={profesional.img} gallery={profesional.gallery} link={profesional.link}></ElementCV>
                                ))}


                            </dl>
                        </div>
                    </div>
    );

}