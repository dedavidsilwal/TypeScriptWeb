import { IHttpService } from './httpservice';

export class Search {
    constructor(private http: IHttpService) { }

    search(): Promise<string> {
        return this.http.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(json => json.toString());
    }
}