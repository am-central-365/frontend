import { useReducer } from 'react';
import { act, renderHook } from 'react-hooks-testing-library';

import useActions from '../actions';
import { initialState, reducer } from '../reducers';

describe('useActions', () => {
    it('setInput sets input as fetch string', () => {
        const { result } = renderHook(() => useReducer(reducer, initialState));
        let state = result.current[0];
        const dispatch = result.current[1];
        const actions = useActions(state, dispatch);
        act(() => actions.setInput('test'));
        [ state ] = result.current;
        expect(state.input).toBe('test');
    });

    it('setResult sets payload as fetch result', () => {
        const { result } = renderHook(() => useReducer(reducer, initialState));
        let state = result.current[0];
        const dispatch = result.current[1];
        const actions = useActions(state, dispatch);
        act(() => actions.setResult([ { tt: 'tt' } ]));
        [ state ] = result.current;
        expect(state.result).toEqual([ { tt: 'tt' } ]);
    });
});
