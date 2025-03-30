// matrixClient.js
import sdk from "matrix-js-sdk";

export const createClient = (userId, accessToken, homeserverUrl) => {
  return sdk.createClient({
    baseUrl: homeserverUrl,
    accessToken: accessToken,
    userId: userId
  });
};
