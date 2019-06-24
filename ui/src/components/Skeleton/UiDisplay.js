import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';

export default function UiDisplay() {
    const { state } = useContext(StoreContext);

    return (
        <div>
            <p>Show result:</p>
            <ul>
            { state.result.value.map(e => <li key={e.email}>{`name: ${JSON.stringify(e.name, null, 2)}, email: ${e.email}`}</li>) }
            </ul>
        </div>
    );
}

