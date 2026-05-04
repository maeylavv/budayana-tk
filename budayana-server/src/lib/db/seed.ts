import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    console.log('Memulai Bulk Seeding...')

    // 1. Data Islands (Array of Objects)
    const islandsData = [
        {
            id: 'cmjjken6p0000eovht596bqhq',
            islandName: 'Sulawesi',
            slug: 'sulawesi',
            isLockedDefault: false,
            unlockOrder: 1,
        },
        {
            id: 'cmjjkena80001eovh6oi3jy46',
            islandName: 'Sumatra',
            slug: 'sumatra',
            isLockedDefault: false,
            unlockOrder: 2,
        },
        {
            id: 'cmjjkendb0002eovhl1wwzb61',
            islandName: 'Jawa',
            slug: 'jawa',
            isLockedDefault: false,
            unlockOrder: 3,
        }, {
            id: 'cmjjkenh70003eovh9ioiqbrb',
            islandName: 'Papua',
            slug: 'papua',
            isLockedDefault: false,
            unlockOrder: 4,
        },
        {
            id: 'cmjjkenn40004eovh9qv8h7zd',
            islandName: 'Kalimantan',
            slug: 'kalimantan',
            isLockedDefault: false,
            unlockOrder: 5,
        },
        {
            id: 'cmjjkento0005eovhhxoduv0y',
            islandName: 'Maluku',
            slug: 'maluku',
            isLockedDefault: false,
            unlockOrder: 6,
        },
        {
            id: 'cmjjkenw40006eovh4502t9mb',
            islandName: 'Bali',
            slug: 'bali',
            isLockedDefault: false,
            unlockOrder: 7,
        },
        {
            id: 'cmjjkenzh0007eovh6ynba7hm',
            islandName: 'Nusa Tenggara',
            slug: 'nusa-tenggara',
            isLockedDefault: false,
            unlockOrder: 8,
        },
    ]

    // Jalankan Loop untuk Islands
    for (const island of islandsData) {
        await prisma.island.upsert({
            where: { id: island.id },
            update: {},
            create: island,
        })
    }

    // 2. Data Stories (Array of Objects)
    const storiesData = [
        {
            id: 'cmjjkerpt0000vsvhowntzzzu',
            islandId: 'cmjjken6p0000eovht596bqhq',
            title: 'Pre-Test',
            order: 1,
            storyType: 'INTERACTIVE',
        },
        {
            id: 'cmjjkertg0001vsvhlksai5vy',
            islandId: 'cmjjken6p0000eovht596bqhq',
            title: 'Cerita Rakyat',
            order: 2,
            storyType: 'STATIC',
        },
        {
            id: 'cmjjkes2h0003vsvh2f8v3849',
            islandId: 'cmjjken6p0000eovht596bqhq',
            title: 'Post-Test',
            order: 4,
            storyType: 'INTERACTIVE',
        },
        {
            id: 'cmjjkes640004vsvhz0ltf1p8',
            islandId: 'cmjjkena80001eovh6oi3jy46',
            title: 'Pre-Test',
            order: 1,
            storyType: 'INTERACTIVE',
        },
        {
            id: 'cmjjkesbx0005vsvheax8k3d9',
            islandId: 'cmjjkena80001eovh6oi3jy46',
            title: 'Cerita Rakyat',
            order: 2,
            storyType: 'STATIC',
        },
        {
            id: 'cmjjkesj20007vsvhauhrc4q0',
            islandId: 'cmjjkena80001eovh6oi3jy46',
            title: 'Post-Test',
            order: 4,
            storyType: 'INTERACTIVE',
        },
        {
            id: 'cmjjkesoq0008vsvh08hm7j83',
            islandId: 'cmjjkendb0002eovhl1wwzb61',
            title: 'Pre-Test',
            order: 1,
            storyType: 'INTERACTIVE',
        },
        {
            id: 'cmjjkesvq000avsvhb1hbkj6o',
            islandId: 'cmjjkendb0002eovhl1wwzb61',
            title: 'Cerita Rakyat Interaktif',
            order: 3,
            storyType: 'INTERACTIVE',
        },
        {
            id: 'cmjjket18000bvsvhk2pldm5w',
            islandId: 'cmjjkendb0002eovhl1wwzb61',
            title: 'Post-Test',
            order: 4,
            storyType: 'INTERACTIVE',
        },
        {
            id: 'cmjjket4h000cvsvhsiv8p7oi',
            islandId: 'cmjjkenh70003eovh9ioiqbrb',
            title: 'Pre-Test',
            order: 1,
            storyType: 'INTERACTIVE',
        },
        {
            id: 'cmjjketdr000evsvh7tql47zi',
            islandId: 'cmjjkenh70003eovh9ioiqbrb',
            title: 'Cerita Rakyat Interaktif',
            order: 3,
            storyType: 'INTERACTIVE',
        },
        {
            id: 'cmjjketgx000fvsvhlmf4i5et',
            islandId: 'cmjjkenh70003eovh9ioiqbrb',
            title: 'Post-Test',
            order: 4,
            storyType: 'INTERACTIVE',
        },
        {
            id: 'cmjjketke000gvsvh7ud7qec0',
            islandId: 'cmjjkenn40004eovh9qv8h7zd',
            title: 'Pre-Test',
            order: 1,
            storyType: 'INTERACTIVE',
        },
        {
            id: 'cmjjketsy000hvsvhifcd5x6x',
            islandId: 'cmjjkenn40004eovh9qv8h7zd',
            title: 'Cerita Rakyat',
            order: 2,
            storyType: 'STATIC',
        },
        {
            id: 'cmjjketvq000ivsvhff43a6ez',
            islandId: 'cmjjkenn40004eovh9qv8h7zd',
            title: 'Cerita Rakyat Interaktif',
            order: 3,
            storyType: 'INTERACTIVE',
        },
        {
            id: 'cmjjketyn000jvsvhpc2kjv7c',
            islandId: 'cmjjkenn40004eovh9qv8h7zd',
            title: 'Post-Test',
            order: 4,
            storyType: 'INTERACTIVE',
        },
        {
            id: 'cmjjkeu47000kvsvh45snenw4',
            islandId: 'cmjjkento0005eovhhxoduv0y',
            title: 'Pre-Test',
            order: 1,
            storyType: 'INTERACTIVE',
        },
        {
            id: 'cmjjkeu7u000lvsvhjr8gjb6k',
            islandId: 'cmjjkento0005eovhhxoduv0y',
            title: 'Cerita Rakyat',
            order: 2,
            storyType: 'STATIC',
        },
        {
            id: 'cmjjkeubb000mvsvh42b87xmq',
            islandId: 'cmjjkento0005eovhhxoduv0y',
            title: 'Cerita Rakyat Interaktif',
            order: 3,
            storyType: 'INTERACTIVE',
        },
        {
            id: 'cmjjkeug9000nvsvhi8ccl8jd',
            islandId: 'cmjjkento0005eovhhxoduv0y',
            title: 'Post-Test',
            order: 4,
            storyType: 'INTERACTIVE',
        },
        {
            id: 'cmjjkeujl000ovsvhd6bw75i1',
            islandId: 'cmjjkenw40006eovh4502t9mb',
            title: 'Pre-Test',
            order: 1,
            storyType: 'INTERACTIVE',
        },
        {
            id: 'cmjjkeun0000pvsvhn3qye7wo',
            islandId: 'cmjjkenw40006eovh4502t9mb',
            title: 'Cerita Rakyat',
            order: 2,
            storyType: 'STATIC',
        },
        {
            id: 'cmjjkeut5000qvsvhs9eg5bv2',
            islandId: 'cmjjkenw40006eovh4502t9mb',
            title: 'Cerita Rakyat Interaktif',
            order: 3,
            storyType: 'INTERACTIVE',
        },
        {
            id: 'cmjjkeuwe000rvsvh3e3ouyno',
            islandId: 'cmjjkenw40006eovh4502t9mb',
            title: 'Post-Test',
            order: 4,
            storyType: 'INTERACTIVE',
        },
        {
            id: 'cmjjkeuzj000svsvhrydl8vh2',
            islandId: 'cmjjkenzh0007eovh6ynba7hm',
            title: 'Pre-Test',
            order: 1,
            storyType: 'INTERACTIVE',
        },
        {
            id: 'cmjjkev5u000tvsvh56eodexj',
            islandId: 'cmjjkenzh0007eovh6ynba7hm',
            title: 'Cerita Rakyat',
            order: 2,
            storyType: 'STATIC',
        },
        {
            id: 'cmjjkev9a000uvsvhtwyj7ctf',
            islandId: 'cmjjkenzh0007eovh6ynba7hm',
            title: 'Cerita Rakyat Interaktif',
            order: 3,
            storyType: 'INTERACTIVE',
        },
        {
            id: 'cmjjkevcs000vvsvhdsf99em3',
            islandId: 'cmjjkenzh0007eovh6ynba7hm',
            title: 'Post-Test',
            order: 4,
            storyType: 'INTERACTIVE',
        },
        {
            id: 'cmjjkesry0009vsvhs0u6dsl2',
            backgroundImage: '/assets/budayana/islands/wood cover.png',
            coverImage: '/assets/budayana/islands/cover papua.png',
            islandId: 'cmjjkendb0002eovhl1wwzb61',
            title: 'Roro Jonggrang',
            order: 2,
            subtitle: 'Legenda Candi Prambanan',
            storyType: 'STATIC',
        },
        {
            id: 'cmjjket7b000dvsvhy59g5qw7',
            backgroundImage: '/assets/budayana/islands/wood cover.png',
            coverImage: '/assets/budayana/islands/cover book papua.png',
            islandId: 'cmjjkenh70003eovh9ioiqbrb',
            title: 'Biwar Penakluk Naga',
            order: 2,
            subtitle: 'Legenda Rakyat Papua',
            storyType: 'STATIC',
        },
        {
            id: 'cmjjkerz00002vsvhkb6aeshm',
            islandId: 'cmjjken6p0000eovht596bqhq',
            title: 'Nenek Pakande',
            order: 3,
            storyType: 'INTERACTIVE',
        },
        {
            id: 'cmjjkesfl0006vsvh8g4irre9',
            islandId: 'cmjjkena80001eovh6oi3jy46',
            title: 'Malin Kundang',
            order: 3,
            storyType: 'INTERACTIVE',
        },
    ]

    // Jalankan Loop untuk Stories
    for (const story of storiesData) {
        await prisma.story.upsert({
            where: { id: story.id },
            update: {},
            create: story,
        })
    }

    console.log('Bulk Seeding Berhasil!')
}

main()
    .then(async () => { await prisma.$disconnect() })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })