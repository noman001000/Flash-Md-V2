import dotenv from "dotenv";
dotenv.config();

const conf = {
  AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "on",
  AUTO_LIKE: process.env.AUTO_LIKE || "on",
  AUTO_READ_DM: process.env.AUTO_READ_DM || "on",
  AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || "off",
  ADM: process.env.ANTI_DELETE || "on",
  ON: process.env.OWNER_NAME || "CYRIL-MD",
  ANTICALL: process.env.ANTICALL || "on",
  ANTIPROMOTE: process.env.ANTIPROMOTE || "off",
  ANTIDEMOTE: process.env.ANTIDEMOTE || "off",
  ANTILINK: process.env.ANTILINK || "off",
  ANTILINK_ACTION: process.env.ANTILINK_ACTION || "delete",
  timezone: process.env.TIME_ZONE || "Africa/Lagos",
  PRESENCE_DM: process.env.DM_PRESENCE || "typing",
  PRESENCE_GROUP: process.env.GROUP_PRESENCE || "paused",
  MODE: process.env.MODE || "private",
  AV: process.env.AV || "on",
  PREFIXES: process.env.PREFIX !== undefined 
  ? process.env.PREFIX.split(",").map(p => p.trim()) 
  : ["."], 
  Session: process.env.SESSION || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUl6R2lCdzA2V0xlNmpNZC9ud1JnbDYrNitvbE5CdzJ0bG5vUEVSSkZubz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0VGcWRsdW9sZlI5YVUzQUlGVVk2UFVLUVBtb0U0SE81cGxlTzRLZTBSZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5SGFVNktVS3BBWHczVlNFWndMTit1b1cxSEpOa1M4dXRocHN3eFN4bVZrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5emhVa2prMVExWU1BMmZvbk5ZVStZZldPemhjaWxpU2FQT3NGNlpvc2xzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1PaUgwNmRVVzUza0hxWDZqT0k2czdqOHBXanRiOXJRMFVNUEk1c3dYVmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhCSnFPN2E5OTlFd3BDeUJ1NkZCaDNIWjlsUGlVeXhHOXA1K05ybnpQaWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0EvSnM5cHpVK2xjcWFRQ3A3SE5mN0N2V1BEWjF3Mmg2NmxyV3B0Ly8xVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVGk1eVBOUUxXaTNQcU4wL2laRzdmM3hWOUpkeW1Ka0s0TEZveEsvTEFsaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVtS3RiY2E2dG1yMnZHcEtrQS9GZWdZcXlTK2o4c1hRSDlVOG5odjBoYjNFZ0NaTGdyVVpXdDRRMTdndXBIeUxNbDAzTmI5WjlYRmE5aWxBT0xoekNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA4LCJhZHZTZWNyZXRLZXkiOiJaMlhPV3Y4S2NxOXFrZXZSWGRVNmx6TUdkRXEvR1FiMjhGcDJxelZqa0JVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkxMTQyMzg4MDRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNkFFQzdEMEEwRkQwNUU4NEJFNEFDMjdGRjc0NkI0NDcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0OTcxOTk3Nn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiVkZRRVpYNUoiLCJtZSI6eyJpZCI6IjIzNDkxMTQyMzg4MDQ6OUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJHcmFuZHBhIEN5cmlsIiwibGlkIjoiMTAwNDUxMDEzODg2MDkwOjlAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPeWt3SzRERUpDM3FzSUdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJHR1BPTk9IK1lneWhUcEJFNnNzZ1hEbTVxOHZTdUNrMEhyMmVVeXk4aGw4PSIsImFjY291bnRTaWduYXR1cmUiOiJFdkM2ckV3WHhnUVBPY2d3bGM4R1djZnRVZ0VKMDdwVDZuK1dydENoVU85L2FpcEIxQnhMc3BmL2ZGUTZxMEpJQ3Z1QXQvL3pDYnFPNVhqcmJXeVNDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVjdEV1BnL0NOQ0FHVVBSSjdHN0N1bmtQN0hLVEVQYXJXZlRIbU95L2NYbzJ2bUFjK1lqdkxNN3U1clVhUVpkbXpGb1hncDdFV3k4R1hzTUFVMFNDQWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTE0MjM4ODA0OjlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUmhqempUaC9tSU1vVTZRUk9yTElGdzV1YXZMMHJncE5CNjlubE1zdklaZiJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ5NzE5OTY1LCJsYXN0UHJvcEhhc2giOiIyRzRBbXUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUc2aSJ9",
  NUMBER: process.env.OWNER_NUMBER || "2349114238804",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || ""
};

export default conf;
