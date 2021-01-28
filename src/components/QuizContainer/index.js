/* eslint-disable linebreak-style */
import styled from 'styled-components';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;

  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;

    }
  #div{
    margin-top: 10px;
    font-size: 20px;
    background-color: ${({ theme }) => theme.colors.secondary};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 13px;
    height:50px;
    border-radius: 20px;    
  }
  `;

export default QuizContainer;
