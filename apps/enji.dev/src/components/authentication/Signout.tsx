import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';

export default function Signout() {
  const { data: session } = useSession();
  const { email, image } = session?.user || {};
  return (
    <button
      type="button"
      onClick={() => signOut({ redirect: false })}
      className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-gray-300 transition-all duration-75 focus:outline-none active:scale-95 sm:h-9 sm:w-9"
    >
      {email && image && (
        <Image alt={email || 'image'} src={image} width={40} height={40} />
      )}
    </button>
  );
}
