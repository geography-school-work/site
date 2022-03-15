import { NextPage } from "next";
import style from "./style.module.scss";

const HomePage: NextPage = () => {
    return (
        <main id={"main"} style={style}>
            Hello World from NextJs!
        </main>
    );
};

export default HomePage;
