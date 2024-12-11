import { io, Socket } from "socket.io-client";

const EMIT_JOIN_ROOM: string = "join-room";
const EMIT_CODE_UPDATE: string = "update-code-content";

const BASE_URL: string =
  import.meta.env.MODE === "production"
    ? `${import.meta.env.VITE_API_URL}`
    : "//localhost:3030";
const createSocketService = () => {
  let socket: Socket | null = null;

  const socketService = {
    setup() {
      socket = io(BASE_URL);
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

    updateCode(roomId: string, newCodeContent: string | undefined) {
      this.emit(EMIT_CODE_UPDATE, { roomId, newCodeContent });
    },
    getSocketId() {
      return socket?.id;
    },
    terminate() {
      socket?.disconnect();
      socket = null;
      this.off("update-code-content");
      this.off("set-is-mentor");
      this.off("update-room-count");
      this.off("force-leave-room");
    },
  };

  return socketService;
};

const socketService = createSocketService();

export default socketService;
