const initialState = {
    pokebagList: {},
};

export default function getPokebab(state = initialState, action = null) {
    switch (action.type) {
        case 'SET_POKEBAG':
            return { ...state, pokebagList: action.payload };
        default:
            return state;
    }
}