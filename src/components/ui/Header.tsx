import Link from "next/link";

export function Header() {
  return (
    <header className="bg-slate-100 text-slate-600 dark:bg-slate-950 dark:text-slate-400">
      <div className="container mx-auto p-4">
        <ul className="flex gap-4">
          <li className="font-bold">
            <Link href="/" className="transition-all hover:text-primary">
              Podcasting 2.0
            </Link>
          </li>
          <li className="ml-auto">
            <Link
              href="/audiences"
              className="transition-all hover:text-primary"
            >
              Audiences
            </Link>
          </li>
          <li>
            <Link
              href="/podcasters"
              className="transition-all hover:text-primary"
            >
              Podcasters
            </Link>
          </li>
          <li>
            <Link
              href="/developers"
              className="transition-all hover:text-primary"
            >
              Developers
            </Link>
          </li>
          <li>
            <Link
              href="/podcast-namespace"
              className="transition-all hover:text-primary"
            >
              Podcast Namespace
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
