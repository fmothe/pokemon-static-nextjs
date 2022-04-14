import Head from 'next/head'
import React, { FC, ReactNode } from 'react'

interface Props{
    children: ReactNode,
    title?: string
}

export const Layout: FC<Props> = ({children, title}) => {
  return (
    <>
        <Head>
            <title>{title || 'PokemonApp'}</title>
            <meta name="author" content="Federico Mothe"></meta>
            <meta name="description" content="Pokemon App"></meta>
            <meta name="keywords" content="pokemon, pokedex, pokedex app"></meta>
        </Head>

        {/* navbar */}
        <main>
            {children}
        </main>
    </>
  )
}
