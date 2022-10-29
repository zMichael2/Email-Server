export interface RegisterListInterface {
  userid: string;
  name: string;
  email: string;
  subscription: boolean;
}

export interface DeleteList {
  userid: string;
}

export interface InfoEmail {
  userid: string;
  name: string;
  email: string;
}

export interface MessageOption {
  from: string;
  to: string;
  subject: string;
  html: string;
}
