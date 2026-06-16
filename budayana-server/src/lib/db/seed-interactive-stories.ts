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
      1: "/assets/budayana/islands/sulawesi1.webp",
      3: "/assets/budayana/islands/sulawesi2.webp",
      5: "/assets/budayana/islands/sulawesi33.webp",
      7: "/assets/budayana/islands/sulawesi4.webp",
      9: "/assets/budayana/islands/sulawesi5.webp",
    },
    storyAudioMap: {
      1: "https://res.cloudinary.com/dyclbom1b/video/upload/v1779893560/SULAWESI_1_uf9g5i.mp3",
      3: "https://res.cloudinary.com/dyclbom1b/video/upload/v1779893560/SULAWESI_2_nlj2ew.mp3",
      5: "https://res.cloudinary.com/dyclbom1b/video/upload/v1779893560/SULAWESI_3_u5ijp1.mp3",
      7: "https://res.cloudinary.com/dyclbom1b/video/upload/v1779893558/SULAWESI_4_iucvoq.mp3",
      9: "https://res.cloudinary.com/dyclbom1b/video/upload/v1779893559/SULAWESI_5_fkqzpl.mp3",
    },
    questions: [
      {
        slideNumber: 2,
        questionType: QuestionType.MCQ,
        questionText: "Apa yang sedang dilakukan oleh anak-anak tersebut?",
        options: [
          { text: "Berlari-lari", isCorrect: true },
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
          { text: "Iya", isCorrect: false },
          { text: "Tidak", isCorrect: true },
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
            { id: "search", label: "Warga desa mencari anak-anak yang hilang" },
            { id: "play", label: "Anak-anak bermain sambil menertawakan nasihat ibu" },
            { id: "home", label: "Orang tua melarang anak keluar malam karena Nenek Pakande mengintai" },
            { id: "appear", label: "Nenek Pakande muncul dan menculik anak-anak" },
            { id: "sunset", label: "Sore mulai datang dan anak-anak masih bermain" },
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
      1: "/assets/budayana/islands/sumatra1.webp",
      3: "/assets/budayana/islands/sumatra2.webp",
      5: "/assets/budayana/islands/sumatra3.webp",
      7: "/assets/budayana/islands/sumatra4.webp",
      9: "/assets/budayana/islands/sumatra5.webp",
    },
    storyTextMap: {
      1: "Di sebuah desa kecil di tepi laut, hiduplah Malin Kundang dan ibunya. Hidup mereka sederhana, tapi bahagia.\nSetiap pagi, Malin membantu ibunya mencari ikan dan menjemur hasil tangkapan.\n“Ibu, suatu hari aku akan membuat hidup kita lebih baik,” katanya sambil tersenyum.\nIbunya hanya tersenyum lembut, memeluk anak satu-satunya itu dengan penuh kasih.",
      3: "Suatu hari, kapal dagang besar berlabuh di pelabuhan desa. Malin ingin ikut berlayar mencari peruntungan.\n“Ibu, izinkan aku pergi. Aku janji akan pulang membawa kebahagiaan”.\nSang ibu menatapnya dengan mata berkaca-kaca, lalu mengangguk.\n“Pergilah, Nak. Tapi jangan pernah lupakan ibumu.”",
      5: "Tahun-tahun berlalu. Malin kini menjadi saudagar kaya.\nIa memakai pakaian indah dan menikah dengan gadis bangsawan.\nSuatu hari, kapalnya berlabuh kembali di kampung halamannya.\nKabar itu membuat ibunya gembira akhirnya “anak yang dirindukan pulang!”",
      7: "Sang ibu berlari menghampiri, memeluk Malin sambil menangis bahagia.\nTapi Malin menepis pelukan itu.\n“Ibu? Aku tidak kenal wanita miskin ini!” katanya dengan angkuh.\nIstrinya memandang jijik.\nHati sang ibu hancur. Dengan air mata yang jatuh, ia berdoa,\n“Ya Tuhan, jika benar dia anakku, hukumlah dia atas kedurhakaannya.”",
      9: "Tiba-tiba, langit gelap. Badai datang menggulung laut.\nPetir menyambar kapal Malin. Ia menyesal dan berteriak meminta ampun,\ntetapi semua sudah terlambat.\nKetika badai reda, orang-orang menemukan batu menyerupai manusia\nterduduk di tepi pantai batu Malin Kundang.",
    },
    storyAudioMap: {
      1: "https://res.cloudinary.com/dyclbom1b/video/upload/v1779893552/SUMATRA_1_qqduau.mp3",
      3: "https://res.cloudinary.com/dyclbom1b/video/upload/v1779893552/SUMATRA_2_uw12bc.mp3",
      5: "https://res.cloudinary.com/dyclbom1b/video/upload/v1779893552/SUMATRA_3_bdhtua.mp3",
      7: "https://res.cloudinary.com/dyclbom1b/video/upload/v1779893551/SUMATRA_4_ayqwbu.mp3",
      9: "https://res.cloudinary.com/dyclbom1b/video/upload/v1779893551/SUMATRA_5_zdjuw0.mp3",
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
          { text: "Bersantai", isCorrect: false },
        ],
      },
      {
        slideNumber: 4,
        questionType: QuestionType.TRUE_FALSE,
        questionText: "Apakah ibu mengizinkan Malin pergi berlayar?",
        options: [
          { text: "Iya", isCorrect: true },
          { text: "Tidak", isCorrect: false },
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
      1: "/assets/budayana/islands/maluku1.webp",
      3: "/assets/budayana/islands/maluku22.webp",
      5: "/assets/budayana/islands/maluku33.webp",
      7: "/assets/budayana/islands/maluku44.webp",
      9: "/assets/budayana/islands/maluku5.webp",
    },
    storyAudioMap: {
      1: "https://res.cloudinary.com/dyclbom1b/video/upload/v1779893550/MALUKU_1_ujsuhn.mp3",
      3: "https://res.cloudinary.com/dyclbom1b/video/upload/v1779893551/MALUKU_2_kordwd.mp3",
      5: "https://res.cloudinary.com/dyclbom1b/video/upload/v1779893550/MALUKU_3_ak3ugt.mp3",
      7: "https://res.cloudinary.com/dyclbom1b/video/upload/v1779893550/MALUKU_4_wnlx8c.mp3",
      9: "https://res.cloudinary.com/dyclbom1b/video/upload/v1779893550/MALUKU_5_j6ggj8.mp3",
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
          { text: "Iya", isCorrect: false },
          { text: "Tidak", isCorrect: true },
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
            { id: "family", label: "Keluarga berkumpul membahas anak mereka yang hilang." },
            { id: "news", label: "Kapal Magohiduru dikabarkan tenggelam" },
            { id: "water", label: "Warga berkumpul akibat air misterius" },
            { id: "promise", label: "Magohiduru pamit merantau pada Majojaru" },
            { id: "lake", label: "Air mata Majojaru membentuk telaga" },
          ],
          correctOrder: ["water", "family", "promise", "news", "lake"],
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
      1: "/assets/budayana/islands/kalimantan11.webp",
      3: "/assets/budayana/islands/kalimantan22.webp",
      5: "/assets/budayana/islands/kalimantan33.webp",
      7: "/assets/budayana/islands/kalimantan4.webp",
      9: "/assets/budayana/islands/kalimantan55.webp",
    },
    storyAudioMap: {
      1: "https://res.cloudinary.com/dyclbom1b/video/upload/v1779893564/kalimantan_1_f3an1e.mp3",
      3: "https://res.cloudinary.com/dyclbom1b/video/upload/v1779893563/kalimantan_2_dwvlne.mp3",
      5: "https://res.cloudinary.com/dyclbom1b/video/upload/v1779893564/kalimantan_3_mwmqsx.mp3",
      7: "https://res.cloudinary.com/dyclbom1b/video/upload/v1779893563/kalimantan_4_croqle.mp3",
      9: "https://res.cloudinary.com/dyclbom1b/video/upload/v1779893562/kalimantan_5_ccckfk.mp3",
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
          { text: "Iya", isCorrect: false },
          { text: "Tidak", isCorrect: true },
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
      1: "/assets/budayana/islands/nusa tenggara1.webp",
      3: "/assets/budayana/islands/nusa tenggara2.webp",
      5: "/assets/budayana/islands/nusa tenggara3.webp",
      7: "/assets/budayana/islands/nusa tenggara4.webp",
      9: "/assets/budayana/islands/nusa tenggara5.webp",
    },
    storyAudioMap: {
      1: "https://res.cloudinary.com/dyclbom1b/video/upload/v1779893554/NTT_1_sqtwos.mp3",
      3: "https://res.cloudinary.com/dyclbom1b/video/upload/v1779893554/NTT_2_hnxizc.mp3",
      5: "https://res.cloudinary.com/dyclbom1b/video/upload/v1780688240/NTT_3_NEW_x4bm8f.mp3",
      7: "https://res.cloudinary.com/dyclbom1b/video/upload/v1779893553/NTT_4_ncyqmc.mp3",
      9: "https://res.cloudinary.com/dyclbom1b/video/upload/v1779893552/NTT_5_sqm0th.mp3",
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
        questionText: "Apakah siluman penyu membawa petani ke pasar ikan?",
        options: [
          { text: "Iya", isCorrect: false },
          { text: "Tidak", isCorrect: true },
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
            { id: "water", label: "Watu Maladong mengeluarkan air dari dalam tanah" },
            { id: "turtle", label: "Penyu mengantar petani ke pulau seberang" },
            { id: "farm", label: "Babi hutan merusak kebun petani" },
            { id: "fight", label: "Petani mengalahkan kepala desa" },
            { id: "grandma", label: "Nenek memberi ramuan kepada petani" },
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
      1: "/assets/budayana/islands/bali11.webp",
      3: "/assets/budayana/islands/bali22.webp",
      5: "/assets/budayana/islands/bali33.webp",
      7: "/assets/budayana/islands/bali44.webp",
      9: "/assets/budayana/islands/bali55.webp",
    },
    storyAudioMap: {
      1: "https://res.cloudinary.com/dyclbom1b/video/upload/v1779893556/BALI_1_zp2dpq.mp3",
      3: "https://res.cloudinary.com/dyclbom1b/video/upload/v1779893555/BALI_2_xkdx7t.mp3",
      5: "https://res.cloudinary.com/dyclbom1b/video/upload/v1779893555/BALI_3_nnpkis.mp3",
      7: "https://res.cloudinary.com/dyclbom1b/video/upload/v1779893555/BALI_4_cuum0x.mp3",
      9: "https://res.cloudinary.com/dyclbom1b/video/upload/v1780688223/Bali_5_NEW_yiuwcw.mp3",
    },
    questions: [
      {
        slideNumber: 2,
        questionType: QuestionType.MCQ,
        questionText: "Kemana kedua orang tua Kesuna dan Bawang pergi?",
        options: [
          { text: "Gunung", isCorrect: false },
          { text: "Sawah", isCorrect: true },
          { text: "Pasar", isCorrect: false },
          { text: "Pesisir Pantai", isCorrect: false },
        ],
      },
      {
        slideNumber: 4,
        questionType: QuestionType.TRUE_FALSE,
        questionText: "Apakah ayah percaya cerita Bawang dan mengusir Kesuna dari rumah?",
        options: [
          { text: "Iya", isCorrect: true },
          { text: "Tidak", isCorrect: false },
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
          { text: "Bawang berubah menjadi burung", isCorrect: false },
          { text: "Bawang mendapat lebih banyak emas", isCorrect: false },
          { text: "Bawang dilukai oleh burung", isCorrect: true },
          { text: "Bawang bisa terbang", isCorrect: false },
        ],
      },
      {
        slideNumber: 10,
        questionType: QuestionType.DRAG_DROP,
        questionText: "Urutkan kejadian apa saja yang terjadi pada cerita Bawang dan Kesuna!",
        metadata: {
          items: [
            { id: "gold", label: "Kesuna mendapat perhiasan emas dari burung ajaib" },
            { id: "lie", label: "Bawang memfitnah Kesuna hingga diusir ke hutan" },
            { id: "hurt", label: "Bawang terluka akibat patukan burung ajaib" },
            { id: "work", label: "Kesuna patuh untuk membersihkan rumah dan Bawang bermalas-malasan" },
            { id: "sad", label: "Bawang pulang dengan menyesal dan Kesuna hidup tenang dengan Nenek" },
          ],
          correctOrder: ["work", "lie", "gold", "hurt", "sad"],
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
      1: "/assets/budayana/islands/papua1.webp",
      3: "/assets/budayana/islands/papua2.webp",
      5: "/assets/budayana/islands/papua3.webp",
      7: "/assets/budayana/islands/papua4.webp",
      9: "/assets/budayana/islands/papua5.webp",
    },
    storyAudioMap: {
      1: "https://res.cloudinary.com/dyclbom1b/video/upload/v1779893562/PAPUA_1_ydxu2p.mp3",
      3: "https://res.cloudinary.com/dyclbom1b/video/upload/v1780688232/PAPUA_2_NEW_hhytzz.mp3",
      5: "https://res.cloudinary.com/dyclbom1b/video/upload/v1779893561/PAPUA_3_cjsgtw.mp3",
      7: "https://res.cloudinary.com/dyclbom1b/video/upload/v1779893560/PAPUA_4_r6bjng.mp3",
      9: "https://res.cloudinary.com/dyclbom1b/video/upload/v1779893561/PAPUA_5_arm5bp.mp3",
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
          { text: "Iya", isCorrect: true },
          { text: "Tidak", isCorrect: false },
        ],
      },
      {
        slideNumber: 6,
        questionType: QuestionType.MCQ,
        questionText: "Bagaimana cara Biwar mengalahkan naga?",
        options: [
          { text: "Meminta bantuan seluruh warga desa", isCorrect: false },
          { text: "Menjebak naga dengan perangkap besar", isCorrect: false },
          { text: "Memanah matanya lalu menombak tubuhnya", isCorrect: true },
          { text: "Mengusir naga dengan api dan obor", isCorrect: false },
        ],
      },
      {
        slideNumber: 8,
        questionType: QuestionType.MCQ,
        questionText: "Apa yang dikatakan Biwar kepada warga desa setelah mengalahkan naga?",
        options: [
          { text: "Aku adalah pahlawan terkuat di Papua", isCorrect: false },
          { text: "Jangan pernah mendekati sungai lagi", isCorrect: false },
          { text: "Kita harus pindah ke desa lain", isCorrect: false },
          { text: "Selama kita bersatu, tak ada yang tak bisa dikalahkan", isCorrect: true },
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
      1: "/assets/budayana/islands/jawa1.webp",
      3: "/assets/budayana/islands/jawa22.webp",
      5: "/assets/budayana/islands/jawa33.webp",
      7: "/assets/budayana/islands/jawa44.webp",
      9: "/assets/budayana/islands/jawa5.webp",
    },
    storyAudioMap: {
      1: "https://res.cloudinary.com/dyclbom1b/video/upload/v1779893558/JAWA_1_hss4do.mp3",
      3: "https://res.cloudinary.com/dyclbom1b/video/upload/v1779893558/JAWA_2_in1v7r.mp3",
      5: "https://res.cloudinary.com/dyclbom1b/video/upload/v1779893557/JAWA_3_zaivj2.mp3",
      7: "https://res.cloudinary.com/dyclbom1b/video/upload/v1779893557/JAWA_4_nrqank.mp3",
      9: "https://res.cloudinary.com/dyclbom1b/video/upload/v1779893556/JAWA_5_m78szm.mp3",
    },
    questions: [
      {
        slideNumber: 2,
        questionType: QuestionType.MCQ,
        questionText: "Dari kerajaan mana Bandung Bondowoso berasal?",
        options: [
          { text: "Kerajaan Prambanan", isCorrect: false },
          { text: "Kerajaan Kutai", isCorrect: false },
          { text: "Kerajaan Majapahit", isCorrect: false },
          { text: "Kerajaan Pengging", isCorrect: true },
        ],
      },
      {
        slideNumber: 4,
        questionType: QuestionType.TRUE_FALSE,
        questionText: "Apakah Bandung Bondowoso menerima tantangan dari Roro Jonggrang untuk membangun candi?",
        options: [
          { text: "Iya", isCorrect: true },
          { text: "Tidak", isCorrect: false },
        ],
      },
      {
        slideNumber: 6,
        questionType: QuestionType.MCQ,
        questionText: "Apa yang dilakukan Roro Jonggrang untuk menggagalkan pembangunan candi?",
        options: [
          { text: "Memerintahkan gadis desa untuk menumbuk padi dan menyalakan obor", isCorrect: true },
          { text: "Meminta bantuan prajurit kerajaan", isCorrect: false },
          { text: "Memanggil hujan deras untuk menghentikan para jin", isCorrect: false },
          { text: "Menghancurkan candi-candi yang sudah dibangun", isCorrect: false },
        ],
      },
      {
        slideNumber: 8,
        questionType: QuestionType.MCQ,
        questionText: "Apa yang dirasakan Bandung Bondowoso setelah menyadari tipuan Roro Jonggrang??",
        options: [
          { text: "Bahagia", isCorrect: false },
          { text: "Sedih", isCorrect: false },
          { text: "Marah", isCorrect: true },
          { text: "Kecewa", isCorrect: false },
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
            { id: "trick", label: "Roro mengusir jin dengan padi dan obor" },
            { id: "jin", label: "Bandung dibantu oleh jin untuk membangun candi" },
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
