import axios from "axios";
import type { GetServerSideProps } from "next";
import { Dashboard } from "web/pages/dashboard";

import type { Form } from "types/form";

export default Dashboard;

export interface DashboardProps {
	forms: Array<Form>;
}

export const getServerSideProps: GetServerSideProps = async _context => {
	try {
		const { data } = await axios.get(
			`${process.env.NEXT_PUBLIC_API_URL}/forms`,
		);

		return {
			props: {
				forms: data,
			},
		};
	} catch {
		return {
			props: {
				forms: [],
			},
		};
	}
};
