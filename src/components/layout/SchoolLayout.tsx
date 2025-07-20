import { ReactNode } from "react";
import { PageType } from "@/pages/Index";
import { MobileNavigation } from "./MobileNavigation";
import { DesktopSidebar } from "./DesktopSidebar";
import { TopHeader } from "./TopHeader";

interface SchoolLayoutProps {
  children: ReactNode;
  currentPage: PageType;
  onPageChange: (page: PageType) => void;
}

export const SchoolLayout = ({ children, currentPage, onPageChange }: SchoolLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Layout */}
      <div className="hidden md:flex">
        <DesktopSidebar currentPage={currentPage} onPageChange={onPageChange} />
        <div className="flex-1 flex flex-col">
          <TopHeader />
          <main className="flex-1 p-6 overflow-auto">
            <div className="animate-fade-in">
              {children}
            </div>
          </main>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col h-screen">
        <TopHeader />
        <main className="flex-1 p-4 overflow-auto pb-20">
          <div className="animate-fade-in">
            {children}
          </div>
        </main>
        <MobileNavigation currentPage={currentPage} onPageChange={onPageChange} />
      </div>
    </div>
  );
};