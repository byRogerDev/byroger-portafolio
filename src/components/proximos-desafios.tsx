
import React from "react";
import { Challenge } from "./challenges";

export function ProximosDesafios(props: any) {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 mb-10">
                        <div className="text-left flex">
                            <div className="absolute flex h-16 w-16 p-2 items-center justify-center rounded-md bg-indigo-300 text-white">
                                <img src="./img/discovery-education-loupe-svgrepo-com.svg" alt="Próximos desafios" />
                            </div>
                            <h2 className="text-4xl align-bottom  font-semibold text-indigo-500 pl-20 mt-6">Próximos desafios</h2>
                        </div>

                        <div className="mt-10">
                            <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">

                                {props.challanges.map(({ name, year, description, techs, start, end }: any, index: number) => (
                                    <Challenge key={index} index={index} name={name} year={year} description={description} techs={techs} start={start} end={end}></Challenge>
                                ))}


                            </dl>
                        </div>
                    </div>
    );

}