import { io, Socket } from "socket.io-client";

const EMIT_JOIN_ROOM = "join-room";
const EMIT_LEAVE_ROOM = "leave-room";
const EMIT_CODE_UPDATE = "update-code-content";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? process.env.BASE_URL
    : "//localhost:3030";

const createSocketService = () => {
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
      this.emit(EMIT_JOIN_ROOM, { roomId });
    },

    leaveRoom(roomId: string) {
      if (socket) {
        socket.emit(EMIT_LEAVE_ROOM, { roomId });
      }
    },

    updateCode(roomId: string, newCodeContent: string | undefined) {
      this.emit(EMIT_CODE_UPDATE, { roomId, newCodeContent });
    },

    terminate() {
      socket?.disconnect();
      socket = null;
    },
  };

  return socketService;
};

const socketService = createSocketService();

export default socketService;
