import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubsectsComponent } from './subjects/subjects.component';

const routes: Routes = [
    {
        path: '',
        component: SubsectsComponent,
    },
    {
        path: 'subject',
        component: SubsectsComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ClassJornalRountingModule {}
