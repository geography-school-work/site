export interface Question {
	title: string;
	answer: string;
}

export interface Form {
	questions: Array<Question>;
}
