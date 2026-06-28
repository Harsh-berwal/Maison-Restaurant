import { Inter, Sora } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from "@/providers/ConvexClientProvider";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} h-full antialiased`}
    >
      <body className={`${inter.variable} ${sora.variable}`}>
        <ConvexClientProvider>
          {children}
          <Toaster
            position="bottom-right"
            theme="dark"
            richColors
            expand
            toastOptions={{
              classNames: { 
                toast:
                  "!rounded-3xl !bg-[#d37b44] !border !border-[#a65a2e] !text-white shadow-2xl px-5 py-4",
                title: "font-semibold",
                description: "text-white/80",
              },
            }}
          />
        </ConvexClientProvider>
      </body>
    </html>
  );
}
