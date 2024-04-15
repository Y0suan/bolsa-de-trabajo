import React from "react";
import { Card, CardHeader, CardBody, Image, CardFooter } from "@nextui-org/react";
import { Button } from "@nextui-org/button";

export default function CursosCard({ titulo, fecha, arancel, imagen }) {
  return (
    <Card isFooterBlurred className="  h-[300px] col-span-12 sm:col-span-5">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/70 uppercase font-bold">{arancel}</p>
      
      </CardHeader>
      <Image
        removeWrapper
        alt="Card example background"
        className=" z-0 w-full h-full scale-125 -translate-y-7 object-cover "
        src={imagen}
      />
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <h4 className="text-white font-medium text-xl pb-2">{titulo}</h4>
          <p className="text-black text-tiny">Fecha: {fecha}</p>
          <p className="text-black text-tiny">Haz clic para obtener más información</p>
        </div>
        <Button className="text-tiny" color="primary" radius="full" size="sm">
          Sumate
        </Button>
      </CardFooter>
    </Card>
  );
}