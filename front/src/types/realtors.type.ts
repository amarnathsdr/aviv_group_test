export interface IRealtor {
  logo: string;
  name: string;
  unread_messages: number;
  id: number;
}

export interface IContact {
  email: string;
  lastname: string;
  phone: string;
  firstname: string;
}

export interface IRealtorMessage {
  subject: string;
  contact: IContact;
  body: string;
  type: string;
  read: boolean;
  id: number;
  date: string;
}

export interface IPagination {
  total: number;
  total_pages: number;
  first_page: number;
  last_page: number;
  page: number;
  previous_page: number;
  next_page?: number;
}
