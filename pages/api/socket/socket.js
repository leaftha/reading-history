import { Server } from "socket.io";
import { createServer } from "http";

// export default function SocketHandler(req, res) {
//   if (res.socket.server.io) {
//     console.log("Already set up");
//     res.end();
//     return;
//   }

//   const io = new Server(res.socket.server);
//   res.socket.server.io = io;

//   io.on("connection", (socket) => {
//     socket.on("send-message", (obj) => {
//       io.emit("receive-message", obj);
//     });
//   });

//   console.log("Setting up socket");
//   res.end();
// }

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: "*",
  methods: ["GET", "POST"],
});

io.on("connection", async (socket) => {
  console.log(socket.id);
});

httpServer.listen(5000, () => {
  console.log("server");
});
