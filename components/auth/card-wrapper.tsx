"use client"

import { Card, CardContent, CardFooter, CardHeader } from "../ui/card"
import { BackButton } from "./BackButton"
import Header from "./header"
import { Social } from "./social"
interface CardWrapperProps {
  children: React.ReactNode,
  headerLabel: string,
  backButtonLabel: string,
  backButtonHref: string,
  showSocial?: boolean
}

export const CardWrapper = (
  {
    children,
    backButtonHref,
    backButtonLabel,
    headerLabel,
    showSocial
  }: CardWrapperProps) => {

  return (
    <Card className="w-[500px] h-full flex flex-col ">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>

      <CardContent>
        {children}
      </CardContent>

      {showSocial &&
        <CardFooter>
          <Social />
        </CardFooter>}

      <CardFooter className="w-full flex justify-center">
        <BackButton label={backButtonLabel} href={backButtonHref}/>
      </CardFooter>
    </Card>
  )
}