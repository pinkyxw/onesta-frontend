export interface Variety {
  id: string;
  name: string;
}

export interface Fruit {
  id: string;
  name: string;
  varieties: Variety[];
};
