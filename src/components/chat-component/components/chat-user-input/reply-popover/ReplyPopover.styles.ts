import styled from "styled-components";

export const ReplyPopover = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  padding: 10px;
  border: white;
  border-radius: 5px;
  img {
    height: 15px;
  }
`;

export const ReplyPopoverHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: grey solid 1px;
  border-radius: 5px;
`;
export const CancelReply = styled.button`
  color: white;
`;

export const ReplyToText = styled.div`
  color: white;
`;
