"use client";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./Sheet";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <svg
          className="size-6 sm:size-8"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          role="img"
          aria-label="Rain"
        >
          <rect width="64" height="64" rx="20" fill="#4F46E5" />
          <svg x="12" y="12" width="40" height="40" viewBox="5 4 22 22">
            <path
              transform="rotate(14 16 16)"
              fill="#FFFFFF"
              fillRule="evenodd"
              d="M16 5.5C16 5.5 22.5 12.6 22.5 17.4A6.5 6.5 0 0 1 9.5 17.4C9.5 12.6 16 5.5 16 5.5ZM13.2 17.6a2.8 2.8 0 1 0 5.6 0a2.8 2.8 0 1 0-5.6 0Z"
            />
          </svg>
        </svg>
        <div className="text-foreground font-bold text-md sm:text-[21px]">
          Rain
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-8">
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 md:flex"
        >
          <a
            className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            href="#features"
          >
            Features
          </a>
          <a
            className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            href="#howitworks"
          >
            Guide
          </a>
          <a
            className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            href="#security"
          >
            Security
          </a>
        </nav>
        <div className="md:flex gap-2 hidden items-center">
          <a
            href="/signin"
            className="text-foreground font-semibold bg-surface border-border border py-3 px-5 rounded-control text-sm cursor-pointer"
          >
            Sign in
          </a>
          <a
            href="/signup"
            className="text-surface font-semibold bg-primary border-border shadow-xs border py-3 px-5 rounded-control text-sm cursor-pointer"
          >
            Get started
          </a>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger
              aria-label="Open navigation"
              className="flex size-10 items-center justify-center rounded-xl border border-border bg-surface text-foreground transition-colors hover:bg-back"
            >
              <Menu size={20} aria-hidden="true" />
            </SheetTrigger>
            <SheetContent
              side="right"
              showCloseButton={false}
              className="w-[min(88vw,360px)] border-l border-border bg-surface p-6 text-foreground"
            >
              <div className="flex items-start justify-between">
                <SheetHeader className="p-0">
                  <SheetTitle className="text-xl font-semibold text-foreground">
                    Explore Rain
                  </SheetTitle>
                  <SheetDescription className="mt-1 text-sm text-muted">
                    Everything for your everyday money.
                  </SheetDescription>
                </SheetHeader>
                <SheetClose
                  aria-label="Close navigation"
                  className="flex size-9 items-center justify-center rounded-lg text-muted transition-colors hover:bg-background hover:text-foreground"
                >
                  <X size={19} aria-hidden="true" />
                </SheetClose>
              </div>

              <nav
                aria-label="Mobile navigation"
                className="mt-8 flex flex-col"
              >
                <SheetClose
                  nativeButton={false}
                  render={
                    <a
                      href="#features"
                      className="border-b border-border py-4 text-base font-medium text-foreground"
                    />
                  }
                >
                  Features
                </SheetClose>
                <SheetClose
                  nativeButton={false}
                  render={
                    <a
                      href="#howitworks"
                      className="border-b border-border py-4 text-base font-medium text-foreground"
                    />
                  }
                >
                  Guide
                </SheetClose>
                <SheetClose
                  nativeButton={false}
                  render={
                    <a
                      href="#security"
                      className="border-b border-border py-4 text-base font-medium text-foreground"
                    />
                  }
                >
                  Security
                </SheetClose>
              </nav>
              <div className="mt-8 flex flex-col gap-3 pr-2">
                <a
                  href="/signin"
                  className="flex h-12 items-center justify-center rounded-xl border border-border bg-surface text-sm font-semibold text-foreground"
                >
                  Sign in
                </a>
                <a
                  href="/signup"
                  className="flex h-12 items-center justify-center rounded-xl bg-primary text-sm font-semibold text-surface"
                >
                  Get started
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
