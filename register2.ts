import mailChecker from "mailchecker";
const database: any[] = [];
function register(email: string, password: string) {
  if (!mailChecker.isValid(email)) {
    console.log("email ไม่ถูกต้อง");
    return;
  }
  const user = database.filter(function (element, index) {
    return element.email.includes(email);
  });
  if (user.length > 0) {
    console.log("พบ email นี้ในระบบ โปรดตรวจสอบ");
    return;
  }
  if (!(password.length > 8 && password.length < 16))
    console.log("รหัสผ่านต้องยาวมากกว่า 8 ตัวอักษร และไม่เกิน 16 ตัวอักษร");
  return;
}
//เรียกใช้ function
// register("susu@gmail.com", "123456789");

function login(email: string, password: string) {
  if (mailChecker.isValid(email)) {
    const user = database.filter(function (Element, index) {
      return Element.email.includes(email);
    });
    if (user.length > 0) {
      if (user[0].password === password) {
        console.log("เข้าสู่ระบบแล้ว ยินดีต้อนรับ");
      } else {
        console.log("รหัสผ่านไม่ถูกต้อง");
      }
    } else {
      console.log("ไม่พบ email นี้ในระบบ โปรดตรวจสอบ");
    }
  } else {
    console.log("กรอก email ผิดรูปแบบ");
  }
}
//เรียกใช้ login
login("susu@gmail.com", "123456789");
