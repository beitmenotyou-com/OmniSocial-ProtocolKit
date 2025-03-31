// chatInterface.js
import { createClient } from './matrixClient';

const client = createClient("USER_ID", "ACCESS_TOKEN", "https://matrix.org");

client.startClient();

client.on("Room.timeline", (event, room, toStartOfTimeline) => {
  if (toStartOfTimeline) return;
  if (event.getType() !== "m.room.message") return;
  console.log(event.getSender() + " says " + event.getContent().body);
});
