
import React from "react";
import { loginEndpoint } from "../../api/musicapi";

export default function Login() {
    return (
        <div>
            <h1>WELCOME HOME</h1>
            <a href={loginEndpoint}>
                LOGIN
            </a>
        </div>
    )

}