/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * CurrencyCode in ISO 4217 format.
   * https://en.wikipedia.org/wiki/ISO_4217
   * Backed by a string.
   */
  CurrencyCode: any;
  /**
   * An RFC 3339 formatted date-time string.
   * See the below for comparison with other common date-time formats.
   * https://ijmacd.github.io/rfc3339-iso8601/
   * Backed by a string.
   */
  DateTime: any;
  ETag: any;
  /**
   * A floating point number representing a monetary amount that is greater than or equal to 0.
   * Only used in places where a negative value is not possible.
   * Backed by a Float.
   */
  Money: any;
  /** A string whose value cannot be "". */
  NonEmptyString: any;
  NonNegativeInt: any;
  PositiveFloat: any;
  /**
   * An integer value that is greater then 0.
   * This value cannot be 0.
   * Backed by an Int.
   */
  PositiveInt: any;
  /** The id key for a Coupon. */
  Price_CouponCode: any;
  /** The id key for a LineItem. */
  Price_LineItemId: any;
  /** The id key for a Promotion. */
  Price_PromotionId: any;
  /** The id key for a Quote. */
  Price_QuoteId: any;
  /**
   * A floating point number representing a monetary amount that can be negative as well as positive.
   * Backed by a Float.
   */
  SignedMoney: any;
};

export enum AssetType {
  Alternative = 'ALTERNATIVE',
  Cutout = 'CUTOUT',
  Fabric = 'FABRIC',
  Main = 'MAIN',
  Video = 'VIDEO'
}

export type Coupon = {
  __typename?: 'Coupon';
  code: Scalars['ID'];
};

export type Customer = {
  __typename?: 'Customer';
  id: Scalars['ID'];
};

export type CustomerOrder_ApplyCouponFailure = {
  __typename?: 'CustomerOrder_ApplyCouponFailure';
  error: Array<Maybe<CustomerOrder_Error>>;
};

/**  Apply Coupon  */
export type CustomerOrder_ApplyCouponInput = {
  couponCode: Scalars['NonEmptyString'];
  orderId: Scalars['ID'];
};

export type CustomerOrder_ApplyCouponOutput = CustomerOrder_ApplyCouponFailure | CustomerOrder_ApplyCouponSuccess;

export type CustomerOrder_ApplyCouponSuccess = {
  __typename?: 'CustomerOrder_ApplyCouponSuccess';
  order: CustomerOrder_Order;
};

export type CustomerOrder_CouponMutations = {
  __typename?: 'CustomerOrder_CouponMutations';
  /** Apply Coupon to order. */
  applyCoupon: CustomerOrder_ApplyCouponOutput;
  /** UnApply Coupon to order. */
  removeCoupon: CustomerOrder_RemoveCouponOutput;
};


export type CustomerOrder_CouponMutationsApplyCouponArgs = {
  applyCouponInput: CustomerOrder_ApplyCouponInput;
};


export type CustomerOrder_CouponMutationsRemoveCouponArgs = {
  removeCouponInput?: InputMaybe<CustomerOrder_RemoveCouponInput>;
};

export type CustomerOrder_CreateLineItemFailure = {
  __typename?: 'CustomerOrder_CreateLineItemFailure';
  error: Array<Maybe<CustomerOrder_Error>>;
};

/**  Create Line Item  */
export type CustomerOrder_CreateLineItemInput = {
  orderId: Scalars['ID'];
  productId: Scalars['ID'];
  quantity: CustomerOrder_QuantityInput;
};

export type CustomerOrder_CreateLineItemOutput = CustomerOrder_CreateLineItemFailure | CustomerOrder_CreateLineItemSuccess;

export type CustomerOrder_CreateLineItemSuccess = {
  __typename?: 'CustomerOrder_CreateLineItemSuccess';
  lineItemId: Scalars['ID'];
  order: CustomerOrder_Order;
};

export type CustomerOrder_CreateOrderFailure = {
  __typename?: 'CustomerOrder_CreateOrderFailure';
  error: Array<Maybe<CustomerOrder_Error>>;
};

/**  Create Order  */
export type CustomerOrder_CreateOrderInput = {
  locationId: Scalars['NonEmptyString'];
  orderType: CustomerOrder_OrderType;
};

export type CustomerOrder_CreateOrderOutput = CustomerOrder_CreateOrderFailure | CustomerOrder_CreateOrderSuccess;

export type CustomerOrder_CreateOrderSuccess = {
  __typename?: 'CustomerOrder_CreateOrderSuccess';
  order: CustomerOrder_Order;
};

export type CustomerOrder_Customisation = {
  __typename?: 'CustomerOrder_Customisation';
  type: Scalars['NonEmptyString'];
  value: Scalars['NonEmptyString'];
};

export type CustomerOrder_CustomisationInput = {
  type: Scalars['NonEmptyString'];
  value: Scalars['NonEmptyString'];
};

export type CustomerOrder_CustomisationMutations = {
  __typename?: 'CustomerOrder_CustomisationMutations';
  /** Delete a customisation on a line item */
  deleteCustomisation: CustomerOrder_DeleteCustomisationOutput;
  /** Add or Update a customisation on a line item */
  updateCustomisation: CustomerOrder_UpdateCustomisationOutput;
};


export type CustomerOrder_CustomisationMutationsDeleteCustomisationArgs = {
  deleteCustomisationInput: CustomerOrder_DeleteCustomisationInput;
};


export type CustomerOrder_CustomisationMutationsUpdateCustomisationArgs = {
  updateCustomisationInput: CustomerOrder_UpdateCustomisationInput;
};

export type CustomerOrder_DeleteCustomisationFailure = {
  __typename?: 'CustomerOrder_DeleteCustomisationFailure';
  error: Array<Maybe<CustomerOrder_Error>>;
};

/**  Delete customisation  */
export type CustomerOrder_DeleteCustomisationInput = {
  lineItemId: Scalars['ID'];
  orderId: Scalars['ID'];
  type: Scalars['NonEmptyString'];
};

export type CustomerOrder_DeleteCustomisationOutput = CustomerOrder_DeleteCustomisationFailure | CustomerOrder_DeleteCustomisationSuccess;

export type CustomerOrder_DeleteCustomisationSuccess = {
  __typename?: 'CustomerOrder_DeleteCustomisationSuccess';
  order: CustomerOrder_Order;
};

export type CustomerOrder_DeleteGiftMessageFailure = {
  __typename?: 'CustomerOrder_DeleteGiftMessageFailure';
  error: Array<Maybe<CustomerOrder_Error>>;
};

/**  Delete gift messsage  */
export type CustomerOrder_DeleteGiftMessageInput = {
  lineItemId: Scalars['ID'];
  orderId: Scalars['ID'];
};

export type CustomerOrder_DeleteGiftMessageOutput = CustomerOrder_DeleteGiftMessageFailure | CustomerOrder_DeleteGiftMessageSuccess;

export type CustomerOrder_DeleteGiftMessageSuccess = {
  __typename?: 'CustomerOrder_DeleteGiftMessageSuccess';
  message: Scalars['NonEmptyString'];
  order: CustomerOrder_Order;
};

export type CustomerOrder_DeleteLineItemFailure = {
  __typename?: 'CustomerOrder_DeleteLineItemFailure';
  error: Array<Maybe<CustomerOrder_Error>>;
};

/**  Delete Line Item  */
export type CustomerOrder_DeleteLineItemInput = {
  lineItemId: Scalars['ID'];
  orderId: Scalars['ID'];
};

export type CustomerOrder_DeleteLineItemOutput = CustomerOrder_DeleteLineItemFailure | CustomerOrder_DeleteLineItemSuccess;

export type CustomerOrder_DeleteLineItemSuccess = {
  __typename?: 'CustomerOrder_DeleteLineItemSuccess';
  order: CustomerOrder_Order;
};

/** How many items of the product is sold in this line item. */
export type CustomerOrder_EachQuantity = {
  __typename?: 'CustomerOrder_EachQuantity';
  /** The value for quantity. */
  value: Scalars['PositiveInt'];
};

export type CustomerOrder_Error = {
  __typename?: 'CustomerOrder_Error';
  code: Scalars['NonEmptyString'];
  fields?: Maybe<Array<CustomerOrder_ErrorField>>;
  message: Scalars['NonEmptyString'];
};

export type CustomerOrder_ErrorField = {
  __typename?: 'CustomerOrder_ErrorField';
  name: Scalars['NonEmptyString'];
  value: Scalars['NonEmptyString'];
};

export type CustomerOrder_GiftMessageMutations = {
  __typename?: 'CustomerOrder_GiftMessageMutations';
  /** Delete a gift message on a line item */
  deleteGiftMessage: CustomerOrder_DeleteGiftMessageOutput;
  /** Add or Update a gift message on a line item */
  updateGiftMessage: CustomerOrder_UpdateGiftMessageOutput;
};


export type CustomerOrder_GiftMessageMutationsDeleteGiftMessageArgs = {
  deleteGiftMessageInput: CustomerOrder_DeleteGiftMessageInput;
};


export type CustomerOrder_GiftMessageMutationsUpdateGiftMessageArgs = {
  updateGiftMessageInput: CustomerOrder_UpdateGiftMessageInput;
};

export type CustomerOrder_LineItem = {
  __typename?: 'CustomerOrder_LineItem';
  customisations: Array<CustomerOrder_Customisation>;
  giftMessage?: Maybe<Scalars['NonEmptyString']>;
  id: Scalars['ID'];
  priceSummary: Price_ExternalLinePriceSummary;
  product: Product;
  quantity: CustomerOrder_Quantity;
};

export type CustomerOrder_LineMutations = {
  __typename?: 'CustomerOrder_LineMutations';
  /** Add a line item to the order. */
  createLineItem: CustomerOrder_CreateLineItemOutput;
  /** Delete line item. */
  deleteLineItem: CustomerOrder_DeleteLineItemOutput;
  /** Update quantity on a line item. */
  updateLineItemQuantity: CustomerOrder_UpdateLineItemQuantityOutput;
};


export type CustomerOrder_LineMutationsCreateLineItemArgs = {
  createLineItemInput: CustomerOrder_CreateLineItemInput;
};


export type CustomerOrder_LineMutationsDeleteLineItemArgs = {
  deleteLineItemInput: CustomerOrder_DeleteLineItemInput;
};


export type CustomerOrder_LineMutationsUpdateLineItemQuantityArgs = {
  updateLineItemQuantityInput: CustomerOrder_UpdateLineItemQuantityInput;
};

export type CustomerOrder_Mutations = {
  __typename?: 'CustomerOrder_Mutations';
  couponMutations: CustomerOrder_CouponMutations;
  customisationMutations: CustomerOrder_CustomisationMutations;
  giftMessageMutations: CustomerOrder_GiftMessageMutations;
  lineMutations: CustomerOrder_LineMutations;
  orderMutations: CustomerOrder_OrderMutations;
};

export type CustomerOrder_Order = {
  __typename?: 'CustomerOrder_Order';
  coupons: Array<Coupon>;
  customer: Customer;
  id: Scalars['ID'];
  lineItems: Array<CustomerOrder_LineItem>;
  location: Location;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  orderType: CustomerOrder_OrderType;
  quote: Price_Quote;
  status: CustomerOrder_OrderStatus;
  version: Scalars['ETag'];
};

export type CustomerOrder_OrderByIdFailure = {
  __typename?: 'CustomerOrder_OrderByIdFailure';
  error: Array<Maybe<CustomerOrder_Error>>;
};

export type CustomerOrder_OrderByIdOutput = CustomerOrder_OrderByIdFailure | CustomerOrder_OrderByIdSuccess;

export type CustomerOrder_OrderByIdSuccess = {
  __typename?: 'CustomerOrder_OrderByIdSuccess';
  order: CustomerOrder_Order;
};

export type CustomerOrder_OrderByLocationAndTypeFailure = {
  __typename?: 'CustomerOrder_OrderByLocationAndTypeFailure';
  error: Array<Maybe<CustomerOrder_Error>>;
};

export type CustomerOrder_OrderByLocationAndTypeOutput = CustomerOrder_OrderByLocationAndTypeFailure | CustomerOrder_OrderByLocationAndTypeSuccess;

export type CustomerOrder_OrderByLocationAndTypeSuccess = {
  __typename?: 'CustomerOrder_OrderByLocationAndTypeSuccess';
  orders: Array<CustomerOrder_Order>;
};

export type CustomerOrder_OrderMutations = {
  __typename?: 'CustomerOrder_OrderMutations';
  /** As the authenticated user, create an order. */
  createOrder: CustomerOrder_CreateOrderOutput;
};


export type CustomerOrder_OrderMutationsCreateOrderArgs = {
  createOrderInput: CustomerOrder_CreateOrderInput;
};

export enum CustomerOrder_OrderStatus {
  Open = 'OPEN'
}

export enum CustomerOrder_OrderType {
  Order = 'ORDER',
  Wishlist = 'WISHLIST'
}

/**
 * A union of all the possible quantity types.
 * This is defined this way to future proof the schema for quantity, types e.g. a measured quantity - say weight, that will be introduced.
 */
export type CustomerOrder_Quantity = CustomerOrder_EachQuantity;

export type CustomerOrder_QuantityInput = {
  type: CustomerOrder_QuantityInputType;
  value: Scalars['PositiveFloat'];
};

export enum CustomerOrder_QuantityInputType {
  Each = 'EACH'
}

export type CustomerOrder_Queries = {
  __typename?: 'CustomerOrder_Queries';
  /** Get the complete order. */
  orderById: CustomerOrder_OrderByIdOutput;
  /** TODO: Get order by location and type. */
  ordersByLocationAndType: CustomerOrder_OrderByLocationAndTypeOutput;
};


export type CustomerOrder_QueriesOrderByIdArgs = {
  id: Scalars['ID'];
};


export type CustomerOrder_QueriesOrdersByLocationAndTypeArgs = {
  locationId: Scalars['ID'];
  orderType?: InputMaybe<CustomerOrder_OrderType>;
};

export type CustomerOrder_RemoveCouponFailure = {
  __typename?: 'CustomerOrder_RemoveCouponFailure';
  error: Array<Maybe<CustomerOrder_Error>>;
};

/**  Remove Coupon  */
export type CustomerOrder_RemoveCouponInput = {
  couponCode: Scalars['NonEmptyString'];
  orderId: Scalars['ID'];
};

export type CustomerOrder_RemoveCouponOutput = CustomerOrder_RemoveCouponFailure | CustomerOrder_RemoveCouponSuccess;

export type CustomerOrder_RemoveCouponSuccess = {
  __typename?: 'CustomerOrder_RemoveCouponSuccess';
  order: CustomerOrder_Order;
};

export type CustomerOrder_UpdateCustomisationFailure = {
  __typename?: 'CustomerOrder_UpdateCustomisationFailure';
  error: Array<Maybe<CustomerOrder_Error>>;
};

export type CustomerOrder_UpdateCustomisationInput = {
  customisation: CustomerOrder_CustomisationInput;
  lineItemId: Scalars['ID'];
  orderId: Scalars['ID'];
};

export type CustomerOrder_UpdateCustomisationOutput = CustomerOrder_UpdateCustomisationFailure | CustomerOrder_UpdateCustomisationSuccess;

export type CustomerOrder_UpdateCustomisationSuccess = {
  __typename?: 'CustomerOrder_UpdateCustomisationSuccess';
  order: CustomerOrder_Order;
};

export type CustomerOrder_UpdateGiftMessageFailure = {
  __typename?: 'CustomerOrder_UpdateGiftMessageFailure';
  error: Array<Maybe<CustomerOrder_Error>>;
};

/**  Add/Update gift messsage  */
export type CustomerOrder_UpdateGiftMessageInput = {
  lineItemId: Scalars['ID'];
  message: Scalars['NonEmptyString'];
  orderId: Scalars['ID'];
};

export type CustomerOrder_UpdateGiftMessageOutput = CustomerOrder_UpdateGiftMessageFailure | CustomerOrder_UpdateGiftMessageSuccess;

export type CustomerOrder_UpdateGiftMessageSuccess = {
  __typename?: 'CustomerOrder_UpdateGiftMessageSuccess';
  order: CustomerOrder_Order;
};

export type CustomerOrder_UpdateLineItemQuantityFailure = {
  __typename?: 'CustomerOrder_UpdateLineItemQuantityFailure';
  error: Array<Maybe<CustomerOrder_Error>>;
};

/**  Update Line Item Quantity  */
export type CustomerOrder_UpdateLineItemQuantityInput = {
  lineItemId: Scalars['ID'];
  orderId: Scalars['ID'];
  quantity: CustomerOrder_QuantityInput;
};

export type CustomerOrder_UpdateLineItemQuantityOutput = CustomerOrder_UpdateLineItemQuantityFailure | CustomerOrder_UpdateLineItemQuantitySuccess;

export type CustomerOrder_UpdateLineItemQuantitySuccess = {
  __typename?: 'CustomerOrder_UpdateLineItemQuantitySuccess';
  order?: Maybe<CustomerOrder_Order>;
};

export enum Dimension_Name {
  Primary = 'PRIMARY',
  Secondary = 'SECONDARY'
}

export enum Dimension_Type {
  Friendlysize = 'FRIENDLYSIZE',
  Index = 'INDEX',
  Position = 'POSITION',
  Size = 'SIZE',
  Style = 'STYLE'
}

/**
 * A global error interface that all typed errors should conform to.
 * This enables clients to be able to generically handle any error.
 * It also allows graphs to provide more specific errors with as much detail as they want - and for clients to be able to catch and handle those cases.
 */
export type Error = {
  /** A Globally Unique Identifier for the error. */
  code: Scalars['NonEmptyString'];
  /** A human readable message describing the error. Potentially presentable to a customer in the worst case. */
  message: Scalars['NonEmptyString'];
};

export type Identity = {
  __typename?: 'Identity';
  id: Scalars['ID'];
};

export type InvalidProduct = Error & {
  __typename?: 'InvalidProduct';
  code: Scalars['NonEmptyString'];
  message: Scalars['NonEmptyString'];
  productId: Scalars['ID'];
};

export type Location = {
  __typename?: 'Location';
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  customerOrderMutations: CustomerOrder_Mutations;
  priceMutations?: Maybe<Price_Mutations>;
};

/** The input for the applyCoupon mutation. */
export type Price_ApplyCouponInput = {
  /** The Coupon code. */
  couponCode: Scalars['Price_CouponCode'];
  /** The id of the quote to apply the coupon to. */
  quoteId: Scalars['Price_QuoteId'];
};

/** The output of the applyCoupon mutation, either success or one of the given errors. */
export type Price_ApplyCouponOutput = Price_ApplyCouponSuccess | Price_InvalidCouponCode;

/** The result of a successful applyCoupon mutation. */
export type Price_ApplyCouponSuccess = {
  __typename?: 'Price_ApplyCouponSuccess';
  /** The coupon code that was given. */
  couponCode: Scalars['Price_CouponCode'];
  /** The full quote, after the coupon was applied. */
  quote: Price_Quote;
};

/** How many items of the product is sold in this line item. */
export type Price_EachQuantity = {
  __typename?: 'Price_EachQuantity';
  /** Has the item been added by exact quantity (false), or has it been calculated (true). */
  calculatedQuantity: Scalars['Boolean'];
  /** The number the units. */
  numberOfUnits: Scalars['PositiveInt'];
};

export type Price_ExternalLinePriceSummary = {
  __typename?: 'Price_ExternalLinePriceSummary';
  externalLineReference: Scalars['String'];
  /** The list of line items in the quote which have a matching externalLineReference. */
  lineItems: Array<Price_LineItem>;
  /**
   * NOTE. All fields below are added by Price Domain to this federated type
   *
   * The aggregated price (after published price discounts) for all line items in the quote which have a matching externalLineReference.
   */
  priceBeforeConditionalDiscounts: Scalars['Money'];
  /** The aggregated base price for all line items in the quote which have a matching externalLineReference. */
  priceBeforeDiscounts: Scalars['Money'];
  quoteId: Scalars['ID'];
};

/** Error response when applying an invalid coupon to a quote, g.g. it's expired. */
export type Price_InvalidCouponCode = Error & {
  __typename?: 'Price_InvalidCouponCode';
  code: Scalars['NonEmptyString'];
  /** The coupon code that was given. */
  couponCode: Scalars['Price_CouponCode'];
  message: Scalars['NonEmptyString'];
};

/**
 * The combination of a product and it's quantity.
 *
 * Gives visibility to the prices and how that price was reached.
 */
export type Price_LineItem = {
  __typename?: 'Price_LineItem';
  /** The Line item reference, if requested */
  externalLineReference: Scalars['String'];
  /** A unique identifier for the line in the basket. Decided by the consumer when the line is added to the basket. */
  id: Scalars['Price_LineItemId'];
  /**
   * The price printed on the packaging or implied by a price embedded barcode (PEB)), when there is one.
   *
   * Possible uses are reduced to clear labels, price labels produced by an in-store scales for catch weight products, or gift card sales where we need to know the value sold on the card.
   */
  markedPrice?: Maybe<Scalars['Money']>;
  /** The price for one unit of measure quantity after any published price discount. */
  nowUnitPrice: Scalars['Money'];
  /**
   * The price for the line item after published price discounts (quantity x nowUnitPrice).
   *
   * A published price discount is an unconditional promotion on the price of product, typically a price cut or clearance.
   */
  priceBeforeConditionalDiscounts: Scalars['Money'];
  /** The base price for the line item before any promotional discounts are applied (quantity x wasUnitPrice). */
  priceBeforeDiscounts: Scalars['Money'];
  /** The product for the line item. */
  product: Product;
  /** The quantity of the product for the line item. */
  quantity: Price_Quantity;
  /** The price for one unit of measure quantity before any promotional discounts. */
  wasUnitPrice?: Maybe<Scalars['Money']>;
};

/** The mutations directly available against the Price domain. */
export type Price_Mutations = {
  __typename?: 'Price_Mutations';
  quote: Price_QuoteMutations;
};

/** A presented coupon. */
export type Price_PresentedCoupon = {
  __typename?: 'Price_PresentedCoupon';
  /** The id of a presented coupon. */
  code: Scalars['Price_CouponCode'];
};

/** Details of a promotion. */
export type Price_Promotion = {
  __typename?: 'Price_Promotion';
  /** The promotion end time. */
  endDate: Scalars['DateTime'];
  /** The promotion description. */
  headline: Scalars['NonEmptyString'];
  /** The id of a promotion. */
  id: Scalars['Price_PromotionId'];
  /** A list enumerating certain qualities of the promotion. */
  qualities: Array<Price_PromotionQuality>;
  /** The promotion start time. */
  startDate: Scalars['DateTime'];
};

/**
 * A quality of a promotion.
 *
 * Price_Promotions may exhibit multiple qualities.
 */
export type Price_PromotionQuality = {
  __typename?: 'Price_PromotionQuality';
  /** Optional value, populated when qualityType is MEMBERSHIP. */
  membershipScheme?: Maybe<Scalars['NonEmptyString']>;
  /** A type of quality exhibited by a promotion. */
  type: Price_PromotionQualityType;
};

/** A type of quality exhibited by a promotion. */
export enum Price_PromotionQualityType {
  /** Buy One Get One Free. */
  Bogof = 'BOGOF',
  /** Complex conditions involving any or all of multiple lines / product or spend thresholds / customer specific / coupon redeemed. */
  Conditional = 'CONDITIONAL',
  /** Coupon condition applies. */
  Coupon = 'COUPON',
  /** Discount earned. */
  Discount = 'DISCOUNT',
  /** Membership scheme condition applies. */
  Membership = 'MEMBERSHIP',
  /** Multiple products required. */
  Multibuy = 'MULTIBUY',
  /** Points earned. */
  Points = 'POINTS',
  /** Unconditional promotional discount applied for every unit of a single product eg. a price cut. */
  PublishedPriceDiscount = 'PUBLISHED_PRICE_DISCOUNT'
}

/**
 * A union of all the possible quantity types.
 * This is defined this way to future proof the schema for quantity, types e.g. a measured quantity - say weight, that will be introduced.
 */
export type Price_Quantity = Price_EachQuantity;

/** The Queries directly available against the price domain. */
export type Price_Queries = {
  __typename?: 'Price_Queries';
  /** Get a priced quote for given quote id. */
  quote?: Maybe<Price_Quote>;
};


/** The Queries directly available against the price domain. */
export type Price_QueriesQuoteArgs = {
  id: Scalars['Price_QuoteId'];
};

/** A current view on the pricing information for the line items included in the quote. */
export type Price_Quote = {
  __typename?: 'Price_Quote';
  /** The list of coupons applied to the quote. Empty list if no coupons are applied. */
  coupons: Array<Price_PresentedCoupon>;
  /** Date and time that quote was created. */
  createdDate: Scalars['DateTime'];
  /** CurrencyCode in ISO 4217 format. */
  currencyCode: Scalars['CurrencyCode'];
  /** A reference to the customer who the quote is for. */
  customer: Identity;
  /**
   * Effective date and time that quote is priced (usually now).
   * This is the date the customer expects to pay for their basket, and the prices and promotions reflect that date.
   *
   * Conceivably this could be in the future (customer expects to pay for their online order in a weeks time). For a till journey this is always now.
   */
  effectiveDate: Scalars['DateTime'];
  /** Unique quote id as received from pricing domain. */
  id: Scalars['ID'];
  /** The list of line items in the quote. */
  lineItems: Array<Price_LineItem>;
  /** The location of the basket. */
  location: Location;
  /** The list of rewards applied to the quote. Empty list if no rewards are applied. */
  rewards: Array<Price_QuoteReward>;
  /** The information about total prices of the full quote. */
  totals: Price_Totals;
};

/** The mutations possible against a quote. */
export type Price_QuoteMutations = {
  __typename?: 'Price_QuoteMutations';
  /** Apply a coupon to an existing quote. */
  applyCoupon: Price_ApplyCouponOutput;
  /** Remove a coupon from an existing quote. */
  removeCoupon: Price_RemoveCouponOutput;
};


/** The mutations possible against a quote. */
export type Price_QuoteMutationsApplyCouponArgs = {
  applyCouponInput: Price_ApplyCouponInput;
};


/** The mutations possible against a quote. */
export type Price_QuoteMutationsRemoveCouponArgs = {
  removeCouponInput?: InputMaybe<Price_RemoveCouponInput>;
};

/** A reward generated by a promotion. */
export type Price_QuoteReward = {
  __typename?: 'Price_QuoteReward';
  /** The amount of discount applied to the total quote value. Zero when no discount. */
  discountAmount: Scalars['Money'];
  /** The related promotion that led to the reward. */
  promotion: Price_Promotion;
  /** The type of reward. */
  type: Price_QuoteRewardType;
};

/** The different types of rewards that can be given. */
export enum Price_QuoteRewardType {
  /** A discount i.e. a reduction in price. */
  Discount = 'DISCOUNT'
}

/** The input for Remove Coupon mutation. */
export type Price_RemoveCouponInput = {
  /** The Coupon code to remove. */
  couponCode: Scalars['Price_CouponCode'];
  /** The quote id of that quote to remove the coupon from. */
  quoteId: Scalars['Price_QuoteId'];
};

/** The output of the remove coupon mutation, either success or one of the given errors. */
export type Price_RemoveCouponOutput = Price_InvalidCouponCode | Price_RemoveCouponSuccess;

export type Price_RemoveCouponSuccess = {
  __typename?: 'Price_RemoveCouponSuccess';
  /** The coupon code that was given. */
  couponCode: Scalars['Price_CouponCode'];
  /** The full quote, after the coupon was applied. */
  quote: Price_Quote;
};

/** The information about total prices of the full quote. */
export type Price_Totals = {
  __typename?: 'Price_Totals';
  /** The total price after all promotions of all line items in the basket. */
  afterDiscounts: Scalars['Money'];
  /** The total base price of all the line items in the basket. */
  beforeDiscounts: Scalars['Money'];
  /** The total delivery charge after all delivery promotions. */
  deliveryAfterDiscounts: Scalars['Money'];
  /** The total basic delivery charge for the basket. */
  deliveryBeforeDiscounts: Scalars['Money'];
  /**
   * The total price to be paid by the customer (totalAfterDiscounts - totalReturns).
   *
   * A negative value indicates that the total is to be paid to the customer.
   */
  grandTotal: Scalars['SignedMoney'];
  /** The total value of line items being returned. */
  returns: Scalars['Money'];
};

export type Product = {
  __typename?: 'Product';
  addons: Array<Product_CrossReference>;
  assets: Array<Product_Asset>;
  attributes: Product_Attributes;
  brand?: Maybe<Product_Brand>;
  bundle: Array<Product_BundleOptions>;
  color?: Maybe<Array<Maybe<Product_Color>>>;
  component: Array<Product_ComponentOption>;
  groups: Array<Product_Group>;
  hierarchy: Product_Hierarchy;
  id: Scalars['ID'];
  parent: Scalars['ID'];
  published: Array<Product_Published>;
  services: Array<Product_CrossReference>;
  size?: Maybe<Product_Size>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Product_Type>;
  upc?: Maybe<Scalars['String']>;
  variants: Array<Product>;
};

export type Product_AgeRestriction = {
  __typename?: 'Product_AgeRestriction';
  minimumAge?: Maybe<Scalars['NonNegativeInt']>;
};

export type Product_Asset = {
  __typename?: 'Product_Asset';
  assetId: Scalars['NonEmptyString'];
  type: AssetType;
};

export type Product_Attributes = {
  __typename?: 'Product_Attributes';
  ccBleaching?: Maybe<Scalars['String']>;
  ccDryCleaning?: Maybe<Scalars['String']>;
  ccIroning?: Maybe<Scalars['String']>;
  ccTextOnlyIcon?: Maybe<Scalars['String']>;
  ccTumbleDrying?: Maybe<Scalars['String']>;
  ccWashTemperature?: Maybe<Scalars['String']>;
  compositionList?: Maybe<Scalars['String']>;
  customizations: Array<Maybe<Product_Customizations>>;
  daysFrom?: Maybe<Scalars['String']>;
  deliveryInformationPanel?: Maybe<Scalars['String']>;
  deliveryServicesAvailableCopy?: Maybe<Scalars['String']>;
  departmentId?: Maybe<Scalars['String']>;
  ecomExclusive?: Maybe<Scalars['String']>;
  externalBrandSubCategory?: Maybe<Scalars['String']>;
  fit?: Maybe<Scalars['String']>;
  fitDescription?: Maybe<Scalars['String']>;
  footwearSole?: Maybe<Scalars['String']>;
  furtherDescription?: Maybe<Scalars['String']>;
  homeFeaturesSlashInnovations?: Maybe<Scalars['String']>;
  homeMaterial?: Maybe<Scalars['String']>;
  ingredientsListing?: Maybe<Scalars['String']>;
  inlineReferenceBullet1?: Maybe<Scalars['String']>;
  inlineReferenceBullet2?: Maybe<Scalars['String']>;
  inlineReferenceBullet3?: Maybe<Scalars['String']>;
  inlineReferenceList3?: Maybe<Scalars['String']>;
  leadCutoutImageId?: Maybe<Scalars['String']>;
  leadMainImageId?: Maybe<Scalars['String']>;
  linkToBrandDetails?: Maybe<Scalars['String']>;
  linkToSizeGuide?: Maybe<Scalars['String']>;
  masterAspirationalText?: Maybe<Scalars['String']>;
  masterProductDescription?: Maybe<Scalars['String']>;
  maximumPurchaseQuantity?: Maybe<Scalars['NonNegativeInt']>;
  personalisationInputInformation?: Maybe<Scalars['String']>;
  personalisationNotes?: Maybe<Scalars['String']>;
  planAFeatures?: Maybe<Scalars['String']>;
  platformProductType?: Maybe<Scalars['String']>;
  platformSuperInLineReference?: Maybe<Scalars['String']>;
  primarySizeLabel?: Maybe<Scalars['String']>;
  productFeatures2?: Maybe<Scalars['String']>;
  productfeaturesSlashInnovations?: Maybe<Scalars['String']>;
  restrictions: Array<Maybe<Product_Restrictions>>;
  safetyWarning?: Maybe<Scalars['String']>;
  secondarySizeLabel?: Maybe<Scalars['String']>;
  services?: Maybe<Scalars['String']>;
  splitByColour?: Maybe<Scalars['String']>;
  stroke?: Maybe<Scalars['NonEmptyString']>;
  templateType?: Maybe<Scalars['String']>;
  typeOfSizegrid?: Maybe<Scalars['String']>;
};

export type Product_Brand = {
  __typename?: 'Product_Brand';
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Product_BundleOptions = {
  __typename?: 'Product_BundleOptions';
  name?: Maybe<Scalars['String']>;
  product: Scalars['ID'];
  type: Scalars['NonEmptyString'];
};

export type Product_Color = {
  __typename?: 'Product_Color';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type Product_ComponentOption = {
  __typename?: 'Product_ComponentOption';
  maxQuantity?: Maybe<Scalars['NonNegativeInt']>;
  minQuantity?: Maybe<Scalars['NonNegativeInt']>;
  name: Scalars['NonEmptyString'];
  product: Scalars['ID'];
  type: Scalars['NonEmptyString'];
};

export type Product_CrossReference = {
  __typename?: 'Product_CrossReference';
  name: Scalars['NonEmptyString'];
  product: Scalars['ID'];
  type: Scalars['NonEmptyString'];
};

export type Product_Customizations = Product_Gifts | Product_Personalization;

export type Product_Dimension = {
  __typename?: 'Product_Dimension';
  name?: Maybe<Dimension_Name>;
  type?: Maybe<Dimension_Type>;
  value?: Maybe<Scalars['NonEmptyString']>;
};

export type Product_Gifts = {
  __typename?: 'Product_Gifts';
  isWrappable?: Maybe<Scalars['Boolean']>;
  messageAllowed?: Maybe<Scalars['Boolean']>;
};

export type Product_Group = {
  __typename?: 'Product_Group';
  id: Scalars['ID'];
  name: Scalars['NonEmptyString'];
};

export type Product_HeightRestriction = {
  __typename?: 'Product_HeightRestriction';
  minimumHeight?: Maybe<Scalars['NonNegativeInt']>;
};

export enum Product_Hierarchy {
  Color = 'COLOR',
  Product = 'PRODUCT',
  Variant = 'VARIANT'
}

export type Product_Personalization = {
  __typename?: 'Product_Personalization';
  messageLimit?: Maybe<Scalars['NonNegativeInt']>;
};

export type Product_ProductOutput = InvalidProduct | Product;

export type Product_Published = {
  __typename?: 'Product_Published';
  isPublished?: Maybe<Scalars['Boolean']>;
};

export type Product_Queries = {
  __typename?: 'Product_Queries';
  getProductById?: Maybe<Product_ProductOutput>;
};


export type Product_QueriesGetProductByIdArgs = {
  id: Scalars['ID'];
};

export type Product_Restrictions = Product_AgeRestriction | Product_HeightRestriction;

export type Product_Size = {
  __typename?: 'Product_Size';
  dimensions?: Maybe<Array<Maybe<Product_Dimension>>>;
};

export enum Product_Type {
  Addons = 'ADDONS',
  Beauty = 'BEAUTY',
  Cakes = 'CAKES',
  Clothing = 'CLOTHING',
  Collections = 'COLLECTIONS',
  Deliverypass = 'DELIVERYPASS',
  Flowers = 'FLOWERS',
  Food = 'FOOD',
  Foodmenu = 'FOODMENU',
  Furniture = 'FURNITURE',
  Giftcard = 'GIFTCARD',
  Giftwrap = 'GIFTWRAP',
  Hampers = 'HAMPERS',
  Home = 'HOME',
  Outfits = 'OUTFITS',
  Scribbler = 'SCRIBBLER',
  Services = 'SERVICES',
  Sets = 'SETS',
  Subscriptions = 'SUBSCRIPTIONS',
  Wine = 'WINE'
}

export type Query = {
  __typename?: 'Query';
  customerOrderQueries: CustomerOrder_Queries;
  priceQueries?: Maybe<Price_Queries>;
  productQueries: Product_Queries;
};

export type GetMyOrdersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyOrdersQuery = { __typename?: 'Query', customerOrderQueries: { __typename?: 'CustomerOrder_Queries', ordersByLocationAndType: { __typename: 'CustomerOrder_OrderByLocationAndTypeFailure', error: Array<{ __typename?: 'CustomerOrder_Error', code: any, message: any } | null> } | { __typename: 'CustomerOrder_OrderByLocationAndTypeSuccess', orders: Array<{ __typename?: 'CustomerOrder_Order', id: string }> } } };

export type GetOrderQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetOrderQuery = { __typename?: 'Query', customerOrderQueries: { __typename?: 'CustomerOrder_Queries', orderById: { __typename?: 'CustomerOrder_OrderByIdFailure' } | { __typename?: 'CustomerOrder_OrderByIdSuccess', order: { __typename?: 'CustomerOrder_Order', id: string, version: any, lineItems: Array<{ __typename?: 'CustomerOrder_LineItem', id: string, product: { __typename?: 'Product', id: string, title?: string | null }, quantity: { __typename?: 'CustomerOrder_EachQuantity', value: any }, priceSummary: { __typename?: 'Price_ExternalLinePriceSummary', quoteId: string, priceBeforeDiscounts: any, priceBeforeConditionalDiscounts: any, lineItems: Array<{ __typename?: 'Price_LineItem', id: any, wasUnitPrice?: any | null, nowUnitPrice: any, markedPrice?: any | null, priceBeforeConditionalDiscounts: any, priceBeforeDiscounts: any, externalLineReference: string }> } }> } } } };


export const GetMyOrdersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getMyOrders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerOrderQueries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ordersByLocationAndType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locationId"},"value":{"kind":"StringValue","value":"10151","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"orderType"},"value":{"kind":"EnumValue","value":"ORDER"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerOrder_OrderByLocationAndTypeFailure"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerOrder_OrderByLocationAndTypeSuccess"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetMyOrdersQuery, GetMyOrdersQueryVariables>;
export const GetOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerOrderQueries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orderById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerOrder_OrderByIdSuccess"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"order"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"lineItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"quantity"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerOrder_EachQuantity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"priceSummary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"quoteId"}},{"kind":"Field","name":{"kind":"Name","value":"priceBeforeDiscounts"}},{"kind":"Field","name":{"kind":"Name","value":"priceBeforeConditionalDiscounts"}},{"kind":"Field","name":{"kind":"Name","value":"lineItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"wasUnitPrice"}},{"kind":"Field","name":{"kind":"Name","value":"nowUnitPrice"}},{"kind":"Field","name":{"kind":"Name","value":"markedPrice"}},{"kind":"Field","name":{"kind":"Name","value":"priceBeforeConditionalDiscounts"}},{"kind":"Field","name":{"kind":"Name","value":"priceBeforeDiscounts"}},{"kind":"Field","name":{"kind":"Name","value":"externalLineReference"}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetOrderQuery, GetOrderQueryVariables>;