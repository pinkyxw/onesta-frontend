export interface Farm {
  id: string;
  name: string;
  address: string;
}

export interface Grower {
  id: string;
  email: string;
  name: string;
  lastName: string;
  farms: Farm[];
};
