import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 1100px;
  display: flex;
  flex-wrap: wrap;
  background-color: #e5e4e4;
  align-content: flex-start;
`;

export const Issue = styled.div`
  display: flex;
  padding: 10px;
  margin: 5px;
  margin-left: 23px;
  width: 30%;
  height: 85px;
  background-color: purple;
  flex-direction: row;
  box-shadow: 1px 1px 1px 1px rgba(31, 35, 46, 0.15);

  img {
    flex-shrink: 0;
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

    button {
      height: 25px;
      padding: 0 20px;
      margin-left: 10px;
      margin-top: 10px;
      background: grey;
      color: white;
      border: 0;
      font-size: 15px;
      font-weight: bold;
      border-radius: 3px;

      &:hover {
        background: lightgray;
      }
    }
  }
`;
