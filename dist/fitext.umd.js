module.exports=function(t){Array.from(document.getElementsByClassName("fit-this-text")).forEach((function(e){RegExp("fitter").test(e.firstElementChild.className)||(e.innerHTML="<div class='fitter'>"+e.innerHTML+"</div>");var n,o,r=e.firstElementChild,i=[].concat(e.getElementsByTagName("*"));r.style.display="inline-block",n=function(){var t=parseFloat(getComputedStyle(e).paddingTop),n=parseFloat(getComputedStyle(e).paddingBottom);return r.offsetHeight>e.offsetHeight-(t+n)},o=function(t,e){return t.style.fontSize=parseFloat(getComputedStyle(t).fontSize)+e+"px"},i.forEach((function(t){t.dataset.size||(t.dataset.size=getComputedStyle(t).fontSize)})),function e(){if(n())for(;n();)i.forEach((function(t){return o(t,-.5)}));else if(t)for(;!n();)i.forEach((function(t){return o(t,.5)}));else i.forEach((function(t){return parseFloat(t.style.fontSize)+.5<t.dataset.size?o(t,.5):t.style.removeProperty("font-size")}));n()&&e()}(),r.style.removeProperty("display")}))};
