const btnSend = document.querySelector("#btnSend"); // 'Send' button
const msgBox = document.querySelector("#msgBox"); // The text input box
const msgList = document.querySelector("#msgList"); // All the messages

const socket = io(); // defaults to window.location.host

// when send button clicked
btnSend.addEventListener('click', () => {
    // empty message validation
    if(msgBox.value.trim() == "") return;

    // tell server
    socket.emit('msgSent', msgBox.value)

    // clear input box
    msgBox.value = "";
});

// when client recieves event 'renderMsg'
socket.on('renderMsg', data => {
    // create a li element, set its innerText and append it to the msgList
    const el = document.createElement("li");
    el.innerText = data;
    msgList.appendChild(el);
});