"use client";

import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { HeartHandshake } from "lucide-react";
import { useForm } from "react-hook-form";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { contactSchema } from "@/lib/validations/contact";
import { cn } from "@/lib/utils";
import { Textarea } from "../ui/textarea";
import { Card } from "../ui/card";
import { Icons } from "../icons";
import axios from "axios";

import { useToast } from "@/components/ui/use-toast";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { useAskAIModal } from "@/hooks/use-store-model";

export function ContactForm() {
  const [isMounted, setIsMounted] = useState(false);
  const onOpen = useAskAIModal((state) => state.onOpen);
  const { toast } = useToast();

  const service_id = process.env.EMAILJS_SERVICE_ID;
  const template_id = process.env.EMAILJS_TEMPLATE_ID;
  const user_id = process.env.EMAILJS_USER_ID;

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      description: "",
    },
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  async function onSubmit(values: z.infer<typeof contactSchema>) {
    console.log("values hai", values);

    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      to_name: "Aakash",
      message: values.description,
    };

    const data = {
      service_id,
      template_id,
      user_id,
      template_params: templateParams,
    };

    await axios
      .post("https://api.emailjs.com/api/v1.0/email/send", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        toast({
          variant: "default",
          description: "Your message has been sent.",
        });
        form.reset();
      })
      .catch((error) => {
        toast({
          variant: "destructive",
          description: "OOPS Something went wrong...",
        });
        form.reset();
        console.log(["ERROR"]);
      });
  }
  return (
    <Form {...form}>
      <Card className="sm:w-5/12 p-4">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Name</FormLabel>
                <FormControl>
                  <Input placeholder="Aakash" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="rodneymullen180@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center justify-between pr-5 gap-5">
                  Project Idea{" "}
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Share your project idea..."
                    rows={10}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-between px-10">
            <Button
              type="submit"
              variant={"default"}
              className={cn(
                buttonVariants({ variant: "default" }),
                "text-xs lg:text-sm relative flex items-center gap-2 before:absolute before:-inset-0.5 before:z-[-1] before:rounded-md before:bg-gradient-to-r before:from-[--orange7] before:via-[--pink7] before:to-[--violet7] before:blur-md hover:before:from-[--orange8] hover:before:via-[--pink8] hover:before:to-[--violet8]"
              )}
            >
              Connect
              <span>
                <HeartHandshake />
              </span>
            </Button>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Button
                    type="button"
                    variant={"default"}
                    className={cn(
                      buttonVariants({ variant: "default" }),
                      "text-xs lg:text-sm relative flex items-center before:absolute before:-inset-0.5 before:z-[-1] before:rounded-md before:bg-gradient-to-r before:from-[--orange7] before:via-[--pink7] before:to-[--violet7] before:blur-md hover:before:from-[--orange8] hover:before:via-[--pink8] hover:before:to-[--violet8]"
                    )}
                    onClick={(event) => {
                      event.preventDefault();
                      onOpen();
                    }}
                  >
                    <Icons.openai className="w-5 h-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Ask AI for help</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </form>
      </Card>
    </Form>
  );
}
