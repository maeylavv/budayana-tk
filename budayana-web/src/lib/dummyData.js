export const STUDENTS = [
  {
    id: "s1",
    name: "Muhammad Malik",
    username: "Malik",
    class: "4A",
    avatar: "👦",
    totalXP: 1140,
    title: "Si Penjelajah",
    storiesCompleted: 4,
    totalStories: 8,
    averageScore: 90,
    parentEmail: "rosidah@gmail.com",
    scoreHistory: [
      { island: "Papua", topic: "Rumah Adat & Pakaian", level: 1, bloom: "C1-C2", score: "4/5", scorePercent: 80, time: "05:30", date: "25-08-2025" },
      { island: "Sumatra", topic: "Makanan", level: 1, bloom: "C1-C2", score: "2/5", scorePercent: 40, time: "06:00", date: "24-08-2025" },
      { island: "Sumatra", topic: "Makanan", level: 2, bloom: "C3-C4", score: "4/4", scorePercent: 100, time: "08:30", date: "23-08-2025" },
      { island: "Sumatra", topic: "Makanan", level: 3, bloom: "C5-C6", score: "2/3", scorePercent: 66, time: "08:55", date: "23-08-2025" },
      { island: "Sulawesi", topic: "Tarian & Alat Musik", level: 1, bloom: "C1-C2", score: "4/5", scorePercent: 80, time: "09:40", date: "22-08-2025" },
      { island: "Sulawesi", topic: "Tarian & Alat Musik", level: 2, bloom: "C3-C4", score: "3/4", scorePercent: 75, time: "10:00", date: "21-08-2025" },
      { island: "Bali", topic: "Tarian & Alat Musik", level: 1, bloom: "C1-C2", score: "5/5", scorePercent: 100, time: "10:30", date: "21-08-2025" }
    ]
  },
  {
    id: "s2",
    name: "Siti Aisyah",
    username: "Aisyah",
    class: "4A",
    avatar: "👧",
    totalXP: 1450,
    title: "Si Pakar Budaya",
    storiesCompleted: 6,
    totalStories: 8,
    averageScore: 95,
    parentEmail: "aisyah.parent@gmail.com",
    scoreHistory: []
  },
  {
    id: "s3",
    name: "Budi Prasetyo",
    username: "Budi",
    class: "4A",
    avatar: "👦",
    totalXP: 500,
    title: "Si Pengamat",
    storiesCompleted: 2,
    totalStories: 8,
    averageScore: 70,
    parentEmail: "budi.parent@gmail.com",
    scoreHistory: []
  },
  {
    id: "s4",
    name: "Dewi Rahayu",
    username: "Dewi",
    class: "4A",
    avatar: "👧",
    totalXP: 1200,
    title: "Si Penjelajah",
    storiesCompleted: 5,
    totalStories: 8,
    averageScore: 88,
    parentEmail: "dewi.parent@gmail.com",
    scoreHistory: []
  },
  {
    id: "s5",
    name: "Ahmad Fauzi",
    username: "Fauzi",
    class: "4B",
    avatar: "👦",
    totalXP: 1100,
    title: "Si Penjelajah",
    storiesCompleted: 4,
    totalStories: 8,
    averageScore: 85,
    parentEmail: "fauzi.parent@gmail.com",
    scoreHistory: []
  },
  {
    id: "s6",
    name: "Nur Fadilah",
    username: "Dila",
    class: "4B",
    avatar: "👧",
    totalXP: 800,
    title: "Si Pengamat",
    storiesCompleted: 3,
    totalStories: 8,
    averageScore: 75,
    parentEmail: "dila.parent@gmail.com",
    scoreHistory: []
  },
  {
    id: "s7",
    name: "Rizky Ramadhan",
    username: "Rizky",
    class: "4B",
    avatar: "👦",
    totalXP: 600,
    title: "Si Pengamat",
    storiesCompleted: 2,
    totalStories: 8,
    averageScore: 72,
    parentEmail: "rizky.parent@gmail.com",
    scoreHistory: []
  },
  {
    id: "s8",
    name: "Indah Permata",
    username: "Indah",
    class: "4A",
    avatar: "👧",
    totalXP: 1500,
    title: "Si Pakar Budaya",
    storiesCompleted: 7,
    totalStories: 8,
    averageScore: 98,
    parentEmail: "indah.parent@gmail.com",
    scoreHistory: []
  }
];

export const getStudentById = (id) => STUDENTS.find(s => s.id === id);

export const PARENT_STUDENT = STUDENTS[0];

export const ISLAND_COLORS = {
  "Sumatra": "bg-green-100 text-green-800 border-green-200",
  "Jawa": "bg-blue-100 text-blue-800 border-blue-200",
  "Kalimantan": "bg-emerald-100 text-emerald-800 border-emerald-200",
  "Sulawesi": "bg-purple-100 text-purple-800 border-purple-200",
  "Papua": "bg-orange-100 text-orange-800 border-orange-200",
  "Bali": "bg-yellow-100 text-yellow-800 border-yellow-200",
  "Maluku": "bg-red-100 text-red-800 border-red-200",
  "Nusa Tenggara": "bg-teal-100 text-teal-800 border-teal-200"
};

export const TOPIC_ICONS = {
  "Rumah Adat & Pakaian": "🏠",
  "Makanan": "🍲",
  "Tarian & Alat Musik": "🎵"
};

export const TITLE_INFO = {
  "Si Pengamat": { icon: "👀", color: "text-blue-700", bg: "bg-blue-100" },
  "Si Penjelajah": { icon: "🚶", color: "text-orange-700", bg: "bg-orange-100" },
  "Si Pakar Budaya": { icon: "👑", color: "text-yellow-700", bg: "bg-yellow-100" }
};
