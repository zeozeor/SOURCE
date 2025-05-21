// const addBtnElem = document.querySelector("#userForm>button");
// const nameElem = document.querySelector("#inputName");
// const ageElem = document.querySelector("#inputAge");
// addBtnElem.addEventListener("click",(event)=>{
//   event.preventDefault();   // 기본 설정 없애기
//   // name의 value 값 가져오기
//   const nameTxt = nameElem.value;
//   const ageTxt = ageElem.value;
//   console.log( nameTxt, ageTxt );
// });

const formElem = document.querySelector("#userForm");
const nameElem = formElem.querySelector("#inputName");  //document 대신 최상단의 변수(formElem)을 넣어도 됨.
const ageElem = document.querySelector("#inputAge");
const listElem = document.querySelector(".container");
// item 요소 생성 함수
const createItem = (nameTxt,ageTxt)=>{
  // div 요소 생성
  const divElem = document.createElement("div");
  divElem.className = "item";
  // span 요소 생성
  const spanElem = document.createElement("span");
  spanElem.textContent = `${nameTxt} (${ageTxt}세)`;
  divElem.appendChild(spanElem);
  // button 요소 생성
  const btnElem = document.createElement("button");
  btnElem.textContent = "삭제";
  btnElem.addEventListener("click",()=>{    // 삭제를 눌렀을 때 요소 삭제( 입력 후 출력된 div 내용이 삭제되어야 함)
    divElem.remove();   //DOM 요소를 완전히 삭제
  });
  divElem.appendChild(btnElem);
  listElem.appendChild(divElem);
}

// 폼에서 submit이 실행이 되는 경우
formElem.addEventListener("submit",(event)=>{  // submit = 실행하고 새로고침이 기본
  // console.log( "submit 이벤트 발생" );
  event.preventDefault();
  const nameTxt = nameElem.value.trim();    // trim : 빈값을 없애고 출력
  const ageTxt = ageElem.value.trim();
  if( nameTxt && ageTxt ){
    // item 생성
    createItem(nameTxt,ageTxt);
    // 입력 필드 초기화 
    formElem.reset();
  }
});