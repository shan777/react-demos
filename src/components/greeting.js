import React from 'react';

function Greeting (props) {
    console.log('Props:', props);

    const style1 = {
        color: props.favColor
    }
    return <h1 style={style1}>Hello, {props.name}!</h1>;
}
export default Greeting;