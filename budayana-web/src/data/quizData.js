// A central dictionary scaling Island > Topic > Level
export const QUIZ_DATA = {
  sumatra: {
    rumah: {
      1: {
        literacy: {
          image: '/assets/budayana/islands/level1 sumatra.png',
          text: 'Tahukah kamu? Sumatera Barat memiliki rumah adat yang sangat indah bernama Rumah Gadang. Ciri khas utama rumah ini adalah atapnya yang runcing menjulang ke atas seperti tanduk kerbau, yang disebut dengan Gonjong. Zaman dahulu, atap ini dibuat dari bahan alami bernama Ijuk agar bagian dalam rumah tetap terasa sejuk. Selain itu, Rumah Gadang dibangun berbentuk panggung dengan tiang yang tinggi untuk melindungi penghuninya dari banjir dan gangguan hewan liar di hutan.'
        },
        questions: [
          {
            type: 'multiple_choice',
            text: 'Apa nama rumah adat dari Sumatera Barat yang memiliki atap runcing seperti tanduk kerbau?',
            options: ['Rumah Joglo', 'Rumah Gadang', 'Rumah Honai', 'Rumah Limas'],
            correctIndex: 1, // B
            xp: 20
          },
          {
            type: 'picture_selection',
            text: 'Pilih gambar yang menunjukkan bentuk atap "Gonjong" (tanduk kerbau) yang benar!',
            options: [
              { text: 'Atap Limas',   emoji: '', image: '/assets/budayana/islands/atap limas.png' },
              { text: 'Atap Runcing', emoji: '', image: '/assets/budayana/islands/atap runcing.png' },
              { text: 'Atap Datar',   emoji: '', image: '/assets/budayana/islands/atap datar.png' },
              { text: 'Atap Kubah',   emoji: '', image: '/assets/budayana/islands/atap kubah.png' }
            ],
            correctIndex: 1, // B - Atap Runcing (Gonjong)
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Apa bahan utama yang digunakan untuk membuat atap Rumah Gadang pada zaman dahulu?',
            options: ['Ijuk', 'Seng', 'Genteng', 'Jerami'],
            correctIndex: 0, // A
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Mengapa Rumah Gadang dibuat berbentuk panggung dengan tiang yang tinggi?',
            options: ['Terlihat mewah', 'Menjemur pakaian', 'Terhindar banjir & hewan', 'Udara dingin'],
            correctIndex: 2, // C
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Berdasarkan teks, berapa jumlah minimal lengkungan atap (gonjong) yang biasanya ada pada Rumah Gadang?',
            options: ['2', '4', '6', '8'],
            correctIndex: 1, // B
            xp: 20
          }
        ]
      },
      2: {
        literacy: {
          image: '/assets/budayana/islands/level2 sumatra.png', // Updated image link dynamically targeting Level 2's specific graphic!
          text: 'Rumah Gadang tidak hanya indah, tetapi juga sangat pintar desainnya. Rumah ini dibangun tanpa menggunakan paku besi sama sekali. Sebagai gantinya, para leluhur menggunakan pasak kayu untuk menyambungkan tiang-tiangnya.\n\nMengapa demikian?\nTernyata, sambungan kayu ini membuat bangunan menjadi lentur dan tidak mudah roboh saat terjadi gempa bumi.\n\nSelain itu, setiap ukiran bunga pada dinding rumah melambangkan kekayaan alam Sumatera Barat, sementara atap runcingnya melambangkan kemenangan dan semangat masyarakatnya.'
        },
        questions: [
          {
            type: 'drag_drop',
            text: 'Urutkan bagian Rumah Gadang dari yang paling bawah hingga paling atas!',
            draggables: [
              { id: 'd1', text: 'Batu Sandi', color: '#FFF3B0' },
              { id: 'd2', text: 'Lantai Panggung', color: '#dbe0fd' },
              { id: 'd3', text: 'Atap Gonjong', color: '#ffb2d8' },
              { id: 'd4', text: 'Tiang Kayu', color: '#ffd5c0' }
            ],
            dropZones: [
              { id: 'z1', label: 'Posisi 1' },
              { id: 'z2', label: 'Posisi 2' },
              { id: 'z3', label: 'Posisi 3' },
              { id: 'z4', label: 'Posisi 4' }
            ],
            correctOrder: ['d1', 'd4', 'd2', 'd3'], // Batu Sandi -> Tiang Kayu -> Lantai Panggung -> Atap Gonjong
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Jika kamu ingin membangun Rumah Gadang yang kuat, jenis kayu apa yang digunakan untuk tiang utama sesuai tradisi?',
            options: ['Kayu Sengon yang ringan', 'Kayu jati atau kayu ulin tua', 'Batang pohon kelapa', 'Papan kayu lapis (triplek)'],
            correctIndex: 1, 
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Mengapa Rumah Gadang disambung tanpa menggunakan paku besi sama sekali?',
            options: ['Agar atap tidak mudah bocor', 'Agar tetap lentur saat terjadi gempa', 'Supaya cahaya matahari tidak masuk', 'Agar burung tidak bisa bersarang'],
            correctIndex: 1, 
            xp: 20
          },
          {
            type: 'drag_drop',
            text: 'Pasangkan simbol berikut dengan maknanya!',
            draggables: [
              { id: 'm1', text: 'Atap Runcing', color: '#FFF3B0', image: '/assets/budayana/islands/atap runcing.png' },
              { id: 'm2', text: 'Ukiran Bunga', color: '#D4DCFF', image: '/assets/budayana/islands/Ukiran bunga.png' }
            ],
            dropZones: [
              { id: 'z1', label: 'Melambangkan kemenangan' },
              { id: 'z2', label: 'Melambangkan kekayaan alam' }
            ],
            correctOrder: ['m1', 'm2'], 
            xp: 20
          }
        ]
      },
      3: {
        literacy: {
          image: '/assets/budayana/islands/level3 sumatra.png', // Or level3 sumatra as per user, I'll use standard image source based on screenshot monkey
          text: 'Seiring berjalannya waktu, banyak Rumah Gadang yang mulai berubah. Karena ijuk semakin sulit ditemukan dan mudah bocor, banyak warga yang mengganti atapnya menggunakan seng. Selain itu, Rumah Gadang yang aslinya sangat luas kini harus dibangun di kota-kota besar yang lahannya semakin sempit.\n\nHal ini memicu perdebatan: apakah kita harus tetap mempertahankan bentuk asli sesuai tradisi, atau boleh mengubahnya agar lebih modern dan praktis?\n\nSebagai generasi penerus, kita harus bijak dalam menjaga warisan budaya ini agar tidak hilang ditelan zaman.'
        },
        questions: [
          {
            type: 'opinion_reason',
            text: 'Jika kamu membangun Rumah Gadang di kota besar, apakah kamu tetap harus membuat tangga di bagian luar?',
            opinions: [
              { id: 'op1', text: 'Tetap Harus' },
              { id: 'op2', text: 'Boleh Diubah' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Karena tangga luar adalah ciri khas untuk menyambut tamu sesuai tradisi' },
              { id: 'r2', text: 'B. Agar menghemat tempat namun tetap menggunakan ukiran khas di pintu' },
              { id: 'r3', text: 'C. Supaya rumah terlihat unik dibandingkan rumah tetangga' },
              { id: 'r4', text: 'D. Agar orang lain tidak mudah masuk ke dalam rumah' }
            ],
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'opinion_reason',
            text: 'Menurutmu, mengganti atap ijuk menjadi atap seng pada Rumah Gadang adalah tindakan yang...',
            opinions: [
              { id: 'op1', text: 'Tepat' },
              { id: 'op2', text: 'Kurang Tepat' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Karena atap seng lebih tahan lama dan tidak mudah bocor' },
              { id: 'r2', text: 'B. Karena kehilangan keaslian dan ciri khas budaya lokal' },
              { id: 'r3', text: 'C. Agar lebih menghemat biaya perawatan setiap tahunnya' },
              { id: 'r4', text: 'D. Supaya rumah terlihat lebih modern seperti rumah di kota' }
            ],
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op1', reasonId: 'r3' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'drag_drop_sentence',
            text: 'Susunlah pesan ajakan untuk temanmu agar mau menjaga kebersihan Rumah Gadang!',
            draggables: [
              { id: 'w1', text: 'menjaga',       color: '#f6bad3ff' },
              { id: 'w2', text: 'Rumah Gadang',  color: '#99AAEF' },
              { id: 'w3', text: 'warisan budaya', color: '#FFC7B1' },
              { id: 'w4', text: 'sebagai',       color: '#a5ec93ff' },
              { id: 'w5', text: 'Ayo kita',      color: '#f5f199ff' },
              { id: 'w6', text: 'kebersihan',    color: '#e3baf4ff' }
            ],
            dropZones: [
              { id: 'z1' }, { id: 'z2' }, { id: 'z3' }, { id: 'z4' }, { id: 'z5' }, { id: 'z6' }
            ],
            correctOrder: ['w5', 'w1', 'w6', 'w2', 'w4', 'w3'],
            xp: 40
          }
        ]
      }
    },
    makanan: {
      1: {
        literacy: {
          image: '/assets/budayana/islands/makanan1 sumatra.png',
          text: 'Salah satu makanan tradisional yang paling terkenal dari Sumatera Barat adalah Rendang. Makanan ini berbahan dasar daging sapi yang dimasak dengan aneka rempah dan santan kelapa. Rendang memiliki warna cokelat gelap yang khas. Untuk mendapatkan warna dan rasa yang lezat, Rendang harus dimasak dalam waktu yang sangat lama, yaitu sekitar 4 sampai 8 jam. Karena proses memasak yang lama ini, Rendang bisa awet dan tahan lama meskipun tidak disimpan di dalam kulkas.'
        },
        questions: [
          {
            type: 'multiple_choice',
            text: 'Apa bahan utama yang digunakan untuk membuat Rendang dari Sumatera Barat?',
            options: ['Daging Ayam', 'Daging Sapi', 'Ikan Tongkol', 'Daging Kambing'],
            correctIndex: 1, // B
            xp: 20
          },
          {
            type: 'picture_selection',
            text: 'Pilih gambar bumbu cair yang membuat Rendang terasa gurih dan berminyak!',
            options: [
              { text: 'Air Bening', emoji: '💧', image: '' },
              { text: 'Minyak Goreng', emoji: '🍾', image: '' },
              { text: 'Santan Kelapa', emoji: '🥥', image: '' },
              { text: 'Kecap Manis', emoji: '🍯', image: '' }
            ],
            correctIndex: 2, // C
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Berapa lama waktu yang biasanya dibutuhkan untuk memasak Rendang hingga kering?',
            options: ['15 - 30 Menit', '1 Jam', '4 - 8 Jam', '24 Jam Full'],
            correctIndex: 2, // C
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Mengapa Rendang yang sudah dimasak hingga kering bisa tahan lama tanpa kulkas?',
            options: ['Karena dagingnya dicampur dengan garam yang sangat banyak', 'Karena Rendang tidak disukai oleh bakteri', 'Karena proses masak yang lama membunuh bakteri dan santan menjadi pengawet', 'Karena warna cokelat gelap menakuti kuman'],
            correctIndex: 2, // C
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Berdasarkan teks, warna khas dari Rendang yang sudah matang sempurna adalah...',
            options: ['Kuning Cerah', 'Merah Menyala', 'Cokelat Gelap', 'Putih Bersih'],
            correctIndex: 2, // C
            xp: 20
          }
        ]
      },
      2: {
        literacy: {
          image: '/assets/budayana/islands/makanan2 sumatra.png',
          text: 'Mengapa Rendang harus dimasak hingga kering dan berwarna gelap? Ternyata, proses memasak yang lama berfungsi sebagai pengawet alami. Santan dan rempah-rempah yang mengental akan membungkus daging, sehingga bakteri tidak mudah masuk. Selain itu, Rendang memiliki makna yang dalam bagi masyarakat Minangkabau. Daging melambangkan niniak mamak (pemimpin), santan melambangkan kaum intelektual, cabai melambangkan ulama yang tegas, dan bumbu rempah melambangkan seluruh masyarakat yang bersatu.'
        },
        questions: [
          {
            type: 'drag_drop',
            text: 'Urutkan perubahan masakan dari cair hingga menjadi Rendang!',
            draggables: [
              { id: 'd1', text: 'Gulai (Masih Banyak Kuah)', color: '#FFF3B0' },
              { id: 'd2', text: 'Kalio (Kuah Mengental)', color: '#dbe0fd' },
              { id: 'd3', text: 'Rendang (Kuah Kering/Berminyak)', color: '#ffb2d8' }
            ],
            dropZones: [
              { id: 'z1', label: 'Tahap 1' },
              { id: 'z2', label: 'Tahap 2' },
              { id: 'z3', label: 'Tahap 3' }
            ],
            correctOrder: ['d1', 'd2', 'd3'],
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Jika kamu ingin membuat Rendang yang tidak terlalu pedas untuk anak kecil, bumbu mana yang harus dikurangi?',
            options: ['Santan', 'Daging', 'Cabai', 'Lengkuas'],
            correctIndex: 2, // C
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Apa perbedaan utama antara "Kalio" dan "Rendang" menurut teks?',
            options: ['Kalio menggunakan daging ayam, Rendang menggunakan sapi', 'Kalio masih basah/berkuah kental, Rendang sudah kering dan gelap', 'Kalio rasanya manis, sedangkan Rendang rasanya sangat pahit', 'Kalio dimasak 10 jam, sedangkan Rendang hanya 1 jam'],
            correctIndex: 1, // B
            xp: 20
          },
          {
            type: 'drag_drop',
            text: 'Pasangkan bahan Rendang dengan simbol maknanya!',
            draggables: [
              { id: 'm1', text: 'Daging Sapi', color: '#FFF3B0' },
              { id: 'm2', text: 'Cabai', color: '#D4DCFF' }
            ],
            dropZones: [
              { id: 'z1', label: 'Melambangkan Pemimpin (Niniak Mamak)' },
              { id: 'z2', label: 'Melambangkan Ulama yang Tegas' }
            ],
            correctOrder: ['m1', 'm2'],
            xp: 20
          }
        ]
      },
      3: {
        literacy: {
          image: '/assets/budayana/islands/makanan3 sumatra.png',
          text: 'Saat ini, Rendang telah menjadi makanan terlezat di dunia. Banyak orang mulai membuat variasi Rendang, seperti Rendang instan dalam kemasan atau Rendang yang tidak terlalu kering agar lebih cepat matang (disebut Kalio). Namun, ada tantangan besar: apakah Rendang yang dimasak cepat dan masih basah tetap bisa disebut Rendang yang asli? Sebagai generasi muda, kita harus bangga pada warisan kuliner ini dan menjaga cara memasak tradisionalnya agar cita rasanya yang mendunia tidak berubah.'
        },
        questions: [
          {
            type: 'opinion_reason',
            text: 'Jika kamu adalah pengusaha kuliner, apakah kamu setuju menjual "Rendang Instan" dalam kaleng agar bisa dikirim ke luar negeri?',
            opinions: [
              { id: 'op1', text: 'Setuju' },
              { id: 'op2', text: 'Tidak Setuju' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Agar orang di seluruh dunia bisa mencicipi Rendang dengan mudah' },
              { id: 'r2', text: 'B. Karena Rendang kalengan akan mengubah rasa asli bumbu rempahnya' },
              { id: 'r3', text: 'C. Supaya harga Rendang menjadi lebih mahal dari biasanya' },
              { id: 'r4', text: 'D. Karena memasak Rendang di luar negeri sangat dilarang' }
            ],
            // Jika Setuju -> A; Jika Tidak Setuju -> B
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'opinion_reason',
            text: 'Bolehkah kita mengganti daging sapi dengan daging ayam dan tetap menyebutnya sebagai Rendang?',
            opinions: [
              { id: 'op1', text: 'Boleh' },
              { id: 'op2', text: 'Kurang Tepat' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Agar orang yang tidak makan daging sapi tetap bisa menikmati bumbu Rendang' },
              { id: 'r2', text: 'B. Rendang asli secara tradisional harus menggunakan daging sapi agar tahan lama' },
              { id: 'r3', text: 'C. Karena rasa daging ayam jauh lebih enak daripada daging sapi' },
              { id: 'r4', text: 'D. Supaya waktu memasaknya menjadi jauh lebih singkat (hanya 30 menit)' }
            ],
            // Jika Boleh -> A; Jika Kurang Tepat -> B
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'drag_drop_sentence',
            text: 'Susunlah ajakan untuk bangga pada kuliner asli Indonesia!',
            draggables: [
              { id: 'w1', text: 'Ayo kita', color: '#f5f199ff' },
              { id: 'w2', text: 'cintai', color: '#f6bad3ff' },
              { id: 'w3', text: 'Rendang', color: '#99AAEF' },
              { id: 'w4', text: 'sebagai', color: '#a5ec93ff' },
              { id: 'w5', text: 'makanan', color: '#FFC7B1' },
              { id: 'w6', text: 'terlezat di dunia', color: '#e3baf4ff' }
            ],
            dropZones: [
              { id: 'z1' }, { id: 'z2' }, { id: 'z3' }, { id: 'z4' }, { id: 'z5' }, { id: 'z6' }
            ],
            correctOrder: ['w1', 'w2', 'w3', 'w4', 'w5', 'w6'],
            xp: 40
          }
        ]
      }
    },
    tarian: {
      1: {
        literacy: {
          image: '/assets/budayana/islands/tarian1 sumatra.png',
          text: 'Pernahkah kamu melihat tarian yang penarinya duduk berjejer dan bergerak sangat cepat? Itu adalah Tari Saman dari suku Gayo, Aceh. Berbeda dengan tarian lain yang diiringi banyak alat musik petik atau tiup, Tari Saman justru menggunakan suara dari gerakan tubuh para penarinya sendiri. Mereka menepuk dada, menepuk tangan, dan menepuk paha untuk menciptakan irama yang kompak. Karena keunikan dan kecepatannya, Tari Saman telah diakui oleh UNESCO sebagai warisan budaya dunia.'
        },
        questions: [
          {
            type: 'multiple_choice',
            text: 'Dari provinsi manakah Tari Saman berasal?',
            options: ['Sumatera Barat', 'Aceh', 'Sumatera Selatan', 'Riau'],
            correctIndex: 1, // B
            xp: 20
          },
          {
            type: 'picture_selection',
            text: 'Pilih gambar yang menunjukkan posisi penari Saman yang benar!',
            options: [
              { text: 'Berdiri melingkar', emoji: '🕺', image: '' },
              { text: 'Duduk berjejer rapat', emoji: '🧑‍🤝‍🧑', image: '' },
              { text: 'Melompat tinggi', emoji: '🏃', image: '' },
              { text: 'Berpasangan laki-perempuan', emoji: '👫', image: '' }
            ],
            correctIndex: 1, // B
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Apa yang menjadi "alat musik" utama dalam mengiringi gerak Tari Saman?',
            options: ['Gitar dan Bass', 'Seruling Bambu', 'Tepukan tangan, dada, dan paha', 'Piano Elektrik'],
            correctIndex: 2, // C
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Apa yang terjadi jika salah satu penari Saman tidak kompak atau salah melakukan gerakan?',
            options: ['Penonton akan ikut menari', 'Gerakan tari akan menjadi lebih lambat', 'Irama musik pengiring akan terganggu/rusak', 'Pakaian penari akan mudah lepas'],
            correctIndex: 2, // C
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Berdasarkan teks, Tari Saman telah diakui sebagai warisan budaya dunia oleh organisasi...',
            options: ['UNICEF', 'WHO', 'UNESCO', 'FIFA'],
            correctIndex: 2, // C
            xp: 20
          }
        ]
      },
      2: {
        literacy: {
          image: '/assets/budayana/islands/tarian2 sumatra.png',
          text: 'Mengapa Tari Saman tidak menggunakan alat musik seperti musik band modern? Dalam tradisi Aceh, suara tepukan tangan dan dada berfungsi sebagai pengatur tempo dan musik pengiring sekaligus. Keindahan tari ini terletak pada kekompakan dan kerja sama tim. Jika satu penari salah bergerak, maka irama musiknya akan rusak. Selain itu, Tari Saman dipimpin oleh seorang Syeikh yang bernyanyi memberikan instruksi gerakan. Tarian ini melambangkan pendidikan, keagamaan, dan sopan santun masyarakat Aceh.'
        },
        questions: [
          {
            type: 'drag_drop',
            text: 'Urutkan tempo (kecepatan) gerakan Tari Saman dari awal hingga akhir!',
            draggables: [
              { id: 'd1', text: 'Lambat (Pembukaan)', color: '#FFF3B0' },
              { id: 'd2', text: 'Sedang', color: '#dbe0fd' },
              { id: 'd3', text: 'Cepat', color: '#ffb2d8' },
              { id: 'd4', text: 'Sangat Cepat (Puncak)', color: '#ffd5c0' }
            ],
            dropZones: [
              { id: 'z1', label: 'Tahap 1' },
              { id: 'z2', label: 'Tahap 2' },
              { id: 'z3', label: 'Tahap 3' },
              { id: 'z4', label: 'Tahap 4' }
            ],
            correctOrder: ['d1', 'd2', 'd3', 'd4'],
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Jika kamu ingin menjadi seorang penari Saman yang baik, kemampuan apa yang paling utama harus kamu latih?',
            options: ['Kemampuan melompat tinggi', 'Konsentrasi dan kekompakan tim', 'Kekuatan berlari jauh', 'Kelenturan jari tangan'],
            correctIndex: 1, // B
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Mengapa peran seorang "Syeikh" sangat penting dalam pementasan Tari Saman?',
            options: ['Untuk mengumpulkan tiket dari penonton', 'Untuk memimpin nyanyian dan mengatur perubahan gerakan', 'Sebagai penari cadangan jika ada yang sakit', 'Untuk menyiapkan pakaian para penari'],
            correctIndex: 1, // B
            xp: 20
          },
          {
            type: 'drag_drop',
            text: 'Pasangkan gerakan tubuh dengan fungsinya dalam Saman!',
            draggables: [
              { id: 'm1', text: 'Tepukan Dada', color: '#FFF3B0' },
              { id: 'm2', text: 'Tepukan Tangan', color: '#D4DCFF' }
            ],
            dropZones: [
              { id: 'z1', label: 'Memberikan suara berat/bass' },
              { id: 'z2', label: 'Memberikan suara tempo tinggi/treble' }
            ],
            correctOrder: ['m1', 'm2'],
            xp: 20
          }
        ]
      },
      3: {
        literacy: {
          image: '/assets/budayana/islands/tarian3 sumatra.png',
          text: 'Zaman sekarang, banyak Tari Saman ditampilkan dengan tambahan musik elektronik atau alat musik modern agar terdengar lebih "seru". Namun, ada kekhawatiran bahwa suara asli tepukan tubuh yang menjadi ciri khas utama Saman akan tertutup oleh musik keras tersebut. Apakah menurutmu Tari Saman harus tetap menggunakan suara tubuh asli tanpa musik tambahan, atau boleh ditambahkan musik modern agar anak muda lebih tertarik menontonnya? Kita harus bijak menjaga keaslian gerak dan bunyi ini.'
        },
        questions: [
          {
            type: 'opinion_reason',
            text: 'Setujukah kamu jika Tari Saman diiringi dengan alat musik drum elektrik agar terdengar lebih modern?',
            opinions: [
              { id: 'op1', text: 'Setuju' },
              { id: 'op2', text: 'Tidak Setuju' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Agar pertunjukan terlihat lebih keren di depan penonton luar negeri' },
              { id: 'r2', text: 'B. Karena akan menghilangkan suara asli tepukan tubuh yang menjadi keunikan dunia' },
              { id: 'r3', text: 'C. Supaya penari tidak perlu lagi menepuk dada terlalu keras' },
              { id: 'r4', text: 'D. Karena drum elektrik jauh lebih murah daripada kostum tari' }
            ],
            // Jika Setuju -> A; Jika Tidak Setuju -> B
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'opinion_reason',
            text: 'Apakah Tari Saman boleh dipelajari oleh orang yang bukan berasal dari suku Gayo atau Aceh?',
            opinions: [
              { id: 'op1', text: 'Boleh' },
              { id: 'op2', text: 'Kurang Tepat' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Agar budaya Indonesia semakin dikenal dan dilestarikan oleh banyak orang' },
              { id: 'r2', text: 'B. Karena hanya orang asli daerah tersebut yang memiliki kemampuan bergerak cepat' },
              { id: 'r3', text: 'C. Supaya orang lain bisa meniru gerakannya tanpa seizin suku Gayo' },
              { id: 'r4', text: 'D. Agar tarian tersebut bisa diubah-ubah gerakannya sesuka hati' }
            ],
            // Jika Boleh -> A; Jika Kurang Tepat -> B
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'drag_drop_sentence',
            text: 'Susunlah pesan untuk menjaga kelestarian Tari Saman!',
            draggables: [
              { id: 'w1', text: 'Mari kita', color: '#f5f199ff' },
              { id: 'w2', text: 'lestarikan', color: '#f6bad3ff' },
              { id: 'w3', text: 'Tari Saman', color: '#99AAEF' },
              { id: 'w4', text: 'sebagai', color: '#a5ec93ff' },
              { id: 'w5', text: 'kebanggaan', color: '#FFC7B1' },
              { id: 'w6', text: 'budaya Indonesia', color: '#e3baf4ff' }
            ],
            dropZones: [
              { id: 'z1' }, { id: 'z2' }, { id: 'z3' }, { id: 'z4' }, { id: 'z5' }, { id: 'z6' }
            ],
            correctOrder: ['w1', 'w2', 'w3', 'w4', 'w5', 'w6'],
            xp: 40
          }
        ]
      }
    }
  },
  kalimantan: {
    rumah: {
      1: {
        literacy: {
          image: '/assets/budayana/islands/level1 kalimantan.png',
          text: 'Di pedalaman Kalimantan, terdapat rumah adat yang sangat panjang bernama Rumah Betang. Sesuai namanya, rumah ini bisa memiliki panjang hingga 150 meter dan dihuni oleh puluhan keluarga secara bersama-sama. Rumah Betang dibangun tinggi di atas tanah menggunakan kayu ulin yang sangat kuat. Untuk masuk ke dalam rumah, warga harus menaiki sebuah tangga kayu yang unik bernama Hejot. Kehidupan di Rumah Betang menunjukkan betapa eratnya rasa persaudaraan masyarakat Dayak.'
        },
        questions: [
          {
            type: 'multiple_choice',
            text: 'Apa nama rumah adat dari Kalimantan yang dikenal karena ukurannya yang sangat panjang?',
            options: ['Rumah Joglo', 'Rumah Honai', 'Rumah Betang', 'Rumah Tongkonan'],
            correctIndex: 2, // C
            xp: 20
          },
          {
            type: 'picture_selection',
            text: 'Pilih gambar "Hejot" atau tangga kayu untuk masuk ke Rumah Betang yang benar!',
            options: [
              { text: 'Tangga Besi', emoji: '🪜', image: '' },
              { text: 'Batang Kayu Bertakik', emoji: '🪵', image: '' },
              { text: 'Eskalator', emoji: '🔼', image: '' },
              { text: 'Lift Kayu', emoji: '🛗', image: '' }
            ],
            correctIndex: 1, // B
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Jenis kayu apa yang sangat kuat dan sering digunakan sebagai tiang utama Rumah Betang?',
            options: ['Kayu Ulin', 'Kayu Pinus', 'Kayu Sengon', 'Kayu Karet'],
            correctIndex: 0, // A
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Mengapa Rumah Betang dibangun sangat tinggi (3-5 meter) di atas tanah?',
            options: ['Agar bisa melihat pemandangan dari ketinggian', 'Supaya lebih dekat dengan sinar matahari', 'Melindungi diri dari banjir dan hewan buas', 'Agar jemuran pakaian lebih cepat kering'],
            correctIndex: 2, // C
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Berdasarkan teks, apa nilai utama yang ditunjukkan dari cara hidup masyarakat di Rumah Betang?',
            options: ['Keinginan untuk menjadi kaya', 'Rasa persaudaraan dan gotong royong', 'Persaingan antar keluarga', 'Kemandirian masing-masing orang'],
            correctIndex: 1, // B
            xp: 20
          }
        ]
      },
      2: {
        literacy: {
          image: '/assets/budayana/islands/level2 kalimantan.png',
          text: 'Mengapa Rumah Betang dibuat sangat panjang dan tinggi? Dahulu, tinggi rumah yang mencapai 3 hingga 5 meter bertujuan untuk melindungi warga dari banjir dan serangan musuh atau hewan buas. Di dalam rumah yang panjang ini, terdapat pembagian ruangan yang adil. Bagian depan digunakan sebagai ruang bersama untuk rapat dan upacara adat, sementara bagian belakang dibagi menjadi kamar-kamar untuk setiap keluarga. Di sini, semua masalah diselesaikan dengan cara musyawarah, sehingga tercipta suasana yang damai.'
        },
        questions: [
          {
            type: 'drag_drop',
            text: 'Urutkan posisi bagian Rumah Betang dari bawah ke atas!',
            draggables: [
              { id: 'd1', text: 'Tiang Kayu Ulin', color: '#FFF3B0' },
              { id: 'd2', text: 'Lantai Kayu', color: '#dbe0fd' },
              { id: 'd3', text: 'Ruang Kamar', color: '#ffb2d8' },
              { id: 'd4', text: 'Atap Tinggi', color: '#ffd5c0' }
            ],
            dropZones: [
              { id: 'z1', label: 'Posisi 1' },
              { id: 'z2', label: 'Posisi 2' },
              { id: 'z3', label: 'Posisi 3' },
              { id: 'z4', label: 'Posisi 4' }
            ],
            correctOrder: ['d1', 'd2', 'd3', 'd4'],
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Jika ada masalah di antara dua keluarga di Rumah Betang, di bagian manakah sebaiknya masalah itu diselesaikan?',
            options: ['Di dalam kamar pribadi masing-masing', 'Di hutan belakang rumah', 'Di ruang bersama bagian depan (Serambi)', 'Di bawah tiang rumah'],
            correctIndex: 2, // C
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Apa yang akan terjadi jika tangga "Hejot" ditarik ke atas pada malam hari sesuai tradisi lama?',
            options: ['Pencuri akan memberikan bantuan', 'Udara dingin akan lebih mudah masuk', 'Rumah menjadi lebih aman dari gangguan luar', 'Rumah akan menjadi lebih ringan'],
            correctIndex: 2, // C
            xp: 20
          },
          {
            type: 'drag_drop',
            text: 'Pasangkan bagian rumah dengan fungsinya!',
            draggables: [
              { id: 'm1', text: 'Ruang Depan', color: '#FFF3B0' },
              { id: 'm2', text: 'Kamar Belakang', color: '#D4DCFF' }
            ],
            dropZones: [
              { id: 'z1', label: 'Tempat Musyawarah Bersama' },
              { id: 'z2', label: 'Tempat Tinggal Keluarga' }
            ],
            correctOrder: ['m1', 'm2'],
            xp: 20
          }
        ]
      },
      3: {
        literacy: {
          image: '/assets/budayana/islands/level3 kalimantan.png',
          text: 'Kini, banyak keluarga yang mulai meninggalkan Rumah Betang dan membangun rumah pribadi yang terpisah-pisah. Hal ini dikarenakan sulitnya merawat bangunan kayu yang sangat luas dan risiko kebakaran yang tinggi. Namun, jika Rumah Betang ditinggalkan, semangat gotong royong dan kebersamaan antar keluarga dikhawatirkan akan memudar. Apakah kita harus mempertahankan tradisi tinggal bersama di satu rumah panjang, atau cukup menyimpan Rumah Betang sebagai simbol budaya saja? Ini adalah tantangan besar bagi pelestarian budaya Dayak.'
        },
        questions: [
          {
            type: 'opinion_reason',
            text: 'Jika kamu tinggal di Rumah Betang dan melihat salah satu bagian kayu mulai rapuh, tindakan apa yang paling tepat?',
            opinions: [
              { id: 'op1', text: 'Lapor Ketua Adat' },
              { id: 'op2', text: 'Perbaiki Sendiri' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Agar bisa dikerjakan bersama-sama (gotong royong) oleh semua warga' },
              { id: 'r2', text: 'B. Supaya tidak merepotkan orang lain dan cepat selesai' },
              { id: 'r3', text: 'C. Biar orang lain tidak tahu ada kerusakan di rumah' },
              { id: 'r4', text: 'D. Agar kayu yang rusak bisa dijual ke tempat lain' }
            ],
            // Jika Lapor -> A; Jika Sendiri -> B
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'opinion_reason',
            text: 'Setujukah kamu jika Rumah Betang diubah menjadi penginapan turis agar tetap terawat?',
            opinions: [
              { id: 'op1', text: 'Setuju' },
              { id: 'op2', text: 'Tidak Setuju' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Agar ada biaya untuk perbaikan dan budaya dikenal dunia' },
              { id: 'r2', text: 'B. Karena rumah adat harusnya hanya untuk tempat tinggal warga asli' },
              { id: 'r3', text: 'C. Supaya warga bisa mendapatkan uang dengan mudah' },
              { id: 'r4', text: 'D. Agar Rumah Betang terlihat lebih modern seperti hotel' }
            ],
            // Jika Setuju -> A; Jika Tidak Setuju -> B
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'drag_drop_sentence',
            text: 'Susunlah pesan untuk menjaga kerukunan di rumah panjang!',
            draggables: [
              { id: 'w1', text: 'Mari kita', color: '#f5f199ff' },
              { id: 'w2', text: 'hidup rukun', color: '#f6bad3ff' },
              { id: 'w3', text: 'dan', color: '#99AAEF' },
              { id: 'w4', text: 'bergotong royong', color: '#a5ec93ff' },
              { id: 'w5', text: 'di', color: '#FFC7B1' },
              { id: 'w6', text: 'Rumah Betang', color: '#e3baf4ff' }
            ],
            dropZones: [
              { id: 'z1' }, { id: 'z2' }, { id: 'z3' }, { id: 'z4' }, { id: 'z5' }, { id: 'z6' }
            ],
            correctOrder: ['w1', 'w2', 'w3', 'w4', 'w5', 'w6'],
            xp: 40
          }
        ]
      }
    },
    makanan: {
      1: {
        literacy: {
          image: '/assets/budayana/islands/makanan1 kalimantan.png',
          text: 'Pernahkah kamu mencoba sup ayam yang sangat harum dari Kalimantan Selatan? Namanya adalah Soto Banjar. Bahan utamanya adalah daging ayam yang disuwir-suwir. Ciri khas soto ini adalah aroma rempahnya yang sangat kuat karena menggunakan Kayu Manis dan cengkih. Berbeda dengan soto lainnya yang menggunakan nasi, Soto Banjar asli disajikan bersama potongan Ketupat dan pelengkap seperti perkedel kentang serta telur bebek.'
        },
        questions: [
          {
            type: 'multiple_choice',
            text: 'Apa bahan protein utama yang digunakan dalam masakan Soto Banjar?',
            options: ['Daging Sapi', 'Daging Ayam', 'Ikan Haruan', 'Daging Kambing'],
            correctIndex: 1, // B
            xp: 20
          },
          {
            type: 'picture_selection',
            text: 'Pilih gambar rempah yang memberikan aroma harum yang khas pada Soto Banjar!',
            options: [
              { text: 'Cabai Merah', emoji: '🌶️', image: '' },
              { text: 'Batang Kayu Manis', emoji: '🪵', image: '' },
              { text: 'Daun Bayam', emoji: '🥬', image: '' },
              { text: 'Biji Jagung', emoji: '🌽', image: '' }
            ],
            correctIndex: 1, // B
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Apa pengganti nasi yang biasanya disajikan dalam satu mangkuk Soto Banjar?',
            options: ['Roti Tawar', 'Papeda', 'Ketupat', 'Singkong Rebus'],
            correctIndex: 2, // C
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Mengapa kuah Soto Banjar memiliki rasa yang gurih dan sedikit kental meskipun tanpa santan?',
            options: ['Karena dicampur dengan tepung terigu yang banyak', 'Karena dicampur dengan sedikit susu cair atau kuning telur', 'Karena air rebusannya diambil dari air kelapa', 'Karena dimasak bersama dengan kulit pisang'],
            correctIndex: 1, // B
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Berdasarkan teks, Soto Banjar biasanya disajikan bersama pelengkap berupa...',
            options: ['Kerupuk Udang dan Tempe', 'Perkedel Kentang dan Telur Bebek', 'Tahu Goreng dan Sambal Kacang', 'Potongan Nanas dan Timun'],
            correctIndex: 1, // B
            xp: 20
          }
        ]
      },
      2: {
        literacy: {
          image: '/assets/budayana/islands/makanan2 kalimantan.png',
          text: 'Mengapa kuah Soto Banjar terkadang terlihat sedikit keruh dan terasa sangat gurih? Ternyata, dalam resep aslinya, kuah soto dicampur dengan sedikit susu cair atau kuning telur rebus yang dihaluskan. Campuran ini membuat rasa kuah menjadi lebih creamy atau kental tanpa menggunakan santan. Rempah kayu manis di dalamnya bukan hanya untuk pengharum, tetapi juga membantu menghangatkan tubuh. Soto Banjar biasanya dimakan bersama perasan jeruk nipis dan sambal agar rasanya semakin segar.'
        },
        questions: [
          {
            type: 'drag_drop',
            text: 'Urutkan langkah penyajian Soto Banjar di dalam mangkuk!',
            draggables: [
              { id: 'd1', text: 'Potongan Ketupat', color: '#FFF3B0' },
              { id: 'd2', text: 'Suwiran Ayam', color: '#dbe0fd' },
              { id: 'd3', text: 'Siraman Kuah Panas', color: '#ffb2d8' },
              { id: 'd4', text: 'Perasan Jeruk Nipis', color: '#ffd5c0' }
            ],
            dropZones: [
              { id: 'z1', label: 'Langkah 1' },
              { id: 'z2', label: 'Langkah 2' },
              { id: 'z3', label: 'Langkah 3' },
              { id: 'z4', label: 'Langkah 4' }
            ],
            correctOrder: ['d1', 'd2', 'd3', 'd4'],
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Jika kamu ingin membuat Soto Banjar yang aromanya sangat wangi, rempah apa yang wajib kamu masukkan ke dalam air rebusannya?',
            options: ['Kunyit dan Kencur', 'Kayu Manis dan Cengkih', 'Terasi dan Petis', 'Asam Jawa dan Gula Merah'],
            correctIndex: 1, // B
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Apa fungsi utama dari perasan jeruk nipis yang ditambahkan ke dalam Soto Banjar?',
            options: ['Agar warna kuah berubah menjadi merah', 'Menghilangkan bau amis ayam dan menambah kesegaran rasa', 'Supaya potongan ketupat menjadi lebih keras', 'Agar kuah soto menjadi lebih kental seperti lem'],
            correctIndex: 1, // B
            xp: 20
          },
          {
            type: 'drag_drop',
            text: 'Pasangkan bahan Soto Banjar dengan ciri khasnya!',
            draggables: [
              { id: 'm1', text: 'Kuah Soto', color: '#FFF3B0' },
              { id: 'm2', text: 'Rempah', color: '#D4DCFF' }
            ],
            dropZones: [
              { id: 'z1', label: 'Gurih karena campuran susu/telur' },
              { id: 'z2', label: 'Wangi karena Kayu Manis' }
            ],
            correctOrder: ['m1', 'm2'],
            xp: 20
          }
        ]
      },
      3: {
        literacy: {
          image: '/assets/budayana/islands/makanan3 kalimantan.png',
          text: 'Saat ini, Soto Banjar mulai dijual di berbagai daerah dengan modifikasi, seperti mengganti ketupat dengan nasi atau menghilangkan perkedel kentangnya agar lebih murah. Muncul perdebatan: apakah Soto Banjar tanpa ketupat dan kayu manis masih bisa disebut Soto Banjar yang asli? Kita harus mengenal bahan-bahan aslinya agar keunikan rasa kuliner dari Suku Banjar ini tetap terjaga kemurniannya hingga masa depan.'
        },
        questions: [
          {
            type: 'opinion_reason',
            text: 'Jika kamu membuka warung soto, setujukah kamu mengganti ketupat dengan nasi putih biasa agar lebih praktis?',
            opinions: [
              { id: 'op1', text: 'Setuju' },
              { id: 'op2', text: 'Tidak Setuju' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Agar lebih mudah disukai oleh pelanggan yang terbiasa makan nasi' },
              { id: 'r2', text: 'B. Karena Soto Banjar asli identik dengan ketupat, menggantinya akan merubah ciri khasnya' },
              { id: 'r3', text: 'C. Supaya biaya produksi menjadi jauh lebih mahal' },
              { id: 'r4', text: 'D. Agar porsi makanan terlihat lebih kecil' }
            ],
            // Jika Setuju -> A; Jika Tidak Setuju -> B
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'opinion_reason',
            text: 'Menurutmu, apakah penggunaan susu dalam kuah Soto Banjar adalah inovasi yang baik?',
            opinions: [
              { id: 'op1', text: 'Baik' },
              { id: 'op2', text: 'Kurang Baik' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Ya, karena memberikan rasa gurih yang unik tanpa lemak dari santan' },
              { id: 'r2', text: 'B. Tidak, karena rasa susu akan merusak rasa asli kaldu ayam' },
              { id: 'r3', text: 'C. Ya, agar Soto Banjar terlihat seperti makanan luar negeri' },
              { id: 'r4', text: 'D. Tidak, karena susu sulit didapatkan di pasar tradisional' }
            ],
            // Jika Baik -> A; Jika Kurang Baik -> B
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'drag_drop_sentence',
            text: 'Susunlah ajakan untuk mencicipi kuliner khas Kalimantan!',
            draggables: [
              { id: 'w1', text: 'Mari kita', color: '#f5f199ff' },
              { id: 'w2', text: 'cicipi', color: '#f6bad3ff' },
              { id: 'w3', text: 'kelezatan', color: '#99AAEF' },
              { id: 'w4', text: 'Soto Banjar', color: '#a5ec93ff' },
              { id: 'w5', text: 'yang', color: '#FFC7B1' },
              { id: 'w6', text: 'kaya rempah', color: '#e3baf4ff' }
            ],
            dropZones: [
              { id: 'z1' }, { id: 'z2' }, { id: 'z3' }, { id: 'z4' }, { id: 'z5' }, { id: 'z6' }
            ],
            correctOrder: ['w1', 'w2', 'w3', 'w4', 'w5', 'w6'],
            xp: 40
          }
        ]
      }
    },
    tarian: {
      1: {
        literacy: {
          image: '/assets/budayana/islands/tarian1 kalimantan.png',
          text: 'Pernahkah kamu mendengar suara petikan dawai yang sangat merdu dari sebuah kayu yang diukir indah? Alat musik itu bernama Sape dari Suku Dayak, Kalimantan. Sape dimainkan dengan cara dipetik, mirip dengan gitar namun memiliki bentuk yang lebih lebar dan penuh dengan ukiran khas. Musik Sape biasanya digunakan untuk mengiringi Tari Enggang. Dalam tarian ini, para penari mengenakan bulu burung Enggang di tangan mereka dan bergerak melambai-lambai, meniru gerakan burung yang sedang terbang di atas hutan Kalimantan.'
        },
        questions: [
          {
            type: 'multiple_choice',
            text: 'Apa nama alat musik petik tradisional dari Kalimantan yang terbuat dari kayu dan penuh ukiran?',
            options: ['Tifa', 'Sape', 'Gamelan', 'Angklung'],
            correctIndex: 1, // B
            xp: 20
          },
          {
            type: 'picture_selection',
            text: 'Pilih gambar hewan yang gerakannya ditiru dalam tarian khas suku Dayak ini!',
            options: [
              { text: 'Harimau', emoji: '🐅', image: '' },
              { text: 'Burung Enggang', emoji: '🦤', image: '' },
              { text: 'Gajah', emoji: '🐘', image: '' },
              { text: 'Kuda', emoji: '🐎', image: '' }
            ],
            correctIndex: 1, // B
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Bagaimana cara memainkan alat musik Sape agar menghasilkan nada yang merdu?',
            options: ['Dipukul dengan kayu', 'Ditiup lubangnya', 'Dipetik dawainya', 'Digesek senarnya'],
            correctIndex: 2, // C
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Mengapa penari Tari Enggang menggerakkan tangannya melambai naik dan turun?',
            options: ['Karena tangan mereka merasa pegal', 'Meniru gerakan kepakan sayap burung yang sedang terbang', 'Agar penonton tidak mendekat ke arah penari', 'Untuk mengusir nyamuk yang ada di panggung'],
            correctIndex: 1, // B
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Berdasarkan teks, burung Enggang bagi masyarakat Dayak merupakan simbol dari...',
            options: ['Kekayaan dan Uang', 'Keberanian dan Kesetiaan', 'Kecepatan dan Kekuatan', 'Kemandirian dan Kesendirian'],
            correctIndex: 1, // B
            xp: 20
          }
        ]
      },
      2: {
        literacy: {
          image: '/assets/budayana/islands/tarian2 kalimantan.png',
          text: 'Bagi masyarakat Dayak, burung Enggang adalah simbol keberanian dan kesetiaan. Gerakan Tari Enggang yang naik turun melambangkan hubungan antara manusia dengan langit dan bumi. Sementara itu, musik Sape berfungsi sebagai penghantar perasaan. Dahulu, Sape digunakan sebagai alat musik untuk menyembuhkan orang sakit karena suaranya yang menenangkan. Keunikan tarian ini terletak pada koordinasi antara petikan Sape yang lembut dengan gerakan tangan penari yang harus terlihat sangat ringan seolah-olah sedang melayang di udara.'
        },
        questions: [
          {
            type: 'drag_drop',
            text: 'Urutkan persiapan sebelum pementasan Tari Enggang!',
            draggables: [
              { id: 'd1', text: 'Setel Dawai Sape', color: '#FFF3B0' },
              { id: 'd2', text: 'Pakai Kostum Adat', color: '#dbe0fd' },
              { id: 'd3', text: 'Pasang Bulu Enggang di Jari', color: '#ffb2d8' },
              { id: 'd4', text: 'Mulai Menari', color: '#ffd5c0' }
            ],
            dropZones: [
              { id: 'z1', label: 'Tahap 1' },
              { id: 'z2', label: 'Tahap 2' },
              { id: 'z3', label: 'Tahap 3' },
              { id: 'z4', label: 'Tahap 4' }
            ],
            correctOrder: ['d1', 'd2', 'd3', 'd4'],
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Jika suara Sape dimainkan dengan tempo yang sangat pelan dan sedih, gerakan apa yang paling cocok dilakukan oleh penari Enggang?',
            options: ['Melompat-lompat dengan sangat cepat', 'Bergerak melambai dengan sangat halus dan pelan', 'Berhenti menari dan duduk di lantai', 'Berteriak mengikuti irama musik'],
            correctIndex: 1, // B
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Mengapa penggunaan bulu burung Enggang asli sekarang mulai diganti dengan bulu buatan (sintetis)?',
            options: ['Karena bulu buatan jauh lebih ringan daripada bulu asli', 'Untuk melindungi burung Enggang agar tidak punah di hutan', 'Karena bulu asli tidak bisa dicuci jika kotor', 'Agar warna kostum menjadi lebih mengkilap'],
            correctIndex: 1, // B
            xp: 20
          },
          {
            type: 'drag_drop',
            text: 'Pasangkan elemen seni dengan maknanya!',
            draggables: [
              { id: 'm1', text: 'Suara Sape', color: '#FFF3B0' },
              { id: 'm2', text: 'Gerakan Naik Turun', color: '#D4DCFF' }
            ],
            dropZones: [
              { id: 'z1', label: 'Penghantar perasaan dan ketenangan' },
              { id: 'z2', label: 'Hubungan manusia dengan langit dan bumi' }
            ],
            correctOrder: ['m1', 'm2'],
            xp: 20
          }
        ]
      },
      3: {
        literacy: {
          image: '/assets/budayana/islands/tarian3 kalimantan.png',
          text: 'Saat ini, alat musik Sape sudah mulai mendunia dan dimainkan dengan tambahan listrik (Sape elektrik) agar suaranya lebih keras di panggung besar. Namun, beberapa orang tua di desa khawatir bahwa suara Sape elektrik akan menghilangkan kesakralan dan kelembutan suara kayu aslinya. Selain itu, bulu burung Enggang asli sekarang dilarang digunakan untuk kostum tari karena burung tersebut dilindungi. Apakah menurutmu penggunaan bulu buatan dan Sape elektrik mengurangi nilai budaya kita? Kita harus tetap melestarikan seni ini tanpa merusak alam sekitarnya.'
        },
        questions: [
          {
            type: 'opinion_reason',
            text: 'Setujukah kamu jika alat musik Sape dimainkan dengan aliran musik modern seperti Rock atau DJ?',
            opinions: [
              { id: 'op1', text: 'Setuju' },
              { id: 'op2', text: 'Tidak Setuju' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Agar musik Sape lebih dikenal oleh anak muda di seluruh dunia' },
              { id: 'r2', text: 'B. Karena akan menghilangkan ketenangan dan makna asli dari suara Sape' },
              { id: 'r3', text: 'C. Supaya orang tidak lagi menganggap Sape sebagai alat musik kuno' },
              { id: 'r4', text: 'D. Karena Sape memang diciptakan untuk musik yang sangat berisik' }
            ],
            // Jika Setuju -> A; Jika Tidak Setuju -> B
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'opinion_reason',
            text: 'Jika kamu seorang penari, apakah kamu tetap merasa bangga menari Enggang menggunakan bulu buatan daripada bulu asli?',
            opinions: [
              { id: 'op1', text: 'Tetap Bangga' },
              { id: 'op2', text: 'Kurang Bangga' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Karena melestarikan budaya tidak harus menyakiti hewan di alam' },
              { id: 'r2', text: 'B. Karena keindahan tarian hanya bisa terlihat jika menggunakan bahan yang asli' },
              { id: 'r3', text: 'C. Supaya biaya membuat kostum menjadi lebih murah' },
              { id: 'r4', text: 'D. Agar turis tidak protes saat melihat pertunjukan kita' }
            ],
            // Jika Tetap Bangga -> A; Jika Kurang Bangga -> B
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'drag_drop_sentence',
            text: 'Susunlah pesan untuk melestarikan seni budaya Kalimantan!',
            draggables: [
              { id: 'w1', text: 'Mari kita', color: '#f5f199ff' },
              { id: 'w2', text: 'jaga', color: '#f6bad3ff' },
              { id: 'w3', text: 'alunan Sape', color: '#99AAEF' },
              { id: 'w4', text: 'dan', color: '#a5ec93ff' },
              { id: 'w5', text: 'Tari Enggang', color: '#FFC7B1' },
              { id: 'w6', text: 'warisan Dayak', color: '#e3baf4ff' }
            ],
            dropZones: [
              { id: 'z1' }, { id: 'z2' }, { id: 'z3' }, { id: 'z4' }, { id: 'z5' }, { id: 'z6' }
            ],
            correctOrder: ['w1', 'w2', 'w3', 'w4', 'w5', 'w6'],
            xp: 40
          }
        ]
      }
    }
  }
}

