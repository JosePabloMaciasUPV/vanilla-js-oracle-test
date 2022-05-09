let imageDoNotLoad=(image)=>{
    switch(image){
        case 'background':
            let background=document.getElementById('background');
            background.setAttribute('src',"https://free-images.com/tn/6d82/missing_image_png.jpg");
            break;
        case 'avatar':
            let avatar=document.getElementById('avatar');
            avatar.setAttribute('src',"https://free-images.com/tn/6d82/missing_image_png.jpg");
            break;    
    }
    
}
