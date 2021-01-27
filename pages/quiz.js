import React from "react";
import db from "../db.json";

import Widget from "../src/components/Widget.js";
import GitHubCorner from "../src/components/GitHubCorner.js";
import QuizBackground from "../src/components/QuizBackground.js";
import QuizContainer from "../src/components/QuizContainer.js";
import Button from "../src/components/Button.js";
import QuizLogo from "../src/components/QuizLogo.js";

const QuizPage = () => {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
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
            src="https://media.giphy.com/media/xUOxf3yDKCuwpOlT3i/giphy.gif"
          />

          <Widget.Content>
            <h2>Titulo</h2>
            <p>Descrição</p>

            <Button>Confirmar</Button>
          </Widget.Content>
        </Widget>
      </QuizContainer>
      <GitHubCorner projectUrl="" />
    </QuizBackground>
  );
};

export default QuizPage;
