import { injectable } from "tsyringe";

import { IUserDatasource } from "../../infra/datasources/user_datasource";

@injectable()
export class NodeDatasource implements IUserDatasource {
  getUser(): string {
    return "Hello from external user datasource";
  }
}
