import { HomeComplejo } from "@/components/HomeComplejo";
import { ContHeader } from "@/components/contHeader";
import { Cursos } from "@/components/cursos";
import HomeIntro from "@/components/homeIntro";
import { HomeSimple } from "@/components/homeSimple";
import { IntroBolsaDeTrabajo } from "@/components/introBolsaDeTrabajo";
import { UltimasNoticias } from "@/components/ultimasNoticias";


export default function Home() {
	return (
		<section className="">
			{/* <ContHeader/> */}
			<HomeComplejo/>
			{/* <HomeSimple/> */}
			<IntroBolsaDeTrabajo/>
			<Cursos/>
			<UltimasNoticias/>
		</section>
	);
}
