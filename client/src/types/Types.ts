export interface OrderItem {
  itemID: number,
  itemType: string,
  protein: [],
  rice?: string,
  beans?: string,
  toppings?: [],
  sides?: [],
  drinks?: [],
  itemPrice: number
}