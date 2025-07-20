"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation"; // Import useRouter
import { useSidebar } from "../context/SidebarContext";
import {
  RecentFormIcon,
  ChevronDownIcon,
  DashboardIcon,
  NewFormIcon,
  NotificationsIcon,
  PlusIcon,
} from "../icons/index";

type NavItem = {
  name: string;
  icon: React.ReactNode;
  path?: string;
  subItems?: { name: string; path: string; pro?: boolean; new?: boolean }[];
};

const navItems: NavItem[] = [
  {
    icon: <DashboardIcon />,
    name: "Dashboard",
    path: "/",
  },
  {
    icon: <NotificationsIcon />,
    name: "Notifications",
    path: "/notifications",
  },
  {
    icon: <RecentFormIcon />,
    name: "Recent Forms",
    path: "/recent-forms",
  },
  {
    icon: <NewFormIcon />,
    name: "New Forms",
    path: "/new-forms", // Keep path for logic, but we'll navigate manually
  },
];

const AppSidebar: React.FC = () => {
  const {
    isExpanded,
    isMobileOpen,
    isHovered,
    setIsHovered,
    setIsMobileOpen,
  } = useSidebar();

  const router = useRouter(); // Initialize the router
  const pathname = usePathname();
  const [openSubmenu, setOpenSubmenu] = useState<{
    type: "main" | "inventory";
    index: number;
  } | null>(null);
  const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>(
    {},
  );
  const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const isActive = useCallback((path: string) => path === pathname, [pathname]);

  const handleNewFormClick = () => {
    // First, collapse the sidebar
    if (setIsMobileOpen) setIsMobileOpen(false);
    // Then, navigate to the page
    router.push("/new-forms");
  };

  const handleSubmenuToggle = (
    index: number,
    menuType: "main" | "inventory",
  ) => {
    setOpenSubmenu((prevOpenSubmenu) => {
      if (
        prevOpenSubmenu &&
        prevOpenSubmenu.type === menuType &&
        prevOpenSubmenu.index === index
      ) {
        return null;
      }
      return { type: menuType, index };
    });
  };

  useEffect(() => {
    let submenuMatched = false;
    ["main", "inventory"].forEach((menuType) => {
      const items = menuType === "main" ? navItems : [];
      items.forEach((nav, index) => {
        if (nav.subItems) {
          nav.subItems.forEach((subItem) => {
            if (isActive(subItem.path)) {
              setOpenSubmenu({
                type: menuType as "main" | "inventory",
                index,
              });
              submenuMatched = true;
            }
          });
        }
      });
    });

    if (!submenuMatched) {
      setOpenSubmenu(null);
    }
  }, [pathname, isActive]);

  useEffect(() => {
    if (openSubmenu !== null) {
      const key = `${openSubmenu.type}-${openSubmenu.index}`;
      if (subMenuRefs.current[key]) {
        setSubMenuHeight((prevHeights) => ({
          ...prevHeights,
          [key]: subMenuRefs.current[key]?.scrollHeight || 0,
        }));
      }
    }
  }, [openSubmenu]);

  const renderMenuItems = (
    navItems: NavItem[],
    menuType: "main" | "inventory",
  ) => (
    <ul className="flex flex-col gap-4">
      {navItems.map((nav, index) => (
        <li key={nav.name}>
          {nav.name === "New Forms" ? (
            // Use a button for the "New Forms" item
            <button
              onClick={handleNewFormClick}
              className="w-[232px] h-[40px] flex items-center gap-2 px-4 py-2 bg-[#525EB1] text-white rounded-3xl transition-colors"
            >
              <span className="text-white">{nav.icon}</span>
              {(isExpanded || isHovered || isMobileOpen) && (
                <span className="text-sm font-medium flex-1 text-left">
                  {nav.name}
                </span>
              )}
              <span className="ml-auto">
                <PlusIcon className="w-5 h-5 mt-2" />
              </span>
            </button>
          ) : (
            // Use Link for all other items
            nav.path && (
              <Link
                href={nav.path}
                className={`flex items-center gap-3 px-4 py-2 w-[232px] h-[40px] pr-4 ${
                  isActive(nav.path)
                    ? "bg-gray-100 text-black rounded-2xl"
                    : "text-gray-700"
                } transition-colors`}
              >
                <span className="text-gray-500">{nav.icon}</span>
                {(isExpanded || isHovered || isMobileOpen) && (
                  <span className="text-sm font-medium flex-1">{nav.name}</span>
                )}
                {nav.name === "Notifications" && (
                  <span className="ml-auto bg-black text-white w-5 h-5 text-xs flex items-center justify-center rounded-full">
                    10
                  </span>
                )}
              </Link>
            )
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <aside
      className={`fixed m-1 flex flex-col top-0 px-2 left-0 bg-white/85 text-gray-900 h-[892px] transition-all duration-300 ease-in-out z-50 border-r border-gray-200 rounded-3xl
        ${
          isExpanded || isMobileOpen
            ? "w-[248px]"
            : isHovered
              ? "w-[248px]"
              : "w-[90px]"
        }
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* User Info */}
      <div className="flex items-center gap-2 py-6">
        <Image
          src="/placeholder.svg?height=40&width=40"
          alt="DGIP Logo"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="text-sm font-semibold text-gray-800">Faraz Asad</div>
        <ChevronDownIcon className="w-4 h-4 text-gray-500" />
      </div>

      {/* Nav Menu */}
      <div className="flex flex-col overflow-y-auto no-scrollbar pt-4 ">
        <nav className="mb-6">
          <div className="flex flex-col gap-4">
            {renderMenuItems(navItems, "main")}
          </div>
        </nav>
      </div>

      {/* Calendar Block (Bottom) */}
      <div className="mt-auto mb-4 px-2 flex gap-2 w-[232px] h-[88px] bg-white rounded-xl shadow-sm">
        <div className=" p-2  flex flex-col items-center justify-center  text-center ">
          <div className="text-sm text-gray-800">Jul</div>
          <div className="text-lg font-semibold text-black">22</div>
        </div>
        <div className="bg-[#525EB1] text-white rounded-xl mt-2 ml-4 p-2 text-xs w-[156px] h-[72px] flex flex-col gap-2 justify-start">
          <p>
            USA / Brooklyn
            <br />
            14:00
          </p>
          <p>PM</p>
        </div>
      </div>
    </aside>
  );
};

export default AppSidebar;
