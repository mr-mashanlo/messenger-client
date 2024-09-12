export interface IAuthService {
  signin: ( email: string, password: string ) => Promise<{ id: string, RToken: string, AToken: string }>
  signup: ( email: string, password: string, confirm: string ) => Promise<{ id: string, RToken: string, AToken: string }>
  logout: () => void
  delete: () => void
  token: () => void
}