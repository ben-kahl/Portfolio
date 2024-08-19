import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="">
        <h1>Ben Kahl</h1>
      </div>
      <div className="">
        <p>Hi, I'm Ben</p>
        <Image
        src='/pfp.jpg'
        width={100}
        height={100}
        alt='Picture of Ben Kahl'
        >
        </Image>
      </div>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <Link
          href='/'
          >
          <p>Home</p>
          </Link>

          <Link
          href='about'
          >
            <p>About me</p>
          </Link>

          <Link
          href='contact'
          >
            <p>Contact</p>
          </Link>
      </div>
    </main>
  );
}
