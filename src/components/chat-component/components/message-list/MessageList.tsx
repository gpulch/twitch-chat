import React from "react";
import * as Styles from "./MessageList.styles";
import { ScrollPausedPopover } from "./sroll-paused-popover";
import { IsReplying, Message } from "../../Chat.types";
import { DisplayMessages } from "./display-messages";

type MessageListProps = {
  messages: Message[];
  userHasScrolledUp: boolean;
  setUserHasScrolledUp: Function;
  chatWindowRef: React.RefObject<HTMLDivElement>;
  bottomOfTheChatRef: React.RefObject<HTMLDivElement>;
  isReplying: IsReplying;
  setIsReplying: React.Dispatch<React.SetStateAction<IsReplying>>;
};

export const MessageList = ({
  messages,
  userHasScrolledUp,
  setUserHasScrolledUp,
  chatWindowRef,
  bottomOfTheChatRef,
  isReplying,
  setIsReplying,
}: MessageListProps) => {
  const scroll = () => {
    // detect if user has scrolled up, override autoscroll and toggle the popover
    if (messages.length > 0 && chatWindowRef.current) {
      const maxScrollTop =
        chatWindowRef.current.scrollHeight - chatWindowRef.current.clientHeight;
      // check if user has scrolled up ?
      if (chatWindowRef.current.scrollTop - maxScrollTop > -100) {
        setUserHasScrolledUp(false);
        bottomOfTheChatRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      } else if (chatWindowRef.current.scrollTop - maxScrollTop < -100) {
        setUserHasScrolledUp(true);
      }
    }
  };

  // throttle scroll to prevent autoscroll lock
  const throttle = (callback: Function, delay: number) => {
    let last: number | undefined;
    let timer: NodeJS.Timeout | undefined;

    return function (this: any, ...args: any[]) {
      const context = this;
      const now = Date.now();

      if (last && now < last + delay) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => {
        last = now;
        callback.apply(context, args);
      }, delay);

      if (!last) {
        last = now;
        callback.apply(context, args);
      }
    };
  };

  return (
    <Styles.MessagesListContainer
      ref={chatWindowRef}
      onScroll={throttle(() => {
        scroll();
      }, 200)}
    >
      <Styles.WelcomeToTheChat>Welcome to the chat !</Styles.WelcomeToTheChat>

      <div id={"list"} ref={bottomOfTheChatRef}>
        <DisplayMessages
          messages={messages}
          isReplying={isReplying}
          setIsReplying={setIsReplying}
        />
      </div>
      {userHasScrolledUp ? (
        <ScrollPausedPopover
          bottomOfTheChatRef={bottomOfTheChatRef}
          setUserHasScrolledUp={setUserHasScrolledUp}
        />
      ) : null}
    </Styles.MessagesListContainer>
  );
};
