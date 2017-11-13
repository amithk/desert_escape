var room=-1;
var storedRoom=-1;

function cleanup() {
    localStorage.removeItem("Room");
}

var SupportedCommands = [
    "help",
    "hint",
    "type",
    "enter",
    "go",
];

var UnsupportedMessage = "Unsupported command. Press help to list supported commands.";

function parseInput(input_text) {
    _inputs = input_text.split(" ");
    var inputs = [];
    var i;
    for(i=0; i<_inputs.length; i++) {
        if (_inputs[i] != "") {
            inputs.push(_inputs[i]);
        }
    }
    if (inputs.length == 0) {
    } else {
        var index = SupportedCommands.indexOf(inputs[0]);
        if (index == -1) {
            var text3div = document.getElementById("TextDiv3");
            if (text3div.innerHTML != UnsupportedMessage + "<br><br>") {
                renderText(UnsupportedMessage);
            }
        }
    }

}

function OnKeyPressHandler(e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        textbox = document.getElementById("input_textbox");
        parseInput(textbox.value)
        textbox.value = "";
    }
}

function renderText(text_to_render) {
    var text1div = document.getElementById("TextDiv1");
    var text2div = document.getElementById("TextDiv2");
    var text3div = document.getElementById("TextDiv3");
    text1div.innerHTML = text2div.innerHTML;
    text2div.innerHTML = text3div.innerHTML;
    text3div.innerHTML = text_to_render + "<BR><BR>";
}

function renderInitialText(text1, text2, text3) {
    var text1div = document.getElementById("TextDiv1");
    text1div.innerHTML = text1 + "<BR><BR>";
    var text2div = document.getElementById("TextDiv2");
    text2div.innerHTML = text2 + "<BR><BR>";
    var text3div = document.getElementById("TextDiv3");
    text3div.innerHTML = text3 + "<BR><BR>";
}

function StartGame() {
    room = 0;
    localStorage.setItem("Room", room.toString());
    
    var stbutton_div = document.getElementById("StartButton");
    stbutton_div.classList.remove("show_start_button");
    stbutton_div.classList.add("hide_start_button");
    
    var gamediv = document.getElementById("GameDiv");
    gamediv.classList.remove("hide_game");
    gamediv.classList.add("show_game");

    renderInitialText("", intro1, intro2);
}

function OnLoadScript() {
    cleanup();
    
    if (typeof(Storage) == "undefined") {
        alert("Game cannot start as local storage is not supported on your machine.");
    } else {
        storage = true;
        roomVal = localStorage.getItem("Room");
        if (roomVal == null) {
            room = -1;
            console.log("roomVal null");
            console.log(room);
            var gamediv = document.getElementById("GameDiv");
            console.log(gamediv.classList)
            console.log(gamediv.display)
        } else {
            room = parseInt(roomVal);
            storedRoom = room;
            
            console.log(room);
            if (room >= 0) {
                var stbutton_div = document.getElementById("StartButton");
                stbutton_div.classList.remove("show_start_button");
                stbutton_div.classList.add("hide_start_button");
                
                var gamediv = document.getElementById("GameDiv");
                gamediv.classList.remove("hide_game");
                gamediv.classList.add("show_game");
            }
        }
    }
}