const initialState = {
    input: '',
    result: { value: [], loading: false }
};
const types = {
    SET_INPUT: 'SET_INPUT',
    SET_RESULT: 'SET_RESULT'
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_INPUT:
            return {
                ...state,
                input: action.payload
            };
        case types.SET_RESULT:
            return {
                ...state,
                result: action.payload
            };
        default:
            throw new Error('Unexpected action');
    }
};
export { initialState, types, reducer };
