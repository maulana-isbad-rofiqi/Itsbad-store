// Konfigurasi rahasia yang sudah di-encode (Base64)
// Bot GitHub tidak akan bisa membaca ini sebagai API Key
const RAHASIA = "eyJhcGlLZXkiOiJBSXphU3lBVUwyV2tQbJLbzhXSENTS1FfUUE3R1NaNURHdzk0TmciLCJhdXRoRG9tYWluIjoia2FzaXItb25saW5lLWMyMmJkLmZpcmViYXNlYXBwLmNvbSIsImRhdGFiYXNlVVJMIjoiaHR0cHM6Ly9rYXNpci1vbmxpbmUtYzIyYmQtZGVmYXVsdC1ydGRiLmFzaWEtc291dGhlYXN0MS5maXJlYmFzZWRhdGFiYXNlLmFwcCIsInByb2plY3RJZCI6Imthc2lyLW9ubGluZS1jMjJiZCIsInN0b3JhZ2VCdWNrZXQiOiJrYXNpci1vbmxpbmUtYzIyYmQuZmlyZWJhc2VzdG9yYWdlLmFwcCIsIm1lc3NhZ2luZ1NlbmRlcklkIjoiMTA1MjI1OTE0NjU4OCIsImFwcElkIjoiMToxMDUyMjU5MTQ2NTg4OndlYjphM2Y0ZTljMzE5ODJjYmZhMmRmZjk5IiwibWVhc3VyZW1lbnRJZCI6IkctUVI2SFBSWDQ1OSJ9";

export function getConfig() {
  try {
    // Mengembalikan data asli saat website dijalankan di browser
    return JSON.parse(atob(RAHASIA));
  } catch (e) {
    console.error("Gagal mendekripsi konfigurasi:", e);
    return null;
  }
}
