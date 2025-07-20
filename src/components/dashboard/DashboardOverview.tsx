import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, UserCheck, BookOpen, TrendingUp, Calendar, DollarSign } from "lucide-react";

export const DashboardOverview = () => {
  const stats = [
    {
      title: "Total de Estudantes",
      value: "1,247",
      change: "+12%",
      icon: Users,
      color: "text-primary"
    },
    {
      title: "Professores Ativos",
      value: "84",
      change: "+3%",
      icon: UserCheck,
      color: "text-secondary"
    },
    {
      title: "Turmas Ativas",
      value: "32",
      change: "+5%",
      icon: BookOpen,
      color: "text-accent"
    },
    {
      title: "Taxa de Aprovação",
      value: "94.2%",
      change: "+2.1%",
      icon: TrendingUp,
      color: "text-success"
    }
  ];

  const recentActivities = [
    { action: "Novo estudante matriculado", student: "Ana Silva", time: "5 min atrás" },
    { action: "Nota lançada", student: "João Santos", time: "12 min atrás" },
    { action: "Presença registrada", student: "Maria Costa", time: "25 min atrás" },
    { action: "Pagamento recebido", student: "Pedro Lima", time: "1h atrás" },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Welcome Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Bem-vindo ao Dashboard
        </h1>
        <p className="text-muted-foreground">
          Visão geral da sua instituição de ensino
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="hover:shadow-md transition-shadow duration-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <p className="text-xs text-success">
                  {stat.change} do mês anterior
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span>Ações Rápidas</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <button className="w-full p-3 text-left rounded-lg border border-border hover:bg-muted transition-colors">
              <div className="font-medium">Registrar Presença</div>
              <div className="text-sm text-muted-foreground">Marcar presença dos estudantes</div>
            </button>
            <button className="w-full p-3 text-left rounded-lg border border-border hover:bg-muted transition-colors">
              <div className="font-medium">Lançar Notas</div>
              <div className="text-sm text-muted-foreground">Adicionar notas e avaliações</div>
            </button>
            <button className="w-full p-3 text-left rounded-lg border border-border hover:bg-muted transition-colors">
              <div className="font-medium">Novo Estudante</div>
              <div className="text-sm text-muted-foreground">Cadastrar novo estudante</div>
            </button>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-accent" />
              <span>Atividades Recentes</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-sm text-muted-foreground">{activity.student}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Today's Schedule */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-secondary" />
            <span>Agenda de Hoje</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-muted">
              <div className="font-medium">09:00 - Reunião Pedagógica</div>
              <div className="text-sm text-muted-foreground">Sala de reuniões</div>
            </div>
            <div className="p-4 rounded-lg bg-muted">
              <div className="font-medium">14:00 - Avaliação 9º Ano</div>
              <div className="text-sm text-muted-foreground">Matemática</div>
            </div>
            <div className="p-4 rounded-lg bg-muted">
              <div className="font-medium">16:30 - Atendimento aos Pais</div>
              <div className="text-sm text-muted-foreground">Diretoria</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};