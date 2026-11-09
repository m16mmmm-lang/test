// ดึงปุ่มและพื้นที่แสดงผลมาจาก HTML
const btn = document.getElementById('clickBtn');
const resultDiv = document.getElementById('result');

// กำหนดเหตุการณ์เมื่อผู้ใช้คลิกปุ่ม
btn.addEventListener('click', function() {
    resultDiv.textContent = '🎉 เยี่ยมมาก! แยกไฟล์และเชื่อมต่อสำเร็จแล้ว';
});