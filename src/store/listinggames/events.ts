import { io, Socket } from "socket.io-client";

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL;

export const socket: Socket = io(SOCKET_URL, {
    transports: ["websocket"],
});

socket.on("connect", () => {
    console.log("Connected to socket server");
});

socket.on("disconnect", () => {
    console.log("Disconnected from socket server");
});
