import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import type { NextPage } from "next";
import type { DashboardProps } from "pages/dashboard";
import { Header } from "web/components/header";

import {
	Main,
	FormData,
	NumericStats,
	StatsLabel,
	FormsSection,
	FormSection,
} from "./styles";

export const Dashboard: NextPage<DashboardProps> = ({
	forms,
}: DashboardProps) => {
	return (
		<>
			<Header />
			<Main>
				<FormData>
					<NumericStats>{forms.length}</NumericStats>
					<StatsLabel>Quantidade de formulários</StatsLabel>
				</FormData>
				<FormsSection>
					{forms.map(form => {
						const { id, questions } = form;

						return (
							<FormSection key={id}>
								<FormControl>
									{questions.map(question => {
										const { title, answer } = question;

										return (
											<div key={title}>
												<FormLabel htmlFor={title}>{title}</FormLabel>
												<Input value={answer} readOnly={true} />
											</div>
										);
									})}
								</FormControl>
							</FormSection>
						);
					})}
				</FormsSection>
			</Main>
		</>
	);
};
