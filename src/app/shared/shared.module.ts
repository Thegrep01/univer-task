import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AuthGuardService } from './services/auth-guard.service';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
    declarations: [],
    exports: [CommonModule, HttpClientModule, ReactiveFormsModule, FormsModule, NzFormModule, NzInputModule, NzButtonModule],
    providers: [AuthGuardService],
})
export class SharedModule {}
