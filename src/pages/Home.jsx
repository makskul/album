import React, {Suspense, useState} from "react";
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
    const [name, setName] = useState("");

    return (
        <section>
            <h2 className={'text-2xl mb-2'}>Our Authors</h2>
            <div className={'py-3 text-center'}>
                <form className={'inline-block'} action={`?search=${name}`}>
                    <label className={'block text-gray-400 text-sm mr-2 text-left'}>Search by username</label>
                    <input
                        className={'border-2 border-indigo-600 text-sm px-4 py-2 rounded-l-lg'}
                        id="search-input"
                        type="text"
                        name="search"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <button
                        className={'bg-sky-500 text-white text-sm px-2 py-2.5 rounded-r-lg'}
                        type="submit"
                    >
                        Search
                    </button>
                </form>
            </div>
            <Suspense fallback={'...............'}>
                <div className={'bg-gray-100'}>
                    {users && users.map(user => (
                        <div className={'flex justify-between border-b-2 border-b-white px-2 py-2'} key={user.id}>
                            {user.name} ({user.username})
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
