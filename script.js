const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//prompt to select media stream, pass to video, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }

    } catch(error) {
        //error message here
        console.log('Error State', error);
    }
}

button.addEventListener('click', async () => {
    //button disabled
    button.disabled = true;

    //start video element
    await videoElement.requestPictureInPicture();

    //reset button
    button.disabled = false;

});

//On Load
selectMediaStream();