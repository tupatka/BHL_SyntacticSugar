import { ofType } from 'redux-observable';
import { from, catchError, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { GET_RESPONSE } from './const';
import { setResponse } from './actions';
import { FetchResponse } from './api';

export const openaiEpic = (action$, state$) =>
    action$.pipe(
        ofType(GET_RESPONSE),
        map(action => action.query),
        switchMap(query =>
            from(FetchResponse(query)).pipe(
                map((result) => setResponse(result)),
                catchError((e) => console.log(e))) // of(setResponse("error"))))
        ),
    );
