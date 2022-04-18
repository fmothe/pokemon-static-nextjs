import Head from "next/head";
import React, { FC, ReactNode } from "react";
import { Navbar } from "../ui";

interface Props {
    children: ReactNode;
    title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title || "PokemonApp"}</title>
                <meta name="author" content="Federico Mothe"></meta>
                <meta name="description" content="Pokemon App"></meta>
                <meta
                    name="keywords"
                    content="pokemon, pokedex, pokedex app"
                ></meta>
                <meta
                    property="og:title"
                    content={`Informacion sobre ${title}`}
                />
                <meta
                    property="og:description"
                    content="SEO start"
                />
                <meta
                    property="og:image"
                    content="https://ahrefs.com/blog/wp-content/uploads/2019/12/fb-how-to-become-an-seo-expert.png"
                />
            </Head>
            <Navbar />
            <main
                style={{
                    padding: "0px 20px",
                }}
            >
                {children}
            </main>
        </>
    );
};
