"use client"

import Link from "next/link"

export default function Navbar() {

    const logoutHandler = () => {
        localStorage.removeItem("token")
        document.location.reload
    }

    return <>

        <div className="w-full p-4">
            <div className="shadow-sm rounded w-full h-full bg-white p-4 flex flex-row justify-between items-center">
                <div className=" text-xl text-gray-800 font-medium ">
                    <Link href="/">WeEye</Link>
                </div>
                <div>
                    <ul className="flex flex-row gap-12">
                        <li className="cursor-pointer"><Link href="/contact">Contact</Link></li>
                        <li className="cursor-pointer"><Link href="/about">About</Link></li>
                        <a href="http://localhost:3000/code.zip" className="cursor-pointer">Downloads</a>
                        <li className="cursor-pointer">{localStorage.getItem("token") ? <button onClick={() => { logoutHandler() }}>Logout</button> : <Link href="/login">Login</Link>}</li>
                        <li className="cursor-pointer">{localStorage.getItem("token") ? <Link href="/profile">Profile</Link> : ""}</li>
                    </ul>
                </div>
            </div>

        </div>

    </>

}