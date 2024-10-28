import type { Client } from "./client.js";
import type { Fruit, Variety } from "./fruit.js";
import type { Farm, Grower } from "./grower.js";

export interface Harvest {
  id: string;
  grower: Grower;
  farm: Farm;
  client: Client;
  commodity: Fruit;
  variety: Variety;
  createdAt: string;
};
