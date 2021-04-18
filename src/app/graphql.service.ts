import { Injectable } from '@angular/core';
import {Apollo, ApolloBase,  gql} from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {
  rates: any[];
  private apollo: ApolloBase;

  constructor(private apolloProvider: Apollo) {
    this.apollo = this.apolloProvider.use('newClientName');
  }

  getData() {
    return this.apollo.watchQuery<any>({
      query: gql`
        {
          rates(currency: "USD") {
            currency
            rate
          }
        }
      `,
    }).valueChanges;
  }

}
