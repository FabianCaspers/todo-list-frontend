import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-all-todos',
  templateUrl: './all-todos.component.html',
  styleUrls: ['./all-todos.component.scss']
})
export class AllTodosComponent implements OnInit {
  todos:any = [];
  error = '';

  constructor(private http: HttpClient) { }

  async ngOnInit() {
    try {
      this.todos = await this.loadTodos();
    } catch(e) {
      this.error = 'Fehler beim laden!'
    }
  }

  loadTodos(){
    const url = environment.baseURL + '/todos/';
    return lastValueFrom(this.http.get(url));
  }

}
