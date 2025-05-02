{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 .AppleSystemUIFontMonospaced-Regular;}
{\colortbl;\red255\green255\blue255;\red14\green14\blue14;}
{\*\expandedcolortbl;;\cssrgb\c6700\c6700\c6700;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx560\tx1120\tx1680\tx2240\tx2800\tx3360\tx3920\tx4480\tx5040\tx5600\tx6160\tx6720\sl324\slmult1\pardirnatural\partightenfactor0

\f0\fs28 \cf2 import \{ useEffect, useRef \} from "react"\
import lottie from "lottie-web"\
\
export default function LottieViewer() \{\
  const containerRef = useRef()\
\
  useEffect(() => \{\
    const anim = lottie.loadAnimation(\{\
      container: containerRef.current,\
      renderer: "svg",\
      loop: false,\
      autoplay: false,\
      path: "https://raw.githubusercontent.com/borgirnitin/Head/main/head-compress.json"\
    \})\
\
    const handleMouseMove = (e) => \{\
      const progress = e.clientX / window.innerWidth\
      anim.goToAndStop(progress * anim.totalFrames, true)\
    \}\
\
    window.addEventListener("mousemove", handleMouseMove)\
\
    return () => \{\
      window.removeEventListener("mousemove", handleMouseMove)\
      anim.destroy()\
    \}\
  \}, [])\
\
  return (\
    <div\
      ref=\{containerRef\}\
      style=\{\{\
        width: "100vw",\
        height: "100vh",\
        backgroundColor: "#0a0a0a"\
      \}\}\
    />\
  )\
\}}