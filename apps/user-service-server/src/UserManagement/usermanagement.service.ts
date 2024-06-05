import { Injectable } from "@nestjs/common";

@Injectable()
export class UserManagementService {
  constructor() {}
  async GetUsernames(args: string): Promise<string[]> {
    throw new Error("Not implemented");
  }
}
