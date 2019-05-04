import * as React from "react";
import { Table, Button } from "reactstrap";
import { Servers } from "../stores/Servers";
import { observer, inject } from "mobx-react";
import { User } from "../stores/User";
import { Spinner } from "reactstrap";

interface InjectedProps {
  user: User;
  servers: Servers;
}

@inject("user", "servers")
@observer
export class Main extends React.Component {
 
  get injected() {
    return this.props as InjectedProps;
  }
  
  render() {
    const disabled: boolean = !this.injected.user.userData || this.injected.user.userData! && this.injected.user.userData!.roles !== "staff";
    return (
      <div className="table-responsive">
        <div className="text-center mb-5">
          <h1 className="main-title">Servers</h1>
          <h5>These are the servers available under the protection of Sonikro Shield</h5>
        </div>
        {this.injected.servers.isLoading ? (
          <div className="text-center">
            <Spinner />
          </div>
        ) : (
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
              {this.injected.servers.servers && this.injected.servers.servers.map(item => (
                <tr key={item.serverId}>
                  <td>{item.serverId}</td>
                  <td>{item.hostname}</td>
                  <td>{item.ipPort}</td>
                  <td>{item.players}</td>
                  <td>{item.map}</td>
                  <td>{item.status}</td>
                  <td>
                      <Button 
                        disabled={disabled}
                        onClick={() => this.injected.servers.serverUpdate(item.serverId, item.status)}
                        color={item.status === "online" ? "success" : "danger"}
                        size="sm"
                      >
                        {this.injected.servers.isUpdatingServer && (
                          <Spinner color="ligth" size="sm" className="mr-2" />
                        )}
                        {item.status === "online" ? "ENABLE" : "DISABLE"}
                      </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>
    )
  }
};