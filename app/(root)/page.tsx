import { Balancer } from "react-wrap-balancer";
import { DownloadIcon, Github } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { hoobies } from "@/constants";
import { cn } from "@/lib/utils";
import TypeWriter from "@/components/typewriter";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import AboutMe from "@/components/about-me";

export default function Home() {
  return (
    <div className="container mt-2.5 py-5">
      <div className="pb-10 pt-4 md:flex md:h-hero md:flex-col md:items-center md:justify-center md:py-0">
        <h1 className="my-4 text-3xl font-extrabold leading-tight tracking-tight md:text-center md:text-6xl lg:leading-[1.1]">
          <Balancer>
            Hey there&#44;{/* <br className="hidden lg:block" /> */}
            &nbsp; I&apos;m Aakash
          </Balancer>
        </h1>
        <h1 className="mb-5 text-2xl font-light leading-relaxed tracking-tight md:text-center md:text-lg lg:leading-[1.1]">
          <Balancer>
            - Powered by Caffeine, Code and
            <br className="hidden lg:block" />
            &nbsp;Cheeky Humor
          </Balancer>
        </h1>
        <p className="mb-8 max-w-3xl text-xl text-[--mauve11] md:text-center md:text-2xl">
          <span>
            <Balancer>
              <TypeWriter array={hoobies} />
            </Balancer>
          </span>
        </p>
        <div className="flex items-center gap-2 md:gap-4">
          <a
            href={
              "https://drive.google.com/file/d/1F7tY3-m0CFQd9mzFXlMPlYcAvcGykkqA/view?usp=sharing"
            }
            target="_blank"
            className={cn(
              buttonVariants({ variant: "default" }),
              "text-xs lg:text-sm relative flex items-center gap-2 before:absolute before:-inset-0.5 before:z-[-1] before:rounded-md before:bg-gradient-to-r before:from-[--orange7] before:via-[--pink7] before:to-[--violet7] before:blur-md hover:before:from-[--orange8] hover:before:via-[--pink8] hover:before:to-[--violet8]"
            )}
          >
            Resume
            <DownloadIcon className="h-4 w-4" />
          </a>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "flex items-center gap-2"
            )}
          >
            <span>GitHub</span>
            <Github className="h-4 w-4" />
          </a>
        </div>
        <div className="flex justify-center my-5">
          <Image
            src={"/images/og.svg"}
            alt="og-image"
            priority
            width={256}
            height={256}
            className="rounded-md bg-white transition-colors text-center"
          />
        </div>
      </div>
      <Separator className="my-5" />
      <AboutMe />
    </div>
  );
}
