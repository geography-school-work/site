import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global";
import { VARIABLES } from "../styles/variables";

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<ThemeProvider theme={VARIABLES}>
			<GlobalStyle />
			<Component {...pageProps} />
		</ThemeProvider>
	);
};

export default MyApp;
