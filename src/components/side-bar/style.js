import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 1100px;
  box-shadow: 10px 10px 10px 10px green;
`;

export const Repository = styled.div`
  width: 250px;
  height: 75px;
  background: whitesmoke;
  border-radius: 3px;
  margin: 10px 10px;

  box-shadow: 1px 1px 1px 1px rgba(31, 35, 46, 0.15);

  header {
    height: 100%;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;

    img {
      width: 64px;
      margin: 5px;
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
  padding: 10px;
  width: 100%;
  max-width: 400px;
  display: flex;

  input {
    flex: 1;
    height: 35px;
    background: #eee;
    border: 0;
    font-size: 13px;
    color: #444;
    border-radius: 3px;

    border: ${props => (props.withError ? '2px solid red' : 0)};
  }
  button {
    height: 35px;
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
