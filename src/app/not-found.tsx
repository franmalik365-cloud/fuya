import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <section className="main-section flex flex-col items-center justify-center text-center">
            <div className="container mx-auto">
                <h1 className="text-8xl md:text-9xl font-headline">404</h1>
                <h2 className="text-4xl md:text-6xl mt-4 mb-8">Page Not Found</h2>
                <p className="max-w-xl mx-auto text-lg md:text-xl mb-12">
                    Oops! The page you're looking for seems to have taken a detour.
                </p>
                <Button asChild className="neo-btn bg-primary text-primary-foreground">
                    <Link href="/">
                    Go Back Home
                    </Link>
                </Button>
            </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
