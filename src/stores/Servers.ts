import { observable } from "mobx";
import { API_URL } from "../services";

export interface Server {
  serverId: number;
  hostname: string;
  ipPort: string;
  map: string;
  players: string;
  status: string;
}

export class Servers {
  @observable servers: Server[] = [];

  constructor() {
    this.getServers()
  }

  public async getServers() {
    try {
      const response = await fetch(`${API_URL}/public/server`);
      const data = await response.json();
      this.servers = data;
    } catch(error) {
      console.log(error)
    }
  }
}