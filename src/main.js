
$(document).ready(function() {
    SetEvents();
    Init();
});

function Init() {
}

function SetEvents() {
}

function DisplayAlert(type) {
    var displayClass = type == 'alert' ? "alert-danger" : "alert-info";
    var html = `
    <div class="alert ${displayClass} align_bottom_of_screen" role="${type}">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        This is an ${type} message &nbsp;&nbsp;&nbsp;
        </div>
    `;

    $('#messages').append(html);
}

