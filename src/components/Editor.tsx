import { useAuth } from "../lib/auth";
import { Provider } from 'react-redux'
import { Playground, store } from 'graphql-playground-react'

export default function Editor() {
  const auth = useAuth();

  const headers = {"Authorization": "Bearer " +  auth.user?.access_token }

  console.log(headers);

  return (
    <div>
 

      <Provider store={store}>
      <Playground endpoint='https://gql-federation-dev.azurewebsites.net/graphql/' headers={headers}
      
      tabs={[{
        name: 'Federation',
        endpoint: "https://gql-federation-dev.azurewebsites.net/graphql/",
        headers: headers
      },
      // {
      //   name: 'Price',
      //   endpoint: 'https://dev.nonprod.price.api.mnscorp.net/graphql/',
      //   headers: headers
      // },
      // {
      //   name: 'Customer Order',
      //   endpoint: 'https://dev.nonprod.customerorder.api.mnscorp.net/graphql/',
      //   headers: headers

      // },
    
    ]}

      />
      </Provider>
    </div>
  );
}
