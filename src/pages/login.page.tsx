
import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";

export function LoginPage(){

    const title = "Login - Roger Orellana Castells"

    return (
        <HelmetProvider>
            <Helmet htmlAttributes={{ lang: 'es' }}>
                <title>{ title }</title>
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
                
                <meta name="title" property="og:title" content={title} />                
                <meta name="type" property="og:type" content="website" />
                <meta name="image" property="og:image" content="https://byroger.es/by-roger-logo.png"/>
                <meta name="url"  property="og:url" content="byroger.es" />
                <meta name="description" property="og:description" content="No importa quien ha provocado el problema, vamos a solucionarlo." />;

            </Helmet>
            <div className="App">
                <h1>Login</h1>
            </div>
        </HelmetProvider>

    );

}