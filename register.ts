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
//เรียกใช้ function
register("susu@gmail.com", "nahia123456");
