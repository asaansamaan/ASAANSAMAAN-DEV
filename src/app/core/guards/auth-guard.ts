import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment.prod';
@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private auth: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        if (localStorage.getItem(environment.config.apiKey)) {
            return true;
        }
        return this.auth.user$
        .take(1)
        .map(user => !!user)
        .do(loggedIn => {
            if (!loggedIn) {
                console.log('access Denied');
                this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
            }
        });
    }
}
