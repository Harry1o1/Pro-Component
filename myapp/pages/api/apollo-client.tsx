import { ApolloClient, InMemoryCache } from '@apollo/client'



const client = new ApoLLoClient({
    uri:'',
    cache: new InMemoryCache(),
});


export default client;