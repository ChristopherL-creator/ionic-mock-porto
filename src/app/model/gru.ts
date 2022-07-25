import { Camion } from './camion';

export interface Gru {
  craneNum: string;
  craneCode: string;
  id: string;
  trucks: Camion[];
}
