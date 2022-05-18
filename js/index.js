let myNum = 0; //myNum이 1이라고 선언
const totalNum = 2;

function numberSetting(){ //넘버세팅이라는 함수를 선언 압축해서 쓴거
    document.getElementById("num").innerText = myNum; //innerText에 1이 뜬다.
}
numberSetting();
document.getElementById("left").onclick = function(){
    console.log("이전버튼");
    if(myNum == 0){
        myNum = totalNum;
    } else{
        myNum--;
    }
    numberSetting();//굳이 다 쓸 필요없이 앞에서 선언한 함수를 호출만 하면 됨
    // document.getElementById("packman").style.border = "3px solid blue";
    document.getElementById("packman").style.left = myNum * 150 + "px";
};
document.getElementById("right").onclick = function(){
    console.log("다음버튼");
    if(myNum == 1){ 
        myNum = totalNum;
    } else{
        myNum = totalNum;
    }
    numberSetting();
    // document.getElementById("packman").style.border = "3px solid blue";
    document.getElementById("packman").style.left = myNum * 150 + "px";
};
