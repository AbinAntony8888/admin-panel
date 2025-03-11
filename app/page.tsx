"use client";
// import { AppSidebar } from "@/components/app-sidebar"
import Sample from "@/components/sample";
import Topbar from "@/components/topbar";
import About from "@/components/topbar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Link } from "lucide-react";
import { useRouter } from "next/navigation";
import Abin from "./abin/page";

export default function Page() {
  const router = useRouter();
  return (
    <div className="mt-4 ml-4">
      <div className="flex flex-row gap-3">
      <h1 className="ml-4">home page.....</h1>
     <div className="flex items-end justify-end">
     <button
        className="border-2 bg-blue-600 px-4 py-1 text-white font-bold rounded-xl"
        onClick={() => router.push("/abin")}
      >
        LOGIN
      </button>
      <button
        className="border-2 bg-blue-600 px-4 py-1 ml-3 text-white font-bold rounded-xl"
        onClick={() => router.push("/news")}
      >
        VIEW NEWS
      </button>
     </div>
      </div>
      <Sample />
      {/* <Abin/> */}
      {/* <Topbar/> */}
    </div>
  );
}
