import { Component } from '@angular/core';


@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId = 10;
    private serverName = 'WebServer';
    serverStatus = 'offline';
    allowNewServer = false;

    constructor () {
        setTimeout( () => {
            this.allowNewServer = true;
        }, 3000);
    }

    getServerName() {
        return this.serverName;
    }
}
