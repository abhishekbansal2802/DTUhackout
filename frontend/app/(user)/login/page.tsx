"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Login {
    email: string,
    password: string,
}

export default function Page() {

    const [loginState, setLoginState] = useState<Login>(
        {
            email: "",
            password: "",
        }
    )

    const router = useRouter()

    const loginAction = async () => {
        if (loginState.email == "" || loginState.password == "") return
        const response = await fetch(
            "http://localhost:8080/api/user/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(
                    {
                        email: loginState.email,
                        password: loginState.password,
                    }
                )
            }
        )
        const res = await response.json()
        if (res.success) {
            localStorage.setItem("token", res.token)
            document.location.reload()
            router.push("/")
        }
    }

    return <>

        <div className="w-full h-full p-4 flex justify-center items-center">
            <div className="w-1/3 p-4 bg-white shadow-sm rounded">
                <div className="flex flex-col gap-6">
                    <div className="text-2xl font-semibold text-gray-700">
                        Login
                    </div>
                    <div>
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-400">Email</label>
                                <input type="text" id="email" value={loginState.email} onChange={(e) => { setLoginState({ email: e.target.value, password: loginState.password }) }} className="bg-gray-50 w-full h-12 outline-none px-2 py-1 border border-slate-300" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="password" className="text-sm font-medium text-gray-400">Password</label>
                                <input type="text" id="password" value={loginState.password} onChange={(e) => { setLoginState({ password: e.target.value, email: loginState.email }) }} className="bg-gray-50 w-full h-12 outline-none px-2 py-1 border border-slate-300" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-center">
                        <button className="w-full h-12 bg-slate-900 text-white uppercase" onClick={() => { loginAction() }}>
                            Login
                        </button>
                        <p>OR</p>
                        <Link href="/register">
                            New User? Register
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    </>



}