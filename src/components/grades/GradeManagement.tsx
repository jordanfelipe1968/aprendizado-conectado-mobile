import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, Filter, ClipboardList } from "lucide-react";

export const GradeManagement = () => {
  const grades = [
    { id: 1, student: "Ana Silva", subject: "Matemática", grade: 8.5, period: "1º Bimestre", status: "Aprovado" },
    { id: 2, student: "João Santos", subject: "Português", grade: 7.2, period: "1º Bimestre", status: "Aprovado" },
    { id: 3, student: "Maria Costa", subject: "História", grade: 9.1, period: "1º Bimestre", status: "Aprovado" },
    { id: 4, student: "Pedro Lima", subject: "Ciências", grade: 6.8, period: "1º Bimestre", status: "Recuperação" },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
            <ClipboardList className="w-8 h-8 text-warning" />
            Gestão de Notas
          </h1>
          <p className="text-muted-foreground">Gerencie notas e avaliações</p>
        </div>
        <Button className="w-full sm:w-auto">
          <Plus className="w-4 h-4 mr-2" />
          Lançar Nota
        </Button>
      </div>

      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input placeholder="Buscar notas..." className="pl-10" />
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filtros
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-4">
        {grades.map((grade) => (
          <Card key={grade.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{grade.student}</h3>
                  <p className="text-muted-foreground">{grade.subject} - {grade.period}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{grade.grade}</div>
                    <div className="text-sm text-muted-foreground">Nota</div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    grade.status === "Aprovado" 
                      ? "bg-success/10 text-success" 
                      : "bg-warning/10 text-warning"
                  }`}>
                    {grade.status}
                  </span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Editar
                    </Button>
                    <Button variant="outline" size="sm">
                      Detalhes
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};