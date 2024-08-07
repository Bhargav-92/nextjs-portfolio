import Hero from '@/components/Hero';
import { FloatingNav } from '@/components/ui/FloatingNav';
import Image from 'next/image';
import { FaHome } from 'react-icons/fa';

export default function Home() {
  return (
    <div>
      <FloatingNav navItems={[{ name: 'Home', link: '/', icon: <FaHome /> }]} />
      <Hero />
    </div>
  );
}
