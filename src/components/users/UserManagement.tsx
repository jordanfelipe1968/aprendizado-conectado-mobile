import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, UserPlus } from "lucide-react";

export const UserManagement = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
          <Settings className="w-8 h-8 text-destructive" />
          Gestão de Usuários
        </h1>
        <p className="text-muted-foreground">Controle usuários e permissões do sistema</p>
      </div>
      <Card>
        <CardContent className="p-8 text-center">
          <UserPlus className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Sistema de Usuários</h3>
          <p className="text-muted-foreground mb-4">Gerencie usuários e suas permissões</p>
          <Button>Adicionar Usuário</Button>
        </CardContent>
      </Card>
    </div>
  );
};