type FavoriteItem = {
    id: string | number;
};

type FavoriteAction =
    | { type: "Add"; payload: { id: string | number } }
    | { type: "Delete"; payload: { id: string | number } };

export default function favoriteReducer(
    favorites: FavoriteItem[],
    action: FavoriteAction
): FavoriteItem[] {
    switch (action.type) {
        case "Add": {
            const exists = favorites.some(
                item => item.id === action.payload.id
            );

            if (exists) return favorites;

            return [...favorites, { id: action.payload.id }];
        }

        case "Delete":
            return favorites.filter(
                item => item.id !== action.payload.id
            );

        default:
            return favorites;
    }
}