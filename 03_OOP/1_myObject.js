// delering a object
let myYoutubeVideo = {
    title: 'Loops in javascript',
    creator: "Amit Patil",
    videoLength: 15,
    videoDescription: 'This is video description, pretty long one',
}

//console.log(myYoutubeVideo);

//console.log(`Hey new video on ${myYoutubeVideo.title} by auther ${myYoutubeVideo.creator}`);

let changeVideoLength = function (myObject) {
    return {
        format1: `Time of this video is ${myObject.videoLength + 1}`,
        format2: `Time of this video is ${myObject.videoLength + 2}`,
    }
}

let result = changeVideoLength(myYoutubeVideo);
console.log(result);