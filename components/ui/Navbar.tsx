import { Button, Input, Link, Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import NextLink from "next/link";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
    const { theme } = useTheme();
    return (
        <div
            style={{
                display: "flex",
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "start",
                padding: "0x 20px",
                backgroundColor: theme?.colors.gray900.value,
            }}
        >
            <Image
                src={
                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                }
                alt="icono de la app"
                width={70}
                height={70}
            />
            <NextLink href="/" passHref>
                <Link>
                    <Text color={"white"} h2>
                        P
                    </Text>
                    <Text color={"white"} h3>
                        okemon
                    </Text>
                </Link>
            </NextLink>
            <Spacer css={{ flex: 1 }} />
            {/* <Input 
                clearable 
                placeholder="Charmander"
                bordered
                rounded 
                color="primary"
                contentRight={<FontAwesomeIcon icon={faMagnifyingGlass} style={{color: 'grey'}}/>}
                type='search' 
                /> */}
            <Spacer css={{ flex: 1 }} />

            <NextLink href="/favorites" passHref>
                <Link>
                    <Button
                        color={"gradient"}
                        bordered
                        ghost
                        css={{ marginRight: "20px" }}
                    >
                        Favorites
                    </Button>
                </Link>
            </NextLink>
        </div>
    );
};
