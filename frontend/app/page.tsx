import { RightIconSVG } from "./icons";

export default function Page() {
  return <>

    <div className="w-full h-full p-4 ">
      <div className="flex flex-row w-full h-full bg-white rounded shadow-sm">
        <div className="flex-[2] w-full h-full">
          <div className="flex-col flex items-start justify-center h-full w-full p-4">
            <div className="text-3xl font-medium text-gray-600">
              Transforming Online Reading for the Visually Impaired
            </div>
            <div className="text-md font-medium text-gray-400">
              let's embark on the journey to help those in need
            </div>

            <div className="h-12">

            </div>
            <div>
              <button className="flex flex-row gap-1 items-center justify-center px-4 py-2 bg-green-400 rounded-full text-white fill-white">
                Download Now <span className="border-2 border-white rounded-full ">
                  {RightIconSVG}
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full h-full ">

        </div>
      </div>
    </div>

  </>
}