import { config } from '../config';
import { HttpClient } from './utils/HttpClient';

class ContactsService {
  constructor() {
    this.httpClient = new HttpClient(config.baseURL);
  }

  async listContacts(orderBy = 'asc') {
    return this.httpClient.get(`/contacts?orderBy=${orderBy}`);
  }
}

const contactsService = new ContactsService();

export { contactsService };
