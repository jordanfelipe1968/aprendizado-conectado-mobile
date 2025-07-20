import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, Filter, UserCheck } from "lucide-react";

export const TeacherManagement = () => {
  const teachers = [
    { id: 1, name: "Prof. Carlos Silva", subject: "Matemática", classes: 5, status: "Ativo" },
    { id: 2, name: "Prof. Ana Costa", subject: "Português", classes: 4, status: "Ativo" },
    { id: 3, name: "Prof. João Santos", subject: "História", classes: 3, status: "Ativo" },
    { id: 4, name: "Prof. Maria Lima", subject: "Ciências", classes: 6, status: "Férias" },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
            <UserCheck className="w-8 h-8 text-secondary" />
            Gestão de Professores
          </h1>
          <p className="text-muted-foreground">Gerencie informações dos professores</p>
        </div>
        <Button className="w-full sm:w-auto">
          <Plus className="w-4 h-4 mr-2" />
          Novo Professor
        </Button>
      </div>

      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input placeholder="Buscar professores..." className="pl-10" />
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filtros
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {teachers.map((teacher) => (
          <Card key={teacher.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{teacher.name}</CardTitle>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  teacher.status === "Ativo" 
                    ? "bg-success/10 text-success" 
                    : "bg-warning/10 text-warning"
                }`}>
                  {teacher.status}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Disciplina:</span>
                  <span className="font-medium">{teacher.subject}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Turmas:</span>
                  <span className="font-medium">{teacher.classes}</span>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <Button variant="outline" size="sm" className="flex-1">
                  Ver Perfil
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  Editar
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};