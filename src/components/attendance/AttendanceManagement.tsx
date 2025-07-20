import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users } from "lucide-react";

export const AttendanceManagement = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
          <Calendar className="w-8 h-8 text-success" />
          Controle de Frequência
        </h1>
        <p className="text-muted-foreground">Gerencie presença dos estudantes</p>
      </div>
      <Card>
        <CardContent className="p-8 text-center">
          <Users className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Sistema de Frequência</h3>
          <p className="text-muted-foreground mb-4">Registre e acompanhe a presença dos estudantes</p>
          <Button>Registrar Presença</Button>
        </CardContent>
      </Card>
    </div>
  );
};