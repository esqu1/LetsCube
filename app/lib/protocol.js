// socket.io event names
module.exports = {
  MESSAGE       : 'message',
  CONNECT       : 'connect',
  DISCONNECT    : 'disconnect',
  CONNECT_ERR   : 'connect_error',
  RECONNECT_ERR : 'reconnect_error',
  ERROR         : 'error',
  UPDATE_ROOMS  : 'update_rooms',
  UPDATE_ROOM   : 'update_room',
  CREATE_ROOM   : 'create_room',
  ROOM_CREATED  : 'room_created',
  FORCE_JOIN    : 'force_join',
  FETCH_ROOM    : 'fetch_room',
  JOIN_ROOM     : 'join_room',
  LEAVE_ROOM    : 'leave_room',
  JOIN          : 'join',
  USER_JOIN     : 'user_join',
  USER_LEFT     : 'user_left',
  NEW_TIME      : 'new_time',
  NEW_Scramble  : 'new_scramble',
};