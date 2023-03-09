let Images = document.querySelectorAll('.img');
let count = 0;
Images.forEach(
        (Image,index)=>{
        Image.style.top = `${index*100}%`;
        console.log(Images);
});

let ScroLL = () => {
    Images.forEach(
        (Image) => {
            Image.style.transform = `translateY(-${count*100}%)`;
        });
}

window.onwheel = () => {
        if(count<2){
            count++;
            ScroLL();
            console.log(count);
        }else if(count==2){
            count=0;
            ScroLL();
        }else if(count==1){
            count=-1;
            ScroLL();
        }
}




// let a = document.querySelectorAll('.img');
// a.addEventListener('wheel',hide);
//     function hide(){
//         document.getElementById('img1').style.opacity=0;
//         document.getElementById('hh1').innerText="Mountain corner of the planet";
//         document.getElementById('img1').style.transition='1s';
//         document.getElementById('pp1').innerText="Release  |  Friday, October 3rd, 14:20";
//         document.getElementById('bb2').style.visibility="hidden";
//         document.getElementById('bb1').style.cursor="pointer";
//         document.getElementById('bb1').innerText="Watch Now";
//     }
