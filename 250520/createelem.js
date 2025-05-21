/***
 * cheackbox에 체크가 되면 label에 class="chaange"
 */
// 객체 가져오기
const $check = document.querySelector("input[type=checkbox]");
const $label = document.querySelector("label") // 확실한 지정을 원하면 ("label[for=data]")
// console.log( $check );
$check.addEventListener("change",()=>{
  // // console.log( "change event" );
  // if( $check.checked ){
  //   // $label.className = "change";   // 1개에 적용할 경우 className
  //   $label.classList.add("change");   // 배열형. 여러개에 적용할 경우 classList
  // } else {
  //   // $label.className = '';
  //   $label.classList.remove("change");
  // }

  // 토글 사용
  $label.classList.toggle("change");
});