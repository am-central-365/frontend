import { types } from './reducers';

const useActions = (state, dispatch) => {
    function setInput(payload) {
        dispatch({ type: types.SET_INPUT, payload });
    }
    function setResult(payload) {
        dispatch({ type: types.SET_RESULT, payload });
    }
    return {
        setInput,
        setResult
    };
};

export default useActions;
