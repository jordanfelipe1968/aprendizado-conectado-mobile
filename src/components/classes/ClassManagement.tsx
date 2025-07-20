import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, Filter, BookOpen } from "lucide-react";

export const ClassManagement = () => {
  const classes = [
    { id: 1, name: "9º Ano A", students: 28, teacher: "Prof. Carlos Silva", schedule: "Manhã" },
    { id: 2, name: "8º Ano B", students: 25, teacher: "Prof. Ana Costa", schedule: "Tarde" },
    { id: 3, name: "7º Ano A", students: 30, teacher: "Prof. João Santos", schedule: "Manhã" },
    { id: 4, name: "9º Ano B", students: 27, teacher: "Prof. Maria Lima", schedule: "Tarde" },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
            <BookOpen className="w-8 h-8 text-accent" />
            Gestão de Turmas
          </h1>
          <p className="text-muted-foreground">Gerencie turmas e disciplinas</p>
        </div>
        <Button className="w-full sm:w-auto">
          <Plus className="w-4 h-4 mr-2" />
          Nova Turma
        </Button>
      </div>

      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input placeholder="Buscar turmas..." className="pl-10" />
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filtros
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {classes.map((classItem) => (
          <Card key={classItem.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">{classItem.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Estudantes:</span>
                  <span className="font-medium">{classItem.students}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Professor:</span>
                  <span className="font-medium text-sm">{classItem.teacher}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Horário:</span>
                  <span className="font-medium">{classItem.schedule}</span>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <Button variant="outline" size="sm" className="flex-1">
                  Ver Detalhes
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