import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="fixed flex items-center justify-center w-full h-full transform -translate-x-1/2 -translate-y-1/2 bg-white top-1/2 left-1/2">
        <Loader2 className="h-[100px] w-[100px] animate-spin text-orange-500" />
    </div>
  )
}


export default Loading;