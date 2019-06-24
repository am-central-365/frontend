import React, { Fragment } from 'react';

import UiDisplay from './UiDisplay';
import UiInput from "./UiInput";

export default function Index() {
    return (
        <Fragment>
            <UiInput />
            <UiDisplay />
        </Fragment>
    );
}
