const slider = document.querySelector('#slider');//슬라이더
const panel =  document.querySelector('.panel');//패널
const btns = slider.querySelectorAll('.btns li');//버튼들

btns.forEach((btn,idx)=>{
    btn.addEventListener('click',()=>{
        new Anime(panel,{
            prop: 'margin-left',
            value: (-100 * idx) + '%',
            duration:500,
        })

        //for(const el of btns) el.classList.remove('on');
        btns.forEach((el)=>el.classList.remove('on'));
        btns[idx].classList.add('on');
            
    });
});
