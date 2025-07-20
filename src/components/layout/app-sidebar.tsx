// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarHeader,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   SidebarMenuBadge,
// } from "@/components/ui/sidebar";
// import {
//   LayoutDashboard,
//   Bell,
//   FileText,
//   Plus,
//   ChevronDown,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// const menuItems = [
//   {
//     title: "Dashboard",
//     url: "/",
//     icon: LayoutDashboard,
//   },
//   {
//     title: "Notifications",
//     url: "/notifications",
//     icon: Bell,
//     badge: "10",
//   },
//   {
//     title: "Recent Forms",
//     url: "/recent-forms",
//     icon: FileText,
//   },
// ];

// export function AppSidebar() {
//   const pathname = usePathname();

//   return (
//     <Sidebar className="border-r">
//       <SidebarHeader className="p-4">
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button variant="ghost" className="w-full justify-start p-3 h-auto">
//               <div className="flex items-center w-full">
//                 <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center">
//                   <div className="text-white text-sm font-bold">FA</div>
//                 </div>
//                 <span className="ml-3 font-medium text-gray-900">
//                   Faraz Asad
//                 </span>
//                 <ChevronDown className="ml-auto h-4 w-4 text-gray-500" />
//               </div>
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="start" className="w-56">
//             <DropdownMenuItem>Profile</DropdownMenuItem>
//             <DropdownMenuItem>Settings</DropdownMenuItem>
//             <DropdownMenuItem>Logout</DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       </SidebarHeader>

//       <SidebarContent className="px-3 py-4">
//         <SidebarMenu className="space-y-2">
//           {menuItems.map((item) => (
//             <SidebarMenuItem key={item.title}>
//               <SidebarMenuButton
//                 asChild
//                 isActive={pathname === item.url}
//                 className="h-11 px-3"
//               >
//                 <Link href={item.url} className="flex items-center">
//                   <item.icon className="h-5 w-5" />
//                   <span className="ml-3">{item.title}</span>
//                   {item.badge && (
//                     <SidebarMenuBadge className="ml-auto bg-gray-900 text-white">
//                       {item.badge}
//                     </SidebarMenuBadge>
//                   )}
//                 </Link>
//               </SidebarMenuButton>
//             </SidebarMenuItem>
//           ))}
//         </SidebarMenu>
//       </SidebarContent>

//       <SidebarFooter className="p-4 border-t">
//         {/* <Button className="w-full bg-[#525EB1] hover:bg-[#414c99] h-11" asChild>
//           <Link href="form/new-forms">
//             New Form
//             <Plus className="h-5 w-5 mr-2 mt-5" />
//           </Link>
//         </Button> */}

//         {/* Calendar widget */}
//         <div className="mt-4 bg-[#525EB1] rounded-lg p-4 text-white text-center">
//           <div className="text-sm opacity-90">Jul</div>
//           <div className="text-2xl font-bold">22</div>
//           <div className="text-sm opacity-90">PM</div>
//           <div className="mt-2 text-xs">
//             <div>USA / Brooklyn</div>
//             <div>14:00</div>
//           </div>
//         </div>
//       </SidebarFooter>
//     </Sidebar>
//   );
// }
