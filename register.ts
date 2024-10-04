import mailChecker from "mailchecker";
//u = *
//o = &
//0 = !
const database = [
  { email: "susu@gmail.com", password: "il&vey&*3!!!" }, //iloveyou3000
  { email: "max@utk.ac.th", password: "*tkandme&!1" }, //utkandmeo01
];
function decryptionPassword(password: string) {
  return password
    .replaceAll("*", "u")
    .replaceAll("&", "o")
    .replaceAll("!", "0");
}

function register(email: string, password: string) {
  //เช็คเมล์
  if (mailChecker.isValid(email)) {
    const user = database.filter(function (Element, index) {
      return Element.email.includes(email);
    });
    if (user.length > 0) {
      console.log("พบ email นี้ในระบบ โปรดตรวจสอบ");
    } else {
      //เช็ค password
      if (password.length > 8 && password.length < 16) {
        const userObject = {
          email: email,
          password: password,
        };
        database.push(userObject);
        console.log("สมัครสมาชิกเรียบร้อย");
        console.log(database);
      } else {
        console.log("รหัสผ่านต้องยาวมากกว่า 8 ตัวอักษร และไม่เกิน 16 ตัวอักษร");
      }
    }
  } else {
    console.log("Email ไม่ถูกต้อง");
  }
}
<<<<<<< HEAD
// //เรียกใช้ function
// register("susu@gmail.com", "nahia123456");
=======

//เรียกใช้ function
// register("goty@gmail.com", "123456789");
>>>>>>> f0082b16a2bdaf4339916d26a0c7a56b7a2dbb3f

function login(email: string, password: string) {
  if (mailChecker.isValid(email)) {
    const user = database.filter(function (Element, index) {
      return Element.email.includes(email);
    });
    if (user.length > 0) {
<<<<<<< HEAD
      if (user[0].password === password) {
=======
      if (decryptionPassword(user[0].password) === password) {
>>>>>>> f0082b16a2bdaf4339916d26a0c7a56b7a2dbb3f
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
<<<<<<< HEAD
login("kruy@utk.ac.th", "123456789");
=======
//เรียกใช้ login
login("susu@gmail.com", "iloveyou3000");
>>>>>>> f0082b16a2bdaf4339916d26a0c7a56b7a2dbb3f
