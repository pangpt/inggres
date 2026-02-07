export const grammarCategories = [
    { id: 'tenses', label: '16 Tenses' },
    { id: 'basics', label: 'Dasar (Basics)' },
    { id: 'passive', label: 'Passive Voice' },
];

export const grammarLessons = [
    // --- BASICS ---
    {
        id: "pronoun-1",
        category: "basics",
        title: "Subject Pronouns",
        description: "Kata ganti subjek (pelaku) dalam kalimat.",
        content: "I (Saya), You (Kamu), They (Mereka), We (Kami), He (Dia lk), She (Dia pr), It (Itu).",
        examples: [
            { en: "I am a student.", id: "Saya adalah seorang siswa." },
            { en: "They are happy.", id: "Mereka bahagia." }
        ]
    },
    {
        id: "tobe-1",
        category: "basics",
        title: "To Be (Am, Is, Are)",
        description: "Kata kerja bantu untuk menghubungkan subjek dengan predikat (sifat/benda).",
        formula: "S + To Be + Adjective/Noun",
        examples: [
            { en: "She is smart.", id: "Dia pintar." },
            { en: "We are family.", id: "Kami adalah keluarga." }
        ]
    },

    // --- PRESENT TENSES ---
    {
        id: "tenses-1",
        category: "tenses",
        title: "Simple Present Tense",
        description: "Fakta, kebiasaan, atau kebenaran umum.",
        formula: "(+) S + V1 (s/es) | (-) S + do/does not + V1",
        examples: [
            { en: "Sun rises in the east.", id: "Matahari terbit di timur." },
            { en: "She works hard.", id: "Dia bekerja keras." }
        ]
    },
    {
        id: "tenses-2",
        category: "tenses",
        title: "Present Continuous Tense",
        description: "Sedang terjadi saat ini.",
        formula: "S + am/is/are + V-ing",
        examples: [
            { en: "I am eating now.", id: "Saya sedang makan sekarang." },
            { en: "She is sleeping.", id: "Dia sedang tidur." }
        ]
    },
    {
        id: "tenses-3",
        category: "tenses",
        title: "Present Perfect Tense",
        description: "Sudah terjadi (hasilnya masih terasa) atau pengalaman.",
        formula: "S + has/have + V3",
        examples: [
            { en: "I have eaten.", id: "Saya sudah makan." },
            { en: "She has gone.", id: "Dia sudah pergi." }
        ]
    },
    {
        id: "tenses-4",
        category: "tenses",
        title: "Present Perfect Continuous",
        description: "Dimulai di masa lalu dan masih berlanjut sampai sekarang.",
        formula: "S + has/have + been + V-ing",
        examples: [
            { en: "I have been waiting for 2 hours.", id: "Saya sudah menunggu selama 2 jam." }
        ]
    },

    // --- PAST TENSES ---
    {
        id: "tenses-5",
        category: "tenses",
        title: "Simple Past Tense",
        description: "Kejadian masa lampau yang sudah selesai.",
        formula: "S + V2",
        examples: [
            { en: "I went to Bali yesterday.", id: "Saya pergi ke Bali kemarin." }
        ]
    },
    {
        id: "tenses-6",
        category: "tenses",
        title: "Past Continuous Tense",
        description: "Sedang terjadi di masa lampau ketika kejadian lain terjadi.",
        formula: "S + was/were + V-ing",
        examples: [
            { en: "I was sleeping when you called.", id: "Saya sedang tidur ketika kamu menelepon." }
        ]
    },
    {
        id: "tenses-7",
        category: "tenses",
        title: "Past Perfect Tense",
        description: "Sudah terjadi sebelum kejadian lain di masa lampau.",
        formula: "S + had + V3",
        examples: [
            { en: "She had left when I arrived.", id: "Dia sudah pergi ketika saya tiba." }
        ]
    },

    // --- FUTURE TENSES ---
    {
        id: "tenses-9",
        category: "tenses",
        title: "Simple Future Tense",
        description: "Akan terjadi di masa depan.",
        formula: "S + will + V1",
        examples: [
            { en: "I will visit you.", id: "Saya akan mengunjungimu." }
        ]
    },

    // --- PASSIVE VOICE ---
    {
        id: "passive-1",
        category: "passive",
        title: "Passive Voice (Present)",
        description: "Kalimat pasif (di-). Objek menjadi subjek.",
        formula: "O + am/is/are + V3",
        examples: [
            { en: "Rice is eaten by me.", id: "Nasi dimakan oleh saya." }
        ]
    },
    {
        id: "passive-2",
        category: "passive",
        title: "Passive Voice (Past)",
        description: "Kalimat pasif lampau.",
        formula: "O + was/were + V3",
        examples: [
            { en: "The car was stolen.", id: "Mobil itu dicuri." }
        ]
    }
];
