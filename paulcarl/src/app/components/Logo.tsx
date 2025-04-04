import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/paul-carl-logo-nav.png"
        alt="Paul Carl Logo"
        width={315}
        height={40}
        className="h-8 w-auto"
      />
    </Link>
  );
} 