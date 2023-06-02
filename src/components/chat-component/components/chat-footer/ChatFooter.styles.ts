import styled from "styled-components";

export const ChatFooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
`;
export const ChatFooterIcons = styled.div`
  width: 270px;
  display: flex;
  justify-content: space-between;
  img {
    height: 33px;
    padding-left: 15px;
  }
  padding-top: 4px;
`;

export const SendMessageButton = styled.button`
  display: flex;
  justify-self: center;
  background-color: #9147ff;
  padding: 7px 10px 7px 10px;
  margin-top: 4px;
  font-weight: bold;
  color: white;
  border-radius: 3px;
  align-items: end;
  margin-right: 8px;
  border: none;
  :hover {
    background-color: #772ce8;
  }
  :active {
    background-color: #5c16c5;
  }
`;
