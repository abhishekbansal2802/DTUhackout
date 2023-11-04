"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Register {
    email: string,
    password: string,
    name: string
}

export default function Page() {

    const [registerState, setRegisterState] = useState<Register>(
        {
            email: "",
            password: "",
            name: ""
        }
    )

    const router = useRouter()

    const registerPage = async () => {
        if (registerState.name == "" || registerState.email == "" || registerState.password == "") {
            return
        }
        const response = await fetch(
            "http://localhost:8080/api/user/register",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(
                    {
                        name: registerState.name,
                        email: registerState.email,
                        password: registerState.password,
                    }
                )
            }
        )
        const res = await response.json()
        console.log(res)
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
                        Register
                    </div>
                    <div>
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-400">Name</label>
                                <input type="text" value={registerState.name} onChange={(e) => { setRegisterState({ name: e.target.value, password: registerState.password, email: registerState.email }) }} id="name" className="bg-gray-50 w-full h-12 outline-none px-2 py-1 border border-slate-300" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-400">Email</label>
                                <input type="text" value={registerState.email} onChange={(e) => { setRegisterState({ email: e.target.value, password: registerState.password, name: registerState.name }) }} id="email" className="bg-gray-50 w-full h-12 outline-none px-2 py-1 border border-slate-300" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="password" className="text-sm font-medium text-gray-400">Password</label>
                                <input type="password" value={registerState.password} onChange={(e) => { setRegisterState({ password: e.target.value, email: registerState.email, name: registerState.name }) }} id="password" className="bg-gray-50 w-full h-12 outline-none px-2 py-1 border border-slate-300" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-center">
                        <button className="w-full h-12 bg-slate-900 text-white uppercase" onClick={() => { registerPage() }}>
                            Register
                        </button>
                        <p>OR</p>
                        <Link href="/login">
                            Already a user? Register
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    </>



}