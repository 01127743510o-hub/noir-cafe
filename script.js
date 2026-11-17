
document.addEventListener("DOMContentLoaded", function () {

    // LANGUAGE SETTINGS

    const languageButton = document.getElementById("language-toggle");

    let currentLanguage =
        localStorage.getItem("noir-cafe-language") || "en";

    if (!["en", "ar"].includes(currentLanguage)) {
        currentLanguage = "en";
    }


    // TRANSLATIONS

    const translations = {

        en: {

            navHome: "Home",
            navAbout: "About",
            navMenu: "Menu",
            navGallery: "Gallery",
            navContact: "Contact",

            heroSubtitle: "COFFEE • MOMENTS • EXPERIENCE",
            heroTitle: "A Taste of Elegance",
            heroDescription: "Discover the art of coffee in a place designed for unforgettable moments.",
            heroButton: "Explore Our Menu",

            aboutSubtitle: "OUR STORY",
            aboutTitle: "More Than Just Coffee",
            aboutDescription: "At NOIR CAFÉ, we believe that every cup tells a story. We bring together premium coffee, elegant design, and a welcoming atmosphere to create a unique experience.",
            aboutButton: "Discover More",

            menuSubtitle: "OUR MENU",
            menuTitle: "Discover Our Selection",
            menuDescription: "Carefully crafted drinks and delicious treats.",

            product1: "Espresso",
            product1Description: "Rich and bold classic espresso.",

            product2: "Cappuccino",
            product2Description: "Espresso with steamed milk and foam.",

            product3: "Caffè Latte",
            product3Description: "Smooth espresso blended with milk.",

            product4: "Spanish Latte",
            product4Description: "A creamy coffee with a sweet touch.",

            product5: "Iced Americano",
            product5Description: "Refreshing espresso served over ice.",

            product6: "Chocolate Cake",
            product6Description: "A delicious chocolate dessert.",

            product7: "Mocha",
            product7Description: "A rich blend of espresso and chocolate.",

            product8: "Caramel Macchiato",
            product8Description: "Espresso, milk, and a sweet caramel touch.",

            product9: "Hot Chocolate",
            product9Description: "Smooth and comforting chocolate drink.",

            product10: "Spanish Hot Chocolate",
            product10Description: "Creamy hot chocolate with a sweet Spanish twist.",

            product11: "Blueberry Cheesecake",
            product11Description: "Creamy cheesecake topped with blueberries.",

            product12: "Butter Croissant",
            product12Description: "A flaky and buttery golden pastry.",

            priceNote: "All menu prices are for demonstration purposes only.",

            featuresSubtitle: "THE NOIR EXPERIENCE",
            featuresTitle: "Why Choose NOIR CAFÉ?",

            feature1Title: "Premium Coffee",
            feature1Description: "A carefully selected coffee experience.",

            feature2Title: "Elegant Atmosphere",
            feature2Description: "A comfortable space with a modern design.",

            feature3Title: "Made With Passion",
            feature3Description: "Every detail is designed with care.",

            gallerySubtitle: "OUR GALLERY",
            galleryTitle: "Moments at NOIR",
            galleryDescription: "Explore the atmosphere and details of our café.",

            contactSubtitle: "GET IN TOUCH",
            contactTitle: "We Would Love to See You",
            contactDescription: "Discover a place where coffee meets elegance.",
            contactButton: "Back to Home",

            demoNotice: "This website is a demonstration project. Contact and ordering services are not active.",

            footerText: "Coffee • Moments • Experience",
            rights: "All rights reserved."

        },


        ar: {

            navHome: "الرئيسية",
            navAbout: "من نحن",
            navMenu: "القائمة",
            navGallery: "معرض الصور",
            navContact: "تواصل معنا",

            heroSubtitle: "قهوة • لحظات • تجربة",
            heroTitle: "طعم من الأناقة",
            heroDescription: "اكتشف فن القهوة في مكان صُمم ليمنحك لحظات لا تُنسى.",
            heroButton: "اكتشف قائمتنا",

            aboutSubtitle: "حكايتنا",
            aboutTitle: "أكثر من مجرد قهوة",
            aboutDescription: "في NOIR CAFÉ نؤمن أن كل فنجان يحكي قصة. نجمع بين القهوة المميزة والتصميم الأنيق والأجواء المريحة لنقدم لك تجربة مختلفة.",
            aboutButton: "اكتشف المزيد",

            menuSubtitle: "قائمتنا",
            menuTitle: "اكتشف اختياراتنا",
            menuDescription: "مشروبات مُحضّرة بعناية وحلويات لذيذة.",

            product1: "إسبريسو",
            product1Description: "قهوة إسبريسو كلاسيكية غنية وقوية.",

            product2: "كابتشينو",
            product2Description: "إسبريسو مع الحليب المبخر والرغوة.",

            product3: "كافيه لاتيه",
            product3Description: "إسبريسو ناعم ممزوج بالحليب.",

            product4: "سبانيش لاتيه",
            product4Description: "قهوة كريمية بلمسة من الحلاوة.",

            product5: "آيس أمريكانو",
            product5Description: "إسبريسو منعش يُقدم مع الثلج.",

            product6: "كيكة الشوكولاتة",
            product6Description: "حلوى شوكولاتة لذيذة.",

            product7: "موكا",
            product7Description: "مزيج غني من الإسبريسو والشوكولاتة.",

            product8: "كراميل ماكياتو",
            product8Description: "إسبريسو مع الحليب ولمسة من الكراميل الحلو.",

            product9: "هوت شوكليت",
            product9Description: "مشروب شوكولاتة ناعم ودافئ.",

            product10: "سبانيش هوت شوكليت",
            product10Description: "شوكولاتة ساخنة كريمية بلمسة إسبانية حلوة.",

            product11: "تشيز كيك بالتوت الأزرق",
            product11Description: "تشيز كيك كريمي مغطى بالتوت الأزرق.",

            product12: "كرواسون بالزبدة",
            product12Description: "كرواسون ذهبي هش وغني بالزبدة.",

            priceNote: "جميع أسعار القائمة تجريبية لغرض عرض المشروع فقط.",

            featuresSubtitle: "تجربة NOIR",
            featuresTitle: "لماذا تختار NOIR CAFÉ؟",

            feature1Title: "قهوة مميزة",
            feature1Description: "تجربة قهوة مختارة بعناية.",

            feature2Title: "أجواء أنيقة",
            feature2Description: "مساحة مريحة بتصميم عصري.",

            feature3Title: "شغف في كل تفصيلة",
            feature3Description: "كل تفصيلة صُممت بعناية.",

            gallerySubtitle: "معرض الصور",
            galleryTitle: "لحظات في NOIR",
            galleryDescription: "اكتشف أجواء وتفاصيل الكافيه.",

            contactSubtitle: "تواصل معنا",
            contactTitle: "يسعدنا أن نراك",
            contactDescription: "اكتشف مكانًا تلتقي فيه القهوة بالأناقة.",
            contactButton: "العودة للرئيسية",

            demoNotice: "هذا الموقع مشروع تجريبي. خدمات التواصل والطلبات غير مفعّلة.",

            footerText: "قهوة • لحظات • تجربة",
            rights: "جميع الحقوق محفوظة."

        }

    };


    // APPLY LANGUAGE

    function applyLanguage(language) {

        currentLanguage = language;

        document.documentElement.lang = language;

        document.documentElement.dir =
            language === "ar" ? "rtl" : "ltr";


        document.querySelectorAll("[data-i18n]").forEach(function (element) {

            const key = element.getAttribute("data-i18n");

            if (translations[language][key]) {
                element.textContent = translations[language][key];
            }

        });


        if (languageButton) {

            languageButton.textContent =
                language === "en" ? "AR" : "EN";

            languageButton.setAttribute(
                "aria-label",
                language === "en"
                    ? "Switch to Arabic"
                    : "التبديل إلى الإنجليزية"
            );

        }


        localStorage.setItem("noir-cafe-language", language);

    }


    // LANGUAGE BUTTON

    if (languageButton) {

        languageButton.addEventListener("click", function () {

            const newLanguage =
                currentLanguage === "en" ? "ar" : "en";

            applyLanguage(newLanguage);

        });

    }


    // MOBILE NAVIGATION

    const menuButton = document.getElementById("menu-toggle");
    const navigation = document.getElementById("nav-links");


    function closeMenu() {

        if (menuButton && navigation) {

            navigation.classList.remove("active");

            menuButton.setAttribute("aria-expanded", "false");

        }

    }


    if (menuButton && navigation) {

        menuButton.addEventListener("click", function () {

            const isOpen =
                navigation.classList.toggle("active");

            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        });


        navigation.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", closeMenu);

        });


        document.addEventListener("keydown", function (event) {

            if (event.key === "Escape") {
                closeMenu();
            }

        });

    }


    // CURRENT YEAR

    const yearElement = document.getElementById("current-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    // INITIAL LANGUAGE

    applyLanguage(currentLanguage);

        // HOME BUTTON - INSTANT SCROLL

    document.querySelectorAll('a[href="#home"]').forEach(function (homeLink) {

        homeLink.addEventListener("click", function (event) {

            event.preventDefault();

            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "instant"
            });

            closeMenu();

        });

    });
});
