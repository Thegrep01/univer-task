import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { IStore } from 'src/app/store';
import { addClass } from 'src/app/store/actions/class.actions';
import { selectClasses } from 'src/app/store/selectors/class.selectors';
import { Class } from 'src/app/store/reducers/class.reducer';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    constructor(private router: Router, private fb: FormBuilder, private store: Store<IStore>) {}

    public isVisible: boolean = false;

    public classForm!: FormGroup;

    public classList$!: Observable<Class[]>;

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
        this.store.dispatch(addClass({ className: this.classForm.value.className }));
        this.classForm.reset();
    }

    public ngOnInit(): void {
        this.classForm = this.fb.group({
            className: [null, [Validators.required]],
        });

        this.classList$ = this.store.pipe(select(selectClasses));
    }
}
