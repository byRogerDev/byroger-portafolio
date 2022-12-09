
export function Welcome(props: any) {
    

    return <section className='text-center px-8 p-10'> 

    <div className="self-center  inline-flex items-center  content-center">
        <div className="flip-container" >

        </div>

        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img className="inline-block h-32 w-32 rounded-[40px] ring-2 ring-white"src="/img/byroger-2.png" alt="Roger Orellana Castells"></img>
                </div>
                <div className="flip-card-back">
                    <img className="inline-block h-32 w-32 rounded-full ring-2 ring-white"src="/img/roger-orellana-castells.png" alt="Roger Orellana Castells"></img>
                </div>
            </div>
        </div>

    </div>
    
    <h1 className=" leading-8 tracking-tightsm:text-4xl text-slate-900  text-4xl tracking-tight font-extrabold sm:text-5xl dark:text-white m-2">{props.name}</h1>
    <p className='mt-6 text-3xl text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400'>{props.work}</p>

    </section>;
}