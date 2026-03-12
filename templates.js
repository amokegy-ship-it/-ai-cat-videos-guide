// Cat Video Templates and Ideas
const catVideoTemplates = [
    {
        id: 1,
        title: " قط يركض خلف مؤشر الماوس",
        description: "مقطع مضحك لقط يحاول الإمساك بمؤشر الماوس على الشاشة",
        emoji: "🐱",
        tags: ["كوميدي", "يقط", "مضحك"],
        prompt: "A cute cat chasing a mouse cursor on a computer screen, funny animation, cartoon style"
    },
    {
        id: 2,
        title: " قط يلعب بالكرتون",
        description: "قاطعة فيديو قط صغير يلعب بصندوق من الورق المقوى",
        emoji: "😺",
        tags: ["لطيف", "تفاعلي", "محبوب"],
        prompt: "A cute kitten playing with a cardboard box, curious expressions, adorable, soft lighting"
    },
    {
        id: 3,
        title: " قط يقفز فجأة",
        description: "مقطع ترند قط ينفجر فجأة من النوم بالقفز",
        emoji: "😼",
        tags: ["ترند", "فاجئ", "فيديو"],
        prompt: "A cat suddenly jumping up from sleep in surprise, startled expression, funny moment, cartoon"
    },
    {
        id: 4,
        title: " قط يصرخ على خس",
        description: "مقطع كوميدي قط يصرخ على قطعة خس",
        emoji: "🙀",
        tags: ["كوميدي", "طعام", "مضحك"],
        prompt: "A cat screaming at a piece of lettuce, funny dramatic reaction, cartoon style, exaggerated expressions"
    },
    {
        id: 5,
        title: " قط يراقب سمكة",
        description: "قاطعة جميلة قط يراقب سمكة تسبح في الحوض",
        emoji: "🐈",
        tags: ["جميل", "رائع", "مثير"],
        prompt: "A cat watching fish swimming in an aquarium, curious eyes, beautiful soft lighting, peaceful scene"
    },
    {
        id: 6,
        title: " قط يتجمد فجأة",
        description: "ترند قط يتجمد فجأة ثم يستمر في المشي",
        emoji: "😺",
        tags: ["ترند", "كوميدي", "مضحك"],
        prompt: "A cat suddenly freezing in the middle of walking, then continuing normally, funny glitch effect"
    },
    {
        id: 7,
        title: " قط يلعب بعكة",
        description: "قاطعة لطيفة قط يلعب بعكة صغيرة لطيفة",
        emoji: "😻",
        tags: ["لطيف", "حلو", "محبوب"],
        prompt: "A cute cat playing with a yarn ball, fluffy and adorable, soft pastel colors, gentle movements"
    },
    {
        id: 8,
        title: " قط ينظر للكاميرا",
        description: "مقطع مباشر قط ينظر للكاميرا بعيون كبيرة",
        emoji: "😽",
        tags: ["مباشر", "جميل", "مثير"],
        prompt: "A cat looking directly at the camera with big cute eyes, adorable expression, close-up shot"
    },
    {
        id: 9,
        title: " قط يركض في دوائر",
        description: "مقطع مضحك قط يركض في دوائر بدون توقف",
        emoji: "🐈‍⬛",
        tags: ["كوميدي", "مضحك", "سريع"],
        prompt: "A cat running in circles around a room, dizzy but determined, funny cartoon animation"
    },
    {
        id: 10,
        title: " قط يخاف من الخيار",
        description: "مقطع ترند قط يخاف من رؤية خيار على الأرض",
        emoji: "🙀",
        tags: ["ترند", "خوف", "كوميدي"],
        prompt: "A cat getting scared of a cucumber on the floor, hilarious fear reaction, funny moment"
    },
    {
        id: 11,
        title: " قط يشرب الحليب",
        description: "قاطعة جميلة قط يشرب الحليب بلسانه الوردي",
        emoji: "😺",
        tags: ["لطيف", "اطعمة", "حلو"],
        prompt: "A cute cat drinking milk with pink tongue, satisfying ASMR style, soft lighting"
    },
    {
        id: 12,
        title: " قط ينام فيposisi غريبة",
        description: "قاطعة قط ينام في وضعية غير مألوفة ومضحكة",
        emoji: "😴",
        tags: ["نوم", "مضحك", "غريب"],
        prompt: "A cat sleeping in a weird funny position, drooling, cute expressions, cartoon style"
    },
    {
        id: 13,
        title: " قط يعض إصبع",
        description: "مقطع مضحك قط يعض إصبع صاحبه بلطف",
        emoji: "😾",
        tags: ["عض", "لعب", "مضحك"],
        prompt: "A cat gently biting owner's finger, playful expression, funny moment, cartoon"
    },
    {
        id: 14,
        title: " قط يلعق زبدة",
        description: "قاطعة لقط يلعق زبدة من إصبع",
        emoji: "😻",
        tags: ["طعام", "لطيف", "محبوب"],
        prompt: "A cat licking butter from owner's finger, surprised happy expression, funny moment"
    },
    {
        id: 15,
        title: " قط يركض خلف lasers",
        description: "مقطع ترند قط يركض خلف نقطة الليزر",
        emoji: "🐱",
        tags: ["ترند", "لعب", "مثير"],
        prompt: "A cat chasing a laser pointer dot around the room, excited hunting behavior, funny animation"
    },
    {
        id: 16,
        title: " قط يقف على ساقين",
        description: "مقطع نادر قط يقف على ساقين الخلفيتين",
        emoji: "😺",
        tags: ["نادر", "مضحك", "مثير"],
        prompt: "A cat standing on its hind legs looking around, rare and funny moment, cartoon style"
    }
];

// Script Templates
const scriptTemplates = {
    funny: [
        "يا له من قط! انظروا ماذا يفعل الآن...",
        "هذا هو أغرب شيء رأيته اليوم!",
        "شاهدوا ردة فعل القط عند رؤية هذا!",
        "لا تصدقوا ما ترونه!",
        "هذه اللحظة ستدمعون من الضحك!"
    ],
    cute: [
        "انظروا إلى هذا الملاك الصغير! 💕",
        "أكثر شيء يمكن أن يراه القلب!",
        "هذا هو قطكم المثالي!",
        "لا أستطيع مقاومة هذا الوجه! 😍",
        "قط صغير يفعل شيئاً ليراًك!"
    ],
    story: [
        "هذه قصة قط صغير اسمه...",
        "في يوم من الأيام، حدث شيء عجيب...",
        "هذه قصتنا مع قطنا المحبوب...",
        "كان هناك قط يعيش حياة سعيدة...",
        "اسمعوا هذه القصة الرائعة..."
    ],
    tutorial: [
        "هل تريد قطة مثل هذه؟ إليك الطريقة!",
        "تعالوا نتعلم كيف نربى القطط!",
        "هذه النصائح ستساعدكم كثيراً!",
        "كيف تجعل قطك سعيداً؟",
        "أفضل طريقة للعناية بالقطة..."
    ],
    compilation: [
        "أفضل لحظات القطط لهذا الأسبوع!",
        "مجموعة فيديوهات قطط لا تصدق!",
        "أفضل 10 لحظات مع القطط!",
        "شاهدوا أجمل اللحظات!",
        "هذه أفضل مقاطع القطط!"
    ]
};

// Trending Topics
const trendingTopics = [
    "قط يركض خلف الماوس",
    "قط يخاف من الخيار",
    "قط يتجمد فجأة",
    "قط يقفز من النوم",
    "قط يلعب بعكة",
    "قط يلعق زبدة",
    "قط يعض الإصبع",
    "قط يراقب السمك",
    "قط ينام في وضعية غريبة",
    "قط يقف على ساقين",
    "قط يركض في دوائر",
    "قط ينظر للكاميرا"
];

// Export for use in main script
window.catVideoTemplates = catVideoTemplates;
window.scriptTemplates = scriptTemplates;
window.trendingTopics = trendingTopics;

