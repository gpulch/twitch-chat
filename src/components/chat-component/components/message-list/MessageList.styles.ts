import styled from "styled-components";

export const MessagesListContainer = styled.div`
  list-style: none;
  height: 95vh;
  overflow: scroll;
  font-family: Arial, serif;
  font-weight: 400;
  margin-left: 15px;
  padding-right: 15px;
  padding-bottom: 0;
  line-height: 19.5px;
  ::-webkit-scrollbar {
    display: none;
  }
  ul {
    padding: 4px;
  }
  ul:hover {
    background-color: rgba(255, 255, 255, 0.15);
    border-radius: 5px;
  }
`;
export const WelcomeToTheChat = styled.div`
  padding-top: 10px;
  color: rgb(173, 173, 184);
`;
