import {NgModule} from '@angular/core';
import {APOLLO_NAMED_OPTIONS, NamedOptions} from 'apollo-angular';
import {ApolloClientOptions, InMemoryCache} from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';

const uri = 'https://48p1r2roz4.sse.codesandbox.io'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: httpLink.create({uri}),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_NAMED_OPTIONS, // <-- Different from standard initialization
      useFactory(httpLink: HttpLink): NamedOptions {
        return {
          newClientName: {
            // <-- this settings will be saved by name: newClientName
            cache: new InMemoryCache(),
            link: httpLink.create({
              uri: 'https://o5x5jzoo7z.sse.codesandbox.io',
            }),
          },
          ratesGet: {
            // <-- this settings will be saved by name: ratesGet
            cache: new InMemoryCache(),
            link: httpLink.create({
              uri: uri,
            }),
          },
        };
      },
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
