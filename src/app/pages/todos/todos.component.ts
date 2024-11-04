import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
Title:string = 'All my Todos';
edit= false;


showform : boolean = false ;

todos:string[] = ['Learn angular ' ,'Reqctjs', 'Svelte' , 'spring boot '];
// todos:string[] = [ ]

myTodo: string = '';
editable= false;

todoIndex : number = -1;


addTodo(){
  this.todos = [this.myTodo , ...this.todos];
     this.initTodo();
}


toggleForm(){
  this.showform = !this.showform ;
}

updateTodo(){
    if(this.todoIndex >= 0){
      this.todos[this.todoIndex] = this.myTodo;
      this.initTodo();
    }
}

editTodo(todo: string, index: number){
  this.myTodo = todo;
  this.showform = true;
  this.editable = true;
  this.todoIndex  = index ; 
}

deleteTodo(index: number){
  // this.todos.splice(index, 1)
if(confirm("Are you sure to delete this todo ?")){
  this.todos =  this.todos.filter((item ,i) => i!==index );
}
}

changeTogglebtn(){
  return this.showform ? 'Hile' : 'Show';
}

showTitle(){
  return this.edit == true ? 'Edit my todo' : ' Master you Day';
}


initTodo(){
  this.myTodo = '';
  this.editable = false ;
  this.showform  = false ;
  this.todoIndex = -1;
}

}
