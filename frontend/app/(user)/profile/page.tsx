"use client"

import { AddIconSVG } from "@/app/icons"
import { useEffect, useState } from "react"

import axios from "axios"

export default function Page() {

    const [user, setUser] = useState()

    const getProfile = async () => {
        if (localStorage.getItem("token")) {
            const response = await fetch(
                `http://localhost:8080/api/user/me/${localStorage.getItem("token")}`,
            )
            const res = await response.json()
            if (res.success) {
                setUser(res.user)
            }
        }
    }

    const [image, setImage] = useState()

    const sendImage = async () => {
        const formData = new FormData()
        formData.append("image", image)
        const response = axios.post(
            "http://localhost:8080/api/user/image/add", formData
        )
    }

    useEffect(() => {
        getProfile()
    }, [])

    var fr = new FileReader()

    return <>

        <div className="w-full h-full p-4">
            <div className="w-full h-full bg-white shaodw-sm rounded p-4 flex flex-col gap-6">
                <div className="text-2xl font-semibold text-gray-800">
                    Profile
                </div>
                {
                    user && <div className="flex flex-col gap-3">

                        <div className="flex flex-col gap-2">
                            <div className="text-2xl font-semibold text-gray-600">
                                Name
                            </div>
                            <div className="text-2xl font-semibold text-gray-800">
                                {user.name}
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="text-2xl font-semibold text-gray-600">
                                Email
                            </div>
                            <div className="text-2xl font-semibold text-gray-800">
                                {user.email}
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <div className="flex flex-row gap-3 items-center text-2xl font-semibold text-gray-600">
                                Uploads
                            </div>
                            <div>
                                <div className="w-48 h-48 border border-slate-100">
                                    <label htmlFor="image" className="w-full h-full flex justify-center items-center">{image ? <img className="w-full flex flex-col justify-center items-center h-full overflow-hidden" src={URL.createObjectURL(image)}></img> : AddIconSVG}</label>
                                    <input type="file" id="image" className="hidden" onChange={(e) => { setImage(e.target.files[0]) }} />
                                </div>
                            </div>
                            <button className="px-4 py-2 bg-green-600 text-white w-min rounded " onClick={() => { sendImage() }}>
                                Submit
                            </button>
                        </div>

                        <div>
                        </div>

                    </div>
                }
            </div>
        </div >
        s

    </>
}   