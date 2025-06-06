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
  Session: process.env.SESSION || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0pJV0lIdWdiQUpPNTVnVVhGR2llMU5PbVlnNmYrcHpOM2NYMkVGcXBVVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTjdGazZMUnF0N1BmVWtwTmlMNEJSdFNYK0NqcDJiTXYvOHFaa0VaSzdHOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIySFN2WXlCc3FrN3JlRFpScnZ5M09BZFNxQUtJd0NsNUJLcG94REVxekdjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwM1JaMEdOTUZPeFZmSHpoUTJxOVhobjZwN1VBQ2p0RXVDemduSEFKOWxBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFQRzNwQjZlNlFZSk1udnJEOGlzYi92WHZ6MEk1dlY2Y2RLZDA4REhaMnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllyTnpUdzgrbUpCcDQyTy9pVll2U1VLMkZxZkROaS85bklWQjc2RW1oRmc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0FzaHBmcnFvOEVtQWFEV0c3VzkxMys0OHo0L0NiR21aVnNGYjIxQXQyZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOUdHUEplYy80dkNOUVliQ2dzVU5POGRuNDVOYnYwR2dSQ05Na3dCT0gwND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik01SUl5R0F6TjU0U29Zb2ljUVZZclgxNXVVWHFYUU9iZ2RLbVJjUURlbkN3NEpZTW9wYWZBMUdaNEdhendXQXNLb2RJSERweUVjNkJGS0dLN29hWUFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzYsImFkdlNlY3JldEtleSI6Iit1Z2sxTjU1T0FselNEU1Y0WnlQcUxVR3A4d0VVOVJFa09OL3JnMG1UYkU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTExNDIzODgwNEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI5QzU2OUYxODE3QzIwMTI0OUYyRjU1MDI5QTZEMTY4MiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ4ODE1MzQyfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiIzNkZXUlQzViIsIm1lIjp7ImlkIjoiMjM0OTExNDIzODgwNDo1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkdyYW5kcGEgQ3lyaWwiLCJsaWQiOiIxMDA0NTEwMTM4ODYwOTA6NUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tqaWtvc0NFTmViODhFR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjVTaElHMzBDMjNQNksxR2M2Y20rTXgzWE1HaFNQd1prOGhoVU96Z2xpeTQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6InY1SW9SOWRDVllEYndrR2NVdW9hbUZMRGdDM2ZyZ3pjcUp4THRaVzA3UXhxYzNlSHVTM2pLYXZSY05tWWV5TkdnS2hPUjJwRTRIcEtYQTFwcTc5bENRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJIK3NSMVZkdVg1dEZZV2FtMllZTlczR1RzaFlNdVpZV3UvVUg2R2Q2aFRIQ2pHaHNPRVdiNjljc0lpK0NNdHQ1UEJHcUpzTHQ2bjJWT1BneS9CK1ZEUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkxMTQyMzg4MDQ6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlVW9TQnQ5QXR0eitpdFJuT25KdmpNZDF6Qm9VajhHWlBJWVZEczRKWXN1In19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDg4MTUzMzIsImxhc3RQcm9wSGFzaCI6IjJHNEFtdSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQTg2In0=",
  NUMBER: process.env.OWNER_NUMBER || "2349114238804",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || ""
};

export default conf;
