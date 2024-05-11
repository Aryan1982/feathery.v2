"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useEffect, useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
// import axios from "axios";
import { CircleUser} from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "/#howItWorks",
    label: "How it works",
  },
  {
    href: "/#testimonials",
    label: "Testimonials",
  },
  {
    href: "/#team",
    label: "Team",
  },
  {
    href: "/#faq",
    label: "FAQ",
  },
];
export default function NavBar() {

  const session = useSession();
  // console.log("username", username);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="sticky overflow-hidden border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex gap-1">
            <Link
              href="/"
              className="cursor-pointer flex items-center space-x-2 rtl:space-x-reverse"
            >
              <i className="fa-solid fa-feather-pointed dark:text-white text-lg"></i>
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Feathery</span>

            </Link>
          </NavigationMenuItem>

          {/* mobile */}
         

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route: RouteProps, i) => (
              <Link
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}