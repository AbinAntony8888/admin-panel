"use client";
// import { AppSidebar } from "@/components/app-sidebar"
import Sample from "@/components/sample"
import Topbar from "@/components/topbar"
import About from "@/components/topbar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {  SidebarTrigger } from "@/components/ui/sidebar"
import { Link } from "lucide-react"
import { useRouter } from "next/navigation";
import Abin from "./abin/page";

export default function Page() {
  const router=useRouter();
  return (
   <div className="">home page.....
    <button className="border-2 bg-green-600 p-2" onClick={()=>router.push('/abin')}>
      add your information
    </button>
    
    <Sample/>
    {/* <Abin/> */}
    {/* <Topbar/> */}
   </div>
  )
}