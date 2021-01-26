import styled from "styled-components";
import db from "../db.json";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`;

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

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => {
    return theme.colors.mainBg;
  }};
  border-radius: 4px;
  overflow: hidden;
  h1,
  h2,
  h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

export default function Home() {
  return (
    <BackgroundImage>
      <QuizContainer>
        <Widget>
          <h1>Teste</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
            facere sint dignissimos ipsum doloribus, unde inventore? Repudiandae
            aspernatur cumque, dolores quas necessitatibus eligendi aliquid
            repellendus iure! Ullam aperiam facilis non.
          </p>
        </Widget>
        <Widget>
          <h1>Teste 2</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            ea earum modi veniam vero minus accusantium quas dolores molestiae
            repudiandae velit et maxime quam, reprehenderit possimus provident
            id nesciunt sit.
          </p>
        </Widget>
      </QuizContainer>
    </BackgroundImage>
  );
}
