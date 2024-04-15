import React, {Suspense} from "react";
import {useSSE} from "use-sse";
import axios from "axios";
import {getFetchUrl} from "../utils";
import { Link, useSearchParams } from "react-router-dom";

function Entities () {
    return (
        <>
            <h2>Entity page</h2>
        </>
    )
}

export default Entities;