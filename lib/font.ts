import { Noto_Sans_TC } from 'next/font/google'

const sansFont = Noto_Sans_TC({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800'],
    variable: '--font-sans',
    display: 'swap',
})

export { sansFont }
