/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getMyOrders
// ====================================================

export interface getMyOrders_customerOrderQueries_ordersByLocationAndType_CustomerOrder_OrderByLocationAndTypeFailure_error {
  __typename: "CustomerOrder_Error";
  code: any;
  message: any;
}

export interface getMyOrders_customerOrderQueries_ordersByLocationAndType_CustomerOrder_OrderByLocationAndTypeFailure {
  __typename: "CustomerOrder_OrderByLocationAndTypeFailure";
  error: (getMyOrders_customerOrderQueries_ordersByLocationAndType_CustomerOrder_OrderByLocationAndTypeFailure_error | null)[];
}

export interface getMyOrders_customerOrderQueries_ordersByLocationAndType_CustomerOrder_OrderByLocationAndTypeSuccess_orders {
  __typename: "CustomerOrder_Order";
  id: string;
}

export interface getMyOrders_customerOrderQueries_ordersByLocationAndType_CustomerOrder_OrderByLocationAndTypeSuccess {
  __typename: "CustomerOrder_OrderByLocationAndTypeSuccess";
  orders: getMyOrders_customerOrderQueries_ordersByLocationAndType_CustomerOrder_OrderByLocationAndTypeSuccess_orders[];
}

export type getMyOrders_customerOrderQueries_ordersByLocationAndType = getMyOrders_customerOrderQueries_ordersByLocationAndType_CustomerOrder_OrderByLocationAndTypeFailure | getMyOrders_customerOrderQueries_ordersByLocationAndType_CustomerOrder_OrderByLocationAndTypeSuccess;

export interface getMyOrders_customerOrderQueries {
  __typename: "CustomerOrder_Queries";
  /**
   * TODO: Get order by location and type.
   */
  ordersByLocationAndType: getMyOrders_customerOrderQueries_ordersByLocationAndType;
}

export interface getMyOrders {
  customerOrderQueries: getMyOrders_customerOrderQueries;
}
