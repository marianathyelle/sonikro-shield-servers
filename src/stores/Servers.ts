import { observable } from "mobx";
import { API_URL } from "../services";
const store = require('store');

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
  @observable isLoading: boolean = false;
  @observable isUpdatingServer: boolean = false;

  constructor() {
    this.getServers()
  }

  public async getServers() {
    this.isLoading = true;
    
    try {
      const response = await fetch(`${API_URL}/public/server`);
      const data = await response.json();
      this.servers = data;
    } catch(error) {
      console.log(error)
    } finally {
      this.isLoading = false;
    }
  }

  public async serverUpdate(id: number, status: string) {
    this.isUpdatingServer = true;

    const init: RequestInit = {
      method: 'POST',
      headers: { Authorization: store.get('token') }
    }

    const action = status === "online" ? "Up" : "Down";

    try {
      await fetch(`${API_URL}/protected/server/${id}/shield${action}`, init);
      this.getServers();
    } catch(error) {
      console.log(error)
    } finally {
      this.isUpdatingServer = false;
    }
  }
}