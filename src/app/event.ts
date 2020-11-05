import {User} from "./user";

export interface Event {
  id?: number;
  creator?: User;
  name: string;
  description: string;
  secure: boolean;
  password: string;
  start: string;
  end: string;
}

