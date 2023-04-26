import { Container } from './Container';

interface SimpleLayoutProps {
  title: string;
  intro: string;
  children: React.ReactNode;
}

export function SimpleLayout({ title, intro, children }: SimpleLayoutProps) {
  return (
    <Container className="pt-32 sm:pt-48">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 text-base text-zinc-400">
          {intro}
        </p>
      </header>
      <div className="mt-16 sm:mt-20">{children}</div>
    </Container>
  );
}
