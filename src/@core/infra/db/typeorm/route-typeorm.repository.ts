import { Route } from '../../../domain/route.entity';
import { RouteRepositoryInterface } from '../../../domain/route.repository';
import { Repository } from 'typeorm';

export class RouteTypeOrmRepository implements RouteRepositoryInterface {
  constructor(private ormRepo: Repository<Route>) {}

  async insert(route: Route): Promise<void> {
    await this.ormRepo.save(route);
  }

  findAll(): Promise<Route[]> {
    return this.ormRepo.find();
  }
}

//Prisma ORM - 2 anos

//switch de vendor - dev test producao
//lock table - 
//modo flexivel
//é mais lento que outros ORM

//Sequelize TypeORM MikroORM Mongoose