export default function(t){[...document.getElementsByClassName("fit-this-text")].forEach(e=>{RegExp("fitter").test(e.firstElementChild.className)||(e.innerHTML=`<div class='fitter'>${e.innerHTML}</div>`);var o=e.firstElementChild;o.style.display="inline-block",function(){var r=[...e.getElementsByTagName("*")],a=()=>{var t=parseFloat(getComputedStyle(e).paddingTop),r=parseFloat(getComputedStyle(e).paddingBottom);return o.offsetHeight>e.offsetHeight-(t+r)};function i(t,e){return t.style.fontSize=parseFloat(getComputedStyle(t).fontSize)+e+"px"}r.forEach(t=>{t.dataset.size||(t.dataset.size=getComputedStyle(t).fontSize)}),function(){for(;!a;)r.forEach(e=>t||parseFloat(e.style.fontSize)+.5<e.dataset.size?i(e,.5):e.style.removeProperty("font-size"));for(;a;)r.forEach(t=>i(t,-.5))}()}(),o.style.removeProperty("display")})}
