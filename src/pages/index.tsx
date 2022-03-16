import type { NextPage } from "next";
import style from "styles/home.module.scss";

const Home: NextPage = () => {
	return (
		<main id={"main"} style={style}>
            Hello World from NextJs!
        </main>
	);
};

export default Home;
