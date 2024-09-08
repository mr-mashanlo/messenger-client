export interface IAuthStore {
  id: string
  isAuth: boolean
  setID: ( id: string ) => void
  setIsAuth: ( status: boolean ) => void
}