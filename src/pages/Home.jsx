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
            <h2>Users</h2>
            <Suspense fallback={'...............'}>
                <div className="users-container">
                    {users && users.map(user => (
                        <div key={user.id}>
                            {user.name}
                            &nbsp;&nbsp;<Link to={`/posts?userId=${user.id}`}>Posts</Link>
                            &nbsp;&nbsp;<Link to={`/albums?userId=${user.id}`}>Albums</Link>
                        </div>
                    ))}
                </div>
            </Suspense>
        </section>
    )
}

export default Home;
