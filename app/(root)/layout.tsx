import { marketingConfig } from "@/config/nav";
import { MainNav } from "@/components/main-nav";
import { ModeToggle } from "@/components/ui/toggle";
import { SiteFooter } from "@/components/site-footer";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex min-h-screen flex-col">
        <header className="container z-40 bg-background">
          <div className="flex h-20 items-center justify-between py-6 md:fixed top-0 z-10 w-full md:backdrop-blur-sm">
            <MainNav items={marketingConfig.mainNav} />
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </div>
    </div>
  );
}
