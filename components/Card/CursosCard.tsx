import React from "react";
import { Card, CardHeader, CardBody, Image, CardFooter } from "@nextui-org/react";
import { Button } from "@nextui-org/button";

export default function CursosCard({ titulo, fecha, arancel, imagen }) {
  return (
    <Card isFooterBlurred className=" w-1/3  h-[330px] col-span-12 sm:col-span-5">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/70 uppercase font-bold">{arancel}</p>
      
      </CardHeader>
      <Image
        removeWrapper
        alt="Card example background"
        className=" z-0 w-full h-full scale-125 -translate-y-7 object-cover "
        src={imagen}
      />
      <CardFooter className="absolute bg-white bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div className="flex flex-col " >
          <h4 className="text-gray-900 font-semibold text-xl pb-5">{titulo}</h4>
          <p className="text-black text-tiny">Fecha: {fecha}</p>
          <p className="text-black text-tiny pb-4 ">Haz clic para obtener más información</p>
          <Button className="text-tiny" color="primary" radius="sm" size="sm">
          Sumate
        </Button>
        </div>

      </CardFooter>
    </Card>
  );
}
