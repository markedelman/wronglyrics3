$(document).ready(function(){
var musicMatchApiUrl = "http://api.musixmatch.com/ws/1.1/"

var res=$.ajax({
            type: "GET",
            data: {
                apikey: '758a9c4eb110abe05628670f79cacb15',
                q: 'Bob Dylan',
                format: "jsonp",
                callback: " "
                    // f_has_lyrics: searchTerm,
                    // lyrics object parameters
                    // track_id: The musiXmatch track id,
                    // track_mbid: The musicbrainz track id,
                    // format: Decide the output type(json or xml)
            },
            url: "http://api.musixmatch.com/ws/1.1/track.search"
        });

setTimeout(function(){
var dataString = res.responseText.slice(2, -2);
var dataObject = JSON.parse(dataString);
console.log(dataObject);
// console.log(res);
}, 100);
});

// REQUEST DATA FROM API
    function getObject(searchTerm, callback) {
var res=$.ajax({
            type: "GET",
            data: {
                apikey: '758a9c4eb110abe05628670f79cacb15',
                q: searchTerm,
                format: "jsonp",
                callback: " "
                    // f_has_lyrics: searchTerm,
                    // lyrics object parameters
                    // track_id: The musiXmatch track id,
                    // track_mbid: The musicbrainz track id,
                    // format: Decide the output type(json or xml)
            },
            url: "http://api.musixmatch.com/ws/1.1/"
        });

console.log(res);

// .done(function(data) {
//             var dataString = data.slice(2, -2);
//             var dataObject = JSON.parse(dataString);

//                 function getTrackId(){
//                     var idArray = dataObject.message.body.track_list
//                     idArray.map(function(obj){
//                     var ajaxId = obj.track.track_id
//                     return ajaxId;
//                     })
//                 }
//         })
    }

    function getObject(searchTerm, callback) {
        $.ajax({
            type: "GET",
            data: {
                apikey: '758a9c4eb110abe05628670f79cacb15',
                track_id: getTrackId,
                format: "jsonp",
                callback: " "
                    // f_has_lyrics: searchTerm,
                    // lyrics object parameters
                    // track_id: The musiXmatch track id,
                    // track_mbid: The musicbrainz track id,
                    // format: Decide the output type(json or xml)
            },
            url: "http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id="
        }).done(function(data) {
            var dataString = data.slice(2, -2);
            var dataObject = JSON.parse(dataString);

        })
    }





    //user story
        //ben knows the name of the song
            //ben wants to search for lyrics by song name
                //ben chooses the song name by artist he has in mind

    
    //user flow
        //ben types a song name
            //clicks on search button
                //song names are display
    //idLoop function looks for ids

    



    
        //returns ids to ajax call


                    //clicks on the song name
                        //lyrics are displayed
    
            




// SHOW SEARCH RESULTS ON DOM
// function displayMusixMatchData(data) {
    // var albumName = data.message.body.track_list.map(function(track){
    //     return track.track.albumName;
    // })

    // var resultElement = '';
    // if (data.items.length > 0) {
    //     console.log(data.items);
    //     for (var i = 0; i < data.items.length; i++) {
    //         if (data.items[i].id.videoId)
    //             resultElement += "<a href='" + musicMatchApiUrl + data.items[i].id.videoId +
    //             "'><p>" + data.items[i].snippet.title + '</p></a>' + "<a href='" +
    //             musicMatchApiUrl + data.items[i].id.videoId + "'><img src='" +
    //             data.items[i].snippet.thumbnails.default.url +
    //             "' alt='thumbnail of video'></a>";
    //     };
    // } else {
    //     resultElement += '<p>No results</p>';
    // }

    // $('.js-search-results').html(albumImage);
// }

// EVENT LISTENER
function watchSubmit() {
    $('.js-search-form').submit(function(e) {
        e.preventDefault();
        var searchTerm = $('.js-search-form').find('.js-query').val();
        getObject(searchTerm);
    });
}

$(function() { watchSubmit(); });
