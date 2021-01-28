import React from "react";
import db from "../db.json";

import Widget from "../src/components/Widget.js";
import GitHubCorner from "../src/components/GitHubCorner.js";
import QuizBackground from "../src/components/QuizBackground.js";
import QuizContainer from "../src/components/QuizContainer.js";
import Button from "../src/components/Button.js";
import QuizLogo from "../src/components/QuizLogo.js";

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
        <form onSubmit={handleSubmit}>
          {question.alternatives.map((alternative, index) => {
            const alternativeId = `alternative__${index}`;

            return (
              <Widget.Topic htmlFor={alternativeId} as="label">
                {
                  <input
                    //style={{display: 'none'}}
                    id={alternativeId}
                    type="radio"
                    name={questionId}
                  />
                }
                {alternative}
              </Widget.Topic>
            );
          })}
        </form>
        <Button>Confirmar</Button>
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

  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(questionIndex + 1);
    } else {
      setScreenState(screenStates.RESULTS);
    }
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
            onSubmit={handleSubmit}
          />
        )}
        {screenState === screenStates.LOADING && <LoadingWidget />}
        {screenState === screenStates.RESULTS && (
          <div>Você acertou x questões</div>
        )}
      </QuizContainer>
      <GitHubCorner projectUrl="" />
    </QuizBackground>
  );
};

export default QuizPage;
