(function(){var element;var setCookie=function(name,value,days){var expires;if(days){var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));expires="; expires="+date.toGMTString();}
else{expires="";}
document.cookie=name+"="+value+expires+"; SameSite=Strict; path=/";}
var getCookie=function(c_name){if(document.cookie.length>0){c_start=document.cookie.indexOf(c_name+"=");if(c_start!=-1){c_start=c_start+c_name.length+1;c_end=document.cookie.indexOf(";",c_start);if(c_end==-1){c_end=document.cookie.length;}
return unescape(document.cookie.substring(c_start,c_end));}}
return "";}
var listenEscKey=function(event){if(27===event.keyCode){closeModal('Press ESC Key');}};var launchProfileModal=function(label=''){if(getCookie('tasty-pins-follow-box-closed')||document.querySelector('.tasty-pins-follow-box-container')){return;}
element=document.createElement('div');element.classList.add('tasty-pins-follow-box-container');element.id='tasty-pins-follow-box-container';element.innerHTML=document.querySelector('#tmpl-tasty-pins-follow-box').innerHTML;document.body.appendChild(element);document.addEventListener('keydown',listenEscKey);document.querySelector('.tasty-pins-follow-box-container').addEventListener('click',function(event){if('tasty-pins-follow-box-container'===event.target.id){closeModal('Click Outside Modal');}});document.querySelector('.tasty-pins-follow-box-container .tasty-pins-follow-box-close').addEventListener('click',function(){closeModal('Close Modal Button');})
document.querySelector('.tasty-pins-follow-box-container .tasty-pins-follow-box-button').addEventListener('click',function(){closeModal('Convert Profile Click');});document.dispatchEvent(new CustomEvent('tasty-pins-open-follow-box',{detail:{label:label}}));};var closeModal=function(label=''){document.dispatchEvent(new CustomEvent('tasty-pins-close-follow-box',{detail:{label:label}}));setCookie('tasty-pins-follow-box-closed',true);document.removeEventListener('keydown',listenEscKey);if(element){document.body.removeChild(element);element=null;}};document.addEventListener('click',function(event){if('SPAN'===event.target.tagName&&'button_pinit_floating'===event.target.getAttribute('data-pin-log')){setTimeout(function(){launchProfileModal('Pinterest Pinit Button');},2500);}});document.addEventListener('tasty-pinit-button-click',function(event){setTimeout(function(){launchProfileModal('Pinterest Pinit Button');},2500);});document.querySelectorAll('.tasty-recipes .share-pin').forEach(function(element){element.addEventListener('click',function(){setTimeout(function(){launchProfileModal('Tasty Recipes Pin Recipe');},2500);})})
if(typeof MutationObserver!=='undefined'){var config={attributes:true,childList:true,subtree:true};var callback=function(mutationsList,observer){for(mutation of mutationsList){if('childList'===mutation.type){if(mutation.addedNodes.length){mutation.addedNodes.forEach(function(value){if('IFRAME'!==value.nodeName){return;}
var label=null;if(-1!==value.src.indexOf('chrome-extension://gpdjojdkbbmdfjfahjcgigfpmkopogic/')){label='Pinterest Chrome Extension';}else if(-1!==value.src.indexOf('/html/grid.html')){label='Pinterest Firefox Extension';}else if(-1!==value.src.indexOf('https://assets.pinterest.com/ext/grid.html')){label='Pinterest JavaScript Tag';}
if(label!==null){setTimeout(function(){launchProfileModal(label);},4000);}});}}}};var observer=new MutationObserver(callback);observer.observe(document,config);}}());