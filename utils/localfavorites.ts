const toggleFavorite = (id: number) => {

    console.log('favorite toggle llamado id: ', id)
    let favorites: number[] = JSON.parse(
        localStorage.getItem("favorites") || "[]"
    );
    if (favorites.includes(id)) {
        console.log('includes')
        favorites = favorites.filter((pokeId) => pokeId !== id);
    } else {
        favorites.push(id);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
};

const getFavorites = (): number[] => {
    return JSON.parse(
        localStorage.getItem("favorites") || "[]"
    );
};

const isFavorite = (id: number): boolean => {
    if (typeof window === "undefined") return false;
    let favorites: number[] = JSON.parse(
        localStorage.getItem("favorites") || "[]"
    );
    return favorites.includes(id);
};

export default { toggleFavorite, getFavorites, isFavorite };
