import * as React from "react";
import { Table, Button } from "reactstrap";

export class Main extends React.Component {
  render() {
    return (
      <div className="table-responsive">
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
            <tr>
              <th scope="row">1</th>
              <td>Server one</td>
              <td>0</td>
              <td>12/15</td>
              <td>""</td>
              <td>Open</td>
              <td>
                <Button>Enable</Button>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Server one</td>
              <td>0</td>
              <td>12/15</td>
              <td>""</td>
              <td>Open</td>
              <td>
                <Button>Enable</Button>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Server one</td>
              <td>0</td>
              <td>12/15</td>
              <td>""</td>
              <td>Open</td>
              <td>
                <Button>Enable</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    )
  }
};