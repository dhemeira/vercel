import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import MyThemeContext from '../../store/myThemeContext';

export default function Header() {
  const router = useRouter();
  const themeCtx = useContext(MyThemeContext);

  function toggleThemeHandler() {
    themeCtx.toggleThemeHandler();
  }
  return (
    <>
      <div className="hidden sm:navbar bg-base-100 sticky top-0 z-50 bg-opacity-90 backdrop-blur text-base-content shadow-sm">
        <div className="navbar-start">
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            Dhemeira
          </Link>
        </div>
        <div className="navbar-end space-x-2">
          <Link
            href="/"
            className={'btn btn-ghost ' + (router.pathname == '/' ? 'btn-active' : '')}>
            Home
          </Link>
          <Link
            href="/about"
            className={'btn btn-ghost ' + (router.pathname == '/about' ? 'btn-active' : '')}>
            About
          </Link>
          <button type="button" className="btn btn-ghost" onClick={toggleThemeHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          </button>
          <a className="btn btn-primary">Get started</a>
        </div>
      </div>
    </>
  );
}
