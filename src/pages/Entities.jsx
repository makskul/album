import React, {Suspense} from "react";
import { useSSE } from "use-sse";
import axios from "axios";
import { getFetchUrl, getPathName } from "../utils";
import { Link, useSearchParams } from "react-router-dom";

function Entities () {
    const pathname = getPathName();
    const url = getFetchUrl();

    const [entities] = useSSE(async() => {
        const { data } = await axios(url);
        return data;
    }, []);

    return (
        <>
            <h2 className={'text-2xl mb-2'}>Entities page</h2>
            <Suspense fallback={'...............'}>
                <div className={'bg-gray-100'}>
                    {entities && entities.map(entity => (
                        <div className={'flex justify-between border-b-2 border-b-white px-2 py-2'} key={entity.id}>
                            <h2 className={'text-xl mb-2'}>{entity.title}</h2>
                            <Link className={'text-indigo-600'} to={`/${pathname}/${entity.id}`}>Read more...</Link>
                        </div>
                    ))}
                </div>
            </Suspense>
        </>
    )
}

export default Entities;