let TextArray = ["Planet", "Mountain", "WildLife"];
let TextIndex = 0;
TextIndex = () =>{
    TextIndex++;
    let Change = document.querySelector("#hh1");
    if (TextIndex < TextArray.length){
        Change.innerHTML =`Amazing corners of the ${TextArray[TextIndex]}`;
    }
    else{
        TextIndex = 0;
        Change.innerHTML = `Amazing corners of the ${TextArray[TextIndex]}`;
    }
}
setInterval(TextIndex,5000);
let Index = 0;
Hide = () => {
    let Images;
    let Img =document.querySelectorAll(".img");
    for (let Images = 0 ; Images < Img.length ; Images++) {
        Img[Images].style.opacity = 0;
    }
    Index++;
    if (Index > Img.length){
        Index = 1;
    }
    Img[Index - 1].style.opacity = 1;
}
setInterval(Hide,5000);
let lineIndex = 0;
lineHide = () => {
    let lines;
    let Line = document.querySelectorAll(".line");
for (let lines = 0 ; lines < Line.length ; lines++) {
    Line[lines].style.opacity = 0.2;
}
lineIndex++;
    if (lineIndex > Line.length){
        lineIndex = 1;
    }
    Line[lineIndex - 1].style.opacity = 1;
}
setInterval(lineHide,5000);













// let Images = document.querySelectorAll('.img');
// let count = 0;
// Images.forEach(
//         (Image,index)=>{
//         Image.style.top = `${index*100}%`;
//         console.log(Images);
// });

// let ScroLL = () => {
//     Images.forEach(
//         (Image) => {
//             Image.style.transform = `translateY(-${count*100}%)`;
//         });
// }

// window.onwheel = () => {
//         if(count<2){
//             count++;
//             ScroLL();
//             console.log(count);
//         }else if(count==2){
//             count=0;
//             ScroLL();
//         }else if(count==1){
//             count=-1;
//             ScroLL();
//         }
// }




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
