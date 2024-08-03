import{S as c,i as n}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const u="https://pixabay.com/api/",f="45195508-74bd54d08c443e52e59ea1f0e";function g(i){const o=new URLSearchParams({key:f,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}),s=`${u}?${o.toString()}`;return fetch(s).then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>{if(e.totalHits==0)throw new Error("No images found");return e}).catch(e=>{throw console.error("Error fetching images:",e),e})}function m(i){const o=document.querySelector(".gallery"),s=i.map(e=>`
    <li class="gallery-item gallery-animation">
      <a href="${e.largeImageURL}">
        <figure class="gallery-figure">
            <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" loading="lazy">
            <figcaption class="gallery-figcaption">
                <ul class="info">
                    <li>Likes: <span>${e.likes}</span></li>
                    <li>Views: <span>${e.views}</span></li>
                    <li>Comments <span>${e.comments}</span></li>
                    <li>Downloads: <span>${e.downloads}</span></li>
                </ul>
            </figcaption>
		</figure>
      </a>
    </li>
  `).join("");o.innerHTML=s,new c(".gallery a").refresh()}const p=document.querySelector("#search-form"),d=document.querySelector("#search"),l=document.querySelector(".loader");p.addEventListener("submit",i=>{i.preventDefault();const o=d.value.trim();if(!o){n.info({title:"Info",position:"topRight",message:"Please enter a value in the search field!",timeout:3e3});return}l.style.display="block",g(o).then(s=>{l.style.display="none",n.success({title:"Success",position:"topRight",message:`Hooray! We found ${s.totalHits} images.`,timeout:3e3}),m(s.hits)}).catch(s=>{l.style.display="none",s.message=="No images found"?n.warning({icon:"svg",iconUrl:"/src/img/Warning.svg",title:"Warning",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",timeout:3e3}):n.error({title:"Error",position:"topRight",message:"Sorry, there is no connection to the server. Please try again later!",timeout:3e3})})});
//# sourceMappingURL=commonHelpers.js.map
