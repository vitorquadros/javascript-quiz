import React from "react";
import db from "../db.json";
import styles from "../src/components/quiz.module.css";

import Widget from "../src/components/Widget.js";
import GitHubCorner from "../src/components/GitHubCorner.js";
import QuizBackground from "../src/components/QuizBackground.js";
import QuizContainer from "../src/components/QuizContainer.js";
import Button from "../src/components/Button.js";
import QuizLogo from "../src/components/QuizLogo.js";
import Card from "../src/components/Card";
import Paragrafo from "../src/components/Paragrafo";

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>Carregando...</Widget.Header>

      <Widget.Content>[Desafio do Loading]</Widget.Content>
    </Widget>
  );
}

function QuestionWidget({
  question,
  totalQuestions,
  questionIndex,
  handleSubmit,
  setQuestionRadio,
  next,
  rightAnswer,
  questionRadio,
}) {
  const questionId = `question__${questionIndex}`;
  return (
    <Widget>
      <Widget.Header>
        <h3>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</h3>
      </Widget.Header>
      <img
        alt="Descrição"
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
        }}
        src={question.image}
      />

      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmit();
          }}
        >
          {question.alternatives.map((alternative, index) => {
            const alternativeId = `alternative__${index}`;
            console.log(question.answer, index + 1);

            return (
              <Widget.Topic
                htmlFor={alternativeId}
                key={alternativeId}
                as="label"
                className={`${
                  next === true &&
                  rightAnswer === false &&
                  questionRadio === index + 1 &&
                  styles.teste
                } ${
                  next === true &&
                  question.answer === index + 1 &&
                  styles.teste2
                }`}
              >
                {
                  <input
                    //style={{display: 'none'}}
                    id={alternativeId}
                    type="radio"
                    name={questionId}
                    onChange={() => setQuestionRadio(index + 1)}
                    disabled={next === true}
                  />
                }
                {alternative}
              </Widget.Topic>
            );
          })}
          {next ? <Button>Proxima</Button> : <Button>Confirmar</Button>}
          {rightAnswer === true && <Paragrafo>Você ganhou 1 ponto.</Paragrafo>}
          {rightAnswer === false && <Paragrafo>Errou!</Paragrafo>}
        </form>
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: "QUIZ",
  LOADING: "LOADING",
  RESULTS: "RESULTS",
};

const QuizPage = () => {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];
  const [questionRadio, setQuestionRadio] = React.useState(0);
  const [next, setNext] = React.useState(null);
  const [points, setPoints] = React.useState(0);
  const [rightAnswer, setRightAnswer] = React.useState(null);

  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  }, []);

  function handleSubmit() {
    const nextQuestion = questionIndex + 1;

    if (next === true) {
      if (nextQuestion < totalQuestions) {
        setCurrentQuestion(nextQuestion);
      } else {
        setScreenState(screenStates.RESULTS);
      }

      setNext(false);
      setRightAnswer(null);
    } else {
      setNext(true);
      if (question.answer === questionRadio) {
        setRightAnswer(true);
      } else {
        setRightAnswer(false);
      }
    }
    if (rightAnswer === true) setPoints((prev) => prev + 1);
    console.log(points);
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />

        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            totalQuestions={totalQuestions}
            questionIndex={questionIndex}
            handleSubmit={handleSubmit}
            setQuestionRadio={setQuestionRadio}
            next={next}
            rightAnswer={rightAnswer}
            questionRadio={questionRadio}
          />
        )}
        {screenState === screenStates.LOADING && <LoadingWidget />}
        {screenState === screenStates.RESULTS && (
          <Card>Você acertou {points} questões.</Card>
        )}
      </QuizContainer>
      <GitHubCorner projectUrl="" />
    </QuizBackground>
  );
};

export default QuizPage;
