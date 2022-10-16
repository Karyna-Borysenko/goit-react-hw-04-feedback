import styled from '@emotion/styled';

export const Button = styled.button`
  display: inline-flex;
  margin: 15px;
  text-decoration: none;
  position: relative;
  font-size: 20px;
  line-height: 20px;
  padding: 10px 20px;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  font-family: 'Roboto Condensed', Тahoma, sans-serif;
  background: #f69a73;
  cursor: pointer;
  border: 2px solid #bfe2ff;
  outline: 1px solid;
  outline-color: #f69a73;
  outline-offset: 0px;
  text-shadow: none;
  transition: all 1.5s cubic-bezier(0.19, 1, 0.22, 1);

  :hover,
  :active,
  :focus {
    box-shadow: inset 0 0 20px #bfe2ff;
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 15px;
    color: #fff;
  }
`;
