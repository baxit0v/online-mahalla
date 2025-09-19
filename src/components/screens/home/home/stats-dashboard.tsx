import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { Container } from "src/components/layout"

const monthlyData = [
  { month: "Yan", count: 120 },
  { month: "Fev", count: 98 },
  { month: "Mar", count: 145 },
  { month: "Apr", count: 132 },
  { month: "May", count: 167 },
  { month: "Iyun", count: 189 },
]

const requestTypes = [
  { name: "Ijtimoiy yordam", value: 610, color: "#3B82F6" },
  { name: "Infratuzilma", value: 430, color: "#7C3AED" },
  { name: "Biznes", value: 320, color: "#FBBF24" },
  { name: "Ta'lim", value: 280, color: "#34D399" },
  { name: "Boshqalar", value: 203, color: "#F87171" },
]

export const StatsDashboard = () => {
  return (
    <section id="statistics" className="py-20">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Faoliyat statistikasi</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mahalla faoliyatining asosiy ko'rsatkichlari va tendentsiyalari
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Key Metrics */}
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Jami murojaatlar</CardDescription>
              <CardTitle className="text-3xl text-primary">2,543</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">+12% o'tgan oyga nisbatan</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Hal qilingan</CardDescription>
              <CardTitle className="text-3xl text-green-600">84.2%</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={84.2} className="h-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>O'rtacha vaqt</CardDescription>
              <CardTitle className="text-3xl text-secondary">3.2</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">kun (hal qilish uchun)</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Faol bizneslar</CardDescription>
              <CardTitle className="text-3xl text-chart-3">1,590</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">+8% o'sish</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Monthly Requests Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Oylik murojaatlar</CardTitle>
              <CardDescription>So'nggi 6 oy davomida</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Request Types Pie Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Murojaat turlari</CardTitle>
              <CardDescription>Kategoriyalar bo'yicha taqsimot</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={requestTypes}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {requestTypes.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                {requestTypes.map((type, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: type.color }} />
                      <span>{type.name}</span>
                    </div>
                    <span className="font-medium">{type.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  )
}
