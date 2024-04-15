import React from 'react'
import {Popover, PopoverTrigger, PopoverContent, Button, Input} from "@nextui-org/react";
import {Divider} from "@nextui-org/react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { Profecionales } from '@/components/profecionales';

const page = () => {
  return (
    <div className='overflow-x-hidden' > 
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

      <Popover placement="bottom" showArrow={true}>
      <PopoverTrigger>
        <Button className='bg-white' >Carreras<MdKeyboardArrowDown/></Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <div className="text-small font-bold">Oficio</div>
          {/* <div className="text-tiny">Personal capacitado sin matriculacion</div> */}
          <Divider className="my-4 " />  
          <div className="text-small font-bold">Carreras de Grado</div>
          {/* <div className="text-tiny">Personal capacitado con matricula</div> */}
          <Divider className="my-4 " />  
          <div className="text-small font-bold">Carreras de Pregrado</div>
          {/* <div className="text-tiny">Personal capacitado con matricula</div> */}
        </div>
      </PopoverContent>
      </Popover>

      <Popover placement="bottom" showArrow={true}>
      <PopoverTrigger>
        <Button className='bg-white' >Disponibilidad<MdKeyboardArrowDown/></Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <div className="text-small font-bold">Full-Time</div>
          <div className="text-tiny">Disponibilidad de tiempo parcial</div>
          <Divider className="my-4 " />  
          <div className="text-small font-bold">Pard-Time</div>
          <div className="text-tiny">Disponibilidad de tiempo completo</div>
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
          <div className="text-tiny">Disponibilidad de tiempo parcial</div>
          <Divider className="my-4 " />  
          <div className="text-small font-bold">Educacion</div>
          <div className="text-tiny">Disponibilidad de tiempo completo</div>
          <Divider className="my-4 " />  
          <div className="text-small font-bold">Construccion</div>
          <div className="text-tiny">Disponibilidad de tiempo completo</div>
          <Divider className="my-4 " />  
          <div className="text-small font-bold">Servicio</div>
          <div className="text-tiny">Disponibilidad de tiempo completo</div>
        </div>
      </PopoverContent>
      </Popover>

      <Divider className="my-4 " />
      </div>
      <Profecionales/>
    </div>
  )
}

export default page