
import React from "react";
import { Certificate } from "./card-certificate";

export function Certificados(props: any) {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 mb-10">
                        <div className="text-left flex">
                            <div className="absolute flex h-16 w-16 p-2 items-center justify-center rounded-md bg-indigo-300 text-white">
                                <img src="./img/award-certificate-education-2-svgrepo-com.svg" alt="Certificados" />
                            </div>
                            <h2 className="text-4xl align-bottom  font-semibold text-indigo-500 pl-20 mt-6">Certificados</h2>
                        </div>

                        <div className="mt-10">
                            <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">

                                {props.certificates.map(({ name, year, place, time }: any, index: number) => (
                                    <Certificate key={index} name={name} year={year} place={place} time={time}></Certificate>
                                ))}


                            </dl>
                        </div>
                    </div>
    );
}