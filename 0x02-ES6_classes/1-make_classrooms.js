import ClassRoom from './0-classroom';

function initializeRooms() {
  const sizes = [19, 20, 34];
  const clsRoomArr = sizes.map((size) => new ClassRoom(size));
  return clsRoomArr;
}
export default initializeRooms;
