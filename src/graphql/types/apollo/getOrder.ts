/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getOrder
// ====================================================

export interface getOrder_customerOrderQueries_orderById_CustomerOrder_OrderByIdFailure {
  __typename: "CustomerOrder_OrderByIdFailure";
}

export interface getOrder_customerOrderQueries_orderById_CustomerOrder_OrderByIdSuccess_order_lineItems_product {
  __typename: "Product";
  id: string;
  title: string | null;
}

export interface getOrder_customerOrderQueries_orderById_CustomerOrder_OrderByIdSuccess_order_lineItems_quantity {
  __typename: "CustomerOrder_EachQuantity";
  /**
   * The value for quantity.
   */
  value: any;
}

export interface getOrder_customerOrderQueries_orderById_CustomerOrder_OrderByIdSuccess_order_lineItems_priceSummary_lineItems {
  __typename: "Price_LineItem";
  /**
   * A unique identifier for the line in the basket. Decided by the consumer when the line is added to the basket.
   */
  id: any;
  /**
   * The price for one unit of measure quantity before any promotional discounts.
   */
  wasUnitPrice: any | null;
  /**
   * The price for one unit of measure quantity after any published price discount.
   */
  nowUnitPrice: any;
  /**
   * The price printed on the packaging or implied by a price embedded barcode (PEB)), when there is one.
   * 
   * Possible uses are reduced to clear labels, price labels produced by an in-store scales for catch weight products, or gift card sales where we need to know the value sold on the card.
   */
  markedPrice: any | null;
  /**
   * The price for the line item after published price discounts (quantity x nowUnitPrice).
   * 
   * A published price discount is an unconditional promotion on the price of product, typically a price cut or clearance.
   */
  priceBeforeConditionalDiscounts: any;
  /**
   * The base price for the line item before any promotional discounts are applied (quantity x wasUnitPrice).
   */
  priceBeforeDiscounts: any;
  /**
   * The Line item reference, if requested
   */
  externalLineReference: string;
}

export interface getOrder_customerOrderQueries_orderById_CustomerOrder_OrderByIdSuccess_order_lineItems_priceSummary {
  __typename: "Price_ExternalLinePriceSummary";
  quoteId: string;
  /**
   * The aggregated base price for all line items in the quote which have a matching externalLineReference.
   */
  priceBeforeDiscounts: any;
  /**
   * NOTE. All fields below are added by Price Domain to this federated type
   * 
   * The aggregated price (after published price discounts) for all line items in the quote which have a matching externalLineReference.
   */
  priceBeforeConditionalDiscounts: any;
  /**
   * The list of line items in the quote which have a matching externalLineReference.
   */
  lineItems: getOrder_customerOrderQueries_orderById_CustomerOrder_OrderByIdSuccess_order_lineItems_priceSummary_lineItems[];
}

export interface getOrder_customerOrderQueries_orderById_CustomerOrder_OrderByIdSuccess_order_lineItems {
  __typename: "CustomerOrder_LineItem";
  id: string;
  product: getOrder_customerOrderQueries_orderById_CustomerOrder_OrderByIdSuccess_order_lineItems_product;
  quantity: getOrder_customerOrderQueries_orderById_CustomerOrder_OrderByIdSuccess_order_lineItems_quantity;
  priceSummary: getOrder_customerOrderQueries_orderById_CustomerOrder_OrderByIdSuccess_order_lineItems_priceSummary;
}

export interface getOrder_customerOrderQueries_orderById_CustomerOrder_OrderByIdSuccess_order {
  __typename: "CustomerOrder_Order";
  id: string;
  version: any;
  lineItems: getOrder_customerOrderQueries_orderById_CustomerOrder_OrderByIdSuccess_order_lineItems[];
}

export interface getOrder_customerOrderQueries_orderById_CustomerOrder_OrderByIdSuccess {
  __typename: "CustomerOrder_OrderByIdSuccess";
  order: getOrder_customerOrderQueries_orderById_CustomerOrder_OrderByIdSuccess_order;
}

export type getOrder_customerOrderQueries_orderById = getOrder_customerOrderQueries_orderById_CustomerOrder_OrderByIdFailure | getOrder_customerOrderQueries_orderById_CustomerOrder_OrderByIdSuccess;

export interface getOrder_customerOrderQueries {
  __typename: "CustomerOrder_Queries";
  /**
   * Get the complete order.
   */
  orderById: getOrder_customerOrderQueries_orderById;
}

export interface getOrder {
  customerOrderQueries: getOrder_customerOrderQueries;
}

export interface getOrderVariables {
  id: string;
}
