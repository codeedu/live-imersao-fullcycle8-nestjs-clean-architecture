import { LatLng } from '../domain/route.entity';
import { RouteRepositoryInterface } from '../domain/route.repository';

export class ListAllRoutesUseCase {
  constructor(private routeRepo: RouteRepositoryInterface) {}

  async execute(): Promise<ListRouteOutput> {
    const routes = await this.routeRepo.findAll();
    return routes.map((r) => r.toJSON());
  }
}

type ListRouteOutput = {
  id: string;
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  paths?: LatLng[];
}[];
