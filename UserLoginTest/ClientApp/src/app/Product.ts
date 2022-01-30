// To parse this data:
//
//   import { Convert, Product } from "./file";
//
//   const product = Convert.toProduct(json);

export interface Product {
  prodId?:   number;
  prodName?: string;
  prodPrice?: number;
  prodImg?:  string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toProduct(json: string): Product {
      return JSON.parse(json);
  }

  public static productToJson(value: Product): string {
      return JSON.stringify(value);
  }
}
