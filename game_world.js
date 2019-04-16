// The GameWorld is singleton class. On initialization, a single object 
// of GameWorld is created. Any object in the world can be accessed through
// the object of the GameWorld.

// The Game World
// Game world consists of the building and the other objects you will discover
// during the gameplay
class GameWorld {
	constructor() {
		this.building = new Building();
		this.player   = new Player();
	}
}

// The Building
// The Building contains rooms. 
class Building {
	constructor() {
		this.rooms = [];
		this.totalRooms = 7;
		this.doors = [];
		this.totalDoors = 14;

		// The rooms are not identical.
		// Each rooms has a number of doors and some (not all) 
		// of these doors have computers attached to them.
		// Some of the rooms have some things.
		for(i=0; i<this.totalRooms; i++) {
			var map = getRoomDoorsBitmap(i)
			this.rooms[i] = new Room(map);
		}

		// Doors are part of the building. Each door has a computer
		// attached to it, from one of its side. The door can be
		// opened only from the computer's side. Once opened, player
		// can go from the either side to the other side.
		for(i=0; i<this.totalDoors, i++) {
			var frontRoom = getFrontRoom(i)
			var backRoom  = getBackRoom(i)
			this.doors[i] = newDoor(frontRoom, backRoom);
		}
	}
}

// The Room
// The room is associated with Doors and Computers.
// Each door has one computer attached to it.
class Room {
	constructor(doors) {
		this.doors = doors
		this.things = []
	}
}

// The Door
// Each door is a part of two rooms, front room and back room.
// Front room has computer attached to the door inside this room.
// Front/back room = -1 means it is the enter/exit to/from the building.
class Door {
	constructor(frontRoom, backRoom) {
		this.frontRoom = frontRoom;
		this.backRoom  = backRoom;
	}
}

// The Player
// Player can carry some things with them. Typically these things are 
// discovered during the gameplay
class Player {
}

class Thing {
}

// Game World Initialization

var gameWorld;

function initGameWorld() {
	initRoomDoorsBitmap();
	initDoorFrontRoomMap();
	initDoorBackRoomMap();
	gameWorld = new GameWorld();
}

var roomDoorsBitmap = [];
var doorFrontRoomMap = [];
var doorBackRoomMap = [];

function initDoorFrontRoomMap() {
	doorFrontRoomMap[0] = [-1, 0, 6, 5, 1, 1, 2, 6, 3, 3, 3, 4, 6, 5];
}

function initDoorBackRoomMap() {
	doorBackRoomMap[0] = [0, 1, 0, 0, 2, 6, 3, 2, 6, -1, 4, 5, 4, 6];
}

function initRoomDoorsBitmap() {
	roomDoorsBitmap[0] = parseInt('111100', 2);
	roomDoorsBitmap[1] = parseInt('111000', 2);
	roomDoorsBitmap[2] = parseInt('110001', 2);
	roomDoorsBitmap[3] = parseInt('101011', 2);
	roomDoorsBitmap[4] = parseInt('000111', 2);
	roomDoorsBitmap[5] = parseInt('001110', 2);
	roomDoorsBitmap[6] = parseInt('111111', 2);
}

function getRoomDoorsBitmap(roomNo) {
	return roomDoorsBitmap[roomNo];
}

function getFrontRoom(doorNo) {
	return doorFrontRoomMap[doorNo];
}

function getBackRoom(doorNo) {
	return doorBackRoomMap[doorNo];
}

