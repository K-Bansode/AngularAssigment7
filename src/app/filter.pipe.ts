import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTerm:string): any{
    return value.filter(function(search:any){
      return search.role.indexOf(searchTerm)>-1
      
    });

  }
  

}
