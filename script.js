const PASSWORD="dark123";

function unlock(){
    if(document.getElementById("pwd").value===PASSWORD){
        document.getElementById("lock").style.display="none";
    }else{
        alert("Wrong Password");
    }
}

const gallery=document.getElementById("gallery");
const singleView=document.getElementById("singleView");
const singleImg=document.getElementById("singleImg");
const singleStory=document.getElementById("singleStory");
const bgMusic=document.getElementById("bgMusic");

let index=0;
let playing=false;

/* PHOTO DATA */
const photos=[
 {img:"1.jpeg",story:"That night changed my life forever.",song:"life.mp3"},
 {img:"2.jpeg",story:"Silence builds strong men.",song:"life1.mp3"},
 {img:"3.jpeg",story:"Pain is the real teacher.",song:"song2.mp3"},
 {img:"4.jpeg",story:"I walked alone without fear.",song:"song3.mp3"},
 {img:"5.jpeg", story:"That night changed my life forever.", song:"life.mp3"},
 {img:"6.jpeg", story:"Silence made me stronger than noise.", song:"life1.mp3"},
 {img:"7.jpeg", story:"Pain is the real teacher.", song:"song2.mp3"},
 {img:"8.jpeg", story:"I walked alone, but fearless.", song:"song3.mp3"},
 {img:"9.jpeg", story:"That night changed my life forever.", song:"life.mp3"},
 {img:"10.jpeg", story:"Silence made me stronger than noise.", song:"life1.mp3"},
 {img:"11.jpeg", story:"Pain is the real teacher.", song:"song2.mp3"},
 {img:"12.jpeg", story:"I walked alone, but fearless.", song:"song3.mp3"},
 {img:"13.jpeg", story:"That night changed my life forever.", song:"life.mp3"},
 {img:"14.jpeg", story:"Silence made me stronger than noise.", song:"life1.mp3"},
 {img:"15.jpeg", story:"Pain is the real teacher.", song:"song2.mp3"},
 {img:"16.jpeg", story:"I walked alone, but fearless.", song:"song3.mp3"},
  {img:"17.jpeg", story:"Silence made me stronger than noise.", song:"life1.mp3"},
 {img:"18.jpeg", story:"Pain is the real teacher.", song:"song2.mp3"},

];

/* LOAD GALLERY */
photos.forEach((p,i)=>{
    const div=document.createElement("div");
    div.className="card";
    div.innerHTML=`<img src="${p.img}">`;
    div.onclick=()=>openSingle(i);
    gallery.appendChild(div);
});

/* OPEN SINGLE */
function openSingle(i){
    index=i;
    gallery.style.display="none";
    singleView.style.display="block";
    setTimeout(()=>singleView.classList.add("active"),10);
    load();
}

/* LOAD DATA */
function load(){
    singleImg.src=photos[index].img;
    singleStory.innerText=photos[index].story;
    bgMusic.src=photos[index].song;
    bgMusic.play();
    playing=true;
}

/* NEXT / PREV */
function nextImg(){
    index=(index+1)%photos.length;
    load();
}
function prevImg(){
    index=(index-1+photos.length)%photos.length;
    load();
}

/* MUSIC */
function toggleMusic(){
    playing?bgMusic.pause():bgMusic.play();
    playing=!playing;
}

/* BACK */
function goBack(){
    singleView.classList.remove("active");
    setTimeout(()=>{
        singleView.style.display="none";
        gallery.style.display="grid";
        bgMusic.pause();
    },500);
}
