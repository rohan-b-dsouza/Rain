"use client";
import Button from "./Button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./DropdownMenu";

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

      <div className="flex gap-7 md:gap-8 items-center">
        <a className="text-muted font-medium text-xs md:text-sm" href="#features">
          Features
        </a>
        <a className="text-muted font-medium text-xs md:text-sm" href="#howitworks">
          Guide
        </a>
        <a className="text-muted font-medium text-xs md:text-sm" href="#security">
          Security
        </a>
        <div className="md:flex gap-2 hidden items-center">
          <Button
            content="Sign in"
            className={
              "text-foreground font-semibold bg-surface border-border shadow-xs border py-3 px-5 rounded-control text-sm cursor-pointer"
            }
          ></Button>
          <Button
            content="Get started"
            className={
              "text-surface font-semibold bg-primary border-border shadow-xs border py-3 px-5 rounded-control text-sm cursor-pointer"
            }
          ></Button>
        </div>
        <div className="md:hidden z-10">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4.5 6.5h15M4.5 12h15m-15 5.5h15"
              />
            </svg>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuItem className="text-foreground font-medium">
                Sign in
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-foreground font-medium">
                Get started
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      </div>
      
    </div>
  );
}
