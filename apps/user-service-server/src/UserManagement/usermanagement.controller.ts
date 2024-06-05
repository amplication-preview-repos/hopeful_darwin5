import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { UserManagementService } from "./usermanagement.service";

@swagger.ApiTags("userManagements")
@common.Controller("userManagements")
export class UserManagementController {
  constructor(protected readonly service: UserManagementService) {}

  @common.Get("/usernames")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetUsernames(
    @common.Body()
    body: string
  ): Promise<string[]> {
        return this.service.GetUsernames(body);
      }
}
