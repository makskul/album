import React, { useState, useEffect } from "react";
import * as config from '/constants';
import axios from "axios";
import { useSSE } from "use-sse";
import PageTitle from "../components/PageTitle";
import PageMeta from "../components/Meta/PageMeta";
import { useLocation } from "react-router-dom";
import {getPathName} from "../utils";

function Home() {

    const url = "https://jsonplaceholder.typicode.com/users";
    const [counter, setCounter] = useState(0)
    const [users, error] = useSSE(async() => {
        const { data } = await axios(url);
        return data;
    }, []);

    function inc() {
        setCounter(prevCount => prevCount + 1)
    }

    return (
        <>
            <div>
                <h2>Users block</h2>
                {users && users.map(post => (
                    <div key={post.id}>{post.username}</div>
                ))}
                <button onClick={ inc }>Click { counter > 0 ? counter: '' }</button>
            </div>
        </>
    );
}

export default Home;
