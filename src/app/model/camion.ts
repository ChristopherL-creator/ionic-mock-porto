export interface Camion {
  truckId: number;
  truckCode: string;
  truckDescr?: any;
  position: number;
}

export interface PositionAggregator extends Camion{
  lontanoEstArray: string[];
  medioEstArray: string[];
  vicinoArray: string[];
  medioOvestArray: string[];
  lontanoOvestArray: string[];
}



