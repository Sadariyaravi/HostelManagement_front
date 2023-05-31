import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import Posts from '../models/DBmodels/Post';
@Injectable({
  providedIn: 'root',
})
export class NewsPostService {
  constructor(private http: HttpClient) {}

  GetPostsForUsers() {
    return this.http.get<[Posts]>(environment.baseurl + '/Post');
  }

  SearchByTitle(PostTitle: string) {
    return this.http.get<[Posts]>(environment.baseurl + '/SearchByPostTitle', {
      params: { PostTitle: PostTitle.toLowerCase() },
    });
  }
}
