import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
    declarations: [],
    exports: [CommonModule, HttpClientModule, ReactiveFormsModule, FormsModule],
    providers: [AuthGuardService],
})
export class SharedModule {}
