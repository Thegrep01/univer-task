import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JornalComponent } from './jornal/jornal.component';
import { LessonListComponent } from './lesson-list/lesson-list.component';

const routes: Routes = [
    {
        path: '',
        component: JornalComponent,
    },
    {
        path: 'lesson-list/:subjId',
        component: LessonListComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ClassJornalRountingModule {}
