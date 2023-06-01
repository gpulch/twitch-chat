import styled from "styled-components";

export const Message = styled.div`
  position: relative;
  img {
    opacity: 0;
  }
`;
export const ReplyArrow = styled.img`
  position: absolute;
  top: -10px;
  right: -5px;
  height: 25px;
  background-color: black;
  border-radius: 5px;
  :hover {
    background-color: rgb(150, 150, 150);
  }
`;
export const Username = styled.div`
  display: inline;
  font-weight: 700;
`;
export const Text = styled.div`
  display: inline;
`;
