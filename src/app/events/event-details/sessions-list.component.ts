import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared';

@Component({
    selector: 'app-sessions-list',
    templateUrl: 'sessions-list.component.html'
})

export class SessionsListComponent implements OnChanges {
    @Input() sessions: ISession[];
    @Input() filterBy: string;
    visibleSessions: ISession[] = [];

    ngOnChanges() {
        if (this.sessions) {
            this.filterSessions(this.filterBy);
        }
    }

    filterSessions(filter) {
        if (filter === 'all') {
            this.visibleSessions = this.sessions.slice(0);
        } else {
            this.visibleSessions = this.sessions.filter(session => {
                return session.level.toLocaleLowerCase() === filter;
            });
        }
    }
}