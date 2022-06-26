const playBtn = document.querySelector('.play-btn')
const popVideo = document.querySelector('.pop-video')
const closeBtn = document.querySelector('.pop-video span')
const video = document.querySelector('video')



function toggleVideo() {
    popVideo.style.display = 'block'
    video.setAttribute('src', './images/Engagement -1.m4v') 
}

function closeVideo(e) {
   if(e.target === popVideo || e.target === closeBtn) {
       popVideo.style.display = 'none'
       video.setAttribute('src', '') 
   }
}

playBtn.addEventListener('click', toggleVideo);
popVideo.addEventListener('click', closeVideo)

// document.querySelector('.pop-video video') {
//     document.querySelector('.pop-video').style.display = 'block'
// }