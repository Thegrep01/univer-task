import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JornalComponent } from './jornal/jornal.component';
import { LessonComponent } from './lesson/lesson.component';

const routes: Routes = [
    {
        path: '',
        component: JornalComponent,
    },
    {
        path: 'lesson',
        component: LessonComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ClassJornalRountingModule {}
