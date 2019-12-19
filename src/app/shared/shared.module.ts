import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AuthGuardService } from './services/auth-guard.service';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { ContentWrapperComponent } from './components/content-wrapper/content-wrapper.component';
import { MarksPipe } from './pipes/marks.pipe';

@NgModule({
  declarations: [ContentWrapperComponent, MarksPipe],
  exports: [
    CommonModule,
    NzRateModule,
    NzDatePickerModule,
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
    NzListModule,
    NzSelectModule,
    ContentWrapperComponent,
    MarksPipe,
  ],
    providers: [AuthGuardService],
})
export class SharedModule {}
