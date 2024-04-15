import React, {Suspense} from "react";
import { useSSE } from "use-sse";
import axios from "axios";
import { getFetchUrl, getPathName } from "../utils";
import { Link, useSearchParams } from "react-router-dom";

function Entities () {
    const pathname = getPathName();
    const [searchParams] = useSearchParams();
    const url = getFetchUrl(searchParams.get('userId'));

    const [entities] = useSSE(async() => {
        const { data } = await axios(url);
        return data;
    }, []);

    return (
        <>
            <h2>Entities page</h2>
            <Suspense fallback={'...............'}>
                <div className="users-container">
                    {entities && entities.map(entity => (
                        <div key={entity.id}>
                            <Link to={`/${pathname}/${entity.id}`}>{entity.title}</Link>
                        </div>
                    ))}
                </div>
            </Suspense>
        </>
    )
}

export default Entities;