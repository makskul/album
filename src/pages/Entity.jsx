import React from "react";
import {Link, useParams} from "react-router-dom";
import {getFetchUrl} from "../utils";
import {useSSE} from "use-sse";
import axios from "axios";

function Entity () {
    const { slug } = useParams();
    const url = getFetchUrl(slug , true);

    const [entity] = useSSE(async() => {
        const { data } = await axios(url);
        return data;
    }, []);

    return (
        <>
            <h2>Entity page</h2>
            {entity && <h3>{entity.title}</h3>}
            {entity && <div>{entity.body}</div>}
        </>
    )
}

export default Entity;