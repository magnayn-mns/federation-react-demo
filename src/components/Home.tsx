import { gql, useQuery } from "@apollo/client";
import { useAuth } from "../lib/auth";
import { getMyOrders_customerOrderQueries_ordersByLocationAndType, getMyOrders_customerOrderQueries_ordersByLocationAndType_CustomerOrder_OrderByLocationAndTypeFailure, getMyOrders_customerOrderQueries_ordersByLocationAndType_CustomerOrder_OrderByLocationAndTypeSuccess } from "../graphql/types/apollo/getMyOrders";
import { isError } from "util";

const getMyOrders = gql`
  query getMyOrders {
  customerOrderQueries {
    ordersByLocationAndType(locationId: "10151", orderType: ORDER) {
      __typename
      ... on CustomerOrder_OrderByLocationAndTypeFailure {
        error {
          code
          message
        }
      }
      ... on CustomerOrder_OrderByLocationAndTypeSuccess {
        orders {
          id
        }
      }
    }
  }
}
`;

const getOrder = gql`
query getOrder($id: ID!) {
  customerOrderQueries {
    orderById(id: $id) {
      ... on CustomerOrder_OrderByIdSuccess {
        order {
          id
          version
          lineItems {
            id
            product {
              id
              title
            }
            quantity {
              ... on CustomerOrder_EachQuantity {
                value
              }
            }
            #giftMessage
            priceSummary {
              quoteId
              priceBeforeDiscounts
              priceBeforeConditionalDiscounts
              lineItems {
                id
                wasUnitPrice
                nowUnitPrice
                markedPrice
                priceBeforeConditionalDiscounts
                priceBeforeDiscounts

                #quantity
                externalLineReference
              }
            }
          }
          # quote {
          #   id
          #   currencyCode
          #   createdDate
          #   effectiveDate
          #   location {
          #     id
          #   }
          #   #lineItems: [Price_LineItem!]!
          #   coupons {
          #     code
          #   }
          #   rewards {
          #     discountAmount
          #     promotion {
          #       id
          #     }
          #     type
          #   }
          #   totals {
          #     grandTotal
          #     beforeDiscounts
          #     afterDiscounts
          #     #returns
          #   }
          #   customer {
          #     id
          #   }
          # }
        }
      }
    }
  }
}
`

function isGQLError(xx:any) {
  if( xx == undefined )
    return true;

  return xx.__typename == "CustomerOrder_OrderByLocationAndTypeFailure";
}

export function ShowOrder(props:any) {

  const { data, loading, error } = useQuery<any>(getOrder, { variables: { id: props.orderId } });

  console.log(data);

  return (
    <div>
      Order
      {data?.customerOrderQueries?.orderById?.order && <div>
        
        <b>{data?.customerOrderQueries?.orderById?.order.id}</b>
        
        {data?.customerOrderQueries?.orderById?.order.lineItems.map( (lineItem:any) => <div style={{padding:"32px"}}>
          {lineItem.product.title}
          <br></br>
          Nbr: {lineItem.quantity.value}
          <br></br>
          £{lineItem.priceSummary.priceBeforeDiscounts}
        </div>)}

        </div> }
        
       
    </div>
  );
}

export default function Home() {
  
  const { data, loading, error } = useQuery<any>(getMyOrders);


  console.log(data);

  return (
    <div>
        Home
        {data?.customerOrderQueries?.ordersByLocationAndType && <div>
        {isGQLError(data.customerOrderQueries.ordersByLocationAndType) ? <b>Error</b> : 
        <div>
          { data.customerOrderQueries.ordersByLocationAndType?.orders?.map( (order:any) =>
           <b> {order.id}</b> ) }
        
         </div>
        }
        </div>
      }
        <ShowOrder orderId="MTkyNTE4ODE6MTAxNTE6b3JkZXI6NTA0NDIxOTcx"/>

    </div>
  );
}

