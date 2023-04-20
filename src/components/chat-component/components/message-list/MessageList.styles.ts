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
export const Username = styled.div`
  display: inline;
  font-weight: 700;
  color: hsl(324, 70%, 45%);
  animation: wheelHueColor 100s infinite;
  @keyframes wheelHueColor {
    from,
    to {
      color: hsl(324, 70%, 45%);
    }
    10% {
      color: hsl(360, 65%, 45%);
    }
    20% {
      color: hsl(36, 80%, 45%);
    }
    30% {
      color: hsl(72, 75%, 35%);
    }
    40% {
      color: hsl(108, 65%, 35%);
    }
    50% {
      color: hsl(144, 75%, 35%);
    }
    60% {
      color: hsl(180, 75%, 35%);
    }
    70% {
      color: hsl(216, 60%, 45%);
    }
    80% {
      color: hsl(252, 65%, 50%);
    }
    90% {
      color: hsl(288, 60%, 40%);
    }
  }
`;
export const Text = styled.div`
  display: inline;
`;
