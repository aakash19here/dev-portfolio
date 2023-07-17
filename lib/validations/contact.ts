import * as z from "zod"

export const contactSchema = z.object({
    name : z.string().min(1,{
        message : "Name must be at least 2 characters long"
    }),
    email: z.string().email({
      message: "Please enter a valid email address",
    }),
    description : z.string().min(20,{
        message : "Please describe project in more than 20 characters"
    })
  })