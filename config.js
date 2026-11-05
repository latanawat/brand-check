// ตั้งค่าเว็บ Brand Assignment Check
window.BRAND_CHECK_CONFIG = {
  // วาง URL ของ Apps Script Web App ที่ได้จากการ Deploy (ลงท้ายด้วย /exec)
  // ถ้าเว้นว่าง เว็บจะทำงานแบบ "โหมดทดลอง" เก็บข้อมูลไว้ในเบราว์เซอร์เครื่องนั้นเท่านั้น
  API_URL: "https://script.google.com/macros/s/AKfycbw2uKv_ad49kB9_tuk0KPHbP3JA0pQRWarM_iJoZXsAxEhpnOi_OJXGbUk74R_3xfExMQ/exec",

  // รหัส Admin สำหรับโหมดทดลองเท่านั้น — เมื่อใช้ Apps Script รหัสจริงจะถูกตรวจที่ Apps Script (Script Properties: ADMIN_CODE)
  DEMO_ADMIN_CODE: "7777777",

  // ตัวเลือกตำแหน่งในหน้าข้อมูลผู้ตอบ
  POSITIONS: ["SGM", "Secretary", "Admin SMM", "SMM", "DSM", "DMM"],

  // ดึงข้อมูลล่าสุดจากเซิร์ฟเวอร์ทุกกี่วินาที (ขั้นต่ำ 15)
  REFRESH_SECONDS: 45
};
