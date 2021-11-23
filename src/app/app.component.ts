import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 myArray=[1,2,4,5,7,8,9,0];
 UpdateName: any;
 Create()
 {
   this.myArray.push(1);
   console.log(this.myArray);
 }
Read(SearchItem: number)
{
for (let index = 0; index < this.myArray.length; index++) {
  const element = this.myArray[index];
  if (SearchItem===element)
  {
    return element;
  }
}
Update(UpdateName,index: number)
{

}

Delete(ArrayItemNumber)
{
  this.myArray.splice(ArrayItemNumber,1);
  console.log(this.myArray);
}
}
}


