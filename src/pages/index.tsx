import type { NextPage } from "next";

import { DataSection, Main, CustomLink } from "../styles/home";
import { Header } from "../web/components/header";

const Home: NextPage = () => {
	return (
		<>
			<Header />
			<Main>
				<DataSection id="presentation">
					<h2>Uma empresa sustentável, feita para você!</h2>
					<p>
						A HortaSua tem como proposta pomover uma maior sustentabilidade,
						permitindo ao consumidor uma horta auto-regulável em sua própria
						casa ou apartamento.
					</p>
				</DataSection>
				<DataSection id="form-invite">
					<h2>Gostou do que leu? Então nos dê sua opinião!</h2>
					<p>
						Responda ao formulário abaixo para nos dizer um pouco mais sobre a
						sua experiência com a nossa empresa!
					</p>
					<CustomLink href="#">Responder ao formulário</CustomLink>
				</DataSection>
			</Main>
		</>
	);
};

export default Home;
