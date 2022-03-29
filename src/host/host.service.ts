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
    const hosts = await this.repo.query(`select getHost(${page}, ${limit})`);
    return hosts[0].gethost;
  }

  async getAllHost() {
    return await this.repo.find();
  }
}
