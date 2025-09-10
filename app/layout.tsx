import { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
  weight: "100 900",
  display: "swap",
  style: "normal",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "MoreThanDay | Beyond a Day, Enriching Your Lifestyle",
  description:
    "MoreThanDay는 더 나은 하루, 그리고 더 나은 삶을 위해, 사람들의 라이프스타일을 풍요롭게 하는 디지털 서비스를 개발하는 테크 스타트업입니다.",
  keywords:
    "MoreThanDay, 모어댄데이, 스타트업, 라이프스타일, 디지털 서비스, DayUs, 커플 앱, 혁신, 테크 기업",
  authors: [{ name: "MoreThanDay", url: "https://morethanday.com" }],
  creator: "MoreThanDay",
  publisher: "MoreThanDay",
  openGraph: {
    title: "MoreThanDay | Beyond a Day, Enriching Your Lifestyle",
    description:
      "MoreThanDay는 더 나은 하루, 그리고 더 나은 삶을 위해, 사람들의 라이프스타일을 풍요롭게 하는 디지털 서비스를 개발하는 테크 스타트업입니다.",
    url: "https://morethanday.com",
    siteName: "MoreThanDay",
    images: [
      {
        url: "https://morethanday.com/images/og.webp",
        width: 1200,
        height: 630,
        alt: "MoreThanDay | Beyond a Day, Enriching Your Lifestyle",
        type: "image/webp",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MoreThanDay | Beyond a Day, Enriching Your Lifestyle",
    description:
      "MoreThanDay는 더 나은 하루, 그리고 더 나은 삶을 위해, 사람들의 라이프스타일을 풍요롭게 하는 디지털 서비스를 개발하는 테크 스타트업입니다.",
    images: ["https://morethanday.com/images/og.webp"],
    creator: "@more.than.day",
  },
  metadataBase: new URL("https://morethanday.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr">
      <body className={`${pretendard.className}`}>{children}</body>
    </html>
  );
}
