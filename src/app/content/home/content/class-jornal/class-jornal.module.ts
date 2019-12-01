import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClassJornalRountingModule } from './class-jornal-routing.module';
import { SubsectsComponent } from './subjects/subjects.component';

@NgModule({
    declarations: [SubsectsComponent],
    imports: [CommonModule, ClassJornalRountingModule, SharedModule],
})
export class СlassJornalModule {}
