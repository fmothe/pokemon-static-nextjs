import { Button, Card, Grid, Row, Text } from "@nextui-org/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import { Layout } from "../components/layouts";
import styles from "../styles/Home.module.css";
import { pokeApi } from "../api";
import { PokemonListResponse, SmallPokemon } from "../interfaces";

interface Props {
    pokemons: SmallPokemon[];
}
const Home: NextPage<Props> = ({ pokemons }) => {
    return (
        <Layout title={"Pokedex"}>
            <Grid.Container gap={2} justify="flex-start">
                {pokemons.map((pokemon) => (
                    <Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id}>
                        <Card hoverable bordered shadow={false} clickable>
                            <Card.Body css={{ p: 1 }}>
                                <Card.Image
                                    src={pokemon.img}
                                    width={"100%"}
                                    height={140}
                                />
                            </Card.Body>
                            <Card.Footer>
                                <Row justify="space-between">
                                    <Text transform="capitalize"> {pokemon.name} </Text>
                                    <Text> # {pokemon.id}</Text>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </Grid>
                ))}
            </Grid.Container>
        </Layout>
    );
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {
    //nothing here goes client side, except what its inside the props
    const { data } = await pokeApi.get<PokemonListResponse>(
        "/pokemon?limit=151"
    );
    const pokemons: SmallPokemon[] = data.results.map((poke, index ) => ({
        ...poke,
        id: index + 1,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`,
    }));

    return {
        props: {
            pokemons: pokemons,
        },
    };
};

export default Home;
