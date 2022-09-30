import { container } from "tsyringe";

import { IUserRepository } from "../../modules/user/domain/repositories/user_repository";
import GetUserImpl from "../../modules/user/domain/usecases/get_user_impl";
import { IGetUser } from "../../modules/user/domain/usecases/interface/get_user";
import { NodeDatasource } from "../../modules/user/external/datasource/node_datasorce";
import { IUserDatasource } from "../../modules/user/infra/datasources/user_datasource";
import { UserRepostoryImpl } from "../../modules/user/infra/repositories/user_repository_impl";

container.registerSingleton<IUserDatasource>("UserDatasource", NodeDatasource);
container.registerSingleton<IUserRepository>(
  "UserRepository",
  UserRepostoryImpl
);
container.registerSingleton<IGetUser>("GetUserUsecase", GetUserImpl);
