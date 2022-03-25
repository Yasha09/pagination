import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Host } from './host.entity';
import { Repository } from 'typeorm';
import { CreateHostInput } from './dto/create-host.input';

@Injectable()
export class HostService {
  constructor(@InjectRepository(Host) private repo: Repository<Host>) {}

  async createHost(createHostInput: CreateHostInput): Promise<Host> {
    const host = await this.repo.create(createHostInput);
    return await this.repo.save(host);
  }
  async getHosts({ limit = 5, page = 1 }) {
    const hosts = await this.repo
      .createQueryBuilder('host')
      .select('host')
      .offset((page - 1) * limit)
      .limit(limit)
      .getRawMany();

    const total = await this.repo
      .createQueryBuilder('host')
      .select('host')
      .getCount();

    const result = hosts.reduce((tot, obj) => {
      tot[obj.host_host] = tot[obj.host_host] || [];
      tot[obj.host_host].push(obj);
      return tot;
    }, {});

    return {
      total,
      hostGroup: [result],
    };
  }

  async getAllHost() {
    return await this.repo.find();
  }
}
