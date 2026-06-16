/**
 * Consolidated game data for all islands
 * Each game has story images, question images, and questions (MC, TF, drag-drop)
 */
export const games = {
  sulawesi: {
    title: "Nenek Pakande",
    totalXp: 100,
    xpPerQuestion: 20,
    storyImageMap: {
      1: "/assets/budayana/islands/sulawesi1.png",
      3: "/assets/budayana/islands/sulawesi2.png",
      5: "/assets/budayana/islands/sulawesi33.png",
      7: "/assets/budayana/islands/sulawesi4.png",
      9: "/assets/budayana/islands/sulawesi5.png",
    },
    questionImageMap: {
      2: "/assets/budayana/islands/pertanyaan 2 sulawesi.png",
      4: "/assets/budayana/islands/pertanyaan 4 sulawesi.png",
      6: "/assets/budayana/islands/pertanyaan 6 sulawesi.png",
      8: "/assets/budayana/islands/question 8 sulawesi.png",
      10: "/assets/budayana/islands/pertanyaan 10 sulawesi.png",
      bonus: "/assets/budayana/islands/pertanyaan bonus sulawesi.png",
    },
    questions: [
      {
        id: "q2",
        page: 2,
        type: "mc",
        options: [
          "Berlari-larian",
          "Main layangan",
          "Main kelereng",
          "Memancing",
        ],
        correct: 0,
        incorrectMessage: "Uh oh... jawabannya kurang tepat, ayo coba lagi!",
      },
      {
        id: "q4",
        page: 4,
        type: "tf",
        correct: false,
      },
      {
        id: "q6",
        page: 6,
        type: "mc",
        options: ["Panci", "Jaring", "Karung", "Perangkap"],
        correct: 2,
      },
      {
        id: "q8",
        page: 8,
        type: "mc",
        options: ["Kota", "Hutan", "Gunung", "Sawah"],
        correct: 1,
      },
      {
        id: "q10",
        page: 10,
        type: "drag",
        items: [
          { id: "search", label: "Anak-anak berlari ketakutan" },
          { id: "play", label: "Anak-anak bermain di ladang" },
          { id: "home", label: "Warga mencari anak-anak" },
          { id: "appear", label: "Nenek Pakande muncul" },
          { id: "sunset", label: "Sore hari mulai datang" },
        ],
        correctOrder: ["play", "sunset", "appear", "search", "home"],
      },
    ],
  },

  sumatra: {
    title: "Malin Kundang",
    totalXp: 100,
    xpPerQuestion: 20,
    storyImageMap: {
      1: "/assets/budayana/islands/cerita 1 malin (1).png",
      3: "/assets/budayana/islands/cerita 2 malin (2).png",
      5: "/assets/budayana/islands/cerita 3 malin (1).png",
      7: "/assets/budayana/islands/cerita 5 malin (2).png",
      9: "/assets/budayana/islands/cerita 6 malin (3).png",
    },
    questionImageMap: {
      2: "/assets/budayana/islands/pertanyaan 1 malin.png",
      4: "/assets/budayana/islands/pertanyaan 2 malin.png",
      6: "/assets/budayana/islands/pertanyaan 4 malin.png",
      8: "/assets/budayana/islands/pertanyaan 6 malin.png",
      10: "/assets/budayana/islands/pertanyaan 7 malin.png",
      bonus: "/assets/budayana/islands/pertanyaan bonus malin.png",
    },
    questions: [
      {
        id: "q2",
        page: 2,
        type: "mc",
        options: ["Membantu Ibunya", "Menjemur Baju", "Memancing", "Tiduran"],
        correct: 0,
        incorrectMessage: "Uh oh... jawabannya kurang tepat, ayo coba lagi!",
      },
      {
        id: "q4",
        page: 4,
        type: "tf",
        correct: false,
      },
      {
        id: "q6",
        page: 6,
        type: "mc",
        options: ["Bapaknya", "Temannya", "Ibunya", "Tetangganya"],
        correct: 2,
      },
      {
        id: "q8",
        page: 8,
        type: "mc",
        options: [
          "Kaki sang ibu terinjak",
          "Malin tidak menganggap ibu",
          "Malin memeluk sang ibu",
          "Ibu tersandung ikan di pasar",
        ],
        correct: 1,
      },
      {
        id: "q10",
        page: 10,
        type: "drag",
        items: [
          { id: "stone", label: "Malin dikutuk menjadi batu" },
          { id: "leave", label: "Malin tinggal bersama ibunya" },
          { id: "ship", label: "Malin menjadi saudagar kaya" },
          { id: "miss", label: "Malin pergi merantau" },
          { id: "deny", label: "Malin mengingkari ibunya" },
        ],
        correctOrder: ["leave", "miss", "ship", "deny", "stone"],
      },
    ],
  },

  maluku: {
    questionImageMap: {
      2: "/assets/budayana/islands/pertanyaan 2 maluku.png",
      4: "/assets/budayana/islands/pertanyaan 4 maluku.png",
      6: "/assets/budayana/islands/pertanyaan 6 maluku.png",
      8: "/assets/budayana/islands/pertanyaan 8 maluku.png",
      10: "/assets/budayana/islands/pertanyaan 10 maluku.png",
      bonus: "/assets/budayana/islands/pertanyaan bonus maluku.png",
    },
  },

  kalimantan: {
    questionImageMap: {
      2: "/assets/budayana/islands/pertanyaan 2 kalimantan.png",
      4: "/assets/budayana/islands/pertanyaan 4 kalimantan.png",
      6: "/assets/budayana/islands/pertanyaan 6 kalimantan.png",
      8: "/assets/budayana/islands/pertanyaan 8 kalimantan.png",
      10: "/assets/budayana/islands/pertanyaan 10 kalimantan.png",
      bonus: "/assets/budayana/islands/pertanyaan bonus kalimantan.png",
    },
  },

  "nusa-tenggara": {
    questionImageMap: {
      2: "/assets/budayana/islands/pertanyaan 2 nusa tenggara.png",
      4: "/assets/budayana/islands/pertanyaan 4 nusa tenggara.png",
      6: "/assets/budayana/islands/pertanyaan 6 nusa tenggara.png",
      8: "/assets/budayana/islands/pertanyaan 8 nusa tenggara.png",
      10: "/assets/budayana/islands/pertanyaan 10 nusa tenggara.png",
      bonus: "/assets/budayana/islands/pertanyaan bonus nusa tenggara.png",
    },
  },

  bali: {
    questionImageMap: {
      2: "/assets/budayana/islands/pertanyaan 2 bali.png",
      4: "/assets/budayana/islands/pertanyaan 4 bali.png",
      6: "/assets/budayana/islands/pertanyaan 6 bali.png",
      8: "/assets/budayana/islands/pertanyaan 8 bali.png",
      10: "/assets/budayana/islands/pertanyaan 10 bali.png",
      bonus: "/assets/budayana/islands/pertanyaan bonus bali.png",
    },
  },

  papua: {
    questionImageMap: {
      2: "/assets/budayana/islands/pertanyaan 2 papua.png",
      4: "/assets/budayana/islands/pertanyaan 4 papua.png",
      6: "/assets/budayana/islands/pertanyaan 6 papua.png",
      8: "/assets/budayana/islands/pertanyaan 8 papua.png",
      10: "/assets/budayana/islands/pertanyaan 10 papua.png",
      bonus: "/assets/budayana/islands/pertanyaan bonus papua.png",
    },
  },

  jawa: {
    questionImageMap: {
      2: "/assets/budayana/islands/pertanyaan 2 jawa.png",
      4: "/assets/budayana/islands/pertanyaan 4 jawa.png",
      6: "/assets/budayana/islands/pertanyaan 6 jawa.png",
      8: "/assets/budayana/islands/pertanyaan 8 jawa.png",
      10: "/assets/budayana/islands/pertanyaan 10 jawa.png",
      bonus: "/assets/budayana/islands/pertanyaan bonus jawa.png",
    },
  },
}

/**
 * Get game data by island slug
 * @param {string} islandSlug
 * @returns {object|undefined}
 */
export const getGameByIsland = (islandSlug) => {
  return games[islandSlug]
}

/**
 * Build pages array from game data
 * @param {object} game
 * @returns {array}
 */
export const buildGamePages = (game) => {
  const pages = []
  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 1) {
      pages.push({ type: "story", pageNumber: i })
    } else {
      const question = game.questions.find((q) => q.page === i)
      pages.push({ type: "question", pageNumber: i, question })
    }
  }
  return pages
}
