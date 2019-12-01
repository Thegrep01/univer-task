import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Class {
    name: string;
    subjectList?: number[];
}

@Injectable()
export class ClassService {
    private readonly _classes = new BehaviorSubject<Class[]>([{ name: '1A' }, { name: '2A' }]);

    readonly classes$ = this._classes.asObservable();

    private get classes(): Class[] {
        return this._classes.getValue();
    }

    private set classes(val: Class[]) {
        this._classes.next(val);
    }

    public addClass(name: string): void {
        if (!name || this.checkUniqness(name)) {
            return;
        }
        this.classes = [...this.classes, { name }];
    }

    private checkUniqness = (name: string) => !!this.classes.find((item: Class) => item.name === name);
}
