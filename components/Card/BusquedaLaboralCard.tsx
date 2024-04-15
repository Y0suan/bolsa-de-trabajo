"use client"
import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

export const BusquedaLaboralCard = ({ logo, nombre, direccion, localidad, telefono, rubro, rubroEspecifico, descripcion, archivo }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Card className="max-w-[390px] bg-slate-100 rounded-sm shadow-md hover:shadow ease-out ">
        <CardHeader className="flex  gap-3">
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src={logo}
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">{nombre}</p>
            <p className="text-small text-default-500">{localidad}</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>{descripcion}</p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Button onPress={onOpen} className="bg-white text-blue-500 ">
            Descubre la oferta de {nombre}<FaExternalLinkAlt />
          </Button>
        </CardFooter>
      </Card>


      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
          
              <ModalHeader className="flex flex-col gap-1">{nombre}
                <p className="text-small font-light text-default-500">{direccion}</p>
                <p className="text-small font-light text-default-500">{telefono}</p>
                <p className="text-small font-light text-default-500">{rubro}</p>
              </ModalHeader>
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
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="primary" >
                  Postulate
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
