document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("8picUWhfnmr2c_IBo");
    
    // Set initial button text based on default language
    updateLanguageText("en");
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
      const dropdown = document.getElementById("languageDropdown");
      const languageButton = document.querySelector('button[onclick="toggleLanguageDropdown()"]');
      
      if (dropdown && !dropdown.classList.contains('hidden') && 
          !dropdown.contains(event.target) && 
          event.target !== languageButton) {
        dropdown.classList.add('hidden');
      }
    });
  });
  
  const translations = {
    en: {
      login_text: "Login with Email",
      guest_text: "Continue as Guest",
      scan_title: "Scan Your Crop for Diseases",
      get_recommendations: "Get Recommendations",
      location_title: "Get Location-Based Crop Recommendations",
      analyzing: "Analyzing image...",
      chat_title: "Chat with KisanBandhu AI",
      close: "Close",
      listening: "Listening... Say a command",
      voice_commands: "Available commands: theme, chat, login, english/hindi/telugu/tamil/malayalam/kannada/bengali/marathi/urdu, location"
    },
    hi: {
      login_text: "ईमेल से लॉगिन करें",
      guest_text: "अतिथि के रूप में जारी रखें",
      scan_title: "अपनी फसल को रोगों के लिए स्कैन करें",
      get_recommendations: "सिफारिशें प्राप्त करें",
      location_title: "स्थान-आधारित फसल अनुशंसाएँ प्राप्त करें",
      analyzing: "छवि का विश्लेषण किया जा रहा है...",
      chat_title: "किसानबंधु एआई के साथ चैट करें",
      close: "बंद करें",
      listening: "सुन रहा हूँ... कोई आदेश दें",
      voice_commands: "उपलब्ध आदेश: थीम, चैट, लॉगिन, अंग्रेज़ी/हिंदी/तेलुगु/तमिल/മലയാളം/ಕನ್ನಡ/বাংলা/मराठी/اردو, स्थान"
    },
    te: {
      login_text: "ఇమెయిల్‌తో లాగిన్ అవ్వండి",
      guest_text: "అతిథిగా కొనసాగండి",
      scan_title: "మీ పంటను వ్యాధుల కోసం స్కాన్ చేయండి",
      get_recommendations: "సిఫార్సులు పొందండి",
      location_title: "స్థాన-ఆధారిత పంట సిఫార్సులను పొందండి",
      analyzing: "చిత్రాన్ని విశ్లేషిస్తోంది...",
      chat_title: "కిసాన్‌బంధు AI తో చాట్ చేయండి",
      close: "మూసివేయి",
      listening: "వింటున్నాను... ఒక ఆదేశం ఇవ్వండి",
      voice_commands: "అందుబాటులో ఉన్న ఆదేశాలు: థీమ్, చాట్, లాగిన్, ఇంగ్లీష్/హిందీ/తెలుగు/తమిళ/മലയാളം/ಕನ್ನಡ/বাংলা/मराठी/اردو, స్థానం"
    },
    ta: {
      login_text: "மின்னஞ்சலில் உள்நுழையவும்",
      guest_text: "விருந்தினராக தொடரவும்",
      scan_title: "உங்கள் பயிரைக் கண்டறிய ஸ்கேன் செய்யவும்",
      get_recommendations: "பரிந்துரைகளை பெறவும்",
      location_title: "இடத்தை சார்ந்த பயிர் பரிந்துரைகள்",
      analyzing: "படத்தை பகுப்பாய்வு செய்கிறது...",
      chat_title: "KisanBandhu AI உடன் அரட்டை செய்யவும்",
      close: "மூடு",
      listening: "கேட்டு கொண்டிருக்கிறது... ஒரு கட்டளை கூறவும்",
      voice_commands: "கிடைக்கும் கட்டளைகள்: தீம், அரட்டை, உள்நுழைவு, ஆங்கிலம்/இந்தி/தெலுங்கு/தமிழ்/മലയാളം/ಕನ್ನಡ/বাংলা/मराठी/اردو, இடம்"
    },
    ml: {
      login_text: "ഇമെയിൽ ഉപയോഗിച്ച് ലോഗിൻ ചെയ്യുക",
      guest_text: "അതിഥിയായി തുടരുക",
      scan_title: "നിങ്ങളുടെ വിളയെ രോഗങ്ങൾ കണ്ടെത്താൻ സ്കാൻ ചെയ്യുക",
      get_recommendations: "പരാമർശങ്ങൾ നേടുക",
      location_title: "നിങ്ങളുടെ ലൊക്കേഷനിൽ ആധാരമാക്കി വിള പരാമർശങ്ങൾ",
      analyzing: "ചിത്രം വിശകലനം ചെയ്യുന്നു...",
      chat_title: "KisanBandhu AI-യുമായി ചാറ്റ് ചെയ്യുക",
      close: "അടയ്ക്കുക",
      listening: "കേൾക്കുന്നു... ഒരു കമാൻഡ് പറയൂ",
      voice_commands: "ലഭ്യമായ കമാൻഡുകൾ: തീം, ചാറ്റ്, ലോഗിൻ, ഇംഗ്ലീഷ്/ഹിന്ദി/തെലുങ്ക്/തമിഴ്/മലയാളം/ಕನ್ನಡ/বাংলা/मराठी/اردو, ലൊക്കേഷൻ"
    },
    kn: {
      login_text: "ಇಮೇಲ್ ಮೂಲಕ ಲಾಗಿನ್ ಮಾಡಿರಿ",
      guest_text: "ಅತಿಥಿಯಾಗಿ ಮುಂದುವರಿಸಿ",
      scan_title: "ನಿಮ್ಮ ಬೆಳೆಗಿರುವ ರೋಗಗಳನ್ನು ಪತ್ತೆಮಾಡಲು ಸ್ಕ್ಯಾನ್ ಮಾಡಿ",
      get_recommendations: "ಸಲಹೆಗಳು ಪಡೆಯಿರಿ",
      location_title: "ನಿಮ್ಮ ಸ್ಥಳಾಧಾರಿತ ಬೆಳೆ ಸಲಹೆಗಳು",
      analyzing: "ಚಿತ್ರವನ್ನು ವಿಶ್ಲೇಷಿಸಲಾಗುತ್ತಿದೆ...",
      chat_title: "KisanBandhu AI ಜೊತೆಗೆ ಚಾಟ್ ಮಾಡಿ",
      close: "ಮುಚ್ಚಿರಿ",
      listening: "ಕೇಳುತ್ತಿದೆ... ಒಂದು ಸೂಚನೆ ನೀಡಿ",
      voice_commands: "ಲಭ್ಯವಿರುವ ಸೂಚನೆಗಳು: ಥೀಮ್, ಚಾಟ್, ಲಾಗಿನ್, ಇಂಗ್ಲಿಷ್/ಹಿಂದಿ/ತೆಲుగు/ತಮಿಳು/മലയാളം/ಕನ್ನಡ/বাংলা/मराठी/اردو, ಸ್ಥಳ"
    },
    bn: {
      login_text: "ইমেইলের মাধ্যমে লগইন করুন",
      guest_text: "অতিথি হিসেবে চালিয়ে যান",
      scan_title: "আপনার ফসলের রোগ শনাক্ত করতে স্ক্যান করুন",
      get_recommendations: "সুপারিশ পান",
      location_title: "আপনার অবস্থান ভিত্তিক ফসল সুপারিশ",
      analyzing: "ছবি বিশ্লেষণ করা হচ্ছে...",
      chat_title: "KisanBandhu AI এর সাথে চ্যাট করুন",
      close: "বন্ধ করুন",
      listening: "শোনা হচ্ছে... একটি কমান্ড বলুন",
      voice_commands: "উপলব্ধ কমান্ড: থিম, চ্যাট, লগইন, ইংরেজি/হিন্দি/তেলেগু/তামিল/മലയാളം/ಕನ್ನಡ/বাংলা/मराठी/اردو, লোকেশন"
    },
    mr: {
      login_text: "ईमेलद्वारे लॉगिन करा",
      guest_text: "अतिथी म्हणून सुरू ठेवा",
      scan_title: "आपल्या पिकांवरील रोग शोधण्यासाठी स्कॅन करा",
      get_recommendations: "सूचना मिळवा",
      location_title: "आपल्या स्थानावर आधारित पिकांसाठी सूचना",
      analyzing: "प्रतिमा विश्लेषण चालू आहे...",
      chat_title: "KisanBandhu AI सह चॅट करा",
      close: "बंद करा",
      listening: "ऐकत आहे... एक आदेश सांगा",
      voice_commands: "उपलब्ध आदेश: थीम, चॅट, लॉगिन, इंग्रजी/हिंदि/तेलुगू/तमिळ/മലയാളം/ಕನ್ನಡ/বাংলা/मराठी/اردو, स्थान"
    },
    ur: {
      login_text: "ای میل کے ذریعے لاگ ان کریں",
      guest_text: "مہمان کے طور پر جاری رکھیں",
      scan_title: "اپنی فصل کے امراض معلوم کرنے کے لیے اسکین کریں",
      get_recommendations: "سفارشات حاصل کریں",
      location_title: "آپ کے مقام پر مبنی فصل کی سفارشات",
      analyzing: "تصویر کا تجزیہ کیا جا رہا ہے...",
      chat_title: "KisanBandhu AI کے ساتھ چیٹ کریں",
      close: "بند کریں",
      listening: "سن رہا ہے... ایک کمانڈ بتائیں",
      voice_commands: "دستیاب کمانڈز: تھیم, چیٹ, لاگ ان, انگریزی/ہندی/تِلگو/تمل/മലയാളം/ಕನ್ನಡ/বাংলা/मराठी/اردو, مقام"
    }
  };
  
  
  
  // Updated chatbot links for the three trained bots
  const chatbotLinks = {
    en: "https://app.fastbots.ai/embed/cm7nq8s0w076fs5k49w5aevo3",
    hi: "https://app.fastbots.ai/embed/cm7nr37190wo9rik6bs1d352c",
    te: "https://app.fastbots.ai/embed/cm7njf6iw0c9hn8luthwq3pvq",
    ta: "https://app.fastbots.ai/embed/cm7o9um121cowrik6sxyl2uif",
    ml: "https://app.fastbots.ai/embed/cm7oa1y5q1cq6rik623v35lbq",
    kn: "https://app.fastbots.ai/embed/cm7o9tah11coqrik6k1agda58",
    bn: "https://app.fastbots.ai/embed/cm7obogug1d4jrik6afmjt0vj",  // Bengali
    mr: "https://app.fastbots.ai/embed/cm7obi7u90eafs5k4gy9mdtzv",  // Marathi
    ur: "https://app.fastbots.ai/embed/cm7oby26z0ed9s5k4e5clfjp4"   // Urdu
  };
  
  
  
  
  let selectedLanguage = "en"; 
  let generatedOTP = "";
  let otpExpiry = 0;
  
  function updateLanguageText(lang) {
    // Update button text according to selected language
    const loginBtn = document.getElementById("login-btn");
    const guestBtn = document.getElementById("guest-btn");
    const scanTitle = document.querySelector('.text-center h2');
    const locationTitle = document.querySelector('#getLocationBtn').parentNode.querySelector('h2');
    const getLocationBtn = document.getElementById("getLocationBtn");
    const chatTitle = document.querySelector('#chatbotSection .bg-accent h2');
    const closeBtn = document.querySelector('#chatbotSection button');
    const voiceStatus = document.getElementById('voiceStatus');
    
    if (loginBtn && guestBtn) {
      loginBtn.innerText = translations[lang].login_text;
      guestBtn.innerText = translations[lang].guest_text;
    }
    
    if (scanTitle) {
      scanTitle.innerText = translations[lang].scan_title;
    }
    
    if (locationTitle) {
      locationTitle.innerText = translations[lang].location_title;
    }
    
    if (getLocationBtn) {
      getLocationBtn.innerText = translations[lang].get_recommendations;
    }
    
    if (chatTitle) {
      chatTitle.innerText = translations[lang].chat_title;
    }
    
    if (closeBtn) {
      closeBtn.innerText = translations[lang].close;
    }
    
    // Update voice status text
    if (voiceStatus) {
      voiceStatus.innerHTML = `
        <p>${translations[lang].listening}</p>
        <p class="text-xs mt-1 opacity-75">${translations[lang].voice_commands}</p>
      `;
    }
    
    // Update loading text
    const loadingText = document.querySelector('#loadingIndicator p');
    if (loadingText) {
      loadingText.innerText = translations[lang].analyzing;
    }
  }
  function changeLanguage(lang) {
    selectedLanguage = lang;
    updateLanguageText(lang);
  
    // If chatbot is open, update the frame source
    const chatbotSection = document.getElementById("chatbotSection");
    if (!chatbotSection.classList.contains("hidden")) {
      updateChatbotFrame(lang);
    }
  
    // Close the dropdown after selection (optional)
    toggleLanguageDropdown();
  }
  
  
  
  function updateChatbotFrame(lang) {
    const chatbotFrame = document.getElementById("chatbotFrame");
    if (chatbotFrame) {
      chatbotFrame.src = chatbotLinks[lang];
      console.log(`Chatbot frame updated to: ${chatbotLinks[lang]}`);
    }
  }
  
  function toggleTheme() {
    let body = document.body;
    if (body.getAttribute("data-theme") === "dark") {
      body.setAttribute("data-theme", "light");
    } else {
      body.setAttribute("data-theme", "dark");
    }
  }
  
  function toggleLanguageDropdown() {
    const dropdown = document.getElementById("languageDropdown");
    dropdown.classList.toggle("hidden");
  }
  
  
  
  function showLoginForm() {
    document.getElementById("chatbotSection").classList.add("hidden");
    document.getElementById("chatbotFrame").src = "";
    document.getElementById("loginForm").classList.remove("hidden");
  }
  
  function showChatbot() {
    document.getElementById("loginForm").classList.add("hidden");
    updateChatbotFrame(selectedLanguage);
    document.getElementById("chatbotSection").classList.remove("hidden");
  }
  
  function closeChatbot() {
    document.getElementById("chatbotSection").classList.add("hidden");
    document.getElementById("chatbotFrame").src = "";
  }
  
  function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }
  
  function sendOTP() {
    let email = document.getElementById("email").value;
    let message = document.getElementById("message");
  
    if (!email) {
      message.style.color = "red";
      message.textContent = "Please enter your email.";
      return;
    }
  
    if (!isValidEmail(email)) {
      message.style.color = "red";
      message.textContent = "Please enter a valid email address.";
      return;
    }
  
    generatedOTP = generateOTP();
    otpExpiry = Date.now() + 300000; // OTP valid for 5 minutes
  
    let templateParams = {
      from_name: "KisanBandhu AI",
      to_email: email,
      otp: generatedOTP,
      message: `Your OTP is ${generatedOTP}. It is valid for 5 minutes.`
    };
  
    message.style.color = "blue";
    message.textContent = "Sending OTP...";
  
    emailjs.send("service_q53ynoo", "template_2jz7rg7", templateParams)
      .then(() => {
        message.style.color = "green";
        message.textContent = "OTP sent successfully! Check your email.";
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        message.style.color = "red";
        message.textContent = "Failed to send OTP. Please try again.";
      });
  }
  
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function verifyOTP() {
    let enteredOTP = document.getElementById("otp").value;
    let message = document.getElementById("message");
  
    if (!enteredOTP) {
      message.style.color = "red";
      message.textContent = "Please enter the OTP.";
      return;
    }
  
    if (Date.now() > otpExpiry) {
      message.style.color = "red";
      message.textContent = "OTP has expired. Please request a new one.";
      return;
    }
  
    if (enteredOTP === generatedOTP) {
      message.style.color = "green";
      message.textContent = "OTP Verified Successfully!";
      setTimeout(() => {
        document.getElementById("loginForm").classList.add("hidden");
        showChatbot();
      }, 1000);
    } else {
      message.style.color = "red";
      message.textContent = "Invalid OTP. Please try again.";
    }
  }
  
  // Function to handle voice commands
  function processVoiceCommand(command) {
    command = command.toLowerCase();
    
    if (command.includes('dark') || command.includes('light') || command.includes('theme')) {
      toggleTheme();
      return true;
    } else if (command.includes('chat') || command.includes('chatbot')) {
      showChatbot();
      return true;
    } else if (command.includes('login')) {
      showLoginForm();
      return true;
    } else if (command.includes('english') || command.includes('hindi') || command.includes('telugu')) {
      if (command.includes('english')) {
        changeLanguage('en');
      } else if (command.includes('hindi')) {
        changeLanguage('hi');
      } else if (command.includes('telugu')) {
        changeLanguage('te');
      }
      return true;
    } else if (command.includes('location') || command.includes('recommendation')) {
      getLocationRecommendations();
      return true;
    }
    
    return false;
  }
  
  // Toggle voice assistant
  function toggleVoiceAssistant() {
    const voiceStatus = document.getElementById('voiceStatus');
    const voiceButton = document.getElementById('voiceAssistantBtn');
    
    if (voiceStatus.classList.contains('hidden')) {
      // Start listening
      voiceStatus.classList.remove('hidden');
      voiceButton.classList.add('pulse');
      
      // Update voice status with available commands
      voiceStatus.innerHTML = `
        <p>${translations[selectedLanguage].listening}</p>
        <p class="text-xs mt-1 opacity-75">${translations[selectedLanguage].voice_commands}</p>
      `;
      
      if (speechModule && typeof speechModule.startListening === 'function') {
        speechModule.startListening();
      }
    } else {
      // Stop listening
      voiceStatus.classList.add('hidden');
      voiceButton.classList.remove('pulse');
      
      if (speechModule && typeof speechModule.stopListening === 'function') {
        speechModule.stopListening();
      }
    }
  }