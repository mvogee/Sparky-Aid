import React from 'react';

type AppProps = {
    conduitSize: string;
    conduitType: string;
}

const BoxOffset = (props: AppProps) => {

    return (
        <div className="boxOffset-wrapper">
            <p>first mark 2.5" from end of pipe</p>
            <p>second mark 4.5" from first mark</p>
            <p>Make 10deg bends on both marks</p>
        </div>
    );

}

export default BoxOffset;