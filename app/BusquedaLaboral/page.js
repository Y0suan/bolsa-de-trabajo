import { BusquedaLaboral } from '@/components/busquedaLaboral'
import React from 'react'
import {Popover, PopoverTrigger, PopoverContent, Button, Input} from "@nextui-org/react";
import {Divider} from "@nextui-org/react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiStar } from "react-icons/ci";



const page = () => {
  return (
    <div>
        <div className='px-20 mt-2' >
      <Popover placement="bottom" showArrow={true}>
      <PopoverTrigger>
        <Button className='bg-white' >Localidad <MdKeyboardArrowDown/></Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <div className="text-small font-bold">Eldorado</div>
          <Divider className="my-4 " />  
          <div className="text-small font-bold">Montecarlos</div>
        </div>
      </PopoverContent>
      </Popover>

      <Popover placement="bottom" showArrow={true}>
      <PopoverTrigger>
        <Button className='bg-white' >Rubro<MdKeyboardArrowDown/></Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <div className="text-small font-bold">Tecnologia</div>
          <Divider className="my-4 " />  
          <div className="text-small font-bold">Educacion</div>
        </div>
      </PopoverContent>
      </Popover>
      <Divider className="my-4 " />
      </div>
      <BusquedaLaboral/>
    </div>
  )
}

export default page