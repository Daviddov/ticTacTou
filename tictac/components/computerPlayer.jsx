let corner = [0,2,6,8]
let adge = [1,3,5,7]
let example = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
]
//step 1
let randomCorner = Math.floor(Math.random()* 4)
let boardGame = []
boardGame.push(corner[randomCorner-1])
// step 2
if (boardGame[4] != '') {
    switch (boardGame[0]) {
        case 0:boardGame.push(8)
        break;
        case 8:boardGame.push(0)
        break;
        case 2:boardGame.push(6)
        break;
        case 6:boardGame.push(2)
        break;
        }
    }else{
      if (boardGame[randomCorner-1] == '') {
        boardGame.push(corner[randomCorner-1])
      } 
    }
    //step 3
    if (boardGame[0] == 'x' && boardGame[8] == 'x' && boardGame[4] == '') {
      console.log('fill boardGame[4]');
    } else {

    }



// אם לכל היותר משבצת אחת מסומנת על הלוח וגם המשבצת האמצעית פנויה – יש לסמן את המשבצת האמצעית.
// אם בשורה או באלכסון מסומנות שתי משבצות שלי – יש לסמן את המשבצת השלישית.
// אם בשורה או באלכסון מסומנות שתי משבצות של היריב – יש לסמן את המשבצת השלישית.
// אם יש משבצת הנמצאת על טור/שורה/אלכסון של שתי משבצות אחרות שלי, ואותו הטור/שורה/אלכסונים לא כוללים משבצת יריב – יש לסמנה.
// אם שלוש משבצות מסומנות, המשבצת המרכזית שלי ושתי משבצות מנוגדות מסומנות– יש לסמן משבצת קצה.
// אם שלוש משבצות מסומנות והמשבצת המרכזית שלי – יש לסמן פינה הנמצאת באותו טור/שורה עם שתי המשבצות של היריב ביחד.
// אם יש פינה פנויה ומשני צדדיה שתי שורות ריקות – יש לסמן את הפינה.
// אם המשבצת האמצעית פנויה – יש לסמן אותה.
// אם יש שלוש משבצות פנויות בשורה או באלכסון – יש לסמן את הפינה.
// אם יש שתי משבצות מנוגדות והמשבצת האמצעית שלי – יש לסמן אחת משתיים.
// אם יש משבצת פינתית פנויה – יש לסמן אותה.
// אם יש משבצת פנויה – יש לסמן אותה.
let countSteps = 0
const rew = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
]
const slant = [
  [0,4,8],
  [2,4,6],
]
if (countSteps <= 1 && gameBoard[4] == '') {
  console.log('fill boardGame[4]')
  
} else if (rew == 'my sing>2'  || slant =='my sing>2' ) {
  console.log('fill box 3')
} else if (rew == 'user sing>2' || slant =='user sing>2' ) {
  console.log('fill box 3')
} 