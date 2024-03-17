"use client"

import { useRouter } from "next/navigation"
import React from "react"

interface AuthButtonProps {
    children: React.ReactNode ,
    mode?: "modal" | "redirect",
    asChild?: boolean ,
    path: string ,
}

export const AuthButtonComponent = ({ 
    children ,
    mode = "redirect" ,
    asChild ,
    path 

 }: AuthButtonProps) => {
    const router = useRouter()



    const onClick = () => {
        router.push(path)
    }


    if (mode === "modal") {
        return(
            <span>
                Modal
            </span>
        )
    }

  return (
    <span onClick={() => onClick()}>
        {children}
    </span>
  )
}
