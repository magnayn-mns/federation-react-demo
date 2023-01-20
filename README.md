Run:
npm install -g apollo


npm start

http://localhost:8080/app
 
  --> app/login


app/editor : GQL editor 

```graphql

# Write your query or mutation here
query { 
  customerOrderQueries {
    orderById(id:"MTkyNTE4ODE6MTAxNTE6b3JkZXI6NTA0NDIxOTcx") {
      ... on CustomerOrder_OrderByIdSuccess {
        order {
          id
        }
      }
      ... on CustomerOrder_OrderByIdFailure {
        error {
          ... on CustomerOrder_Error {
            __typename 
            code
            message
          }
        }
      }
    }
  }
}
```


```graphql
# Big ol q

# Write your query or mutation here
# Write your query or mutation here
# Write your query or mutation here
query {
  customerOrderQueries {
    orderById(id: "MTkyNTE4ODE6MTAxNTE6b3JkZXI6NTA0NDIxOTcx") {
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
          quote {
            id
            currencyCode
            createdDate
            effectiveDate
            location {
              id
            }
            #lineItems: [Price_LineItem!]!
            coupons {
              code
            }
            rewards {
              discountAmount
              promotion {
                id
              }
              type
            }
            totals {
              grandTotal
              beforeDiscounts
              afterDiscounts
              #returns
            }
            customer {
              id
            }
          }
        }
      }
    }
  }
}

```