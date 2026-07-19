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

export const tableData: RestaurantTable[] = [
  {
    id: 1,
    name: "Table 1",
    seats: 2,
    shape: "round",
    x: 130,
    y: 180,
    radius: 34,
  },
  {
    id: 2,
    name: "Table 2",
    seats: 2,
    shape: "round",
    x: 305,
    y: 180,
    radius: 34,
  },
  {
    id: 3,
    name: "Table 3",
    seats: 3,
    shape: "round",
    x: 490,
    y: 180,
    radius: 38,
  },
  {
    id: 4,
    name: "Table 4",
    seats: 4,
    shape: "rectangle",
    x: 130,
    y: 330,
    width: 135,
    height: 78,
  },
  {
    id: 5,
    name: "Table 5",
    seats: 4,
    shape: "round",
    x: 310,
    y: 330,
    radius: 34,
  },
  {
    id: 6,
    name: "Table 6",
    seats: 6,
    shape: "round",
    x: 130,
    y: 505,
    radius: 40,
  },
  {
    id: 7,
    name: "Table 7",
    seats: 4,
    shape: "round",
    x:310,
    y: 505,
    radius: 36,
  },

];