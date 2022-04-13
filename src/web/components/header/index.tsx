import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "./styles";

export const HeaderComponent: NextPage = () => {
    return (
        <Header>
            <h1>
                Logo
            </h1>
            <nav>
                <ul>
                    <li>
                        <Link href="/products">Produtos</Link>
                    </li>
                    <li>
                        <Link href="/about-us">Sobre nós</Link>
                    </li>
                </ul>
                <button>
                    <Image src="/menu-button.svg" alt="menu button" width="24px" height="24px" />
                </button>
            </nav>
        </Header>
    );
};
