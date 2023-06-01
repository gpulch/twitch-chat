export type Message = {
  user: { username: string; color: string };
  text: string;
};

export enum MessageInfoType {
  TEXT = "text",
}

export type MessageInfo = {
  type: MessageInfoType;
  text: string;
  user: { username: string; color: string };
  date: number;
};

export type IsReplying = {
  state: boolean;
  replyToUsername: string;
};
