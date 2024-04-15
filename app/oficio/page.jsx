import { Cursos } from '@/components/cursos'
import { Oficio } from '@/components/oficio'
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
        <Button className='bg-white' >Matricula <MdKeyboardArrowDown/></Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <div className="text-small font-bold">Sin Matricular</div>
          <div className="text-tiny">Personal capacitado sin matriculacion</div>
          <Divider className="my-4 " />  
          <div className="text-small font-bold">Matriculados</div>
          <div className="text-tiny">Personal capacitado con matricula</div>
        </div>
      </PopoverContent>
      </Popover>

      <Popover placement="bottom" showArrow={true}>
      <PopoverTrigger>
        <Button className='bg-white' >Calificacion<MdKeyboardArrowDown/></Button>
      </PopoverTrigger>
      <PopoverContent>
        
          <div className="flex px-4 py-2">
                <CiStar className=" text-yellow-600 "  />
                <CiStar />
                <CiStar />
                <CiStar/>
                <CiStar/>
          </div>
          <Divider className="" />  
          <div className="flex px-4 py-2">
                <CiStar className=" text-yellow-600 "  />
                <CiStar className=" text-yellow-600 "  />
                <CiStar />
                <CiStar/>
                <CiStar/>
          </div>
          <Divider className="" />  
          <div className="flex px-4 py-2">
                <CiStar className=" text-yellow-600 "  />
                <CiStar className=" text-yellow-600 " />
                <CiStar className=" text-yellow-600 " />
                <CiStar/>
                <CiStar/>
          </div>
          <Divider className="" />  
          <div className="flex px-4 py-2">
                <CiStar className=" text-yellow-600 "  />
                <CiStar className=" text-yellow-600 "  />
                <CiStar className=" text-yellow-600 " />
                <CiStar className=" text-yellow-600 " />
                <CiStar/>
          </div>
          <Divider className="" />  
          <div className="flex px-4 py-2">
                <CiStar className=" text-yellow-600 "  />
                <CiStar className=" text-yellow-600 "  />
                <CiStar className=" text-yellow-600 " />
                <CiStar className=" text-yellow-600 " />
                <CiStar className=" text-yellow-600 " />
          </div>
       
      </PopoverContent>
      </Popover>
      <Divider className="my-4 " />
      </div>
      

      <Oficio/>
    </div>
  )
}

export default page