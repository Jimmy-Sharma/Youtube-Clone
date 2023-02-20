import { navbar } from "./components/navbar.js";

let navbar_div=document.getElementById('box')

navbar_div.innerHTML=navbar()


let searchMovies=document.getElementById("search")

searchMovies.onclick= () => 
{
    searchVideos()
}

const searchVideos = async () => 
{
    try
    {
        const API_KEY='AIzaSyANowExBsY6rzYvtgZiWP96bkMDXfAIi40';

    let search_term=document.getElementById("search_term").value

    let response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${search_term}&key=${API_KEY}`) 
    
    let data = await response.json();
    let actual_data=data.items;

    appendVideos(actual_data)

    }
    catch(error)
    {
        console.log('error:', error)
    }
}

const container=document.getElementById("container")


const appendVideos = (data) => 
{
    container.innerHTML=null
    data.forEach(({snippet, id:{videoId}}) => 
    {
        let div= document.createElement("div")
       

        let p_title=document.createElement("p")
        p_title.innerText=snippet.title

        let p_channel_name=document.createElement("p")
        p_channel_name.innerText=snippet.channelTitle

        let thumbnail=document.createElement("img")
        thumbnail.src=snippet.thumbnails.high.url

        div.append(thumbnail,p_title,p_channel_name)
        
        div.onclick = () =>
        {
            let data=
            {
                snippet,
                videoId
            }

            data=JSON.stringify(data)

            localStorage.setItem("clicked_video",data)

           window.location.href="video.html"
        }

        container.append(div)
    })
}