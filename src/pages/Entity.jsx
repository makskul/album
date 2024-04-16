import React from "react";
import {Link, useParams} from "react-router-dom";
import {getFetchUrl} from "../utils";
import {useSSE} from "use-sse";
import axios from "axios";

function Entity () {
    const url = getFetchUrl();
    const [entity] = useSSE(async() => {
        const { data } = await axios(url);
        return data;
    }, []);

    return (
        <>
            {entity && <h2 className={'text-2xl mb-2'}>{entity.title}</h2>}
            {entity && entity.body && <div className={'bg-gray-100 p-4'}>{entity.body}</div>}
        </>
    )
}

export default Entity;