import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserProfileComponent } from './user-profile.component';

@Injectable()
export class UserProfileResolver implements Resolve<Boolean> {
    constructor() { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<boolean> {
       return Observable.of(true);
    }
}
// ################ ROUTES ##################
export const routes = [
    {
        path: '',
        children: [
            {
                path: '', pathMatch: 'full', component: UserProfileComponent, resolve: {
                    pageData: UserProfileResolver,
                },
            },
        ],
    },
];