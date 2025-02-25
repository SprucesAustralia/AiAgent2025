export function generateLeadNumber(): string {
    const date = new Date().toISOString().slice(2, 4) + new Date().toISOString().slice(5, 7) + new Date().toISOString().slice(8, 10); // YYMMDD
    const randomNum = Math.floor(10 + Math.random() * 90); // 2 digit random number
    const randomChar = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // Random capital letter
  
    return `${date}${randomNum}${randomChar}`; // Total length: 9 characters
  }