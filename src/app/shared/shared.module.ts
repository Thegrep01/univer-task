import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AuthGuardService } from './services/auth-guard.service';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { ClassService } from './services/class.service';
import { NzModalModule } from 'ng-zorro-antd/modal';

@NgModule({
    declarations: [],
    exports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        NzFormModule,
        NzInputModule,
        NzButtonModule,
        NzLayoutModule,
        NzIconModule,
        NzMenuModule,
        NzModalModule,
    ],
    providers: [AuthGuardService, ClassService],
})
export class SharedModule {}
