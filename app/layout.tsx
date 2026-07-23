import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "@/providers/ConvexClientProvider";
import { Toaster } from "sonner";

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://maisonrestaurant.com"), // Change to your domain

  title: {
    default: "Maison | Fine Dining Restaurant",
    template: "%s | Maison",
  },

  description:
    "Experience fine dining at Maison. Reserve tables online, explore our handcrafted menu, and enjoy unforgettable culinary experiences.",

  keywords: [
    "Maison",
    "Restaurant",
    "Fine Dining",
    "Restaurant Reservation",
    "Luxury Restaurant",
    "Food",
    "Dinner",
    "Lunch",
  ],

  authors: [
    {
      name: "Harsh Berwal",
    },
  ],

  creator: "Harsh Berwal",

  publisher: "Maison",

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Maison | Fine Dining Restaurant",
    description:
      "Reserve your table at Maison and experience premium dining.",
    url: "https://maisonrestaurant.com",
    siteName: "Maison",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Maison Restaurant",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Maison | Fine Dining Restaurant",
    description:
      "Reserve your table at Maison and enjoy a premium dining experience.",
    images: ["/og-image.jpg"],
  },
};

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
      <body>
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
