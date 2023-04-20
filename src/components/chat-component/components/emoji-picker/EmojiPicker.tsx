import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import * as Styles from "./EmojiPicker.styles";
import smiley from "../../../../icons/smiley.png";
import React from "react";
type EmojiPickerProps = {
  onChange: (emoji: string) => void;
};

const emojiList: string[] = ["😀", "🤣", "⭐️", "🥲", "🥳"];
export const EmojiPicker = ({ onChange }: EmojiPickerProps) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Styles.EmojiButton className={"pickerContainer"}>
          <img src={smiley} alt={"smiley"} />
        </Styles.EmojiButton>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader style={{ color: "black" }}>Emojis :</PopoverHeader>
        <PopoverBody>
          {emojiList.map((emoji: string, index: number) => (
            <span key={index} onClick={() => onChange(emoji)}>
              {emoji}
            </span>
          ))}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
