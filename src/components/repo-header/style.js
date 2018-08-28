import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 75px;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-content: center;
`;

export const Info = styled.div`
  width: 250px;
  height: 75px;
  background: #fff;
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
`;

export const Select = styled.div`
  width: 30%;
`;
