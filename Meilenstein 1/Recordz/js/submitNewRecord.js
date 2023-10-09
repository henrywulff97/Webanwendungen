$(document).ready(function () { 
    $("#submit-button").click(function () { 
        var albumName = $("#form-album-name").val();
        var artist = $("#form-artist").val();
        var version = $("#form-version").val();
        var releaseDate = $("#form-release-date").val();
        var recordLabel = $("#form-record-label").val();
        
        var rowCount = $('#record-table tr').length;

        $('#record-table > tbody:last-child').append('<tr><th scope="row">'
        + rowCount +
        '</th><td>'
        + albumName +
        '</td><td>'
        + artist +
        '</td><td>'
        + version +
        '</td><td>'
        + releaseDate +
        '</td><td>'
        + recordLabel +
        '</td></tr>');
    }); 
});