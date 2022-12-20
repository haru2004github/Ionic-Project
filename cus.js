const amazing = document.querySelectorAll('.amazing')
const amazingItem = document.querySelectorAll(".amazing-item");
const icons = document.querySelectorAll(".icon");
const showMmobildMenuBox = document.querySelector('.show-mobile-menu-box')
// const menuIcon = document.querySelector(".menu-icon");

amazing.forEach((ee,index) => {
  ee.addEventListener("click", () => {
    amazingItem[index].classList.toggle("hidden");
    amazingItem[index].classList.toggle("opacity-0");
    ee.classList.toggle('bg-slate-100')
    icons[index].classList.toggle("rotate-180");
  });
})

const menuIcon = () => {
  showMmobildMenuBox.classList.toggle("hidden");
}
let  changeOne = document.getElementById("changeOne");
let  changeTwo = document.getElementById("changeTwo");
let  changeThree = document.getElementById("changeThree");
let  phoneImg = document.getElementById("phoneImg");
let  andriodBtn = document.getElementById("andriodBtn");
let  coustomBtn = document.getElementById("coustomBtn");
let  iosBtn = document.getElementById("iosBtn");


phoneImg.innerHTML= `<img class="ml-10 md:ml-0 w-full scale-125 z-10" src="../dist/img/Ionic_ Enterprise App Development & Delivery Platform_files/blue.png" alt="">
                    <img class="ml-10 md:ml-0 w-full scale-125 translate-y-20 -translate-x-20" src="../dist/img/Ionic_ Enterprise App Development & Delivery Platform_files/4c10a0cb-0644-462d-ba21-a583e048bb21_ionic-io-framework-android-music-light.png" alt="">`


iosBtn.addEventListener('click',()=>{
  phoneImg.innerHTML= `<img class="ml-10 md:ml-0 w-full scale-125 z-10" src="../dist/img/Ionic_ Enterprise App Development & Delivery Platform_files/android.png" alt="">
                    <img class="ml-10 md:ml-0 w-full scale-125 translate-y-20 -translate-x-20" src="../dist/img/Ionic_ Enterprise App Development & Delivery Platform_files/4c10a0cb-0644-462d-ba21-a583e048bb21_ionic-io-framework-android-music-light.png" alt="">`
})

andriodBtn.addEventListener('click',()=>{
  phoneImg.innerHTML= `<img class="ml-10 md:ml-0 w-full scale-125 z-10" src="../dist/img/Ionic_ Enterprise App Development & Delivery Platform_files/blue.png" alt="">
                    <img class="ml-10 md:ml-0 w-full scale-125 translate-y-20 -translate-x-20" src="../dist/img/Ionic_ Enterprise App Development & Delivery Platform_files/android-phone.png" alt="">`
})

coustomBtn.addEventListener('click',()=>{
  phoneImg.innerHTML= `<img class="ml-10 md:ml-0 w-full scale-125 z-10" src="../dist/img/Ionic_ Enterprise App Development & Delivery Platform_files/green-rate.png" alt="">
                    <img class="ml-10 md:ml-0 w-full scale-125 translate-y-20 -translate-x-20" src="https://ionic.io/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fionicframeworkcom%2F204343b9-99e3-493a-9057-13e970d6ce96_ionic-io-framework-custom-music-light.png&w=384&q=75" alt="">`
})

changeOne.addEventListener("click",()=>{

  changeOne.classList.add("bg-slate-900","text-slate-50");
  changeThree.classList.remove("bg-slate-900","text-slate-50");
  changeTwo.classList.remove("bg-slate-900","text-slate-50");
  changeTwo.classList.add("bg-slate-300","text-slate-400");
  changeThree.classList.add("bg-slate-300","text-slate-400");


});
changeTwo.addEventListener("click",()=>{
  changeTwo.classList.remove("bg-slate-300","text-slate-400");
  changeTwo.classList.add("bg-slate-900","text-slate-50");
  changeOne.classList.add("bg-slate-300","text-slate-400");
  changeThree.classList.add("bg-slate-300","text-slate-400");
  changeOne.classList.remove("bg-slate-900","text-slate-50");
  changeThree.classList.remove("bg-slate-900","text-slate-50");




});
changeThree.addEventListener("click",()=>{
  changeThree.classList.remove("bg-slate-300","text-slate-400");
  changeThree.classList.add("bg-slate-900","text-slate-50");
  changeTwo.classList.remove("bg-slate-900","text-slate-50");
  changeOne.classList.remove("bg-slate-900","text-slate-50");
  changeTwo.classList.add("bg-slate-300","text-slate-400");
  changeOne.classList.add("bg-slate-300","text-slate-400");

});


ScrollReveal().reveal('.headline',{
  origin: 'bottom',
  distance: '60px' ,
  duration : 650,
  interval: 200,
  delay:200,
  reset : true,
 
 });

 //code

 let code = document.querySelector(".code");
 let react = document.getElementById('react')
 let angular = document.getElementById("angular")
 let vue = document.getElementById("vue")
 let js = document.getElementById("js")
 let demo = document.getElementById("demo")
 let codeText = document.getElementById('codeText')
 let lang = document.getElementById('lang');

 codeText.addEventListener('click',()=>{
  lang.classList.remove('hidden');
  codeText.classList.remove('bg-slate-800','text-slate-100')
  codeText.classList.add('text-slate-800','bg-slate-100')
  demo.classList.remove('bg-slate-100','text-slate-800')
  demo.classList.add('text-slate-100')
  

  code.innerHTML = `<pre class="text-slate-100 mt-10 ml-8">
  1  &#60;h4&#62;Discover&#60;/h4&#62;
  2  &#60;h2&#62;Top albums&#60;/h2&#62;
  3  &#60;IonList&#62;
  4   {albums.<span class="text-orange-500">map</span>(album <span class="text-green-300"> =></span>
  5     &#60;IonList <span class="text-purple-400"> key </span>={album.id}>
  6      &#60;IonThumbnail <span class="text-purple-400"> slot </span>= <span class="text-green-300"> "start"</span></IonThumbnail>
  7        &#60;img <span class="text-purple-400"> src </span>={album.artwork} />
  8      &#60;/IonThumbnail>
  9     &#60;IonLabel>
  10   &#60;h2&#62;{album.title}&#60;/h2&#62;
  10  &#60;p&#62;{album.artist}, {album.year}}&#60;/p&#62;
  11 &#60;/IonLabel>
  12 &#60;/IonItem>
  13 &#60;/IonList&#62;
  )}
  </pre>`;
 })


  demo.addEventListener('click',()=>{
  demo.classList.remove('text-slate-100')
  demo.classList.add('bg-slate-100','text-slate-800')
  codeText.classList.remove('bg-slate-100','text-slate-800')
  codeText.classList.add('text-slate-100','bg-slate-800')

  lang.classList.add('hidden')

  code.innerHTML = `
  <div class="bg-slate-100 md:mx-0 mx-10 rounded-2xl p-5 mt-10">
        <h1>Discover</h1>
        <h1 class="text-3xl font-bold ">Top albums</h1>
        <div class="mt-6 h-[400px] overflow-y-scroll">
            <div class="flex items-center gap-3 py-3 border-b-2 border-b-slate-200">
                <img class="w-16" src="https://ionic.io/img/index/code-tabs/dawn-fm-the-weeknd.png" alt="">
                <div class="">
                    <h1>Dawn FM</h1>
                    <h2 class="mt-1 text-sm">The Weekend</h2>
                </div>
            </div>

            <div class="flex items-center gap-3 py-3 border-b-2 border-b-slate-200">
                <img class="w-16" src="https://ionic.io/img/index/code-tabs/planet-her-doja-cat.png" alt="">
                <div class="">
                    <h1>Planet Her</h1>
                    <h2 class="mt-1 text-sm">Doja Cat</h2>
                </div>
            </div>

            <div class="flex items-center gap-3 py-3 border-b-2 border-b-slate-200">
                <img class="w-16" src="https://ionic.io/img/index/code-tabs/sour-olivia-rodrigo.png" alt="">
                <div class="">
                    <h1>SOUR</h1>
                    <h2 class="mt-1 text-sm">Olivia Rodrigo</h2>
                </div>
            </div>

            <div class="flex items-center gap-3 py-3 border-b-2 border-b-slate-200">
                <img class="w-16" src="https://ionic.io/img/index/code-tabs/montero-lil-nas-x.png" alt="">
                <div class="">
                    <h1>MONTERO</h1>
                    <h2 class="mt-1 text-sm">Lil Nas X</h2>
                </div>
            </div>

            <div class="flex items-center gap-3 py-3 border-b-2 border-b-slate-200">
                <img class="w-16" src="https://ionic.io/img/index/code-tabs/yhlqmdlg-bad-bunny.png" alt="">
                <div class="">
                    <h1>YHLQMDLG
                    </h1>
                    <h2 class="mt-1 text-sm">Bad Bunny

                    </h2>
                </div>
            </div>

            <div class="flex items-center gap-3 py-3 border-b-2 border-b-slate-200">
                <img class="w-16" src="https://ionic.io/img/index/code-tabs/future-nostalgia-dua-lipa.png" alt="">
                <div class="">
                    <h1>Future Nostalgia</h1>
                    <h2 class="mt-1 text-sm">Dua Lipa</h2>
                </div>
            </div>

            <div class="flex items-center gap-3 py-3 border-b-2 border-b-slate-200">
                <img class="w-16" src="https://ionic.io/img/index/code-tabs/30-adele.png" alt="">
                <div class="">
                    <h1>30</h1>
                    <h2 class="mt-1 text-sm">Adele</h2>
                </div>
            </div>
        </div>
    </div>`
 });





 code.innerHTML = `<pre class="text-slate-100 mt-10 ml-8">
 1  &#60;h4&#62;Discover&#60;/h4&#62;
 2  &#60;h2&#62;Top albums&#60;/h2&#62;
 3  &#60;IonList&#62;
 4   {albums.<span class="text-orange-500">map</span>(album <span class="text-green-300"> =></span>
 5     &#60;IonList <span class="text-purple-400"> key </span>={album.id}>
 6      &#60;IonThumbnail <span class="text-purple-400"> slot </span>= <span class="text-green-300"> "start"</span></IonThumbnail>
 7        &#60;img <span class="text-purple-400"> src </span>={album.artwork} />
 8      &#60;/IonThumbnail>
 9     &#60;IonLabel>
 10   &#60;h2&#62;{album.title}&#60;/h2&#62;
 10  &#60;p&#62;{album.artist}, {album.year}}&#60;/p&#62;
 11 &#60;/IonLabel>
 12 &#60;/IonItem>
 13 &#60;/IonList&#62;
 )}
 </pre>`;

 react.addEventListener('click',()=>{
  code.innerHTML = `<pre class="text-slate-100 mt-10 ml-8">
  1  &#60;h4&#62;Discover&#60;/h4&#62;
  2  &#60;h2&#62;Top albums&#60;/h2&#62;
  3  &#60;IonList&#62;
  4   {albums.<span class="text-orange-500">map</span>(album <span class="text-green-300"> =></span>
  5     &#60;IonList <span class="text-purple-400"> key </span>={album.id}>
  6      &#60;IonThumbnail <span class="text-purple-400"> slot </span>= <span class="text-green-300"> "start"</span></IonThumbnail>
  7        &#60;img <span class="text-purple-400"> src </span>={album.artwork} />
  8      &#60;/IonThumbnail>
  9     &#60;IonLabel>
  10   &#60;h2&#62;{album.title}&#60;/h2&#62;
  10  &#60;p&#62;{album.artist}, {album.year}}&#60;/p&#62;
  11 &#60;/IonLabel>
  12 &#60;/IonItem>
  13 &#60;/IonList&#62;
  )}
  </pre>`;
 });

 angular.addEventListener("click",()=>{
  code.innerHTML= `<pre class="text-slate-100 mt-10 ml-8">
 1  &#60;h4>Discover&#60;/h4>
 2  &#60;h2>Top albums&#60;/h2>
 3  &#60;ion-list>
 4    &#60;ion-item <span class="text-purple-400">*ngFor</span><span class="text-green-300">
        </span>trackBy:trackAlbums">
 5      &#60;ion-thumbnail <span class="text-purple-400"> slot </span>="start">
 7        &#60;img <span class="text-purple-400"> [src] </span>="album.artwork" />
 8      &#60;/ion-thumbnail>
 9      &#60;ion-label>
 10       &#60;h2>{{ album.title }}</h2>
 11        &#60;p>{{ album.artist }}&#60;/p>
 12     &#60;/ion-label>
 13    &#60;/ion-item>
 14  &#60;/ion-list>
  </pre>`
 })

 vue.addEventListener("click",()=>{
  code.innerHTML= `<pre class="text-slate-100 mt-10 ml-8">
 1  &#60;h4>Discover&#60;/h4>
 2  &#60;h2>Top albums&#60;/h2>
 3  &#60;ion-list>
 4    &#60;ion-item <span class="text-purple-400">*vFor</span><span class="text-green-300">
        </span>trackBy:trackAlbums">
 5      &#60;ion-thumbnail <span class="text-purple-400"> slot </span>="start">
 7        &#60;img <span class="text-purple-400">:src </span>="album.artwork" />
 8      &#60;/ion-thumbnail>
 9      &#60;ion-label>
 10       &#60;h2>{{ album.title }}</h2>
 11        &#60;p>{{ album.artist }}&#60;/p>
 12     &#60;/ion-label>
 13    &#60;/ion-item>
 14  &#60;/ion-list>
  </pre>`
 })

 js.addEventListener("click",()=>{
  code.innerHTML= `<pre class="text-slate-100 mt-10 ml-8">
 1  &#60;h4>Discover&#60;/h4>
 2  &#60;h2>Top albums&#60;/h2>
 3  &#60;ion-list>
 4    &#60;ion-item <span class="text-purple-400">*ngFor</span><span class="text-green-300">
        </span>trackBy:trackAlbums">
 5      &#60;ion-thumbnail <span class="text-purple-400"> slot </span>="start">
 7        &#60;img <span class="text-purple-400"> [src] </span>="album.artwork" />
 8      &#60;/ion-thumbnail>
 9      &#60;ion-label>
 10       &#60;h2>Dawn FM</h2>
 11        &#60;p>The Weeknd&#60;/p>
 12     &#60;/ion-label>
 13    &#60;/ion-item>
 14   <! --- etc --->
 15  &#60;/ion-list>
  </pre>`
 })


 demo.addEventListener('click',()=>{

  lang.classList.add('hidden')

  code.innerHTML = `
  <div class="bg-slate-100 md:mx-0 mx-10 rounded-2xl p-5 mt-10">
        <h1>Discover</h1>
        <h1 class="text-3xl font-bold ">Top albums</h1>
        <div class="mt-6 h-[400px] overflow-y-scroll">
            <div class="flex items-center gap-3 py-3 border-b-2 border-b-slate-200">
                <img class="w-16" src="https://ionic.io/img/index/code-tabs/dawn-fm-the-weeknd.png" alt="">
                <div class="">
                    <h1>Dawn FM</h1>
                    <h2 class="mt-1 text-sm">The Weekend</h2>
                </div>
            </div>

            <div class="flex items-center gap-3 py-3 border-b-2 border-b-slate-200">
                <img class="w-16" src="https://ionic.io/img/index/code-tabs/planet-her-doja-cat.png" alt="">
                <div class="">
                    <h1>Planet Her</h1>
                    <h2 class="mt-1 text-sm">Doja Cat</h2>
                </div>
            </div>

            <div class="flex items-center gap-3 py-3 border-b-2 border-b-slate-200">
                <img class="w-16" src="https://ionic.io/img/index/code-tabs/sour-olivia-rodrigo.png" alt="">
                <div class="">
                    <h1>SOUR</h1>
                    <h2 class="mt-1 text-sm">Olivia Rodrigo</h2>
                </div>
            </div>

            <div class="flex items-center gap-3 py-3 border-b-2 border-b-slate-200">
                <img class="w-16" src="https://ionic.io/img/index/code-tabs/montero-lil-nas-x.png" alt="">
                <div class="">
                    <h1>MONTERO</h1>
                    <h2 class="mt-1 text-sm">Lil Nas X</h2>
                </div>
            </div>

            <div class="flex items-center gap-3 py-3 border-b-2 border-b-slate-200">
                <img class="w-16" src="https://ionic.io/img/index/code-tabs/yhlqmdlg-bad-bunny.png" alt="">
                <div class="">
                    <h1>YHLQMDLG
                    </h1>
                    <h2 class="mt-1 text-sm">Bad Bunny

                    </h2>
                </div>
            </div>

            <div class="flex items-center gap-3 py-3 border-b-2 border-b-slate-200">
                <img class="w-16" src="https://ionic.io/img/index/code-tabs/future-nostalgia-dua-lipa.png" alt="">
                <div class="">
                    <h1>Future Nostalgia</h1>
                    <h2 class="mt-1 text-sm">Dua Lipa</h2>
                </div>
            </div>

            <div class="flex items-center gap-3 py-3 border-b-2 border-b-slate-200">
                <img class="w-16" src="https://ionic.io/img/index/code-tabs/30-adele.png" alt="">
                <div class="">
                    <h1>30</h1>
                    <h2 class="mt-1 text-sm">Adele</h2>
                </div>
            </div>
        </div>
    </div>`
 });




