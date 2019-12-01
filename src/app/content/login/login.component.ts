import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    constructor(private fb: FormBuilder, private router: Router) {}

    public form!: FormGroup;

    public ngOnInit(): void {
        this.form = this.fb.group({
            userName: [null, [Validators.required]],
            password: [null, [Validators.required]],
        });
    }

    public submitForm(): void {
        this.form.markAsDirty();
        this.form.updateValueAndValidity();
        this.setUser(this.form.value.userName);
        this.router.navigate(['home']);
    }

    private setUser(userName: string): void {
        localStorage.setItem('user', userName);
    }
}
