export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  AccountNonExpired: boolean;
  AccountNonLocked: boolean;
  CredentialsNonExpired: boolean;
  Enabled: boolean;
}
