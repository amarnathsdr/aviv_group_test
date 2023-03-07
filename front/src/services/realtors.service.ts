import axios from 'axios';

import type { IRealtor, IRealtorMessage } from '../types/realtors.type';

export const fetchRealtors = () => {
  const url = 'http://localhost:8080/realtors';
  return axios.get<IRealtor[]>(url);
};

export const fetchRealtor = (realtorId: number | undefined) => {
  const url = `http://localhost:8080/realtors/${realtorId}`;
  return axios.get<IRealtor>(url);
};

export const fetchRealtorMessages = async (
  realtorId: number | undefined,
  page: number,
  pageSize: number = 10,
  sort: string = 'date:desc',
) => {
  const url = `http://localhost:8080/realtors/${realtorId}/messages?page=${page}&page_size=${pageSize}&sort=${sort}`;
  return await axios.get<IRealtorMessage[]>(url);
};

export const fetchRealtorMessage = (
  realtorId: number | undefined,
  messageId: number | undefined,
) => {
  const url = `http://localhost:8080/realtors/${realtorId}/messages/${messageId}`;
  return axios.get<IRealtorMessage>(url);
};

export const updateRealtorMessage = (
  realtorId: number | undefined,
  messageId: number | undefined,
) => {
  const url = `http://localhost:8080/realtors/${realtorId}/messages/${messageId}`;
  return axios.patch<IRealtorMessage>(url, { read: true });
};
