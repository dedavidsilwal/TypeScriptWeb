export interface IHttpService {
    get<T>(path: string): Promise<T>;
}

export class FetchHttpService implements IHttpService {
    get<T>(path: string): Promise<T> {
        return fetch(path)
            .then<any>(response => response.json());
    }
}
