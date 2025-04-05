import { Users } from "lucide-react"

function Mail() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-gray-500">
      <Users size={48} strokeWidth={1} />
      <p className="mt-2">Select a mail to view details</p>
    </div>
  )
}

export default Mail

