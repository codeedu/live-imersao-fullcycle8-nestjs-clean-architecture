export class CreateRouteDto {
  
  title: string;

  startPosition: { lat: number; lng: number };

  endPosition: { lat: number; lng: number };
}


//class-validator