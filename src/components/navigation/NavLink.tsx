import Link from 'next/link';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link 
      href={href} 
      className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
    >
      {children}
    </Link>
  );
}