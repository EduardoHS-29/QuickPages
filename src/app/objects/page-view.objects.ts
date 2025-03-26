import { v4 as generateUUID } from 'uuid';

export class Page {
  constructor(title?: string, content?: string, date?: Date, id?: string) {
    this.title = title;
    this.content = content;
    this.dateCreation = date;
    this.id = id ?? generateUUID();
  }

  id: string;
  title: string | undefined;
  content: string | undefined;
  dateCreation: Date | undefined;
}