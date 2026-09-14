const LANGUAGES = {
    fr: { name: 'Français', flag: '🇫🇷', dir: 'ltr' },
    en: { name: 'English',  flag: '🇬🇧', dir: 'ltr' },
    ar: { name: 'العربية',  flag: '🇸🇦', dir: 'rtl' },
    es: { name: 'Español',  flag: '🇪🇸', dir: 'ltr' }
};

const TRANSLATIONS = {
    fr: {
        lang_label: "Langue",
        login: "Se connecter",
        register: "Créer un compte",
        logout: "Déconnexion",
        hero_badge: "Panafricain",
        hero_title: "Échangez, partagez, conservez votre histoire.",
        hero_desc: "Demma est le premier réseau social africain de troc de produits digitaux et de mémoire collective. Rejoignez des milliers de créateurs, artistes et citoyens.",
        hero_start: "Démarrer",
        hero_learn: "En savoir plus",
        objectives_title: "🎯 Nos Objectifs",
        objectives_sub: "Quatre piliers pour construire l'Afrique de demain.",
        obj_exchange: "Échanges",
        obj_exchange_desc: "Troc de produits digitaux et physiques sans argent.",
        obj_info: "Informations",
        obj_info_desc: "Accédez à des données authentiques sur l'Afrique.",
        obj_comm: "Communication",
        obj_comm_desc: "Messagerie intégrée, appels audio/vidéo, partage de fichiers.",
        obj_conserv: "Conservation",
        obj_conserv_desc: "Préservation de la mémoire collective africaine.",
        reg_title: "Créez votre compte",
        reg_sub: "Rejoignez la communauté africaine d'échange",
        reg_already: "Déjà membre ?",
        reg_login_link: "Se connecter",
        reg_info: "Mode test : utilisez le numéro +229 90 00 00 00 et le code 123456.",
        field_name: "Nom complet",
        field_gender: "Sexe",
        field_age: "Âge",
        field_country: "Pays de résidence",
        field_phone: "Numéro de téléphone",
        field_activity: "Domaine d'activité",
        field_password: "Mot de passe",
        field_confirm: "Confirmer le mot de passe",
        field_email: "Adresse email (optionnelle)",
        select_placeholder: "Sélectionner",
        select_country: "Sélectionner un pays",
        select_activity: "Sélectionner un domaine",
        btn_register: "Valider mon inscription",
        btn_save_email: "Enregistrer l'email",
        btn_login: "Se connecter",
        btn_validate_account: "Valider mon compte",
        gender_male: "Homme",
        gender_female: "Femme",
        gender_other: "Autre",
        log_title: "Connectez-vous à votre compte",
        log_no_account: "Pas encore membre ?",
        log_create_link: "Créer un compte",
        log_forgot: "Mot de passe oublié ?",
        log_remember: "Se souvenir de moi",
        log_or: "ou",
        log_create_btn: "Créer un compte Demma",
        ver_title: "Vérification du numéro",
        ver_sub: "Saisissez le code à 6 chiffres reçu",
        ver_label: "Code de vérification",
        ver_info: "Mode test : entrez le code 123456",
        prof_title: "Mon profil",
        prof_settings: "Paramètres du compte",
        prof_change_photo: "Changer la photo",
        err_name: "Veuillez entrer votre nom.",
        err_gender: "Veuillez choisir votre sexe.",
        err_age: "Veuillez choisir votre âge.",
        err_country: "Veuillez choisir votre pays.",
        err_phone: "Veuillez entrer un numéro valide.",
        err_activity: "Veuillez choisir votre domaine.",
        err_pwd: "Le mot de passe doit contenir au moins 6 caractères.",
        err_confirm: "Les mots de passe ne correspondent pas.",
        success_register: "Inscription réussie ! Bienvenue sur Demma. 🎉",
        success_login: "Connexion réussie !",
        success_avatar: "Photo de profil mise à jour !",
        success_email: "Email enregistré !"
    },
    en: {
        lang_label: "Language",
        login: "Log in",
        register: "Sign up",
        logout: "Log out",
        hero_badge: "Pan-African",
        hero_title: "Exchange, share, preserve your story.",
        hero_desc: "Demma is the first African social network for trading digital products and collective memory. Join thousands of creators, artists and citizens.",
        hero_start: "Get started",
        hero_learn: "Learn more",
        objectives_title: "🎯 Our Goals",
        objectives_sub: "Four pillars to build tomorrow's Africa.",
        obj_exchange: "Exchange",
        obj_exchange_desc: "Trade digital and physical products without money.",
        obj_info: "Information",
        obj_info_desc: "Access authentic data about Africa.",
        obj_comm: "Communication",
        obj_comm_desc: "Built-in messaging, audio/video calls, file sharing.",
        obj_conserv: "Preservation",
        obj_conserv_desc: "Preservation of African collective memory.",
        reg_title: "Create your account",
        reg_sub: "Join the African exchange community",
        reg_already: "Already a member?",
        reg_login_link: "Log in",
        reg_info: "Test mode: use number +229 90 00 00 00 and code 123456.",
        field_name: "Full name",
        field_gender: "Gender",
        field_age: "Age",
        field_country: "Country",
        field_phone: "Phone number",
        field_activity: "Activity field",
        field_password: "Password",
        field_confirm: "Confirm password",
        field_email: "Email address (optional)",
        select_placeholder: "Select",
        select_country: "Select a country",
        select_activity: "Select a field",
        btn_register: "Confirm my registration",
        btn_save_email: "Save email",
        btn_login: "Log in",
        btn_validate_account: "Verify my account",
        gender_male: "Male",
        gender_female: "Female",
        gender_other: "Other",
        log_title: "Log in to your account",
        log_no_account: "Not a member yet?",
        log_create_link: "Create an account",
        log_forgot: "Forgot password?",
        log_remember: "Remember me",
        log_or: "or",
        log_create_btn: "Create a Demma account",
        ver_title: "Phone verification",
        ver_sub: "Enter the 6-digit code received",
        ver_label: "Verification code",
        ver_info: "Test mode: enter code 123456",
        prof_title: "My profile",
        prof_settings: "Account settings",
        prof_change_photo: "Change photo",
        err_name: "Please enter your name.",
        err_gender: "Please choose your gender.",
        err_age: "Please choose your age.",
        err_country: "Please choose your country.",
        err_phone: "Please enter a valid number.",
        err_activity: "Please choose your field.",
        err_pwd: "Password must be at least 6 characters.",
        err_confirm: "Passwords do not match.",
        success_register: "Registration successful! Welcome to Demma. 🎉",
        success_login: "Login successful!",
        success_avatar: "Profile photo updated!",
        success_email: "Email saved!"
    },
    ar: {
        lang_label: "اللغة",
        login: "تسجيل الدخول",
        register: "إنشاء حساب",
        logout: "تسجيل الخروج",
        hero_badge: "أفريقي",
        hero_title: "تبادل، شارك، احفظ قصتك.",
        hero_desc: "ديمّا هي أول شبكة اجتماعية أفريقية لتبادل المنتجات الرقمية والذاكرة الجماعية.",
        hero_start: "ابدأ",
        hero_learn: "اعرف المزيد",
        objectives_title: "🎯 أهدافنا",
        objectives_sub: "أربع ركائز لبناء أفريقيا الغد.",
        obj_exchange: "التبادل",
        obj_exchange_desc: "تبادل المنتجات الرقمية والمادية بدون مال.",
        obj_info: "المعلومات",
        obj_info_desc: "الوصول إلى بيانات حقيقية عن أفريقيا.",
        obj_comm: "التواصل",
        obj_comm_desc: "مراسلة مدمجة، مكالمات صوتية ومرئية، مشاركة الملفات.",
        obj_conserv: "الحفظ",
        obj_conserv_desc: "الحفاظ على الذاكرة الجماعية الأفريقية.",
        reg_title: "أنشئ حسابك",
        reg_sub: "انضم إلى مجتمع التبادل الأفريقي",
        reg_already: "عضو بالفعل؟",
        reg_login_link: "تسجيل الدخول",
        reg_info: "وضع الاختبار: استخدم الرقم +229 90 00 00 00 والرمز 123456.",
        field_name: "الاسم الكامل",
        field_gender: "الجنس",
        field_age: "العمر",
        field_country: "بلد الإقامة",
        field_phone: "رقم الهاتف",
        field_activity: "مجال النشاط",
        field_password: "كلمة المرور",
        field_confirm: "تأكيد كلمة المرور",
        field_email: "البريد الإلكتروني (اختياري)",
        select_placeholder: "اختر",
        select_country: "اختر بلدًا",
        select_activity: "اختر مجالًا",
        btn_register: "تأكيد التسجيل",
        btn_save_email: "حفظ البريد",
        btn_login: "تسجيل الدخول",
        btn_validate_account: "تأكيد حسابي",
        gender_male: "ذكر",
        gender_female: "أنثى",
        gender_other: "آخر",
        log_title: "سجل الدخول إلى حسابك",
        log_no_account: "لست عضوًا بعد؟",
        log_create_link: "إنشاء حساب",
        log_forgot: "نسيت كلمة المرور؟",
        log_remember: "تذكرني",
        log_or: "أو",
        log_create_btn: "إنشاء حساب ديمّا",
        ver_title: "التحقق من الرقم",
        ver_sub: "أدخل الرمز المكون من 6 أرقام",
        ver_label: "رمز التحقق",
        ver_info: "وضع الاختبار: أدخل الرمز 123456",
        prof_title: "ملفي الشخصي",
        prof_settings: "إعدادات الحساب",
        prof_change_photo: "تغيير الصورة",
        err_name: "الرجاء إدخال اسمك.",
        err_gender: "الرجاء اختيار جنسك.",
        err_age: "الرجاء اختيار عمرك.",
        err_country: "الرجاء اختيار بلدك.",
        err_phone: "الرجاء إدخال رقم صحيح.",
        err_activity: "الرجاء اختيار مجالك.",
        err_pwd: "يجب أن تكون كلمة المرور 6 أحرف على الأقل.",
        err_confirm: "كلمتا المرور غير متطابقتين.",
        success_register: "تم التسجيل بنجاح! مرحبًا بك في ديمّا. 🎉",
        success_login: "تم تسجيل الدخول بنجاح!",
        success_avatar: "تم تحديث صورة الملف الشخصي!",
        success_email: "تم حفظ البريد الإلكتروني!"
    },
    es: {
        lang_label: "Idioma",
        login: "Iniciar sesión",
        register: "Crear cuenta",
        logout: "Cerrar sesión",
        hero_badge: "Panafricano",
        hero_title: "Intercambia, comparte, conserva tu historia.",
        hero_desc: "Demma es la primera red social africana de trueque de productos digitales y memoria colectiva.",
        hero_start: "Empezar",
        hero_learn: "Saber más",
        objectives_title: "🎯 Nuestros Objetivos",
        objectives_sub: "Cuatro pilares para construir la África del mañana.",
        obj_exchange: "Intercambios",
        obj_exchange_desc: "Trueque de productos digitales y físicos sin dinero.",
        obj_info: "Información",
        obj_info_desc: "Accede a datos auténticos sobre África.",
        obj_comm: "Comunicación",
        obj_comm_desc: "Mensajería integrada, llamadas audio/vídeo, compartir archivos.",
        obj_conserv: "Conservación",
        obj_conserv_desc: "Preservación de la memoria colectiva africana.",
        reg_title: "Crea tu cuenta",
        reg_sub: "Únete a la comunidad africana de intercambio",
        reg_already: "¿Ya eres miembro?",
        reg_login_link: "Iniciar sesión",
        reg_info: "Modo de prueba: usa el número +229 90 00 00 00 y el código 123456.",
        field_name: "Nombre completo",
        field_gender: "Sexo",
        field_age: "Edad",
        field_country: "País de residencia",
        field_phone: "Número de teléfono",
        field_activity: "Campo de actividad",
        field_password: "Contraseña",
        field_confirm: "Confirmar contraseña",
        field_email: "Correo electrónico (opcional)",
        select_placeholder: "Seleccionar",
        select_country: "Seleccionar un país",
        select_activity: "Seleccionar un campo",
        btn_register: "Confirmar mi registro",
        btn_save_email: "Guardar correo",
        btn_login: "Iniciar sesión",
        btn_validate_account: "Verificar mi cuenta",
        gender_male: "Hombre",
        gender_female: "Mujer",
        gender_other: "Otro",
        log_title: "Inicia sesión en tu cuenta",
        log_no_account: "¿Aún no eres miembro?",
        log_create_link: "Crear una cuenta",
        log_forgot: "¿Olvidaste tu contraseña?",
        log_remember: "Recordarme",
        log_or: "o",
        log_create_btn: "Crear una cuenta Demma",
        ver_title: "Verificación del número",
        ver_sub: "Ingresa el código de 6 dígitos recibido",
        ver_label: "Código de verificación",
        ver_info: "Modo de prueba: ingresa el código 123456",
        prof_title: "Mi perfil",
        prof_settings: "Configuración de la cuenta",
        prof_change_photo: "Cambiar foto",
        err_name: "Por favor ingresa tu nombre.",
        err_gender: "Por favor elige tu sexo.",
        err_age: "Por favor elige tu edad.",
        err_country: "Por favor elige tu país.",
        err_phone: "Por favor ingresa un número válido.",
        err_activity: "Por favor elige tu campo.",
        err_pwd: "La contraseña debe tener al menos 6 caracteres.",
        err_confirm: "Las contraseñas no coinciden.",
        success_register: "¡Registro exitoso! Bienvenido a Demma. 🎉",
        success_login: "¡Inicio de sesión exitoso!",
        success_avatar: "¡Foto de perfil actualizada!",
        success_email: "¡Correo guardado!"
    }
};

function getCurrentLang() {
    return localStorage.getItem('demma_lang') || 'fr';
}

function setLanguage(code) {
    if (!LANGUAGES[code]) return;
    localStorage.setItem('demma_lang', code);
    document.documentElement.dir = LANGUAGES[code].dir;
    document.documentElement.lang = code;
    applyTranslations();
    const langLabel = document.querySelector('.lang-current-label');
    if (langLabel) langLabel.textContent = LANGUAGES[code].name;
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: code } }));
}

function t(key) {
    const lang = getCurrentLang();
    return (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) || TRANSLATIONS.fr[key] || key;
}

function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = t(key);
        if (el.hasAttribute('placeholder')) {
            el.setAttribute('placeholder', translation);
        } else {
            el.textContent = translation;
        }
    });
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        el.setAttribute('title', t(el.getAttribute('data-i18n-title')));
    });
}

function renderLanguageSelector(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const current = getCurrentLang();
    container.innerHTML = `
        <div class="lang-dropdown">
            <button class="lang-btn" type="button">
                <i class="fas fa-globe-africa"></i>
                <span class="lang-current-label">${LANGUAGES[current].name}</span>
                <i class="fas fa-chevron-down" style="font-size:12px;"></i>
            </button>
            <div class="lang-dropdown-content">
                ${Object.entries(LANGUAGES).map(([code, info]) => `
                    <div class="lang-item" data-lang="${code}">
                        <span>${info.flag} ${info.name}</span>
                        ${code === current ? '<span class="check">✓</span>' : ''}
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    container.querySelector('.lang-btn').addEventListener('click', function(e) {
        e.stopPropagation();
        container.querySelector('.lang-dropdown-content').classList.toggle('show');
    });
    container.querySelectorAll('.lang-item').forEach(item => {
        item.addEventListener('click', function() {
            setLanguage(this.dataset.lang);
            container.querySelector('.lang-dropdown-content').classList.remove('show');
        });
    });
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.lang-dropdown')) {
            container.querySelector('.lang-dropdown-content')?.classList.remove('show');
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const current = getCurrentLang();
    document.documentElement.dir = LANGUAGES[current].dir;
    document.documentElement.lang = current;
    applyTranslations();
});
