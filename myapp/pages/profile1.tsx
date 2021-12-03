// import { gql } from '@apollo/client'
// import client from './api/apollo-client.'





function Profile() {
  return (
    <>
        <h1 className="">Hello world!</h1>
    </>
  );
}

// export async function getStaticProps() {
//     const { data } = await client.query({
//         query:gql`
//         query all_ingredients {
//             allIngredients {
//                 name
//                 notes
//             }
//         }`
//     })
    


//   return {
//     props: {
//       data,
//     },
//   };
// }

export default Profile;

    //   <pre>
        // <code>{JSON.stringify(data, null, 4)}</code>
    //   </pre>