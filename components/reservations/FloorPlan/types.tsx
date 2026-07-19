export type TableShape = "round" | "rectangle";

export interface RestaurantTable {
  id: number;
  name: string;
  seats: number;

  shape: TableShape;

  x: number;
  y: number;

  width?: number;
  height?: number;
  radius?: number;
}