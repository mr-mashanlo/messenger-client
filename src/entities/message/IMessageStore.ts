import { IUser } from '../user';
import { IMessage } from './IMessage';

export interface IMessageStore {
  receiver: IUser | null,
  recentMessages: Array<IMessage>,
  recentAlerts: Array<string>,
  setReciever: ( receiver: IUser ) => void,
  setRecentMessages: ( message: Array<IMessage> ) => void,
  setRecentAlerts: ( alerts: Array<string> ) => void
}