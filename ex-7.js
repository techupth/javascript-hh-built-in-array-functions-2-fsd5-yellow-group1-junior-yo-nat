function isPalindrome(string) {
  // Start coding here
  // รับ Parameter string เป็น String ที่เป็นคำหรือ ประโยคอะไรก็ได้
  // โดย Function นี้จะทำการตรวจสอบ string ที่ได้รับเข้ามาว่าเป็นคำที่สามารถอ่านจากหลังไปหน้าหรือหน้าไปหลังแล้วมีความหมายเหมือนกันหรือไม่ คำแบบนี้เรียกว่า Palindrome

  // ในกรณีที่ string เป็น Palindrome ตัว Function นี้ จะ Return ผลลัพธ์เป็น true
  // ในกรณีที่ string ไม่เป็น Palindrome ตัว Function นี้ จะ Return ผลลัพธ์เป็น false

  // ทำการลบทั้งหมดที่ไม่ใช่ตัวอักษรออกจาก string
  const cleanedString = string.toLowerCase().replace(/[^a-zก-ฮ]/g, "");

  // เปรียบเทียบ string กับ reverse ของ string
  return cleanedString === cleanedString.split("").reverse().join("");
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("noon")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
