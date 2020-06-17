import buildClient from '../api/build-client';

const LandingPage = ({ currentUser }) => {
  // console.log(currentUser);
  // axios.get('/api/users/currentuser')
  //console.log(currentUser);

  return currentUser ? (
    <h1>You are signed in </h1>
  ) : (
    <h1>You are not Signed in</h1>
  );
};

LandingPage.getInitialProps = async (context) => {
  console.log('Landing Page');
  const client = buildClient(context);
  const { data } = await client.get('/api/users/currentuser');

  return data;
};

export default LandingPage;

// import axios from 'axios';

// const LandingPage = ({ currentUser }) => {
//   console.log(currentUser);
//   // axios.get('/api/users/currentuser');

//   return <h1>Landing Page</h1>;
// };

// LandingPage.getInitialProps = async ({ req }) => {

//   // const response = await axios.get('/api/users/currentuser');
//   // return response.data;
//   if (typeof window === 'undefined') {
//     //we are on the server!
//     //requests should be made to http://SERVICENAME.NAMESPACE.SVC.CLUSTER.LOCAL
//     const { data } = await axios.get(
//       'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser',
//       {
//         headers: req.headers,
//       }
//     );
//     return data;
//   } else {
//     // we are on the brower!
//     // requests can be made with a base url of ''
//     const { data } = await axios.get('/api/users/currentuser');
//     return data;
//   }
//   return {};
// };

// export default LandingPage;
