//code for allowing fullscreen mode
var elem = document.documentElement;
    document.getElementById('toggle-full-screen').addEventListener('click', openFullscreen);
    /* View in fullscreen */
    function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }return true;
    }
    if(openFullscreen()){
        document.getElementById('toggle-full-screen').addEventListener('click', closeFullscreen);
    }
    /* Close fullscreen */
    function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
    }
