import { ApolloClient, InMemoryCache } from '@apollo/client'



const client = new ApolloClient({
    uri:'https://pro-component-express1o1.herokuapp.com/',
    cache: new InMemoryCache(),
});


export default client;