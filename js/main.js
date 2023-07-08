const slider = document.querySelector('#slider');//슬라이더
const panel =  document.querySelector('.panel');//패널
const btns = slider.querySelectorAll('.btns li');//버튼들
const speed = 1000;
let preventEvent = false;

btns.forEach((btn,idx)=>{
    btn.addEventListener('click',(e)=>{
        let isOn = e.target.classList.contains('on');
        if(preventEvent || isOn) return;
        preventEvent = true;
        moveSlide(idx);
        activation(btns,idx);
    });
});


function moveSlide(idx){
    new Anime(panel,{
        prop: 'margin-left',
        value: (-100 * idx) + '%',
        duration:speed,
        
        callback:()=> {
            preventEvent = false;
        }
    })
}

function activation(arrEl,idx){
    for(const el of arrEl) el.classList.remove('on');
    arrEl[idx].classList.add('on');
}