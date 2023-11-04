export default function Navbar() {
    return <>

        <div className="w-full p-4">
            <div className="shadow-sm rounded w-full h-full bg-white p-4 flex flex-row justify-between items-center">
                <div className=" text-xl text-gray-800 font-medium ">
                    WeEye
                </div>
                <div>
                    <ul className="flex flex-row gap-12">
                        <li className="cursor-pointer">Contact</li>
                        <li className="cursor-pointer">About</li>
                        <li className="cursor-pointer">Downloads</li>
                        <li className="cursor-pointer">Login / Signup</li>
                    </ul>
                </div>
            </div>

        </div>

    </>

}