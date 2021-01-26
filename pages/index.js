import styled from "styled-components";
import db from "../db.json";
import Widget from "../src/components/Widget.js";
import Footer from "../src/components/Footer.js";
import GitHubCorner from "../src/components/GitHubCorner.js";
import QuizBackground from "../src/components/QuizBackground.js";

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Teste</h1>
          </Widget.Header>
          <Widget.Content>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              facere sint dignissimos ipsum doloribus, unde inventore?
              Repudiandae aspernatur cumque, dolores quas necessitatibus
              eligendi aliquid repellendus iure! Ullam aperiam facilis non.
            </p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Teste 2</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur ea earum modi veniam vero minus accusantium quas
              dolores molestiae repudiandae velit et maxime quam, reprehenderit
              possimus provident id nesciunt sit.
            </p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="" />
    </QuizBackground>
  );
}
