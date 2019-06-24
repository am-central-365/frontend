import { useContext, useEffect } from 'react';
import { StoreContext } from '../../context/StoreContext';

export function useFetchEffect() {
    const { state, actions } = useContext(StoreContext);

    useEffect(() => {
        const initValue = [];
        if (!state.input) {
            actions.setResult({ value: initValue, loading: false });
            return;
        }
        actions.setResult({ value: initValue, loading: true });
        setTimeout(() => actions.setResult({value: ["nothing yet"], loading: false}), 500);
        // const url = `/rest/action?q=${state.input}`;
        // fetch(url).then((response) => {
        //     switch (response.status) {
        //         case 200:
        //             return response.json();
        //         default:
        //             console.error(response);
        //             return Promise.reject(new Error('Failed to load results.'));
        //     }
        // }).then((result) => {
        //     actions.setResult({ value: result, loading: false });
        // }).catch((error) => {
        //     actions.setResult({ value: initValue, error, loading: false });
        // });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ state.input ]);
}
