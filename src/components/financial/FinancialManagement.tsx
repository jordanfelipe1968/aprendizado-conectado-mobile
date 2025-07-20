import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, CreditCard } from "lucide-react";

export const FinancialManagement = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
          <DollarSign className="w-8 h-8 text-warning" />
          Gestão Financeira
        </h1>
        <p className="text-muted-foreground">Controle pagamentos e taxas escolares</p>
      </div>
      <Card>
        <CardContent className="p-8 text-center">
          <CreditCard className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Sistema Financeiro</h3>
          <p className="text-muted-foreground mb-4">Gerencie pagamentos e mensalidades</p>
          <Button>Registrar Pagamento</Button>
        </CardContent>
      </Card>
    </div>
  );
};