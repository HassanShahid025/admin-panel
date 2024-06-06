import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,

  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,

  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react"

export function Dropdown() {
  const [position, setPosition] = useState("Popular")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="text-[#959595] gap-2 font-normal outline-none focus:border-none">
            Popular
            <MdKeyboardArrowDown/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="Popular">Popular</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Latest">Latest</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Old">Old</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
