const currentURL = window.location.href;
let issues = [];

// 1. URL Check
if (isSuspiciousURL(currentURL)) {
  issues.push("⚠️ Suspicious URL pattern detected!");
}

// 2. SSL Check
if (!isHTTPS()) {
  issues.push("❌ This site is not using HTTPS.");
}

// 3. Content Scanner (Detect scammy keywords)
if (containsScamContent()) {
  issues.push("⚠️ This site contains scammy keywords like 'Win iPhone'!");
}

// Display warning popup if any issues
if (issues.length > 0) {
  alert(`PhishGuard Warning:\n\n${issues.join("\n")}`);
}

// --- Utility Functions ---
function isSuspiciousURL(url) {
  const suspiciousPatterns = [
    /[0-9]{1,3}(\.[0-9]{1,3}){3}/, // IP-based URLs
    /(\.xyz|\.top|\.ru|\.tk)/,     // Suspicious TLDs
    /(g00gle|paypa1|faceb00k|instagrarn)/i // Common typo patterns
  ];

  return suspiciousPatterns.some(pattern => pattern.test(url));
}

function isHTTPS() {
  return window.location.protocol === "https:";
}

function containsScamContent() {
  const scamKeywords = ['Congratulations', 'Win iPhone', 'Claim Prize', 'Free Gift'];
  const pageText = document.body.innerText;
  return scamKeywords.some(keyword => pageText.includes(keyword));
}