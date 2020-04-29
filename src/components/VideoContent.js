import React, { useEffect } from 'react';
import { csv } from 'd3';

export default function VideoContent() {
    useEffect(() => {
        csv('./assets/database.csv').then((sheet) => {
            console.log(sheet[0]);
        });

    }, [])

    return (
        <div>
            <h1>hello</h1>
        </div>
    )
}
