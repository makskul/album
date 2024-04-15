import React, {Suspense, useState} from "react";
import axios from "axios";
import { useSSE } from "use-sse";
import Counter from "../components/Counter";

function Home() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const [users] = useSSE(async() => {
        const { data } = await axios(url);
        return data;
    }, []);

    return (
        <>
            <h2>Users</h2>
            <Counter/>
            <Suspense fallback={'...............'}>
                <div className="users-container">
                    {users && users.map(post => (
                        <div key={post.id}>{post.username}</div>
                    ))}
                </div>
            </Suspense>
        </>
    )
}

export default Home;
