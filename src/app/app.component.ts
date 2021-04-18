import { Component, OnInit } from '@angular/core';
import { GraphqlService } from './graphql.service';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rates: any[];
  loading = true;
  error: any;
  data$;


  constructor(private service: GraphqlService) {

  }

  ngOnInit() {
    this.data$ = this.service.getData()
      .pipe(map(result => result?.data?.rates))
  }


}
