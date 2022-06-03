import AnswerInterface from "./answerInterface";

export default interface QuestionInterface {
  title: string;
  answers: AnswerInterface[];
  id: string;
}
