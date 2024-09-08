import { IMessage } from './IMessage';

export interface IMessageStore {
  messages: Array<IMessage>,
  receiverId: string,
  addToMessages: ( message: IMessage ) => void,
  setRecieverId: ( id: string ) => void
}