export interface Dummyproduct {
  "products": DummyproductShape[],
  "total": number,
  "skip": number,
  "limit": number
}

export interface DummyproductShape{
  "id": number,
  "title": string,
  "description": string,
  "category": string,
  "price": number,
  "discountPercentage": number,
  "rating": number,
  "stock": number,
  "images": string[],
  "thumbnail": string
  "isDeleted"?: boolean,
  "deletedOn"?: string
}
