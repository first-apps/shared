export class SessionDto {
  name?: null;
  role: Role; // 'creator' or 'user'
  id?: string;
  email?: string;
}

export enum Role {
  CREATOR = "creator",
  USER = "user",
}
