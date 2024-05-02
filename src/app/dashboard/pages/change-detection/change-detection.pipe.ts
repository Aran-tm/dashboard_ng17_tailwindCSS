
// los pipes en Angular son una forma para poder transofrmar datos antes de presentarlos en la vista
// I -> PipeTransform, Metodo -> transform
import { Pipe, PipeTransform } from '@angular/core';

// este es el decorador @Pipe con nombre json y standalone
@Pipe({
  name: 'json',
  standalone: true
})

// esta es la exportacion de la clase JsonPipe la cual implementa de la clase PipeTransform
export class JsonPipe implements PipeTransform {
  transform(value: any): string {
    return JSON.stringify(value, null, 2);
  }
}
