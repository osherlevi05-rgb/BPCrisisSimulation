const scenarios = [
    {
        imageUrl: "pic/1-rig.jpg",
        description: "אתם מנהלי הקידוח באסדת Deepwater Horizon. הקידוח באיחור של 40 יום, וכל יום עולה חצי מיליון דולר.\nהאם תאשרו תוכנית איטום העומדת בתקני המינימום אך משתמשת בפחות 'מרכזנים'?",
        bpOption: "כן. המהנדסים בדקו והתוכנית עומדת בתקן. חייבים להתייעל ולעמוד ביעדי התקציב של הפרויקט.",
        safeOption: "לא. למרות העלות הגבוהה של העיכוב, עדיף להוסיף מקדמי בטיחות מחמירים מעבר לנדרש בחוק.",
        bpConsequence: "בחרתם בהתייעלות. המלט לא נאטם כראוי סביב צינור הקידוח ויצר פתח לאסון. במציאות, החלטה זו של BP להתפשר על המינימום איפשרה לגז לדלוף בהמשך.",
        safeConsequence: "החלטה בטוחה אך יקרה בטווח הקצר. במציאות הנהלת BP העדיפה את היעילות הכלכלית ועמדה במינימום ההכרחי בלבד, מה שהוביל לכשל הנדסי."
    },
    {
        imageUrl: "pic/2-fire.webp",
        description: "בדיקות הלחץ של הבאר מראות תוצאות חריגות. צוותים מסוימים חושדים שיש דליפת גז, אך ייתכן שמדובר בתקלת חיישנים שגרתית.\nמה ההנחיה שלכם?",
        bpOption: "נבצע בדיקה חוזרת עם צינור חלופי. תקלות חיישנים הן נפוצות, ואסור להשבית קידוח שלם על סמך קריאה אחת שעשויה להיות שגויה.",
        safeOption: "נעצור מיד את כל הפעילות ונכריז על נוהל חירום, גם אם זה אומר השבתה יקרה של מספר ימים בשביל התרעת שווא.",
        bpConsequence: "ההיצמדות לשגרה עלתה בחיי אדם. במציאות, הצוותים פירשו לא נכון את הנתונים כדי להימנע מעיכוב. גז מתאן פרץ למעלה, האסדה התפוצצה ו-11 עובדים נהרגו.",
        safeConsequence: "בניהול סיכונים קיצוני - אין מקום לספק. במציאות, לו הצוות היה עוצר את העבודה לחלוטין כפי שהצעתם, האסון הקטלני היה נמנע."
    },
    {
        imageUrl: "pic/3-pr.jpg",
        description: "האסדה שקעה ונפט זורם לים. הממשל והתקשורת דורשים נתונים על קצב הדליפה כדי להיערך.\nמה תדווחו לציבור בהודעה הרשמית?",
        bpOption: "נסתמך על ההערכות הרשמיות של משמר החופים (5,000 חביות ביום). עדיף לספק נתון שמרני כדי לא לזרוע פאניקה ציבורית וכלכלית מיותרת.",
        safeOption: "נשחרר את התרחישים המחמירים ביותר שיש בידינו ונספק וידאו חי מהקרקעית, גם אם הדבר יפגע אנושות במניית החברה בטווח הקצר.",
        bpConsequence: "האמון הציבורי נהרס. מדענים חשפו במהרה שדלפו כ-60,000 חביות ביום. BP נתפסה כמי שמנסה לטייח את הממדים, מה שהוביל למשבר תדמיתי ולפטורי המנכ\"ל.",
        safeConsequence: "בניהול משברים מודרני - שקיפות מונעת שמועות. במציאות, BP התמהמהה בשחרור המידע, מה שהפך את הממשל והציבור לעוינים כלפיה."
    },
    {
        imageUrl: "pic/4-containment.jpg",
        description: "נפט ממשיך לזרום ללא שליטה. עליכם לבחור אסטרטגיה הנדסית לבלימת הדליפה בקרקעית הים.\nבאיזו פעולה תתמקדו כעת?",
        bpOption: "נפעיל פתרונות טקטיים מיידיים כמו הזרקת בוץ כבד (Top Kill) וכיפות פלדה. חייבים לעצור את הזרימה עכשיו, בכל אמצעי קיים.",
        safeOption: "נודה שהפתרונות המיידיים מסוכנים ומועדים לכישלון. נתמקד מראש בקידוח 'בארות הקלה' עוקפות, גם אם הדבר ייקח חודשים ארוכים.",
        bpConsequence: "האמצעים המהירים (ש-BP ניסתה בפועל) נכשלו בזה אחר זה עקב תנאי הלחץ והקור במעמקים. הציבור צפה בכישלונות בשידור חי, מה שהגביר את התסכול.",
        safeConsequence: "זהו הפתרון שעבד בסוף. במציאות, BP איבדה חודשיים על פתרונות קסם שניסו להראות פעילות מהירה, עד שבארות ההקלה (Bottom Kill) אטמו את הבאר בספטמבר."
    },
    {
        imageUrl: "pic/5-ecology.jpg",
        description: "כתם הנפט הענק מתקרב לחופי לואיזיאנה ומאיים להרוס את אזורי הרבייה של הדגה ואת ביצות החוף.\nאיך תטפלו בכתם בלב ים?",
        bpOption: "נאשר שימוש מאסיבי במפזרי נפט כימיים (Dispersants) מאושרים. זו הדרך המהירה ביותר לפרק את הכתם ולמנוע ממנו להרוס את החופים.",
        safeOption: "נאסור שימוש בכימיקלים רעילים כדי לא לפגוע בשוניות האלמוגים בקרקעית הים. נסתמך רק על שאיבה פיזית, גם אם נפט רב יגיע לחוף.",
        bpConsequence: "החלטה שנויה במחלוקת קשה. במציאות, BP בחרה בכימיקלים. הכתם אכן פוזר מפני השטח, אך התערובת הרעילה שקעה לקרקעית והרסה את שרשרת המזון לשנים רבות.",
        safeConsequence: "דילמה אקולוגית קלאסית: להציל את החוף או את הקרקעית? במציאות BP בחרה לפזר כימיקלים כדי להעלים את הכתם מהמצלמות, אך החמירה את האסון התת-ימי."
    },
    {
        imageUrl: "pic/6-legal.jpg",
        description: "שלב החירום מאחורינו, והחקירות הרשמיות מתחילות. עלויות הניקוי והפיצויים מאיימות על קיום החברה.\nמה תהיה האסטרטגיה המשפטית שלכם?",
        bpOption: "נגן על בעלי המניות. קבלני המשנה (Transocean ו-Halliburton) תפעלו את הציוד שכשל. ניאבק בבית המשפט על חלוקת אשמה ונטל כלכלי הוגנים.",
        safeOption: "נכריז על עצמנו כ'גורם האחראי' הבלעדי מול הציבור, נוותר על מאבקים משפטיים וניזום מיד קרן פיצויים של 20 מיליארד דולר לנפגעים.",
        bpConsequence: "גישה משפטית קרה בזמן משבר ציבורי היא הרסנית. ניסיונות BP לגלגל אחריות הכעיסו את הממשל, הובילו לחקיקה נוקשה נגדה, והחריפו את הפגיעה במוניטין.",
        safeConsequence: "זה מה ש-BP נאלצה לעשות בסוף, אך רק לאחר לחץ אדיר מהבית הלבן. התנדבות מראש לצעד כזה הייתה מצילה את שאריות האמון הציבורי בחברה."
    }
];

let currentStep = 0;
let isOptionABpChoice = true; // משתנה שיעקוב מי מהכפתורים קיבל הפעם את התשובה של BP

const scenarioBox = document.getElementById("scenario-box");
const scenarioImage = document.getElementById("scenario-image");
const scenarioText = document.getElementById("scenario-text");
const progressText = document.getElementById("progress-text");
const btnOptionA = document.getElementById("btn-option-a");
const btnOptionB = document.getElementById("btn-option-b");

const resultBox = document.getElementById("result-box");
const resultTitle = document.getElementById("result-title");
const resultText = document.getElementById("result-text");
const btnNext = document.getElementById("btn-next");

function loadScenario() {
    if (currentStep < scenarios.length) {
        progressText.innerText = `שלב ${currentStep + 1} מתוך ${scenarios.length}`;
        scenarioImage.src = scenarios[currentStep].imageUrl;
        scenarioImage.style.display = "block";
        scenarioText.innerText = `תרחיש ${currentStep + 1}:\n\n${scenarios[currentStep].description}`;
        
        // הגרלה: האם תשובת BP תהיה בכפתור א' או ב'?
        isOptionABpChoice = Math.random() < 0.5;
        
        if (isOptionABpChoice) {
            btnOptionA.innerText = scenarios[currentStep].bpOption;
            btnOptionB.innerText = scenarios[currentStep].safeOption;
        } else {
            btnOptionA.innerText = scenarios[currentStep].safeOption;
            btnOptionB.innerText = scenarios[currentStep].bpOption;
        }
        
        scenarioBox.classList.remove("hidden");
        resultBox.classList.add("hidden");
    } else {
        progressText.innerText = "הסיכום";
        scenarioImage.src = "https://placehold.co/700x300/1e1e1e/2ecc71?text=End+of+Simulation";
        scenarioText.innerText = "הסימולציה הסתיימה.\nחקר משבר BP מדגים כיצד שרשרת של החלטות המעדיפות חיסכון על פני בטיחות מובילה לאסון בלתי הפיך.";
        btnOptionA.classList.add("hidden");
        btnOptionB.classList.add("hidden");
        scenarioBox.classList.remove("hidden");
        resultBox.classList.add("hidden");
    }
}

// הפונקציה בודקת האם הכפתור שנלחץ הוא זה שהכיל את ההחלטה של BP
function showResult(clickedOptionA) {
    scenarioBox.classList.add("hidden");
    resultBox.classList.remove("hidden");
    
    const userChoseBP = (clickedOptionA === isOptionABpChoice);
    
    if (userChoseBP) {
        resultTitle.innerText = "השלכות ההחלטה (המציאות העגומה)";
        resultTitle.style.color = "#e74c3c";
        resultText.innerText = scenarios[currentStep].bpConsequence;
    } else {
        resultTitle.innerText = "החלטה אלטרנטיבית (מה קרה בפועל?)";
        resultTitle.style.color = "#27ae60";
        resultText.innerText = scenarios[currentStep].safeConsequence;
    }
}

btnOptionA.addEventListener("click", () => showResult(true));
btnOptionB.addEventListener("click", () => showResult(false));
btnNext.addEventListener("click", () => {
    currentStep++;
    loadScenario();
});

// אתחול
loadScenario();