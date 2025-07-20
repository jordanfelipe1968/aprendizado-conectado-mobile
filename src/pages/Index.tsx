import { useState } from "react";
import { SchoolLayout } from "@/components/layout/SchoolLayout";
import { DashboardOverview } from "@/components/dashboard/DashboardOverview";
import { StudentManagement } from "@/components/students/StudentManagement";
import { TeacherManagement } from "@/components/teachers/TeacherManagement";
import { ClassManagement } from "@/components/classes/ClassManagement";
import { GradeManagement } from "@/components/grades/GradeManagement";
import { AttendanceManagement } from "@/components/attendance/AttendanceManagement";
import { FinancialManagement } from "@/components/financial/FinancialManagement";
import { UserManagement } from "@/components/users/UserManagement";

export type PageType = 
  | "dashboard" 
  | "students" 
  | "teachers" 
  | "classes" 
  | "grades" 
  | "attendance" 
  | "financial" 
  | "users";

const Index = () => {
  const [currentPage, setCurrentPage] = useState<PageType>("dashboard");

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <DashboardOverview />;
      case "students":
        return <StudentManagement />;
      case "teachers":
        return <TeacherManagement />;
      case "classes":
        return <ClassManagement />;
      case "grades":
        return <GradeManagement />;
      case "attendance":
        return <AttendanceManagement />;
      case "financial":
        return <FinancialManagement />;
      case "users":
        return <UserManagement />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <SchoolLayout currentPage={currentPage} onPageChange={setCurrentPage}>
      {renderCurrentPage()}
    </SchoolLayout>
  );
};

export default Index;
