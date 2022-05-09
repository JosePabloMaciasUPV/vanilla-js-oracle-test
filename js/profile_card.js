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

if(document.baseURI.indexOf('?')>-1){
    const map1=extractParams();
    let nameHeader=document.getElementsByClassName('card-name')[0];
    map1.get('name') ? nameHeader.innerHTML=map1.get('name') : nameHeader.innerHTML="Invalid Entry";
    
    let professionHeader=document.getElementsByClassName('card-profession')[0];
    map1.get('profession') ? professionHeader.innerHTML=map1.get('profession') :professionHeader.innerHTML="Invalid Entry";

    let servicesHeader=document.getElementsByClassName('card-services')[0];
    map1.get('services') ? servicesHeader.innerHTML=map1.get('services') : servicesHeader.innerHTML="Invalid Entry";

    let contentBody=document.getElementsByClassName('card-content')[0];
    map1.get('content') ? contentBody.innerHTML=map1.get('content'): contentBody.innerHTML="Invalid Entry";

    let backgroundImage=document.getElementById('background');
    backgroundImage.setAttribute('src',map1.get('background'));
    
    let avatarImage=document.getElementById('avatar');
    avatarImage.setAttribute('src',map1.get('profile'));
}
