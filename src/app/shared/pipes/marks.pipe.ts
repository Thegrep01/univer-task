import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marks',
  pure: true,
})
export class MarksPipe implements PipeTransform {
  transform(value: { lessonId: number; mark: number }[] | undefined, lessonId: number): number {
    if (value) {
      const studentMark: { lessonId: number; mark: number } | undefined = value.find(
        i => i.lessonId === lessonId,
      );
      return studentMark ? studentMark.mark : 0;
    }
    return 0;
  }
}
