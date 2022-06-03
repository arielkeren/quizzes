import Question from "./questionInterface";

export default interface QuizInterface {
  name: string;
  questions: Question[];
  id: string;
}
