import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonListComponent } from './lesson-list.component';

describe('LessonComponent', () => {
    let component: LessonListComponent;
    let fixture: ComponentFixture<LessonListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LessonListComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LessonListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
