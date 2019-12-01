import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassService } from 'src/app/shared/services/class.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    constructor(private router: Router, public classService: ClassService, private fb: FormBuilder) {}

    public isVisible: boolean = false;

    public classForm!: FormGroup;

    public logOut(): void {
        localStorage.clear();
        this.router.navigate(['login']);
    }

    public newClass() {
        this.isVisible = true;
    }

    public handleCancel() {
        this.isVisible = false;
    }
    public submitForm() {
        this.isVisible = false;
        this.classService.addClass(this.classForm.value.className);
        this.classForm.reset();
    }

    public ngOnInit(): void {
        this.classForm = this.fb.group({
            className: [null, [Validators.required]],
        });
    }
}
