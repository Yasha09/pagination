import { Args, Mutation, Resolver, Query, Int } from '@nestjs/graphql';
import { HostService } from './host.service';
import { Host } from './host.entity';
import { CreateHostInput, ResponseType } from './dto/create-host.input';
import { PaginationArgs } from './dto/pagination.args';

@Resolver('Host')
export class HostResolver {
  constructor(private readonly hostService: HostService) {}

  @Query(() => String, { nullable: true })
  async hello() {
    return 'hello world';
  }
  @Query(() => [Host])
  async getAllHost() {
    return this.hostService.getAllHost();
  }

  @Query(() => [ResponseType])
  async getHost(@Args() paginationArgs: PaginationArgs) {
    return await this.hostService.getHosts(paginationArgs);
  }

  @Mutation(() => Host, { nullable: true })
  async createHost(@Args('createHostInput') createHostInput: CreateHostInput) {
    return await this.hostService.createHost(createHostInput);
  }
}
