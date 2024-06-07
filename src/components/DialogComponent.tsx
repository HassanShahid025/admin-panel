import { Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type DialogProps = {
    data : {
        name: string,
        email: string,
        nationality: string,
        projects : number,
        language : string
    }
    
}

export function DialogComponent({data}:DialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
      <p className="text-[#FFBF20] underline  underline-offset-1 cursor-pointer text-sm">View Details</p>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md max-lg:w-72 rounded-xl">
        <div className="flex items-center space-x-2">
          <div className="flex flex-col gap-5 font-medium">
           <p>Name: {data.name}</p>
           <p>Email: {data.email}</p>
           <p>Nationality: {data.nationality}</p>
           <p>Projects: {data.projects}</p>
           <p>Language: {data.language}</p>
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary" className="bg-[#FFBF20]">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
