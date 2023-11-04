export default function Page() {
    return <>

        <div className="w-full h-full p-4 ">
            <div className="w-full h-full bg-white shadow rounded-sm flex flex-col justify-center items-center ">
                <span>
                    For More Queries, Questions and Suggestions contact us on
                </span> <a href="mailto:ap2277@srmist.edu.in" className="">{mailIcon}</a>
            </div>
        </div>

    </>

}

const mailIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" /></svg>