import { Product } from "./Product";

export interface User {
  userId?:    number;
  userName?:  string;
  password?:  string;
  firstName?: string;
  lastName?:  string;
  email?:     string;
  phone?:     string;
  favorites?: Product[];
}

// Converts JSON strings to/from your types
export class Convert {
  public static toUser(json: string): User {
      return JSON.parse(json);
  }

  public static userToJson(value: User): string {
      return JSON.stringify(value);
  }
}
