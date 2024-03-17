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

import { registerSchema } from "@/schemas/index"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { FormError } from "../form-error"
import { FormSuccess } from "../form-success"
import { register } from "@/actions/register"
import { useState, useTransition } from "react"

const registerSchemasterForm = () => {
  const [isPabding, startTransition] = useTransition()
  const [error, seterror] = useState<string | undefined>("")
  const [Success, setSuccess] = useState<string | undefined>("")

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      username: ""
    }
  })

  const onSubmit = (values: z.infer<typeof registerSchema>) => {
    seterror("")
    setSuccess("")

    startTransition(() => {
      register(values)
        .then((data) => {
          seterror(data.error)
          setSuccess(data.success)
        })

    })

  }
  return (
    <CardWrapper
      headerLabel="Create an account"
      backButtonLabel="Alredy have an account?"
      backButtonHref="/login"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit((onSubmit))} className="space-y-6">
          <div className="space-y-4">

            <FormField control={form.control} name="email" render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter your email" type="email" disabled={isPabding} />
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

            <FormField control={form.control} name="username" render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter your name" type="text" disabled={isPabding} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>
          <FormError massage={error} />
          <FormSuccess massage={Success} />
          <Button type="submit" className="w-full" disabled={isPabding}>
            Register
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}

export default registerSchemasterForm
