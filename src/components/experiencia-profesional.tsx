
import React from 'react';
import { ProfesionalProject } from '../types/profesional';
import { ElementCV } from './card-element'

export function FormacionProfesional(props: any) {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 mb-10">
                        <div className="text-left flex">
                            <div className="absolute flex h-16 w-16 p-2 items-center justify-center rounded-md bg-indigo-300 text-white">
                                <img src="./img/award-championship-education-svgrepo-com.svg" alt="Experiencia profesional" />
                            </div>
                            <h2 className="text-4xl align-bottom  font-semibold text-indigo-500 pl-20 mt-6">Experiencia profesional</h2>
                        </div>

                        <div className="mt-10">
                            <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">

                                {props.alterProjects.map((personal: ProfesionalProject, index: number) => (
                                    <ElementCV key={'ElementCV_alterProjects_' + index}  name={personal.name} year={personal.year} description={personal.description} techs={personal.technologies} start={personal.start} end={personal.end?personal.end: Date.now()} img={personal.img} gallery={personal.gallery} link={personal.link}></ElementCV>
                                ))}


                            </dl>
                        </div>
                    </div>
    );
}