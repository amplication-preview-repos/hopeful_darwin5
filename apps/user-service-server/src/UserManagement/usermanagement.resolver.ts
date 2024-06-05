import * as graphql from "@nestjs/graphql";
import { UserManagementService } from "./usermanagement.service";

export class UserManagementResolver {
  constructor(protected readonly service: UserManagementService) {}

  @graphql.Query(() => [String])
  async GetUsernames(
    @graphql.Args()
    args: string
  ): Promise<string[]> {
    return this.service.GetUsernames(args);
  }
}
