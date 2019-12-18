import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClassJornalRountingModule } from './class-jornal-routing.module';
import { SubsectsComponent } from './subjects/subjects.component';
import { StudentsComponent } from './students/students.component';
import { JornalComponent } from './jornal/jornal.component';
import { LessonListComponent } from './lesson-list/lesson-list.component';

@NgModule({
    declarations: [SubsectsComponent, StudentsComponent, JornalComponent, LessonListComponent],
    imports: [CommonModule, ClassJornalRountingModule, SharedModule],
})
export class СlassJornalModule {}
