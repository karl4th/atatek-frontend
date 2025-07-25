"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown, Download, Search } from "lucide-react";
import { NavHeader } from "@/components/nav/NavHeader";
import DrawerTree from "@/components/tree/drawwer-tree";
import TreeByGojs from "@/components/tree/tree-by-gojs";
import { TreeProvider, useTree } from "@/contexts/tree-context";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useAuth } from "@/contexts/AuthContext";



function TreeContent() {
  const [orientation, setOrientation] = useState<90 | 0>(90);
  const { open, setOpen } = useTree();
  const { page, loading, isHydrated } = useAuth();
  const contentRef = useRef<HTMLDivElement>(null);



  const initialData = [
    {
      id: page?.t_id,
      name: page?.title,
      info: false ,
      live: false,
    },
  ];

  const handleDownload = async () => {
    if (!isHydrated) return;
    
    const element = contentRef.current;
    if (!element) return;

    const navHeader = document.getElementById("nav-header");
    const logo = document.getElementById("logo");

    // Скрыть header, показать логотип
    if (navHeader) navHeader.style.visibility = "hidden";
    if (logo) {
      logo.style.visibility = "visible";
      logo.style.position = "static";
      logo.style.left = "0";
    }

    // Подождать, чтобы DOM обновился
    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
      });

      const imgData = canvas.toDataURL("image/jpeg", 1.0);
      const pdf = new jsPDF("landscape", "mm", "a4");

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("tree-view.pdf");
    } catch (error) {
      console.error("PDF generation failed:", error);
    } finally {
      if (navHeader) navHeader.style.visibility = "visible";
      if (logo) {
        logo.style.visibility = "hidden";
        logo.style.position = "absolute";
        logo.style.left = "-9999px";
      }
    }
  };

  return (
    <div className="w-[85vw] mx-auto">
      <div className="z-10 absolute top-0 w-[85vw]" id="nav-header">
        <NavHeader />
        <div className="flex items-center justify-end mt-4 gap-2">
          <Button
            variant="outline"
            size="icon"
            className="bg-primary text-white"
            onClick={() =>
              setOrientation(orientation === 0 ? 90 : 0)
            }
          >
            {orientation === 0 ? <ArrowRight /> : <ArrowDown />}
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="bg-primary text-white"
            onClick={() => {
              console.log("Поиск нажат");
            }}
          >
            <Search />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="bg-primary text-white"
            onClick={handleDownload}
          >
            <Download />
          </Button>
        </div>
      </div>

      <div
        ref={contentRef}
        className="bg-white relative pt-32 pb-10"
        style={{ minHeight: "600px" }}
      >
        <img
          src="/logo.png"
          alt="logo"
          id="logo"
          className="w-[100px] absolute top-10 left-10"
          style={{ visibility: "hidden", position: "absolute", left: "-9999px" }}
        />
        {(!isHydrated || loading) ? (
          <div className="flex items-center justify-center h-full">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        ) : page ? (
          <TreeByGojs type={orientation} initialData={initialData} />
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">Страница не найдена</p>
          </div>
        )}
      </div>

      <DrawerTree open={open} setOpen={setOpen} />
    </div>
  );
}

export default function Home() {
  return (
    <TreeProvider>
      <TreeContent />
    </TreeProvider>
  );
}
