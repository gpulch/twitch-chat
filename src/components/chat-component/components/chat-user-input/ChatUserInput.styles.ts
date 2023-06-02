import styled from "styled-components";

export const BorderAroundInputAndReply = styled.div<{ isReplying: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 98%;
  padding: 8px;
  border: ${(props) =>
    !props.isReplying ? null : "rgb(80, 80, 80) solid 1px"};
  border-radius: 5px;
`;
export const InputWithEmojiButton = styled.div`
  display: flex;
  width: 100%;
  border: 1px #67676b solid;
  border-radius: 5px;
  padding-right: 5px;
  :hover {
    outline: 1px #67676b solid;
  }
  :focus-within {
    outline: 4px solid #a970ff;
  }
`;

export const MyMessageInput = styled.input`
  background-color: #18181b;
  width: 100%;
  padding: 10px 0px 10px 10px;
  color: rgb(239, 239, 241);
  border: none;
  border-radius: 5px;
  outline: none;
  :hover {
    outline: white;
  }
  ::placeholder {
    color: #bababb;
  }
`;
