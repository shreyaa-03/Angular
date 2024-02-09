import { OnInit, Pipe, PipeTransform } from '@angular/core';
import { StudentserviceService } from '../studentservice.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
 
 // filteredString:string ="";
 
  transform(value: any, filteredString:string){
   if(value.length == 0 ||filteredString === ''){
    return value;
   }
   const users = [];
   for(const user of value){
    if(user.name === filteredString){
      users.push(user)
    }
    return users;
   }

}
}