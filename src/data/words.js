export const words = [
    { word: "Resilience", translation: "Ketangguhan", phonetic: "/rɪˈzɪl.jəns/", meaning: "Kemampuan untuk pulih dengan cepat dari kesulitan.", example: "Her resilience in the face of adversity is inspiring." },
    { word: "Serendipity", translation: "Kebetulan yang menyenangkan", phonetic: "/ˌser.ənˈdɪp.ə.ti/", meaning: "Kejadian dan perkembangan peristiwa secara kebetulan dengan cara yang bahagia atau menguntungkan.", example: "Meeting my old friend was pure serendipity." },
    { word: "Ephemeral", translation: "Sementara", phonetic: "/ɪˈfem.ər.əl/", meaning: "Berlangsung dalam waktu yang sangat singkat.", example: "Fashions are ephemeral, changing with every season." },
    { word: "Eloquent", translation: "Fasih", phonetic: "/ˈel.ə.kwənt/", meaning: "Lancar atau persuasif dalam berbicara atau menulis.", example: "He gave an eloquent speech at the ceremony." },
    { word: "Meticulous", translation: "Teliti", phonetic: "/məˈtɪk.jə.ləs/", meaning: "Menunjukkan perhatian besar terhadap detail; sangat hati-hati dan tepat.", example: "She is meticulous about her work." },
    { word: "Ubiquitous", translation: "Ada di mana-mana", phonetic: "/juːˈbɪk.wɪ.təs/", meaning: "Hadir, muncul, atau ditemukan di mana-mana.", example: "Mobile phones are now ubiquitous." },
    { word: "Pragmatic", translation: "Pragmatis", phonetic: "/præɡˈmæt.ɪk/", meaning: "Menangani hal-hal secara masuk akal dan realistis.", example: "We need a pragmatic approach to solve this problem." },
    { word: "Alleviate", translation: "Meringankan", phonetic: "/əˈliː.vi.eɪt/", meaning: "Membuat penderitaan, kekurangan, atau masalah menjadi kurang parah.", example: "The medicine helped alleviate her pain." },
    { word: "Lucid", translation: "Jelas", phonetic: "/ˈluː.sɪd/", meaning: "Diungkapkan dengan jelas; mudah dimengerti.", example: "He gave a lucid explanation of the complex theory." },
    { word: "Tenacious", translation: "Gigih", phonetic: "/təˈneɪ.ʃəs/", meaning: "Cenderung menjaga pegangan yang kuat pada sesuatu; tidak mudah menyerah.", example: "She is a tenacious opponent." }
];

export function getDailyWord() {
    // Simple logic: Use the day of the year to select a word
    const today = new Date();
    const start = new Date(today.getFullYear(), 0, 0);
    const diff = today - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);

    return words[dayOfYear % words.length];
}
