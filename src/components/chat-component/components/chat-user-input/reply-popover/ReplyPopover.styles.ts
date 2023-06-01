import styled from "styled-components";

export const ReplyPopover = styled.div`
  display: flex;
  flex-direction: column;
  width: 310px;
  padding-bottom: 8px;

  img {
    height: 15px;
  }
`;

export const ReplyPopoverHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: bolder;
`;
export const CancelReply = styled.button`
  color: white;
`;

export const ReplyToText = styled.div`
  color: white;
`;
