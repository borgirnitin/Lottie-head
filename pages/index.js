import dynamic from "next/dynamic"

const NoSSR = dynamic(() => import("../components/LottieViewer"), { ssr: false })

export default function Home() {
  return <NoSSR />
}
