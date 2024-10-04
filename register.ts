import mailChecker from "mailchecker";
const database: any[] = [];
function register(email: string, password: string) {
  //เช็คเมล์
  if (mailChecker.isValid(email)) {
    //เช็ค password
    if (password.length > 8 && password.length < 16) {
      const userObject = {
        email: email,
        password: password,
      };
      database.push(userObject);
      console.log("สมัครสมาชิกเรียบร้อย");
    } else {
      console.log("รหัสผ่านต้องยาวมากกว่า 8 ตัวอักษร และไม่เกิน 16 ตัวอักษร");
    }
  } else {
    console.log("Email ไม่ถูกต้อง");
  }
}
// //เรียกใช้ function
// register("susu@gmail.com", "nahia123456");

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
login("kruy@utk.ac.th", "123456789");
