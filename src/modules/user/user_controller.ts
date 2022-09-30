import { Request, Response } from "express";
import { container } from "tsyringe";

import GetUserImpl from "./domain/usecases/get_user_impl";
import { IGetUser } from "./domain/usecases/interface/get_user";

class UserController {
  async handle(_request: Request, response: Response): Promise<Response> {
    const usecase: IGetUser = container.resolve(GetUserImpl);

    const result = usecase.call();
    return response.status(200).send({ message: result });
  }
}

export default UserController;
