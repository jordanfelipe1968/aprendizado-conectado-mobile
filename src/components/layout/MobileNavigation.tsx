import { PageType } from "@/pages/Index";
import { 
  Home, 
  Users, 
  UserCheck, 
  BookOpen, 
  ClipboardList, 
  Calendar,
  DollarSign,
  Settings
} from "lucide-react";

interface MobileNavigationProps {
  currentPage: PageType;
  onPageChange: (page: PageType) => void;
}

const navigationItems = [
  { id: "dashboard", label: "Início", icon: Home },
  { id: "students", label: "Alunos", icon: Users },
  { id: "teachers", label: "Professores", icon: UserCheck },
  { id: "classes", label: "Turmas", icon: BookOpen },
  { id: "grades", label: "Notas", icon: ClipboardList },
  { id: "attendance", label: "Presença", icon: Calendar },
  { id: "financial", label: "Financeiro", icon: DollarSign },
  { id: "users", label: "Usuários", icon: Settings },
];

export const MobileNavigation = ({ currentPage, onPageChange }: MobileNavigationProps) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-lg z-50">
      <div className="flex justify-around items-center py-2 px-1">
        {navigationItems.slice(0, 4).map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id as PageType)}
              className={`flex flex-col items-center justify-center p-3 rounded-lg transition-all duration-200 min-w-0 flex-1 ${
                isActive 
                  ? "bg-primary text-primary-foreground scale-105" 
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              <Icon size={20} className="mb-1" />
              <span className="text-xs font-medium truncate">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};