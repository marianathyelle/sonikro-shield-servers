import * as React from "react";
import { Table, Button } from "reactstrap";
import { Servers } from "../stores/Servers";
import { observer } from "mobx-react";

@observer
export class Main extends React.Component {
  servers = new Servers();

  
  render() {
    return (
      <div className="table-responsive">
        <div className="text-center mb-5">
          <h1 className="main-title">Servers</h1>
          <h5>These are the servers available under the protection of Sonikro Shield</h5>
        </div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Server Name</th>
              <th>IP/Port</th>
              <th>Players</th>
              <th>Map</th>
              <th>Status</th>
              <th>Shield</th>
            </tr>
          </thead>
          <tbody>
              {this.servers.servers && this.servers.servers.map(item => (
                <tr key={item.serverId}>
                  <td>{item.serverId}</td>
                  <td>{item.hostname}</td>
                  <td>{item.ipPort}</td>
                  <td>{item.players}</td>
                  <td>{item.map}</td>
                  <td>{item.status}</td>
                  <td>
                    <Button>Enable</Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    )
  }
};