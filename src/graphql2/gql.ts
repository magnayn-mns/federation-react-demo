/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  query getMyOrders {\n  customerOrderQueries {\n    ordersByLocationAndType(locationId: \"10151\", orderType: ORDER) {\n      __typename\n      ... on CustomerOrder_OrderByLocationAndTypeFailure {\n        error {\n          code\n          message\n        }\n      }\n      ... on CustomerOrder_OrderByLocationAndTypeSuccess {\n        orders {\n          id\n        }\n      }\n    }\n  }\n}\n": types.GetMyOrdersDocument,
    "\nquery getOrder($id: ID!) {\n  customerOrderQueries {\n    orderById(id: $id) {\n      ... on CustomerOrder_OrderByIdSuccess {\n        order {\n          id\n          version\n          lineItems {\n            id\n            product {\n              id\n              title\n            }\n            quantity {\n              ... on CustomerOrder_EachQuantity {\n                value\n              }\n            }\n            #giftMessage\n            priceSummary {\n              quoteId\n              priceBeforeDiscounts\n              priceBeforeConditionalDiscounts\n              lineItems {\n                id\n                wasUnitPrice\n                nowUnitPrice\n                markedPrice\n                priceBeforeConditionalDiscounts\n                priceBeforeDiscounts\n\n                #quantity\n                externalLineReference\n              }\n            }\n          }\n          # quote {\n          #   id\n          #   currencyCode\n          #   createdDate\n          #   effectiveDate\n          #   location {\n          #     id\n          #   }\n          #   #lineItems: [Price_LineItem!]!\n          #   coupons {\n          #     code\n          #   }\n          #   rewards {\n          #     discountAmount\n          #     promotion {\n          #       id\n          #     }\n          #     type\n          #   }\n          #   totals {\n          #     grandTotal\n          #     beforeDiscounts\n          #     afterDiscounts\n          #     #returns\n          #   }\n          #   customer {\n          #     id\n          #   }\n          # }\n        }\n      }\n    }\n  }\n}\n": types.GetOrderDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getMyOrders {\n  customerOrderQueries {\n    ordersByLocationAndType(locationId: \"10151\", orderType: ORDER) {\n      __typename\n      ... on CustomerOrder_OrderByLocationAndTypeFailure {\n        error {\n          code\n          message\n        }\n      }\n      ... on CustomerOrder_OrderByLocationAndTypeSuccess {\n        orders {\n          id\n        }\n      }\n    }\n  }\n}\n"): (typeof documents)["\n  query getMyOrders {\n  customerOrderQueries {\n    ordersByLocationAndType(locationId: \"10151\", orderType: ORDER) {\n      __typename\n      ... on CustomerOrder_OrderByLocationAndTypeFailure {\n        error {\n          code\n          message\n        }\n      }\n      ... on CustomerOrder_OrderByLocationAndTypeSuccess {\n        orders {\n          id\n        }\n      }\n    }\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery getOrder($id: ID!) {\n  customerOrderQueries {\n    orderById(id: $id) {\n      ... on CustomerOrder_OrderByIdSuccess {\n        order {\n          id\n          version\n          lineItems {\n            id\n            product {\n              id\n              title\n            }\n            quantity {\n              ... on CustomerOrder_EachQuantity {\n                value\n              }\n            }\n            #giftMessage\n            priceSummary {\n              quoteId\n              priceBeforeDiscounts\n              priceBeforeConditionalDiscounts\n              lineItems {\n                id\n                wasUnitPrice\n                nowUnitPrice\n                markedPrice\n                priceBeforeConditionalDiscounts\n                priceBeforeDiscounts\n\n                #quantity\n                externalLineReference\n              }\n            }\n          }\n          # quote {\n          #   id\n          #   currencyCode\n          #   createdDate\n          #   effectiveDate\n          #   location {\n          #     id\n          #   }\n          #   #lineItems: [Price_LineItem!]!\n          #   coupons {\n          #     code\n          #   }\n          #   rewards {\n          #     discountAmount\n          #     promotion {\n          #       id\n          #     }\n          #     type\n          #   }\n          #   totals {\n          #     grandTotal\n          #     beforeDiscounts\n          #     afterDiscounts\n          #     #returns\n          #   }\n          #   customer {\n          #     id\n          #   }\n          # }\n        }\n      }\n    }\n  }\n}\n"): (typeof documents)["\nquery getOrder($id: ID!) {\n  customerOrderQueries {\n    orderById(id: $id) {\n      ... on CustomerOrder_OrderByIdSuccess {\n        order {\n          id\n          version\n          lineItems {\n            id\n            product {\n              id\n              title\n            }\n            quantity {\n              ... on CustomerOrder_EachQuantity {\n                value\n              }\n            }\n            #giftMessage\n            priceSummary {\n              quoteId\n              priceBeforeDiscounts\n              priceBeforeConditionalDiscounts\n              lineItems {\n                id\n                wasUnitPrice\n                nowUnitPrice\n                markedPrice\n                priceBeforeConditionalDiscounts\n                priceBeforeDiscounts\n\n                #quantity\n                externalLineReference\n              }\n            }\n          }\n          # quote {\n          #   id\n          #   currencyCode\n          #   createdDate\n          #   effectiveDate\n          #   location {\n          #     id\n          #   }\n          #   #lineItems: [Price_LineItem!]!\n          #   coupons {\n          #     code\n          #   }\n          #   rewards {\n          #     discountAmount\n          #     promotion {\n          #       id\n          #     }\n          #     type\n          #   }\n          #   totals {\n          #     grandTotal\n          #     beforeDiscounts\n          #     afterDiscounts\n          #     #returns\n          #   }\n          #   customer {\n          #     id\n          #   }\n          # }\n        }\n      }\n    }\n  }\n}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;