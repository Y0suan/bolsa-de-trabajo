"use client";
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Image, LinkIcon } from "@nextui-org/react";
import { FcBusinessContact } from "react-icons/fc";
import { FcBriefcase } from "react-icons/fc";
import { FcCollaboration } from "react-icons/fc";
import { FcConferenceCall } from "react-icons/fc";
import { FcAssistant } from "react-icons/fc";
import { FcFeedback } from "react-icons/fc";

export default function NavbarStyle() {
  return (
    <Navbar className=" " >
      <NavbarBrand >
        {/* <Image  className=" w-40 px-2 " src="https://res.cloudinary.com/dzqdjsrez/image/upload/v1704793637/agenda-next-panel/qwds1dfaepxputm1ln8q.jpg" ></Image> */}
        <Image width={100} className=" w-20 px-2 " src="https://res.cloudinary.com/dzqdjsrez/image/upload/v1712575507/logo_Oe__color_azul__1_-removebg-preview.png324_lijwx5.png" ></Image>
        <p className="font-bold text-inherit">Oficina De Empleo</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                radius="sm"
                variant="light"
              >
                Bolsa De Trabajo
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            {/* <DropdownItem
              key="autoscaling"
              description="Descubre habilidades y destrezas profesionales especializadas."    
              startContent={<FcBusinessContact className=" text-5xl " />}    
              href="/oficio"
            >
              Oficio
            </DropdownItem> */}
            <DropdownItem
              key="production_ready"
              description=" Encuentra expertos cualificados en diversos campos laborales."
              startContent={<FcBriefcase className=" text-5xl " />}
              href="/profesionales"
            >
              Profesionales
            </DropdownItem>
            <DropdownItem
              key="99_uptime"
              description="Explora oportunidades de empleo y carreras profesionales."
              startContent={<FcCollaboration className=" text-5xl " />} 
              href="/BusquedaLaboral"           
            >
             Búsqueda Laboral
            </DropdownItem>
            <DropdownItem
              key="supreme_support"
              description="Ofrece puestos de trabajo disponibles y vacantes laborales."
              startContent={<FcConferenceCall className=" text-5xl " />}
              href="/OfertaLaboral"
            >
              Oferta Laboral
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Cursos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Noticias
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">

        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-4 bg-transparent data-[hover=true]:bg-transparent"
                radius="sm"
                variant="bordered"
              >
                Contactanos
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="autoscaling"
              description="Ponte en contacto por WhatsApp para consultas o asistencia"
              startContent={<FcAssistant className=" text-5xl " />}               
            >
              Whatsapp
            </DropdownItem>
            <DropdownItem
              key="autoscaling"
              description="Para contactarnos, envía un correo electrónico."
              startContent={<FcFeedback className=" text-5xl " />}               
            >
              Correo
            </DropdownItem>

          </DropdownMenu>
        </Dropdown>

      </NavbarContent>
    </Navbar>
  );
}
