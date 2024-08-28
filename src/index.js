require("dotenv/config");

const clientId = process.env.CLIENT_ID;
const DiscordRPC = require("discord-rpc");
const RPC = new DiscordRPC.Client({ transport: "ipc" });
const fs = require("fs");
const path = require("path");

const config = JSON.parse(fs.readFileSync(path.join(__dirname, "config.json")));

DiscordRPC.register(clientId);

const setActivity = async () => {
  if (!RPC) return;
  const {
    details,
    state,
    largeImageKey,
    largeImageText,
    smallImageKey,
    smallImageText,
    buttons,
    startTimestamp,
    partyMax,
    partySize,
    partyId,
    instance
  } = config.activity;

  RPC.setActivity({
    details,
    state,
    largeImageKey,
    largeImageText,
    startTimestamp,
    smallImageKey,
    smallImageText,
    partyMax,
    partySize,
    partyId,
    instance,
    buttons,
  });
};

RPC.on("ready", () => {
  setActivity();
  setInterval(() => {
    setActivity();
  }, 15 * 1000);
});

RPC.login({ clientId })
  .then(() => console.log("Logged in successfully"))
  .catch((err) => {
    console.error("Login error:", err);
  });

RPC.on("error", (err) => {
  console.error("RPC error:", err);
});

console.log(clientId);
