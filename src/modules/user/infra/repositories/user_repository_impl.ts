import { inject, injectable } from "tsyringe";

import { IUserRepository } from "../../domain/repositories/user_repository";
import { IUserDatasource } from "../datasources/user_datasource";

@injectable()
export class UserRepostoryImpl implements IUserRepository {
  constructor(@inject("UserDatasource") private datasource: IUserDatasource) {}

  get(): string {
    return this.datasource.getUser();
  }
}
