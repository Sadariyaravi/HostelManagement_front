import { Time } from '@angular/common';

export default interface Posts {
  PostTitle: string;
  PostBody: string;
  PostedBy: number;
  createdAt: Time;
  PostImageLink: string;
}
