import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JornalComponent } from './jornal/jornal.component';

const routes: Routes = [
    {
        path: '',
        component: JornalComponent,
    },
    {
        path: 'subject',
        component: JornalComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ClassJornalRountingModule {}
