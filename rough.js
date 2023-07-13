function getCurrentTime() {
  const today = new Date();
  const hour = String(today.get()).padStart(2, "0");
  return hour;
}

console.log(getCurrentTime());
