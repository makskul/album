import React, { Suspense } from "react";
import { useSSE } from "use-sse";
import { getFetchUrl } from "../utils";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
    const url = getFetchUrl();
    const [users] = useSSE(async() => {
        const { data } = await axios(url);
        return data;
    }, []);

    return (
        <section>
            <h2 className={'text-2xl mb-2'}>Our Authors</h2>
            <Suspense fallback={'...............'}>
                <div className={'bg-gray-100'}>
                    {users && users.map(user => (
                        <div className={'flex justify-between border-b-2 border-b-white px-2 py-2'} key={user.id}>
                            {user.name}
                            <div>
                                &nbsp;&nbsp;<Link to={`/posts?userId=${user.id}`} className={'text-indigo-600'}>Posts</Link>
                                &nbsp;/&nbsp;<Link to={`/albums?userId=${user.id}`} className={'text-indigo-600'}>Albums</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </Suspense>
        </section>
    )
}

export default Home;
