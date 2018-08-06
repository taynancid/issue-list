import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  background-color: gray;
  align-content: center;
`;

export const Issue = styled.div`
  display: flex;
  padding: 10px;
  margin: 5px;
  width: 30%;
  background-color: purple;
  flex-direction: row;

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  body {
    flex-direction: column;
    flex-wrap: wrap;

    strong {
      margin-left: 10px;
    }

    small {
      margin-left: 10px;
    }
  }
`;
