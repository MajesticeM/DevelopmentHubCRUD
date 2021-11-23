import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

//The array that is going to be used
 myArray=[1,2,4,5,7,8,9,0];

 //Print array
 getArray()
 {
   alert(this.myArray);
 }
 //Creates an element in an array
 Create()
 {
   this.myArray.push(1);
   console.log(this.myArray);
   alert(this.myArray);
 }
//Reads or searches for an element in an array
Read(SearchItem: any)
{
for (let index = 0; index < this.myArray.length; index++) {
  const element = this.myArray[index];
  if (SearchItem===element)
  {
    console.log(element);
    alert(element);
    break;
  }
  else
  {
    alert("Number does not exist");
    break;
  }
}
}
//Update an element in an array
Update01(UpdateName:any,index:number)
{
  this.myArray[index]=UpdateName;
  console.log(this.myArray);
  alert(this.myArray);
}
//Delete an element in an array
Delete(ArrayItemNumber:any)
{
  this.myArray.splice(ArrayItemNumber,1);
  console.log(this.myArray);
  alert(this.myArray);
}
}

