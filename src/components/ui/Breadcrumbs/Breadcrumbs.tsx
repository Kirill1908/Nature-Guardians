"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiChevronRight, FiHome } from "react-icons/fi";

type BreadcrumbsProps = {
  homeElement?: React.ReactNode;
  separator?: React.ReactNode;
  capitalizeLinks?: boolean;
}

export default function Breadcrumbs({
  homeElement = <FiHome className="text-lg" />,
  separator = <FiChevronRight className="text-gray-800" />,
  capitalizeLinks = true,
}: BreadcrumbsProps) {
  const pathname = usePathname();
  const pathNames = pathname.split("/").filter((path) => path);

  if (pathNames.length === 0) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="pt-8">
      <ol className="flex items-center gap-2 text-sm font-medium text-gray-800">
        <li className="-mt-0.5 flex items-center">
          <Link href="/" className="transition-colors hover:text-[#70C174] flex items-center gap-1.5">
            {homeElement}
          </Link>
        </li>

        {pathNames.map((link, index) => {
          const href = `/${pathNames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathNames.length - 1;
          let itemLink = link.replace(/-/g, " ");
          
          if (capitalizeLinks) {
            itemLink = itemLink.charAt(0).toUpperCase() + itemLink.slice(1);
          }

          return (
            <React.Fragment key={href}>
              <li className="flex items-center" aria-hidden="true">
                {separator}
              </li>
              
              <li className="flex items-center">
                {isLast ? (
                  <span className="text-gray-800 font-semibold" aria-current="page">
                    {itemLink}
                  </span>
                ) : (
                  <Link href={href} className="transition-colors hover:text-[#70C174] hover:underline">
                    {itemLink}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}