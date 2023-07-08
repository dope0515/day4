const slider = document.querySelector('#slider');//슬라이더
const panel =  document.querySelector('.panel');//패널
const btns = slider.querySelectorAll('.btns li');//버튼들
const speed = 2000;
let preventEvent = false;

btns.forEach((btn,idx)=>{
    btn.addEventListener('click',()=>{
        //처음 이벤트 발생시 prevent값이 false 이므로
        //조건문이 무시가 되고 아래 구문들이 일단을 실행 됨
        if(preventEvent) return;
        //조건문을 통과하자마자 preventEvent값을 true로 변경하면
        //다음번 이벤트부터는 조건문이 막혀서 실행이 안된다
        //다시 실행이 되게 하려면 preventEvent값이 false로 변경되어야함
        preventEvent = true;
        console.log(preventEvent)
        moveSlide(idx);
        activation(btns,idx);
    });
});


function moveSlide(idx){
    console.log('엄청 무거운 함수호출');
    new Anime(panel,{
        prop: 'margin-left',
        value: (-100 * idx) + '%',
        duration:speed,
        //callback이 실행되는 시점은 모든 모션이 끝나는 시점
        //이때 preventEvent값을 다시 false로 변경
        //이벤트가 다시 함수 호출
        callback:()=> {
            preventEvent = false;
        }
    })
}

function activation(arrEl,idx){
    for(const el of arrEl) el.classList.remove('on');
    arrEl[idx].classList.add('on');
}