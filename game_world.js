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

		// The rooms are not identical.
		// Each rooms has a number of doors and some (not all) 
		// of these doors have computers attached to them.
		// Some of the rooms have some things.
		for(i=0; i<this.totalRooms; i++) {
			this.rooms[i] = new Room();
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
class Door {
}

// The Computer
class Computer {
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
	gameWorld = new GameWorld();
}

var roomDoorsBitmap = [];

function initRootDoorsBitmap() {
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


