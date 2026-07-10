import { AccessToken } from 'livekit-server-sdk';

export const generateToken = async ({ identity, roomName, name, metadata }) => {
  const apiKey = process.env.LIVEKIT_API_KEY;
  const apiSecret = process.env.LIVEKIT_API_SECRET;

  if (!apiKey || !apiSecret) {
    throw new Error('LiveKit API credentials not configured');
  }

  const at = new AccessToken(apiKey, apiSecret, {
    identity,
    name,
    metadata,
    ttl: '10m',
  });

  at.addGrant({
    roomJoin: true,
    room: roomName,
    canPublish: true,
    canSubscribe: true,
    roomCreate: true,
  });

  return await at.toJwt();
};
