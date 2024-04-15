"use client"
import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react";
import { useDisclosure } from "@nextui-org/react";
import {Link} from "@nextui-org/react";

export default function NoticiasCard({fecha,tema,titulo,imagen}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
    <>  
    <Card className="py-4 shadow ">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny text-gray-700 uppercase font-bold">{fecha}</p>
        <small className="text-default-500">{tema}</small>
        <h4 className="font-bold text-large">{titulo}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2 gap-2">
        <Image
          alt="Card background"
          className="object-cover h-40 rounded-xl"
          src={imagen}
          width={270}
        />
      <Button className="w-[100%]" onPress={onOpen}>Leer Mas</Button>
      </CardBody>
    </Card>


    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
    <ModalContent>
      {(onClose) => (
        <>
          <ModalHeader className="flex flex-col gap-1">{titulo}</ModalHeader>
          <ModalBody>
            <p> 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nullam pulvinar risus non risus hendrerit venenatis.
              Pellentesque sit amet hendrerit risus, sed porttitor quam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nullam pulvinar risus non risus hendrerit venenatis.
              Pellentesque sit amet hendrerit risus, sed porttitor quam.
            </p>
            <p>
              Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
              dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. 
              Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
              Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur 
              proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
            </p>

          </ModalBody>
          <ModalFooter>
          <Link isBlock showAnchorIcon href="#" color="primary">
             Contactalos
            </Link>
          </ModalFooter>
        </>
      )}
    </ModalContent>
  </Modal></>
  );
}
