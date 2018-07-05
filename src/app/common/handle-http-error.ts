import { Observable } from 'rxjs/RX';
import { of } from 'rxjs/observable/of';

export function handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
        console.error(error);
        return of(result as T);
    };
}
