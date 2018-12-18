import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class GithubService {

  constructor(private httpClient: HttpClient) {
  }

  getRepository(repoName: string) {
    return this.httpClient.get('https://api.github.com/search/repositories?q=' + repoName);
  }

}
