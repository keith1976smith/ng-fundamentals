import { VoterService } from './voter.service';
import { ISession } from '../shared';
import { Observable } from 'rxjs/RX';
import { of } from 'rxjs/observable/of';

describe('VoterService', () => {
    let voterService: VoterService,
        mockHttp;

    beforeEach(() => {
        mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
        voterService = new VoterService(mockHttp);
    });

    describe('deleteVoter', () => {
        it('should remove the voter from the list of voters', () => {
            const session = { id: 6, voters: ['Joe', 'John'] };
            mockHttp.delete.and.returnValue(of(false));

            voterService.removeVoter(3, <ISession>session, 'Joe');

        });
    });
});


