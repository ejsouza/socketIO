import http from 'http';
import socketIO from 'socket.io';

const port: number = 8000;

class App {
  private server: http.Server;
  private port: number;

  constructor(port: number) {
    this.port = port;

    this.server = new http.Server();
    const io: SocketIO.Server = socketIO(this.server);
  }

  public Start() {
    this.server.listen(this.port);
    console.log(` \x1b[33m-----------------------------------\x1b[0m`);
    console.log(
      `\x1b[33m|\x1b[0m 🥦  \x1b[35mServer listening on port\x1b[0m \x1b[36m${this.port}\x1b[0m \x1b[33m|\x1b[0m`
    );
    console.log(` \x1b[33m-----------------------------------\x1b[0m`);
  }
}

new App(port).Start();

/**
 * 	HOW TO COMPILE THIS FILE TO THE RIGHT FOLDER
 *  tsc -p src/server -w
 */
