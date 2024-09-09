import { IUser } from '../user/types';

export interface IMessageStore {
  receiver: IUser | null,
  alerts: Array<string>
  setReciever: ( receiver: IUser ) => void
  setAlerts: ( alerts: Array<string> ) => void
}