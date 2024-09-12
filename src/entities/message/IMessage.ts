export interface IMessage {
  _id?: string,
  senderId: string,
  timestamp: number,
  content: { text: string, media: string, }
}