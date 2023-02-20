import { navbar } from "./components/navbar.js";

let navbar_div=document.getElementById('box')

navbar_div.innerHTML=navbar()

let get=document.getElementById('body')

get.addEventListener('load',showClickedVideo())
    
function showClickedVideo()
{
    let data=localStorage.getItem('clicked_video');

    let {videoId}=JSON.parse(data);

    let x=JSON.parse(data);
    console.log('x:', x)

    let iframe=document.createElement('iframe');

    iframe.src=`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;

    iframe.width='100%';
    iframe.height='100%';
    iframe.setAttribute('allowfullscreen',true)

    let video_div=document.getElementById('video_details');
    video_div.append(iframe);
};