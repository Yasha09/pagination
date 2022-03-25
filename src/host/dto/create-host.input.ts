import { InputType, Field, ObjectType, Int } from '@nestjs/graphql';
import { Host } from '../host.entity';

@InputType()
export class CreateHostInput {
  @Field(() => String, { description: 'title' })
  title: string;
  @Field(() => String, { description: 'host' })
  host: string;
}

@ObjectType()
export class ResponseType {
  @Field(() => Int)
  total: number;

  @Field({ nullable: true })
  hostGroup: any;
}
