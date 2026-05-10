import prisma from "./index"
import {
  StoryType,
  SlideType,
  StageType,
  QuestionType,
} from "./prisma/generated/client"

const XP_PER_QUESTION = 16

interface QuestionOption {
  text: string
  isCorrect: boolean
}

interface QuestionData {
  slideNumber: number
  questionType: QuestionType
  questionText: string
  options?: QuestionOption[]
  metadata?: {
    items: Array<{ id: string; label: string }>
    correctOrder: string[]
  }
  isBonus?: boolean
}

interface InteractiveStoryData {
  title: string
  storyImageMap: Record<number, string>
  storyAudioMap?: Record<number, string>
  storyTextMap?: Record<number, string>
  questions: QuestionData[]
}

const interactiveStoryData: Record<string, InteractiveStoryData> = {
  sulawesi: {
    title: "Nenek Pakande",
    storyImageMap: {
      1: "/assets/budayana/islands/sulawesi1.png",
      3: "/assets/budayana/islands/sulawesi2.png",
      5: "/assets/budayana/islands/sulawesi33.png",
      7: "/assets/budayana/islands/sulawesi4.png",
      9: "/assets/budayana/islands/sulawesi5.png",
    },
    storyAudioMap: {
      1: "/audio/sulawesi/SULAWESI 1.mp3",
      3: "/audio/sulawesi/SULAWESI 2.mp3",
      5: "/audio/sulawesi/SULAWESI 3.mp3",
      7: "/audio/sulawesi/SULAWESI 4.mp3",
      9: "/audio/sulawesi/SULAWESI 5.mp3",
    },
    questions: [
      {
        slideNumber: 2,
        questionType: QuestionType.MCQ,
        questionText: "Apa yang sedang dilakukan oleh anak-anak tersebut?",
        options: [
          { text: "Berlari-larian", isCorrect: true },
          { text: "Main layangan", isCorrect: false },
          { text: "Main kelereng", isCorrect: false },
          { text: "Memancing", isCorrect: false },
        ],
      },
      {
        slideNumber: 4,
        questionType: QuestionType.TRUE_FALSE,
        questionText:
          "Apakah anak-anak itu langsung pulang saat waktu sore tiba?",
        options: [
          { text: "Benar", isCorrect: false },
          { text: "Salah", isCorrect: true },
        ],
      },
      {
        slideNumber: 6,
        questionType: QuestionType.MCQ,
        questionText: "Apa yang dibawa oleh nenek pakande?",
        options: [
          { text: "Panci", isCorrect: false },
          { text: "Jaring", isCorrect: false },
          { text: "Karung", isCorrect: true },
          { text: "Perangkap", isCorrect: false },
        ],
      },
      {
        slideNumber: 8,
        questionType: QuestionType.MCQ,
        questionText: "Dimana warga desa mencari anak-anak yang hilang?",
        options: [
          { text: "Kota", isCorrect: false },
          { text: "Hutan", isCorrect: true },
          { text: "Gunung", isCorrect: false },
          { text: "Sawah", isCorrect: false },
        ],
      },
      {
        slideNumber: 10,
        questionType: QuestionType.DRAG_DROP,
        questionText:
          "Urutkan kejadian apa saja yang terjadi pada cerita nenek Pakande!",
        metadata: {
          items: [
            { id: "search", label: "Anak-anak ketakutan" },
            { id: "play", label: "Anak-anak bermain di ladang" },
            { id: "home", label: "Warga mencari anak-anak" },
            { id: "appear", label: "Nenek Pakande muncul" },
            { id: "sunset", label: "Sore hari mulai datang" },
          ],
          correctOrder: ["play", "sunset", "appear", "search", "home"],
        },
      },
      {
        slideNumber: 11,
        questionType: QuestionType.ESSAY,
        questionText:
          "Apa pesan moral yang bisa di ambil dari cerita tersebut?",
        isBonus: true,
      },
    ],
  },

  sumatra: {
    title: "Malin Kundang",
    storyImageMap: {
      1: "/assets/budayana/islands/sumatra1.png",
      3: "/assets/budayana/islands/sumatra2.png",
      5: "/assets/budayana/islands/sumatra3.png",
      7: "/assets/budayana/islands/sumatra4.png",
      9: "/assets/budayana/islands/sumatra5.png",
    },
    storyTextMap: {
      1: "Di sebuah desa kecil di tepi laut, hiduplah Malin Kundang dan ibunya. Hidup mereka sederhana, tapi bahagia.\nSetiap pagi, Malin membantu ibunya mencari ikan dan menjemur hasil tangkapan.\n“Ibu, suatu hari aku akan membuat hidup kita lebih baik,” katanya sambil tersenyum.\nIbunya hanya tersenyum lembut, memeluk anak satu-satunya itu dengan penuh kasih.",
      3: "Suatu hari, kapal dagang besar berlabuh di pelabuhan desa. Malin ingin ikut berlayar mencari peruntungan.\n“Ibu, izinkan aku pergi. Aku janji akan pulang membawa kebahagiaan”.\nSang ibu menatapnya dengan mata berkaca-kaca, lalu mengangguk.\n“Pergilah, Nak. Tapi jangan pernah lupakan ibumu.”",
      5: "Tahun-tahun berlalu. Malin kini menjadi saudagar kaya.\nIa memakai pakaian indah dan menikah dengan gadis bangsawan.\nSuatu hari, kapalnya berlabuh kembali di kampung halamannya.\nKabar itu membuat ibunya gembira akhirnya “anak yang dirindukan pulang!”",
      7: "Sang ibu berlari menghampiri, memeluk Malin sambil menangis bahagia.\nTapi Malin menepis pelukan itu.\n“Ibu? Aku tidak kenal wanita miskin ini!” katanya dengan angkuh.\nIstrinya memandang jijik.\nHati sang ibu hancur. Dengan air mata yang jatuh, ia berdoa,\n“Ya Tuhan, jika benar dia anakku, hukumlah dia atas kedurhakaannya.”",
      9: "Tiba-tiba, langit gelap. Badai datang menggulung laut.\nPetir menyambar kapal Malin. Ia menyesal dan berteriak meminta ampun,\ntetapi semua sudah terlambat.\nKetika badai reda, orang-orang menemukan batu menyerupai manusia\nterduduk di tepi pantai batu Malin Kundang.",
    },
    storyAudioMap: {
      1: "/audio/sumatra/SUMATRA 1.mp3",
      3: "/audio/sumatra/SUMATRA 2.mp3",
      5: "/audio/sumatra/SUMATRA 3.mp3",
      7: "/audio/sumatra/SUMATRA 4.mp3",
      9: "/audio/sumatra/SUMATRA 5.mp3",
    },
    questions: [
      {
        slideNumber: 2,
        questionType: QuestionType.MCQ,
        questionText: "Apa yang sedang malin lakukan?",
        options: [
          { text: "Membantu Ibunya", isCorrect: true },
          { text: "Menjemur Baju", isCorrect: false },
          { text: "Memancing", isCorrect: false },
          { text: "Tiduran", isCorrect: false },
        ],
      },
      {
        slideNumber: 4,
        questionType: QuestionType.TRUE_FALSE,
        questionText: "Apakah ibu malin selalu memarahi malin?",
        options: [
          { text: "Benar", isCorrect: false },
          { text: "Salah", isCorrect: true },
        ],
      },
      {
        slideNumber: 6,
        questionType: QuestionType.MCQ,
        questionText: "Siapa yang menghampiri malin di pelabuhan?",
        options: [
          { text: "Bapaknya", isCorrect: false },
          { text: "Temannya", isCorrect: false },
          { text: "Ibunya", isCorrect: true },
          { text: "Tetangganya", isCorrect: false },
        ],
      },
      {
        slideNumber: 8,
        questionType: QuestionType.MCQ,
        questionText: "Kenapa ibu malin menangis?",
        options: [
          { text: "Kaki sang ibu terinjak", isCorrect: false },
          { text: "Malin tidak menganggap ibu", isCorrect: true },
          { text: "Malin memeluk sang ibu", isCorrect: false },
          { text: "Ibu tersandung ikan di pasar", isCorrect: false },
        ],
      },
      {
        slideNumber: 10,
        questionType: QuestionType.DRAG_DROP,
        questionText:
          "Urutkan kejadian apa saja yang terjadi pada cerita malin kundang!",
        metadata: {
          items: [
            { id: "stone", label: "Malin dikutuk menjadi batu" },
            { id: "leave", label: "Malin tinggal bersama ibunya" },
            { id: "ship", label: "Malin menjadi saudagar kaya" },
            { id: "miss", label: "Malin pergi merantau" },
            { id: "deny", label: "Malin mengingkari ibunya" },
          ],
          correctOrder: ["leave", "miss", "ship", "deny", "stone"],
        },
      },
    ],
  },
  maluku: {
    title: "Telaga Biru",
    storyImageMap: {
      1: "/assets/budayana/islands/maluku1.png",
      3: "/assets/budayana/islands/maluku22.png",
      5: "/assets/budayana/islands/maluku33.png",
      7: "/assets/budayana/islands/maluku44.png",
      9: "/assets/budayana/islands/maluku5.png",
    },
    storyAudioMap: {
      1: "/audio/maluku/MALUKU 1.mp3",
      3: "/audio/maluku/MALUKU 2.mp3",
      5: "/audio/maluku/MALUKU 3.mp3",
      7: "/audio/maluku/MALUKU 4.mp3",
      9: "/audio/maluku/MALUKU 5.mp3",
    },
    questions: [
      {
        slideNumber: 2,
        questionType: QuestionType.MCQ,
        questionText: "Apa yang muncul dari sela-sela batu di Desa Mamuya?",
        options: [
          { text: "Air yang membentuk telaga", isCorrect: true },
          { text: "Api yang besar", isCorrect: false },
          { text: "Ikan-ikan kecil", isCorrect: false },
          { text: "Batu-batu besar", isCorrect: false },
        ],
      },
      {
        slideNumber: 4,
        questionType: QuestionType.TRUE_FALSE,
        questionText: "Apakah semua keluarga di desa sudah hadir saat kentungan dipukul?",
        options: [
          { text: "Benar", isCorrect: false },
          { text: "Salah", isCorrect: true },
        ],
      },
      {
        slideNumber: 6,
        questionType: QuestionType.MCQ,
        questionText: "Mengapa magohiduuru pergi merantau?",
        options: [
          { text: "Supaya bisa menikahi majojaru", isCorrect: true },
          { text: "Karena disuruh orang tuanya", isCorrect: false },
          { text: "Karena ingin berlayar", isCorrect: false },
          { text: "Karena tidak suka di desa", isCorrect: false },
        ],
      },
      {
        slideNumber: 8,
        questionType: QuestionType.MCQ,
        questionText: "Apa yang terjadi pada kapal magohiduuru?",
        options: [
          { text: "Kapalnya tenggelam karena badai", isCorrect: true },
          { text: "Kapalnya berlayar sangat jauh", isCorrect: false },
          { text: "Kapalnya rusak di pelabuhan", isCorrect: false },
          { text: "Kapalnya dicuri orang", isCorrect: false },
        ],
      },
      {
        slideNumber: 10,
        questionType: QuestionType.DRAG_DROP,
        questionText: "Urutkan kejadian apa saja yang terjadi pada cerita Telaga Biru!",
        metadata: {
          items: [
            { id: "lake", label: "Telaga biru terbentuk" },
            { id: "promise", label: "Magohiduuru berjanji merantau" },
            { id: "water", label: "Air muncul dari sela batu" },
            { id: "news", label: "Majojaru mendengar kabar sedih" },
            { id: "cry", label: "Majojaru menangis dua hari" },
          ],
          correctOrder: ["water", "promise", "news", "cry", "lake"],
        },
      },
      {
        slideNumber: 11,
        questionType: QuestionType.ESSAY,
        questionText: "Apa yang kamu pelajari dari kesetiaan majojaru dalam cerita ini?",
        isBonus: true,
      },
    ],
  },
  kalimantan: {
    title: "Pesut Mahakam",
    storyImageMap: {
      1: "/assets/budayana/islands/kalimantan11.png",
      3: "/assets/budayana/islands/kalimantan22.png",
      5: "/assets/budayana/islands/kalimantan33.png",
      7: "/assets/budayana/islands/kalimantan4.png",
      9: "/assets/budayana/islands/kalimantan55.png",
    },
    storyAudioMap: {
      1: "/audio/kalimantan/KALIMANTAN 1.mp3",
      3: "/audio/kalimantan/KALIMANTAN 2.mp3",
      5: "/audio/kalimantan/KALIMANTAN 3.mp3",
      7: "/audio/kalimantan/KALIMANTAN 4.mp3",
      9: "/audio/kalimantan/KALIMANTAN 5.mp3",
    },
    questions: [
      {
        slideNumber: 2,
        questionType: QuestionType.MCQ,
        questionText: "Mengapa ayah sering melamun dan tidak mengurus rumah?",
        options: [
          { text: "Karena ibu meninggal karena sakit", isCorrect: true },
          { text: "Karena ayah sedang bekerja jauh", isCorrect: false },
          { text: "Karena ayah sedang sakit", isCorrect: false },
          { text: "Karena ayah pergi berlibur", isCorrect: false },
        ],
      },
      {
        slideNumber: 4,
        questionType: QuestionType.TRUE_FALSE,
        questionText: "Apakah ayah tahu bahwa ibu tiri bersikap kejam pada anak-anaknya?",
        options: [
          { text: "Benar", isCorrect: false },
          { text: "Salah", isCorrect: true },
        ],
      },
      {
        slideNumber: 6,
        questionType: QuestionType.MCQ,
        questionText: "Apa yang ditemukan anak-anak saat pulang ke rumah?",
        options: [
          { text: "Rumah sudah kosong", isCorrect: true },
          { text: "Ayah sedang menunggu mereka", isCorrect: false },
          { text: "Rumah penuh dengan makanan", isCorrect: false },
          { text: "Ibu tiri sedang memasak", isCorrect: false },
        ],
      },
      {
        slideNumber: 8,
        questionType: QuestionType.MCQ,
        questionText: "Mengapa anak-anak melompat ke dalam sungai?",
        options: [
          { text: "Karena tubuh mereka terasa panas setelah makan bubur", isCorrect: true },
          { text: "Karena mereka ingin berenang", isCorrect: false },
          { text: "Karena dikejar ibu tiri", isCorrect: false },
          { text: "Karena mereka melihat ikan", isCorrect: false },
        ],
      },
      {
        slideNumber: 10,
        questionType: QuestionType.DRAG_DROP,
        questionText: "Urutkan kejadian apa saja yang terjadi pada cerita Pesut Mahakam!",
        metadata: {
          items: [
            { id: "river", label: "Anak-anak melompat ke sungai" },
            { id: "mother", label: "Ibu meninggal karena sakit" },
            { id: "empty", label: "Rumah sudah kosong ditinggalkan" },
            { id: "porridge", label: "Anak-anak makan bubur panas" },
            { id: "stepmother", label: "Ayah menikah dengan ibu tiri" },
          ],
          correctOrder: ["mother", "stepmother", "empty", "porridge", "river"],
        },
      },
      {
        slideNumber: 11,
        questionType: QuestionType.ESSAY,
        questionText: "Apa yang kamu rasakan melihat perlakuan ibu tiri kepada kedua anak itu?",
        isBonus: true,
      },
    ],
  },
  "nusa tenggara": {
    title: "Watu Maladong",
    storyImageMap: {
      1: "/assets/budayana/islands/nusa tenggara1.png",
      3: "/assets/budayana/islands/nusa tenggara2.png",
      5: "/assets/budayana/islands/nusa tenggara3.png",
      7: "/assets/budayana/islands/nusa tenggara4.png",
      9: "/assets/budayana/islands/nusa tenggara5.png",
    },
    storyAudioMap: {
      1: "/audio/ntt/NTT 1.mp3",
      3: "/audio/ntt/NTT 2.mp3",
      5: "/audio/ntt/NTT 3.mp3",
      7: "/audio/ntt/NTT 4.mp3",
      9: "/audio/ntt/NTT 5.mp3",
    },
    questions: [
      {
        slideNumber: 2,
        questionType: QuestionType.MCQ,
        questionText: "Apa yang ditemukan petani di kebunnya pada pagi hari?",
        options: [
          { text: "Kebunnya rusak karena babi hutan", isCorrect: true },
          { text: "Kebunnya penuh dengan bunga", isCorrect: false },
          { text: "Ada orang asing di kebunnya", isCorrect: false },
          { text: "Tanamannya tumbuh subur", isCorrect: false },
        ],
      },
      {
        slideNumber: 4,
        questionType: QuestionType.TRUE_FALSE,
        questionText: "Apakah siluman penyu membawa petani ke pulau seberang?",
        options: [
          { text: "Benar", isCorrect: true },
          { text: "Salah", isCorrect: false },
        ],
      },
      {
        slideNumber: 6,
        questionType: QuestionType.MCQ,
        questionText: "Apa yang diberikan nenek tua kepada petani?",
        options: [
          { text: "Ramuan dan pesan untuk meminta tombak serta Watu Maladong", isCorrect: true },
          { text: "Makanan dan minuman", isCorrect: false },
          { text: "Pakaian dan senjata baru", isCorrect: false },
          { text: "Peta menuju desa kepala desa", isCorrect: false },
        ],
      },
      {
        slideNumber: 8,
        questionType: QuestionType.MCQ,
        questionText: "Bagaimana petani mengalahkan kepala desa?",
        options: [
          { text: "Dengan mengangkat tombak hingga petir menyambar", isCorrect: true },
          { text: "Dengan meminum ramuan nenek", isCorrect: false },
          { text: "Dengan memanggil siluman penyu", isCorrect: false },
          { text: "Dengan melempar batu sakti", isCorrect: false },
        ],
      },
      {
        slideNumber: 10,
        questionType: QuestionType.DRAG_DROP,
        questionText: "Urutkan kejadian apa saja yang terjadi pada cerita Watu Maladong!",
        metadata: {
          items: [
            { id: "water", label: "Mata air muncul dari batu sakti" },
            { id: "turtle", label: "Petani naik punggung siluman penyu" },
            { id: "farm", label: "Kebun petani dirusak babi hutan" },
            { id: "fight", label: "Petani bertarung dengan kepala desa" },
            { id: "grandma", label: "Nenek tua melatih petani" },
          ],
          correctOrder: ["farm", "turtle", "grandma", "fight", "water"],
        },
      },
      {
        slideNumber: 11,
        questionType: QuestionType.ESSAY,
        questionText: "Menurutmu, mengapa petani menyembunyikan Watu Maladong agar tidak disalahgunakan?",
        isBonus: true,
      },
    ],
  },
  bali: {
    title: "Bawang dan Kesuna",
    storyImageMap: {
      1: "/assets/budayana/islands/bali11.png",
      3: "/assets/budayana/islands/bali22.png",
      5: "/assets/budayana/islands/bali33.png",
      7: "/assets/budayana/islands/bali44.png",
      9: "/assets/budayana/islands/bali55.png",
    },
    storyAudioMap: {
      1: "/audio/bali/BALI 1.mp3",
      3: "/audio/bali/BALI 2.mp3",
      5: "/audio/bali/BALI 3.mp3",
      7: "/audio/bali/BALI 4.mp3",
      9: "/audio/bali/BALI 5.mp3",
    },
    questions: [
      {
        slideNumber: 2,
        questionType: QuestionType.MCQ,
        questionText: "Apa yang dilakukan Kesuna saat orang tua pergi ke sawah?",
        options: [
          { text: "Mengerjakan semua pekerjaan rumah sendiri", isCorrect: true },
          { text: "Bermain di luar rumah", isCorrect: false },
          { text: "Tidur seharian", isCorrect: false },
          { text: "Pergi ke hutan", isCorrect: false },
        ],
      },
      {
        slideNumber: 4,
        questionType: QuestionType.TRUE_FALSE,
        questionText: "Apakah ayah percaya cerita Bawang dan mengusir Kesuna dari rumah?",
        options: [
          { text: "Benar", isCorrect: true },
          { text: "Salah", isCorrect: false },
        ],
      },
      {
        slideNumber: 6,
        questionType: QuestionType.MCQ,
        questionText: "Apa yang terjadi saat burung mematuk tubuh Kesuna?",
        options: [
          { text: "Muncul perhiasan emas dari bekas patukan", isCorrect: true },
          { text: "Kesuna merasa kesakitan", isCorrect: false },
          { text: "Burung itu terbang membawa Kesuna", isCorrect: false },
          { text: "Kesuna berubah menjadi burung", isCorrect: false },
        ],
      },
      {
        slideNumber: 8,
        questionType: QuestionType.MCQ,
        questionText: "Apa yang terjadi saat burung mematuk tubuh Bawang?",
        options: [
          { text: "Tubuh Bawang terluka dan tidak mendapat emas", isCorrect: true },
          { text: "Bawang mendapat lebih banyak emas", isCorrect: false },
          { text: "Bawang berubah menjadi burung", isCorrect: false },
          { text: "Bawang bisa terbang", isCorrect: false },
        ],
      },
      {
        slideNumber: 10,
        questionType: QuestionType.DRAG_DROP,
        questionText: "Urutkan kejadian apa saja yang terjadi pada cerita Bawang dan Kesuna!",
        metadata: {
          items: [
            { id: "gold", label: "Kesuna mendapat perhiasan emas" },
            { id: "lie", label: "Bawang mengadu kepada ayah" },
            { id: "hurt", label: "Bawang terluka oleh patukan burung" },
            { id: "work", label: "Kesuna mengerjakan rumah sendirian" },
            { id: "forest", label: "Kesuna pergi ke hutan sambil menangis" },
          ],
          correctOrder: ["work", "lie", "forest", "gold", "hurt"],
        },
      },
      {
        slideNumber: 11,
        questionType: QuestionType.ESSAY,
        questionText: "Menurutmu, mengapa Bawang tidak mendapatkan emas seperti Kesuna?",
        isBonus: true,
      },
    ],
  },
  papua: {
    title: "Biwar",
    storyImageMap: {
      1: "/assets/budayana/islands/papua1.png",
      3: "/assets/budayana/islands/papua2.png",
      5: "/assets/budayana/islands/papua3.png",
      7: "/assets/budayana/islands/papua4.png",
      9: "/assets/budayana/islands/papua5.png",
    },
    storyAudioMap: {
      1: "/audio/papua/PAPUA 1.mp3",
      3: "/audio/papua/PAPUA 2.mp3",
      5: "/audio/papua/PAPUA 3.mp3",
      7: "/audio/papua/PAPUA 4.mp3",
      9: "/audio/papua/PAPUA 5.mp3",
    },
    questions: [
      {
        slideNumber: 2,
        questionType: QuestionType.MCQ,
        questionText: "Apa yang dilakukan naga raksasa sehingga desa menjadi ketakutan?",
        options: [
          { text: "Melahap hewan ternak dan manusia", isCorrect: true },
          { text: "Merusak rumah-rumah warga", isCorrect: false },
          { text: "Membakar hutan di sekitar desa", isCorrect: false },
          { text: "Mencuri hasil tangkapan ikan", isCorrect: false },
        ],
      },
      {
        slideNumber: 4,
        questionType: QuestionType.TRUE_FALSE,
        questionText: "Apakah Biwar menggunakan senjata warisan ayahnya untuk melawan naga?",
        options: [
          { text: "Benar", isCorrect: true },
          { text: "Salah", isCorrect: false },
        ],
      },
      {
        slideNumber: 6,
        questionType: QuestionType.MCQ,
        questionText: "Bagaimana cara Biwar mengalahkan naga?",
        options: [
          { text: "Memanah matanya lalu menombak tubuhnya", isCorrect: true },
          { text: "Menjebak naga dengan perangkap besar", isCorrect: false },
          { text: "Meminta bantuan seluruh warga desa", isCorrect: false },
          { text: "Mengusir naga dengan api dan obor", isCorrect: false },
        ],
      },
      {
        slideNumber: 8,
        questionType: QuestionType.MCQ,
        questionText: "Apa yang dikatakan Biwar kepada warga desa setelah mengalahkan naga?",
        options: [
          { text: "Selama kita bersatu, tak ada yang tak bisa dikalahkan", isCorrect: true },
          { text: "Aku adalah pahlawan terkuat di Papua", isCorrect: false },
          { text: "Jangan pernah mendekati sungai lagi", isCorrect: false },
          { text: "Kita harus pindah ke desa lain", isCorrect: false },
        ],
      },
      {
        slideNumber: 10,
        questionType: QuestionType.DRAG_DROP,
        questionText: "Urutkan kejadian apa saja yang terjadi pada cerita Biwar!",
        metadata: {
          items: [
            { id: "peace", label: "Desa kembali damai dan berpesta" },
            { id: "dragon", label: "Naga muncul dan menakuti desa" },
            { id: "legend", label: "Biwar dikenang sebagai pahlawan" },
            { id: "biwar", label: "Biwar bertekad melawan naga" },
            { id: "fight", label: "Biwar bertarung dan mengalahkan naga" },
          ],
          correctOrder: ["dragon", "biwar", "fight", "peace", "legend"],
        },
      },
      {
        slideNumber: 11,
        questionType: QuestionType.ESSAY,
        questionText: "Menurutmu, sifat apa yang membuat Biwar bisa menjadi pahlawan bagi desanya?",
        isBonus: true,
      },
    ],
  },
  jawa: {
    title: "Roro Jonggrang",
    storyImageMap: {
      1: "/assets/budayana/islands/jawa1.png",
      3: "/assets/budayana/islands/jawa22.png",
      5: "/assets/budayana/islands/jawa33.png",
      7: "/assets/budayana/islands/jawa44.png",
      9: "/assets/budayana/islands/jawa5.png",
    },
    storyAudioMap: {
      1: "/audio/jawa/JAWA 1.mp3",
      3: "/audio/jawa/JAWA 2.mp3",
      5: "/audio/jawa/JAWA 3.mp3",
      7: "/audio/jawa/JAWA 4.mp3",
      9: "/audio/jawa/JAWA 5.mp3",
    },
    questions: [
      {
        slideNumber: 2,
        questionType: QuestionType.MCQ,
        questionText: "Mengapa Roro Jonggrang tidak mau menikah dengan Bandung Bondowoso?",
        options: [
          { text: "Karena Bandung telah membunuh ayahnya", isCorrect: true },
          { text: "Karena Roro sudah memiliki kekasih", isCorrect: false },
          { text: "Karena Bandung terlalu miskin", isCorrect: false },
          { text: "Karena Roro ingin menjadi ratu sendiri", isCorrect: false },
        ],
      },
      {
        slideNumber: 4,
        questionType: QuestionType.TRUE_FALSE,
        questionText: "Apakah Bandung Bondowoso membangun seribu candi sendirian tanpa bantuan?",
        options: [
          { text: "Benar", isCorrect: false },
          { text: "Salah", isCorrect: true },
        ],
      },
      {
        slideNumber: 6,
        questionType: QuestionType.MCQ,
        questionText: "Apa yang dilakukan Roro Jonggrang untuk menggagalkan pembangunan candi?",
        options: [
          { text: "Menyuruh gadis desa menyalakan obor dan menumbuk padi", isCorrect: true },
          { text: "Meminta bantuan prajurit kerajaan", isCorrect: false },
          { text: "Memanggil hujan deras untuk menghentikan para jin", isCorrect: false },
          { text: "Menghancurkan candi-candi yang sudah dibangun", isCorrect: false },
        ],
      },
      {
        slideNumber: 8,
        questionType: QuestionType.MCQ,
        questionText: "Mengapa para jin berhenti membangun candi dan pergi?",
        options: [
          { text: "Karena mereka melihat cahaya pagi dan ketakutan", isCorrect: true },
          { text: "Karena Bandung menyuruh mereka berhenti", isCorrect: false },
          { text: "Karena candi sudah selesai dibangun", isCorrect: false },
          { text: "Karena mereka kehabisan tenaga", isCorrect: false },
        ],
      },
      {
        slideNumber: 10,
        questionType: QuestionType.DRAG_DROP,
        questionText: "Urutkan kejadian apa saja yang terjadi pada cerita Roro Jonggrang!",
        metadata: {
          items: [
            { id: "stone", label: "Roro Jonggrang berubah menjadi batu" },
            { id: "challenge", label: "Roro memberi tantangan seribu candi" },
            { id: "conquer", label: "Bandung menaklukkan Kerajaan Prambanan" },
            { id: "trick", label: "Roro menipu dengan obor dan padi" },
            { id: "jin", label: "Bandung dibantu jin membangun candi" },
          ],
          correctOrder: ["conquer", "challenge", "jin", "trick", "stone"],
        },
      },
      {
        slideNumber: 11,
        questionType: QuestionType.ESSAY,
        questionText: "Menurutmu, apakah yang dilakukan Roro Jonggrang itu benar atau salah? Jelaskan alasanmu!",
        isBonus: true,
      },
    ],
  },
}

async function main() {
  console.log("Start seeding interactive stories...")

  for (const [islandKey, data] of Object.entries(interactiveStoryData)) {
    // Find island by name (case-insensitive)
    const island = await prisma.island.findFirst({
      where: { islandName: { equals: islandKey, mode: "insensitive" } },
    })

    if (!island) {
      console.log(`Island not found: ${islandKey}, skipping...`)
      continue
    }

    console.log(`Processing interactive story for island: ${island.islandName}`)

    // Find or create INTERACTIVE story for this island
    let story = await prisma.story.findFirst({
      where: {
        islandId: island.id,
        storyType: StoryType.INTERACTIVE,
        NOT: {
          title: { in: ["Pre-Test", "Post-Test"] },
        },
      },
    })

    if (!story) {
      story = await prisma.story.create({
        data: {
          islandId: island.id,
          title: data.title,
          storyType: StoryType.INTERACTIVE,
          order: 1,
        },
      })
      console.log(`  Created new INTERACTIVE story: ${data.title}`)
    } else {
      await prisma.story.update({
        where: { id: story.id },
        data: { title: data.title },
      })
      console.log(`  Updated existing INTERACTIVE story: ${data.title}`)
    }

    // Clean up existing interactive slides and questions
    await prisma.interactiveSlide.deleteMany({
      where: { storyId: story.id },
    })
    console.log(`  Deleted existing interactive slides`)

    await prisma.question.deleteMany({
      where: { storyId: story.id, stageType: StageType.INTERACTIVE },
    })
    console.log(`  Deleted existing interactive questions`)

    // Create questions and map slideNumber to questionId
    const questionIdMap: Record<number, string> = {}

    for (const q of data.questions) {
      const questionData: {
        storyId: string
        stageType: StageType
        questionType: QuestionType
        questionText: string
        xpValue: number
        metadata?: object
      } = {
        storyId: story.id,
        stageType: StageType.INTERACTIVE,
        questionType: q.questionType,
        questionText: q.questionText,
        xpValue: XP_PER_QUESTION,
      }

      // Add metadata for DRAG_DROP questions
      if (q.questionType === QuestionType.DRAG_DROP && q.metadata) {
        questionData.metadata = q.metadata
      }

      // Create question with answer options if applicable
      if (q.options && q.options.length > 0) {
        const question = await prisma.question.create({
          data: {
            ...questionData,
            answerOptions: {
              create: q.options.map((opt) => ({
                optionText: opt.text,
                isCorrect: opt.isCorrect,
              })),
            },
          },
        })
        questionIdMap[q.slideNumber] = question.id
      } else {
        // ESSAY or DRAG_DROP without options
        const question = await prisma.question.create({
          data: questionData,
        })
        questionIdMap[q.slideNumber] = question.id
      }
    }
    console.log(`  Created ${data.questions.length} questions`)

    // Create interactive slides
    const slides: Array<{
      slideNumber: number
      slideType: SlideType
      imageUrl?: string | null
      contentText?: string | null
      audioUrl?: string | null
      questionId?: string | null
    }> = []

    // Slides 1-10: alternating IMAGE and GAME
    for (let i = 1; i <= 10; i++) {
      if (i % 2 === 1) {
        // Odd: IMAGE slide with storyImageMap
        slides.push({
          slideNumber: i,
          slideType: SlideType.IMAGE,
          imageUrl: data.storyImageMap[i] || null,
          contentText: data.storyTextMap?.[i] || null,
          audioUrl: data.storyAudioMap?.[i] || null,
        })
      } else {
        // Even: GAME slide linked to question
        slides.push({
          slideNumber: i,
          slideType: SlideType.GAME,
          questionId: questionIdMap[i] || null,
        })
      }
    }

    // Slide 11: ESSAY bonus (if exists)
    if (questionIdMap[11]) {
      slides.push({
        slideNumber: 11,
        slideType: SlideType.ESSAY,
        questionId: questionIdMap[11],
      })
    }

    // Final slide: ENDING
    slides.push({
      slideNumber: questionIdMap[11] ? 12 : 11,
      slideType: SlideType.ENDING,
    })

    // Insert all slides
    for (const slide of slides) {
      await prisma.interactiveSlide.create({
        data: {
          storyId: story.id,
          slideNumber: slide.slideNumber,
          slideType: slide.slideType,
          imageUrl: slide.imageUrl || null,
          contentText: slide.contentText || null,
          audioUrl: slide.audioUrl || null,
          questionId: slide.questionId || null,
        },
      })
    }
    console.log(`  Created ${slides.length} interactive slides`)
  }

  console.log("Seeding interactive stories finished.")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
