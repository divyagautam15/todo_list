import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit{

  @Input() todo: Todo | any;
  @Input() i: number | any;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckBox: EventEmitter<Todo> = new EventEmitter();

  constructor(){}
  ngOnInit(): void{
  }
  onClick(todo:Todo){
    this.todoDelete.emit(todo);
  }
  onCheckboxClick(todo:Todo){
    this.todoCheckBox.emit(todo);
  }

}
