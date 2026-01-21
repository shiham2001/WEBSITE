const gallery = document.getElementById("gallery");
const singleView = document.getElementById("singleView");
const singleImg = document.getElementById("singleImg");
const singleStory = document.getElementById("singleStory");
const bgMusic = document.getElementById("bgMusic");

let playing = false;

/* PHOTO DATA */
const photos = [
 {img:"1.jpeg", story:"That night changed my life forever.", song:"life.mp3"},
 {img:"2.jpeg", story:"Silence made me stronger than noise.", song:"life1.mp3"},
 {img:"3.jpeg", story:"Pain is the real teacher.", song:"song2.mp3"},
 {img:"4.jpeg", story:"I walked alone, but fearless.", song:"song3.mp3"},
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

 // same pattern add till 18
];

/* LOAD GALLERY */
photos.forEach((p)=>{
 let div=document.createElement("div");
 div.className="card";
 div.innerHTML=`<img src="${p.img}">`;
 div.onclick=()=>openSingle(p);
 gallery.appendChild(div);
});

/* OPEN SINGLE */
function openSingle(p){
 gallery.style.display="none";
 singleView.style.display="block";
 singleImg.src=p.img;
 singleStory.innerText=p.story;
 bgMusic.src=p.song;
 bgMusic.play();
 playing=true;
}

/* MUSIC CONTROL */
function toggleMusic(){
 if(playing){ bgMusic.pause(); }
 else{ bgMusic.play(); }
 playing=!playing;
}

/* BACK */
function goBack(){
 singleView.style.display="none";
 gallery.style.display="grid";
 bgMusic.pause();
}
