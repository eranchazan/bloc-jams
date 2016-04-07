

 var createSongRow = function(songNumber, songName, songLength) {
     var template =
        '  <tr class="album-view-song-item">'
      + ' <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;
 
     var $row = $(template);
     
    var clickHandler = function() {
      
      var songNumber = parseInt($(this).attr('data-song-number'));

    if (setSong(songNumber) !== null) {
        // Revert to song number for currently playing song because user started playing new song.
        var currentlyPlayingCell = parseInt($getLastSongNumberCell);
        currentlyPlayingCell.html(setSong(songNumber));
    }
    if (currentlyPlayingSongNumber !== songNumber) {
             // Switch from Play -> Pause button to indicate new song is playing.
             setSong(songNumber);
         currentSoundFile.play();
         updateSeekBarWhileSongPlays()
        
       var $volumeFill = $('.volume .fill');
       var $volumeThumb = $('.volume .thumb');
       $volumeFill.width(currentVolume + '%');
       $volumeThumb.css({left: currentVolume + '%'});
        
        $(this).html(pauseButtonTemplate);
        setSong(songNumber) = songNumber;
        currentSongFromAlbum = currentAlbum.songs[songNumber - 1];
        updatePlayerBarSong();
    } else if (setSong(songNumber) === songNumber) {
        if(curremtSoundFile.isPaused()) {
           $(this).html(playButtonTemplate);     
           $('.main-controls .play-pause').html(playerBarPlayButton);
            } else {
                $(this).html(playButtonTemplate)
                $('.main-controls .play-pause').html(playerBarPlayButton);
+                currentSoundFile.pause();
    }
};
     var onHover = function(event) {
        var songNumberCell = $(this).find('.song-item-number');
        var songNumber = songNumberCell.attr('data-song-number');

        if (songNumber !== setSong(songNumber)) {
            songNumberCell.html(playButtonTemplate);
        }
    };

    var offHover = function(event) {
        var songNumberCell = $(this).find('.song-item-number');
        var songNumber = songNumberCell.attr('data-song-number');

        if (songNumber !== setSong(songNumber)) {
            songNumberCell.html(songNumber);
        }
    };
     $row.find('.song-item-number').click(clickHandler);
     $row.hover(onHover, offHover);
     return $row;
 };
     var $albumTitle = $('.album-view-title');
     var $albumArtist = $('.album-view-artist');
     var $albumReleaseInfo = $('.album-view-release-info');
     var $albumImage = $('.album-cover-art');
     var $albumSongList = $('.album-view-song-list');
 
 var setCurrentAlbum = function(album) {
     var setCurrentAlbum = album;
     $albumTitle.text(album.title);
     $albumArtist.text(album.artist);
     $albumReleaseInfo.text(album.year + ' ' + album.label);
     $albumImage.attr('src', album.albumArtUrl);
  
  var updatePlayerBarSong = function() {
    $('.currently-playing .song-name').text(song(songNumber).title);
    $('.currently-playing .artist-name').text(currentAlbum.artist);
    $('.currently-playing .artist-song-mobile').text(song(songNumber).title + " - " + currentAlbum.artist);
    $('.main-controls .play-pause').html(playerBarPauseButton);

console.log("songNumber type is " + typeof songNumber + "\n and currentlyPlayingSongNumber type is " + typeof setSong(songNumber));
};
  }
    var nextSong = function() {
    
    var getLastSongNumber = function(index) {
        return index == 0 ? currentAlbum.songs.length : index;
    };
    
    var currentSongIndex = trackIndex(currentAlbum, song(songNumber));
    // Note that we're _incrementing_ the song here
    currentSongIndex++;
    
    if (currentSongIndex >= currentAlbum.songs.length) {
        currentSongIndex = 0;
    }
    
    // Set a new current song
    setSong(songNumber) = currentSongIndex + 1;
        currentSoundFile.play();
        updateSeekBarWhileSongPlays()
    song(songNumber) = currentAlbum.songs[currentSongIndex];

    // Update the Player Bar information
    $('.currently-playing .song-name').text(song(songNumber).title);
    $('.currently-playing .artist-name').text(currentAlbum.artist);
    $('.currently-playing .artist-song-mobile').text(song(songNumber).title + " - " + currentAlbum.title);
    $('.main-controls .play-pause').html(playerBarPauseButton);
    
    var lastSongNumber = getLastSongNumber(currentSongIndex);
    var $nextSongNumberCell = $('.song-item-number[data-song-number="' + setSong(songNumber) + '"]');
    var $lastSongNumberCell = $getLastSongNumberCell);
    
    $nextSongNumberCell.html(pauseButtonTemplate);
    $lastSongNumberCell.html(lastSongNumber);
    
};
var setSong = function(songNumber) {
    if (currentSoundFile) {
         currentSoundFile.stop();
     }   setSong(songNumber) = parseInt(songNumber)
    song(songNumber) = setCurrentAlbum.songs[songNumber - 1];
    currentSoundFile = new buzz.sound(currentSongFromAlbum.audioUrl,{
        formats: ['mp3'],
        preload: true
    })
};

 var seek = function(time) {
     if (currentSoundFile) {
         currentSoundFile.setTime(time);
     }
 }
 var setVolume = function(volume) {
    if (currentSoundFile) {
        curremtSoundFile.setVolume(volume);
    }
 };

var getLastSongNumberCell = function(number){
  return $('.song-item-number[data-song-number="' + number + '"]');
};

var previousSong = function() {
   
    // Note the difference between this implementation and the one in
    // nextSong()
    var getLastSongNumber = function(index) {
        return index == (currentAlbum.songs.length - 1) ? 1 : index + 2;
    };
    
    var currentSongIndex = trackIndex(currentAlbum, Song(songNumber));
    // Note that we're _decrementing_ the index here
    currentSongIndex--;
    
    if (currentSongIndex < 0) {
        currentSongIndex = currentAlbum.songs.length - 1;
    }
    
    // Set a new current song
    setSong(songNumber) = currentSongIndex + 1;
    currentSoundFile.play();
    updateSeekBarWhileSongPlays()
    Song(songNumber)= currentAlbum.songs[currentSongIndex];
 
    // Update the Player Bar information
    $('.currently-playing .song-name').text(song(songNumber).title);
    $('.currently-playing .artist-name').text(currentAlbum.artist);
    $('.currently-playing .artist-song-mobile').text(song(songNumber).title + " - " + currentAlbum.title);
    $('.main-controls .play-pause').html(playerBarPauseButton);
    
    var lastSongNumber = getLastSongNumber(currentSongIndex);
    var $previousSongNumberCell = $('.song-item-number[data-song-number="' + setSong(songNumber) + '"]');
    var $lastSongNumberCell = $('.song-item-number[data-song-number="' + lastSongNumber + '"]');
    
    $previousSongNumberCell.html(pauseButtonTemplate);
    $lastSongNumberCell.html(lastSongNumber);
    
};
//Status API Training Shop Blog About

     // #3
     albumSongList.empty();
 
     // #4
     for (var i = 0; i < album.songs.length; i++) {
         albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
        var $newRow = createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
         $albumSongList.append($newRow);
     }
 };
  var updateSeekBarWhileSongPlays = function() {
     if (currentSoundFile) {
         // #10
         currentSoundFile.bind('timeupdate', function(event) {
             // #11
             var seekBarFillRatio = this.getTime() / this.getDuration();
             var $seekBar = $('.seek-control .seek-bar');
 
             updateSeekPercentage($seekBar, seekBarFillRatio);
         });
     }
 };

 var updateSeekPercentage = function($seekBar, seekBarFillRatio) {
    var offsetXPercent = seekBarFillRatio * 100;
    // #1
    offsetXPercent = Math.max(0, offsetXPercent);
    offsetXPercent = Math.min(100, offsetXPercent);
 
    // #2
    var percentageString = offsetXPercent + '%';
    $seekBar.find('.fill').width(percentageString);
    $seekBar.find('.thumb').css({left: percentageString});
 };

 var setupSeekBars = function() {
     var $seekBars = $('.player-bar .seek-bar');
 
     $seekBars.click(function(event) {
         // #3
         var offsetX = event.pageX - $(this).offset().left;
         var barWidth = $(this).width();
         // #4
         var seekBarFillRatio = offsetX / barWidth;
        
        if ($(this).parent().attr('class') == 'seek-control') {
            seek(seekBarFillRatio * currentSoundFile.getDuration());
        } else {
            setVolume(seekBarFillRatio * 100);   
        }
         // #5
         updateSeekPercentage($(this), seekBarFillRatio);
     });
     $seekBars.find('.thumb').mousedown(function(event) {
         // #8
         var $seekBar = $(this).parent();
 
         // #9
         $(document).bind('mousemove.thumb', function(event){
             var offsetX = event.pageX - $seekBar.offset().left;
             var barWidth = $seekBar.width();
             var seekBarFillRatio = offsetX / barWidth;
 
             updateSeekPercentage($seekBar, seekBarFillRatio);
         });
 
         // #10
         $(document).bind('mouseup.thumb', function() {
             $(document).unbind('mousemove.thumb');
             $(document).unbind('mouseup.thumb');
         });
     });
 };
 };

  var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
  var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';
  var playerBarPlayButton = '<span class="ion-play"></span>';
  var playerBarPauseButton = '<span class="ion-pause"></span>';

  var setCurrentAlbum = null;
  var currentlyPlayingSongNumber = null;
  var currentSongFromAlbum = null;
  var currentSoundFile = null; 
  var currentVolume = 80;

  
  var $previousButton = $('.main-controls .previous');
  var $nextButton = $('.main-controls .next');
  var $playerBarPauseButton = $('.main-controls .play-pause'); 

 $(document).ready(function() {
     setCurrentAlbum(albumPicasso); 
     setupSeekBars();

     $previousButton.click(previousSong);
     $nextButton.click(nextSong);
    });
     $playerBarPauseButton.click(togglePlayFromPlayerBar);
    var albums = [albumPicasso, albumMarconi, albumFurious7]
    var i = 1;
   albumImage.addEventListener('click', function(event) {
        setCurrentAlbum(albums[i]);
        index++;
ion-play
        if(i == albums.length) {
            index = 0
        }
   });
   var togglePlayFromPlayerBar = function() {
    
     if(curremtSoundFile.isPaused) {
        $currentlyPlayingCell.html(playerBarPauseButton);
        $(this).html(playerBarPauseButton);
        curremtSoundFile.play();
     } else if (curremtSoundFile){
        $currentlyPlayingCell.html(playerBarPlayButton);
        $(this).html(playerBarPlayButton)
        curremtSoundFile.pause();
     }

   };
   
 };




