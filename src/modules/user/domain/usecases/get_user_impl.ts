import { inject, injectable } from "tsyringe";

import { IUserRepository } from "../repositories/user_repository";
import { IGetUser } from "./interface/get_user";

@injectable()
class GetUserImpl implements IGetUser {
  constructor(@inject("UserRepository") private repository: IUserRepository) {}

  call(): string {
    return this.repository.get();
  }
}

export default GetUserImpl;
