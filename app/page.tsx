import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      {/* Header */}
      <header className="h-16 px-6 fixed top-0 left-0 w-full z-10 bg-primary flex flex-row items-center gap-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            className="rounded-xl"
            src="/images/logo.webp"
            alt="MoreThanDay Logo"
            width={40}
            height={40}
          />
        </Link>
        <div className="flex-1" />
        <ul className="flex gap-6 text-white font-medium">
          <li className="hidden md:flex">
            <Link
              className="px-4 py-2 font-medium text-lg rounded-xl text-white hover:bg-dark-70 transition"
              href="#story"
            >
              Story
            </Link>
          </li>
          <li className="hidden md:flex">
            <Link
              className="px-4 py-2 font-medium text-lg rounded-xl text-white hover:bg-dark-70 transition"
              href="#about"
            >
              About
            </Link>
          </li>
          <li className="flex">
            <Link
              className="px-4 py-2 font-medium text-lg rounded-xl text-white hover:bg-dark-70 transition"
              href="#services"
            >
              Service
            </Link>
          </li>
        </ul>
      </header>

      {/* Hero */}
      <section className="pt-16 min-h-screen flex flex-col justify-center items-center text-center bg-dark px-6">
        <h1 className="text-4xl leading-tight md:text-7xl font-extrabold text-white mb-12">
          Beyond a Day, <br />
          <span className="text-primary">Enriching Your Lifestyle</span>
        </h1>
        <p className="text-white-70 max-w-2xl mb-10">
          저희 MoreThanDay는 더 나은 하루, 그리고 더 나은 삶을 위해,
          <br />
          라이프스타일을 더욱 풍요롭게 하는 서비스를 제공합니다.
        </p>
        <Link
          href="#services"
          className="px-8 py-4 bg-primary text-white rounded-full font-bold text-lg shadow-lg hover:bg-white hover:text-primary transition"
        >
          Explore Our Work
        </Link>
      </section>

      {/* Story */}
      <section
        id="story"
        className="min-h-screen flex flex-col justify-center items-center bg-dark-70 px-8 py-20"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">
          Our Story
        </h2>
        <div className="relative max-w-2xl w-full">
          <div className="absolute left-3.5 top-0 h-full w-1 my-4 bg-primary rounded-full" />

          <ul className="space-y-12">
            <li className="relative pl-12">
              <span className="absolute left-0 top-1.5 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                🚀
              </span>
              <h3 className="text-xl md:text-2xl font-semibold text-white">
                2025.04.09 — MoreThanDay 설립
              </h3>
              <p className="text-white-70 mt-2">
                더 나은 하루를 만드는 것을 목표로 설립
              </p>
            </li>
            <li className="relative pl-12">
              <span className="absolute left-0 top-1.5 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                🎉
              </span>
              <h3 className="text-xl md:text-2xl font-semibold text-white ">
                2025.09.10 - DayUs 출시
              </h3>
              <p className="text-white-70 mt-2">
                커플들을 위한 사진 기반 프라이빗 SNS “DayUs” 정식 출시
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="relative min-h-screen flex flex-col justify-center items-center px-8 py-20"
        style={{
          backgroundImage: 'url("/images/about.webp")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Content */}
        <div className="relative z-1 max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">More Than Day</h2>
          <p className="text-white leading-relaxed text-center text-lg">
            저희 이름인 &quot;MoreThanDay&quot;는 평범한 하루 속에서,
            <br className="hidden md:block" />
            우리의 서비스가 사용자들의 일상과 삶에 깊이 스며들어,
            <br className="hidden md:block" />더 풍요롭고 의미 있는 경험을
            제공하겠다는 의지를 담고 있습니다.
          </p>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="min-h-screen flex flex-col justify-center items-center bg-dark-70 px-8 py-20"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Our Service
        </h2>
        <div className="mt-12 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <Image
              src="/images/service-dayus.webp"
              alt="DayUs Preview"
              width={400}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div className="text-center lg:text-left">
            <p className="text-white-70 text-sm font-bold  mb-4">
              커플 전용 프라이빗 SNS
            </p>
            <h3 className="text-2xl font-extrabold text-white mb-2">DayUs</h3>
            <p className="text-white-70 text-xl font-bold mb-8 leading-relaxed">
              하루 한 장으로 더 가까워지는 우리
            </p>
            {/* 버튼 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                className="px-6 py-3 bg-primary text-white rounded-full font-semibold shadow-lg hover:bg-white hover:text-primary transition text-center"
                href="https://dayus.co"
                target="_blank"
                rel="noopener noreferrer"
              >
                자세히 보기
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-dark text-white font-bold text-sm py-10">
        <div className="max-w-6xl mx-auto px-6 space-y-6">
          {/* 상단 링크 */}
          <div className="flex flex-wrap justify-center gap-4 border-b border-gray-700 pb-6 font-medium">
            <Link
              className="hover:font-bold transition"
              href="mailto:contact@morethanday.com"
            >
              제휴 및 광고 문의 : contact@morethanday.com
            </Link>
          </div>

          {/* 비즈니스 정보 */}
          <div className="font-normal text-center text-white-70 space-y-1 leading-relaxed">
            <p className="text-2xl mb-2">MoreThanDay</p>
            <p>대표자 : 박건효 | 사업자등록번호 : 872-38-01256</p>
            <p>
              주소 : 인천광역시 연수구 하모니로 158, D동 3층 317-A315호 (송도동,
              송도 타임스페이스)
            </p>
            <p>이메일 : contact@morethanday.com</p>
          </div>

          {/* 저작권 */}
          <div className="text-center text-dark-30 pt-4 border-t border-gray-700">
            <p>
              Copyright © {new Date().getFullYear()} MoreThanDay. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
