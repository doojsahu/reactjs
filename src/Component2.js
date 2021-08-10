import React from "react";

import Component1 from "./Component1";
import { ContextConsumer } from "./Context";

const Component2 = () => {
    return (
        <div>
            <br />
            <ContextConsumer>
                {(value) => {
                    console.log('value', value);
                    return <div>{value.text}</div>
                }}
            </ContextConsumer>
        </div>
        )
};

export default Component2;