let menu = ["rau xào", "thịt luộc", "gà rán"];
let input;
do {
  input = prompt("Mời người dùng nhập vào yêu cầu: C,R,U,D").toLowerCase().trim();
  if(input == "c"){
    menu.push(
        prompt("Mời người dùng nhập vào món ăn mới")
    )
  }
  else if(input == "r"){
    alert(menu.join(", "))
  }
  else if(input == "u"){
    // let viTriPhanTuMuontim = menu.indexOf(prompt("Mời nhập vị trí tìm?"));
    // menu[viTri..] = prompt("...")
  }
  else if(input == "d"){
    // let viTriPhanTuMuontim = 
    /// menu.splice(viTri... , 1);
    
  }
  else{
    alert("Không có yêu cầu phù hợp");
  }
} 
while (input == "c" || input == "r" || input == "u" || input == "d");
