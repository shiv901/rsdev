import { Account, Client } from 'appwrite';

const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('663bc6c10021d0c0a2a3');

export const account = new Account(client);
export { ID } from 'appwrite';
