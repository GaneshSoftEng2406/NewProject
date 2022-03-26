// // let api_key = "AIzaSyAPpfiDF_QzRLExu6aIcMN5_5MVLVrSVXY";
// // let video_http = "https://www.googleapis.com/youtube/v3/videos?";

// //url = https://youtube.googleapis.com/youtube/v3/videos?part=snippet&key=[YOUR_API_KEY]
  

// // const searchVideos =  async ()=>{


// //     try {

// //        let inp = document.getElementById('search').value
       
// //        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${inp}&key=AIzaSyAPpfiDF_QzRLExu6aIcMN5_5MVLVrSVXY`);



// //     }
// // }
// console.log("vbcvvb ")


// function get(){
//  // let inp = document.getElementById("search").value;

//     console.log("aodnsfa")
//    // console.log(inp)
// }
//   getdata()
//    async  function getdata(){
//         try{
//             let key="AIzaSyAZo4RCw_Xuw4rNsqQFQrPLip0h7UvHBx0"
//             let url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=IN&key=${key}`
//          let res = await fetch(url)
//             let videos= await res.json()
//             console.log(videos.items[0].snippet)

//             appendVideos(videos.items)
//            // let watch=https://www.youtube.com/watch?v=
          
//         }
//         catch(er){
//             console.log("error", er)
//         }
//     }

// const appendVideos = (arr) =>{

// console.log(arr)
//  arr.map((el, i)=>{
//        let div=document.createElement("div")
//        let box=document.createElement("div")

//        let img=document.createElement("img")
//         img.src=el.snippet.thumbnails.medium.url
//         img.addEventListener("click", function (){
//             console.log("sanket", i, el.id)
            
//             localStorage.setItem("video_id",JSON.stringify(el.id))
//             window.location.href="mini.html"
        
//         })

//         let name=document.createElement("h3")
//         name.textContent=el.snippet.title
     
//         box.append(img)
//         div.append(box,name)
//         let container= document.getElementById("cont")
//         container.append(div)
        

//  })}
let api_key ="AIzaSyCmmHSpANEWwxVD9ioVt_Qh4m1PD4yNyq4"











