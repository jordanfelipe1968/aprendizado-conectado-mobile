import { PageType } from "@/pages/Index";
import { 
  Home, 
  Users, 
  UserCheck, 
  BookOpen, 
  ClipboardList, 
  Calendar,
  DollarSign,
  Settings,
  GraduationCap
} from "lucide-react";

interface DesktopSidebarProps {
  currentPage: PageType;
  onPageChange: (page: PageType) => void;
}

const navigationItems = [
  { id: "dashboard", label: "Dashboard", icon: Home },
  { id: "students", label: "Estudantes", icon: Users },
  { id: "teachers", label: "Professores", icon: UserCheck },
  { id: "classes", label: "Turmas", icon: BookOpen },
  { id: "grades", label: "Notas", icon: ClipboardList },
  { id: "attendance", label: "Frequência", icon: Calendar },
  { id: "financial", label: "Financeiro", icon: DollarSign },
  { id: "users", label: "Usuários", icon: Settings },
];

export const DesktopSidebar = ({ currentPage, onPageChange }: DesktopSidebarProps) => {
  return (
    <aside className="w-64 bg-card border-r border-border flex flex-col">
      {/* Logo/Brand */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">EduSystem</h1>
            <p className="text-sm text-muted-foreground">Gestão Escolar</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id as PageType)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive 
                    ? "bg-primary text-primary-foreground shadow-md" 
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </aside>
  );
};