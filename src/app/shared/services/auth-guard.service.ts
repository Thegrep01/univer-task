import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {
    public constructor(private router: Router) {}

    public canActivate(): boolean {
        const user: string | null = localStorage.getItem('user');
        if (!user) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
}
