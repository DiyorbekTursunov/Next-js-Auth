"use client"

import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CardWrapper } from "./card-wrapper"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "../ui/form"

import { loginSchema } from "@/schemas/index"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { FormError } from "../form-error"
import { FormSuccess } from "../form-success"
import { login } from "@/actions/login"
import { useState, useTransition } from "react"

const AuthForm = () => {
  const [isPabding, startTransition] = useTransition()
  const [error, seterror] = useState<string | undefined>("")
  const [Success, setSuccess] = useState<string | undefined>("")

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    seterror("")
    setSuccess("")

    startTransition(() => {
      login(values)
      .then((data) =>   {
        seterror(data.error)
        setSuccess(data.success)
      })

    })

  }
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/register"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit((onSubmit))} className="space-y-6">
          <div className="space-y-4">
            <FormField control={form.control} name="email" render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter your email" type="email"  disabled={isPabding}/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="password" render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter your password" type="password" disabled={isPabding} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>
          <FormError massage={error} />
          <FormSuccess massage={Success} />
          <Button type="submit" className="w-full" disabled={isPabding}>
            Login
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}

export default AuthForm
