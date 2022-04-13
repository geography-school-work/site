import type { NextPage } from "next";
import { HeaderComponent } from "../components/header";
import { HomeStyles } from "./styles";

const Home: NextPage = () => {
	return (
		<div id="home">
			<HeaderComponent />
			<HomeStyles>
				<h2>
					Uma empresa sustentável, feita para você!
				</h2>
				<p>
					A HortaSua tem como proposta pomover uma maior sustentabilidade,
					permitindo ao consumidor uma horta auto-regulável em sua própria
					casa ou apartamento.
				</p>
			</HomeStyles>
		</div>
	);
};

export default Home;
