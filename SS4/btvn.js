/// Chữa bài:
let height = 5;

//// Vẽ tam giác bằng cách in ra số
for (let i = 1; i <= height; i++) {
  let line = ""

  // In ra khoảng trắng bên trái
  for (let j = 1; j <= height - i; j++) {
    line = line + " ";
  }

  // In ra số 1
  for (let k = 1; k <= 2 * i - 1; k++) {
    line = line + "1"
  }

  console.log(line);
} 