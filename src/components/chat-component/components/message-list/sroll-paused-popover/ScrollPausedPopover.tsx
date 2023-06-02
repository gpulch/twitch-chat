import React from "react";
import * as Styles from "./ScrollPausedPopover.styles";

type ScrollPausedPopoverProps = {
  setUserHasScrolledUp: Function;
  bottomOfTheChatRef: React.RefObject<HTMLDivElement>;
};
export const ScrollPausedPopover = ({
  setUserHasScrolledUp,
  bottomOfTheChatRef,
}: ScrollPausedPopoverProps) => {
  const resumeAutoScroll = () => {
    bottomOfTheChatRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
    setUserHasScrolledUp(false);
  };

  return (
    <Styles.AutoScrollPrompt>
      Chat has been paused because you scrolled
      <button onClick={resumeAutoScroll}>⬇️ Resume Auto-Scroll ⬇️</button>
    </Styles.AutoScrollPrompt>
  );
};
