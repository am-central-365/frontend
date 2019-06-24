import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';

export default function UiDisplay() {
    const { state } = useContext(StoreContext);

    return (
        <div>
            <p>Show result:</p>
            <ul>
            { state.result.value.map(e => <li key={e}>{e}</li>) }
            </ul>
        </div>
    );
}

