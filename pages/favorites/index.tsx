import { Card, Grid, Text } from "@nextui-org/react";
import React, { useState } from "react";
import { Layout } from "../../components/layouts";
import { FavoritePokemonCard, PokemonCard } from "../../components/pokemon";
import { NoFavorites } from "../../components/ui";

import { localFavorites } from "../../utils";
import { useEffect } from "react";

const FavoritesPage = () => {
    const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);
    useEffect(() => {
        setFavoritePokemons(localFavorites.getFavorites());
    }, []);

    return (
        <Layout title="Favorites">
            {favoritePokemons.length === 0 ? (
                <NoFavorites />
            ) : (
                <Grid.Container gap={3} direction="row" justify="flex-start">
                    {favoritePokemons.map((id) => (
                        <FavoritePokemonCard key={id} id={id} />
                    ))}
                </Grid.Container>
            )}
        </Layout>
    );
};

export default FavoritesPage;
