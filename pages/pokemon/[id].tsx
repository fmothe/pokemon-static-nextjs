import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { pokeApi } from "../../api";
import { Layout } from "../../components/layouts";
import { Pokemon } from "../../interfaces";

interface Props {
    pokemon: Pokemon;
}
const PokemonPage: NextPage<Props> = ({pokemon}) => {

    return (
        <Layout title="alguno">
            <h1>Hola mundo</h1>
        </Layout>
    );
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const pokemons = [...Array(151)].map((value, index) => `${index+1}`);
    return {
        paths: pokemons.map((id) => ({
            params: { id: id },
        })),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
    //nothing here goes client side, except what its inside the props
    const {id} = params as {id:string};

    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

    return {
        props: {
            pokemon: data
        },
    };
};
export default PokemonPage;
