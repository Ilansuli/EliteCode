import { io, Socket } from "socket.io-client";

const SOCKET_EMIT_JOIN_ROOM = "join-room";
const SOCKET_EMIT_LEAVE_ROOM = "leave-room";
const SOCKET_EVENT_UPDATE_ROOM_COUNT = "update-room-count";
const baseUrl = process.env.NODE_ENV === "production" ? "" : "//localhost:3030";
const socketService = createSocketService();

function createSocketService() {
  let socket: Socket | null = null;

  const socketService = {
    setup() {
      socket = io(baseUrl);
    },
    on(eventName: string, cb: (data: any) => void) {
      socket?.on(eventName, cb);
    },
    off(eventName: string, cb?: (data: any) => void) {
      if (!socket) return;
      if (!cb) socket.removeAllListeners(eventName);
      else socket.off(eventName, cb);
    },
    emit(eventName: string, data: any) {
      socket?.emit(eventName, data);
    },
    joinRoom(roomId: string) {
      this.emit(SOCKET_EMIT_JOIN_ROOM, { roomId });
    },
    leaveRoom(roomId: string) {
      if (socket) {
        socket.emit(SOCKET_EMIT_LEAVE_ROOM, roomId);
      }
    },
    onRoomCountUpdate(cb: (count: number) => void) {
      this.on(SOCKET_EVENT_UPDATE_ROOM_COUNT, cb);
    },
    terminate() {
      socket?.disconnect();
      socket = null;
    },
  };

  return socketService;
}

export default socketService;
