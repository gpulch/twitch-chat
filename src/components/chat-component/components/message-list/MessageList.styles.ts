import styled from "styled-components";

export const MessagesListContainer = styled.div`
  list-style: none;
  height: 95vh;
  overflow: scroll;
  font-family: Arial, serif;
  font-weight: 400;
  margin-left: 10px;
  padding-right: 10px;
  padding-bottom: 0;
  line-height: 19.5px;
  ::-webkit-scrollbar {
    display: none;
  }
  ul {
    padding: 4px;
  }
`;
export const WelcomeToTheChat = styled.div`
  padding-top: 10px;
  color: rgb(173, 173, 184);
`;
