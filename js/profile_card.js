let extractParams=()=>{
    let stringToSeparate=document.baseURI;
    let params_fullstr=stringToSeparate.split('?')[1];
    let params_arr = params_fullstr.split('&');
    let pair=[];
    const map1 = new Map();
    for(let i = 0; i < params_arr.length; i++) {
         pair = params_arr[i].split('=');
        map1.set(pair[0], decodeURI(pair[1]));
    }
    return map1;
}

const map1=extractParams();
console.log(map1)


document.getElementsByClassName('card-name')[0].innerHTML=map1.get('name');
document.getElementsByClassName('card-profession')[0].innerHTML=map1.get('profession');
document.getElementsByClassName('card-services')[0].innerHTML=map1.get('services');
document.getElementsByClassName('card-content')[0].innerHTML=map1.get('content');
document.getElementById('background').setAttribute('src',map1.get('background'));
document.getElementById('avatar').setAttribute('src',map1.get('profile'));
