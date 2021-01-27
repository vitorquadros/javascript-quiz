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

function QuestionWidget({ question }) {
  return (
    <Widget>
      <Widget.Header>
        <h3>Pergunta 1 de {` ${db.questions.length}`}</h3>
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

        <Button>Confirmar</Button>
      </Widget.Content>
    </Widget>
  );
}

const QuizPage = () => {
  const question = db.questions[0];

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <QuestionWidget question={question} />
        <LoadingWidget />
      </QuizContainer>
      <GitHubCorner projectUrl="" />
    </QuizBackground>
  );
};

export default QuizPage;
