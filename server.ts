import type * as Party from "partykit/server";

export default class ViewerCounter implements Party.Server {
  constructor(readonly room: Party.Room) {}

  onConnect(conn: Party.Connection) {
    const count = [...this.room.getConnections()].length;
    this.room.broadcast(JSON.stringify({ count }));
  }

  onClose(conn: Party.Connection) {
    setTimeout(() => {
      const count = [...this.room.getConnections()].length;
      this.room.broadcast(JSON.stringify({ count }));
    }, 100);
  }
}
