import { create, Client, decryptMedia, Message } from "@open-wa/wa-automate";
import * as mime from "mime-types";
import * as fs from "fs";

function start(client: Client) {
  client.onAnyMessage(async (message: Message) => {
    if (
      message.fromMe === true &&
      message.body.toLowerCase() === ".open" &&
      message.quotedMsg
    ) {
      const quotedMessage = message.quotedMsg;
      if (quotedMessage.mimetype) {
        const filename = `${Date.now()}.${mime.extension(
          quotedMessage.mimetype
        )}`;
        const mediaData = await decryptMedia(quotedMessage);
        const imageBase64 = `data:${
          quotedMessage.mimetype
        };base64,${mediaData.toString("base64")}`;
        await client.sendImage(
          message.chatId,
          imageBase64,
          filename,
          "Here's your fav photo"
        );
        fs.writeFile(filename, mediaData, function (err) {
          if (err) {
            return console.log(err);
          }
          console.log("File berhasil disimpan");
        });
      }
    }
  });
}

create().then((client) => start(client));