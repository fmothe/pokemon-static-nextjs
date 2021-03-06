import { Button, Card, Container, Divider, Grid, Row, Text } from "@nextui-org/react";
import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import { pokeApi } from "../../api";
import { Layout } from "../../components/layouts";
import { Pokemon, PokemonListResponse } from "../../interfaces";
import { getPokemonInfo, localFavorites } from "../../utils";

interface Props {
    pokemon: Pokemon;
}
const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {

    const [isFavorite, setFavorite] = useState(localFavorites.isFavorite(pokemon.id));
    const onToggleFavorite = () => {
        localFavorites.toggleFavorite(pokemon.id);
        setFavorite(!isFavorite);
    }

    
    return (
        <Layout title={pokemon.name}>
            <Grid.Container
                css={{
                    marginTop: "5px",
                }}
                gap={2}
            >
                <Grid xs={12} sm={4}>
                    <Card hoverable css={{ padding: "30px" }}>
                        <Card.Body>
                            <Card.Image
                                src={
                                    pokemon.sprites.other?.dream_world
                                        .front_default || "no-image"
                                }
                                alt={pokemon.name}
                                width="100%"
                                height={200}
                            />
                        </Card.Body>
                    </Card>
                </Grid>
                <Grid xs={12} sm={8}>
                    <Card>
                        <Card.Header
                            css={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <Text h1 transform="capitalize">
                                {pokemon.name}
                            </Text>
                            <Button color="gradient" ghost={isFavorite} onClick={onToggleFavorite}>
                                {isFavorite ? 'En Favoritos': 'Agregar a Favoritos'}
                            </Button>
                        </Card.Header>
                        <Divider/>
                        <Card.Body>
                            <Text size={30}>Abilities</Text>
                            <ul>
                                {pokemon.abilities.map((ability) => (
                                    <li key={ability.ability.name}><Text transform="capitalize">{ability.ability.name}</Text></li>
                                )
                                )}
                            </ul>
                            <Text size={30}>Sprites</Text>
                            <Container direction="row" display="flex" justify="space-evenly" gap={0}>

                                <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={100} height={100}/>
                                <Image src={pokemon.sprites.back_default} alt={pokemon.name} width={100} height={100}/>
                                <Image src={pokemon.sprites.front_shiny} alt={pokemon.name} width={100} height={100}/>
                                <Image src={pokemon.sprites.back_shiny} alt={pokemon.name} width={100} height={100}/>
                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
        </Layout>
    );
};

// You should use getStaticPaths if you???re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const {data} = await pokeApi.get<PokemonListResponse>(`pokemon?limit=151`);
    const pokemons: string[] = data.results.map(pokemon => pokemon.name);
    return {
        paths: pokemons.map((name) => ({
            params: { name: name },
        })),
        fallback: 'blocking',
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    //nothing here goes client side, except what its inside the props
    const { name } = params as { name: string };
    const pokemon = await getPokemonInfo(name);

    if(!pokemon){
        return{
            redirect: {
                destination:'/',
                permanent: false
            }
        }
    }
    return {
        props: {
            pokemon,
        },
        revalidate:86400
    };
};
export default PokemonByNamePage;
