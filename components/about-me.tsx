import { Balancer } from "react-wrap-balancer";

import { Icons } from "./icons";
import { Separator } from "./ui/separator";

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2 md:gap-6">
      {children}
    </div>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2 rounded-md border p-4 md:gap-4 md:p-6">
      {children}
    </div>
  );
}

export default function AboutMe() {
  return (
    <div className="md:flex md:h-screen md:flex-col md:items-center md:justify-center">
      <div className="flex flex-col md:items-center">
        <h3 className="my-2 text-3xl font-bold leading-tight tracking-tight md:text-center md:text-5xl lg:leading-[1.1]">
          About Me
        </h3>
        <p className="mb-8 max-w-3xl text-lg text-[--mauve11] md:text-start md:text-xl md:font-light md:my-5 md:leading-relaxed">
          <Balancer>
            Hey there , My name is <span className="underline">Aakash</span> and
            as a seasoned Fullstack developer, my expertise lies in using modern
            web technologies to create elegant and functional user interfaces.
            With a strong command of React, TypeScript, Next.js, Tailwind,
            Firebase, Prisma and Material UI, I bring extensive experience in
            building scalable and responsive web applications that deliver
            exceptional user experiences.
          </Balancer>
        </p>
      </div>
      <Separator className="my-5" />
      <div className="flex flex-col md:items-center mb-5">
        <h3 className="my-2 text-3xl font-bold leading-tight tracking-tight md:text-center md:text-5xl lg:leading-[1.1]">
          Tech Arsenal
        </h3>
      </div>
      <Container>
        <Card>
          <div className="flex items-center gap-2 md:gap-4">
            <div className="flex flex-col items-center text-sm">
              <Icons.html className="h-8 w-8 md:h-12 md:w-12 text-sm" />
            </div>
            <div className="flex flex-col items-center text-sm">
              <Icons.css className="h-8 w-8 md:h-12 md:w-12" />
            </div>
            <div className="flex flex-col items-center text-sm">
              <Icons.javascript className="h-8 w-8 md:h-12 md:w-12" />
            </div>
            <div className="flex flex-col items-center text-sm">
              <Icons.typescript className="h-8 w-8 md:h-12 md:w-12" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold md:text-xl">Languages</h3>
            <p className="text-[--mauve11] md:text-lg">
              Versatile Developer shaping dynamic web experiences through
              proficient use of HTML, CSS, JavaScript, and TypeScript.
            </p>
          </div>
        </Card>
        <Card>
          <div className="flex items-center gap-5 md:gap-8">
            <div className="flex flex-col items-center ">
              <Icons.nextjs className="h-8 w-8 md:h-12 md:w-12" />
            </div>
            <div className="flex flex-col items-center ">
              <Icons.react className="h-8 w-8 md:h-12 md:w-12" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold md:text-xl">
              Frontend Libraries | React & NEXT
            </h3>
            <p className="text-[--mauve11] md:text-lg">
              Aquinted with Latest features from Next 13 using the brand new App
              Router, Server Components, SEO optimazations, and more.
            </p>
          </div>
        </Card>
        <Card>
          <div className="flex items-center gap-3 md:gap-2">
            <Icons.firebase className="h-8 w-8 md:h-12 md:w-12" />
            <Icons.express className="h-8 w-8 md:h-12 md:w-12" />
            <Icons.supabase className="h-4 w-4 md:h-12 md:w-12" />
          </div>
          <div>
            <h3 className="text-lg font-semibold md:text-xl">Backend</h3>
            <p className="text-[--mauve11] md:text-lg">
              Firebase V9 , Express-js , Supabase
            </p>
          </div>
        </Card>
        <Card>
          <div className="flex items-center gap-3 md:gap-2">
            <Icons.clerk className="h-8 w-8 md:h-12 md:w-12" />
            <Icons.prisma className="h-8 w-8 md:h-12 md:w-12" />
            <Icons.stripe className="h-8 w-8 md:h-12 md:w-12" />
            <Icons.figma className="h-8 w-8 md:h-12 md:w-12" />
            <Icons.git className="h-8 w-8 md:h-12 md:w-12" />
            <Icons.gitHub className="h-8 w-8 md:h-12 md:w-12" />
            <Icons.axios className="h-8 w-8 md:h-12 md:w-12" />
          </div>
          <div>
            <h3 className="text-lg font-semibold md:text-xl">Extras</h3>
            <p className="text-[--mauve11] md:text-lg">
              Authentication , DB communications , Payment gateways , UI/UX ,
              Version Control , Data Fetching/Caching
            </p>
          </div>
        </Card>
      </Container>
    </div>
  );
}
