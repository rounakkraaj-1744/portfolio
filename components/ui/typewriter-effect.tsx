"use client"

import type React from "react"

import { useState, useEffect } from "react"

interface Word {
  text: string
  className?: string
}

interface TypewriterEffectProps {
  words: Word[]
  className?: string
}

export const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ words, className }) => {
  const [displayText, setDisplayText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const type = () => {
      const currentWord = words[wordIndex].text
      const currentClassName = words[wordIndex].className || ""

      if (!isDeleting) {
        setDisplayText(currentWord.substring(0, charIndex + 1))
        setCharIndex((prevIndex) => prevIndex + 1)

        if (charIndex === currentWord.length) {
          setIsPaused(true)
          timeoutId = setTimeout(() => {
            setIsPaused(false)
            setIsDeleting(true)
          }, 2000) // Longer pause at the end of the word
        }
      } else {
        setDisplayText(currentWord.substring(0, charIndex - 1))
        setCharIndex((prevIndex) => prevIndex - 1)

        if (charIndex === 0) {
          setIsDeleting(false)
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length)
          // Add a small pause before starting to type the next word
          setIsPaused(true)
          timeoutId = setTimeout(() => {
            setIsPaused(false)
          }, 500)
        }
      }
    }

    if (!isPaused) {
      // Adjust typing speed based on whether we're typing or deleting
      const typingSpeed = isDeleting ? 50 : 150 // Slower typing, moderate deletion speed
      timeoutId = setTimeout(type, typingSpeed)
    }

    return () => clearTimeout(timeoutId)
  }, [wordIndex, charIndex, isDeleting, isPaused, words])

  return (
    <span className={className}>
      {words.map((word, index) => {
        const shouldDisplay = index === wordIndex
        return (
          <span key={index} className={word.className}>
            {shouldDisplay ? displayText : index < wordIndex ? word.text : ""}
          </span>
        )
      })}
    </span>
  )
}
