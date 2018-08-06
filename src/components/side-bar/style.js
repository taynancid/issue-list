import styled from 'styled-components';

export const Container = styled.div`
  width: 320px;
  height: 100%;
  background-color: chocolate;
`;

export const Repository = styled.div`
  width: 250px;
  height: 75px;
  background: #fff;
  border-radius: 3px;
  margin: 10px 10px;

  header {
    height: 100%;
    flex-wrap: wrap;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: flex-start;

    img {
      width: 64px;
    }

    strong {
      margin-left: 10px;
      margin-top: 7px;
      font-size: 24px;
    }

    small {
      margin-left: 10px;
      font-size: 14px;
      color: #666;
    }
  }
`;

export const Form = styled.form`
  flex-shrink: 0;
  width: 100%;
  max-width: 400px;
  display: flex;

  input {
    flex: 1;
    height: 55px;
    background: #eee;
    border: 0;
    font-size: 18px;
    color: #444;
    border-radius: 3px;

    border: ${props => (props.withError ? '2px solid red' : 0)};
  }
  button {
    height: 55px;
    padding: 0 20px;
    margin-left: 10px;
    background: #63f5b0;
    color: #59ea9a;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;

    &:hover {
      background: #52d89f;
    }
  }
`;
