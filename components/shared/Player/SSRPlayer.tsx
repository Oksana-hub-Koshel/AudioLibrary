import dynamic from 'next/dynamic'

const SSRPlayer = dynamic(
    () => import('./Player'),
    { ssr: false }
)
export default SSRPlayer