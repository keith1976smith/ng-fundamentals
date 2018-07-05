import { Injectable } from '@angular/core';
import { ISession } from '../shared';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { handleError } from '../../common';


@Injectable()
export class VoterService {

    constructor(private http: HttpClient) {}

    addVoter(eventId: number, session: ISession, voterName: string) {
        session.voters.push(voterName);
        const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
        const options = { headers: new HttpHeaders({ 'content-type': 'application/json' })};
        this.http.post(url, {}, options)
            .pipe(catchError(handleError('addVoter')))
            .subscribe();
    }

    removeVoter(eventId: number, session: ISession, voterName: string) {
        session.voters = session.voters.filter(voter => voter !== voterName);
        const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
        this.http.delete(url)
            .pipe(catchError(handleError('removeVoter')))
            .subscribe();
    }

    userHasVoted(session: ISession, voterName: string): boolean {
        return session.voters.includes(voterName);
    }
}
