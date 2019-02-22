const socket = io('http://localhost:8080');



// Notification Func
socket.on('notification', (data) => {
    const html = `
        <div class="dialogo">
            <h4>${data.nickname}</h4>
            <p>${data.msg}</p>
        </div>
    `;
    $('#dialogo').append(html);
});

// Send Message to Server Func
$('#send').click(() => {
    socket.emit('msg', {
        nickname: $('#nickname').val(),
        msg: $('#msg').val(),
    });
});