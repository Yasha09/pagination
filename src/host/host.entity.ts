import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Host {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  hostid: string;

  @Column()
  @Field(() => String)
  title: string;

  @Column()
  @Field(() => String)
  hosturl: string;
}
