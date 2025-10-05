import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('challenges');

  const challenges = [
    {
      id: 1,
      title: 'Клуб 365 фото',
      description: 'Выкладывайте по одному фото каждый день',
      progress: 60,
      points: 450,
      participants: 234,
      category: 'Фотография',
      daysLeft: 15
    },
    {
      id: 2,
      title: 'Книжный клуб на английском',
      description: 'Читаем "The Great Gatsby" в этом месяце',
      progress: 45,
      points: 380,
      participants: 156,
      category: 'Языки',
      daysLeft: 20
    },
    {
      id: 3,
      title: '30 дней медитации',
      description: 'Ежедневная практика осознанности',
      progress: 75,
      points: 520,
      participants: 412,
      category: 'Здоровье',
      daysLeft: 8
    }
  ];

  const leaderboard = [
    { rank: 1, name: 'Анна Иванова', points: 2450, level: 12, badges: 8, avatar: 'АИ' },
    { rank: 2, name: 'Дмитрий Петров', points: 2180, level: 11, badges: 7, avatar: 'ДП' },
    { rank: 3, name: 'Елена Смирнова', points: 1950, level: 10, badges: 6, avatar: 'ЕС' },
    { rank: 4, name: 'Михаил Козлов', points: 1820, level: 10, badges: 5, avatar: 'МК' },
    { rank: 5, name: 'Ольга Новикова', points: 1650, level: 9, badges: 5, avatar: 'ОН' }
  ];

  const badges = [
    { id: 1, name: 'Первые шаги', icon: 'Award', color: 'bg-[#10B981]', earned: true },
    { id: 2, name: 'Фотограф недели', icon: 'Camera', color: 'bg-[#EC4899]', earned: true },
    { id: 3, name: 'Bookworm', icon: 'BookOpen', color: 'bg-[#6366F1]', earned: true },
    { id: 4, name: 'Наставник', icon: 'Users', color: 'bg-[#F97316]', earned: false },
    { id: 5, name: 'Легенда', icon: 'Trophy', color: 'bg-[#EAB308]', earned: false },
    { id: 6, name: 'Марафонец', icon: 'Zap', color: 'bg-[#3F3F6]', earned: true }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F3F4F6] to-[#E5E7EB]">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6366F1] to-[#EC4899] flex items-center justify-center">
                <Icon name="Users" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Community Club</h1>
                <p className="text-sm text-gray-500">Развивайся вместе с сообществом</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" className="gap-2">
                <Icon name="Bell" size={18} />
                <span className="hidden md:inline">Уведомления</span>
              </Button>
              <Avatar className="w-10 h-10 border-2 border-[#6366F1]">
                <AvatarFallback className="bg-gradient-to-br from-[#6366F1] to-[#EC4899] text-white font-semibold">
                  ВП
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-4 lg:grid-cols-8 gap-2 bg-white p-2 rounded-xl shadow-sm">
            <TabsTrigger value="challenges" className="gap-2">
              <Icon name="Target" size={16} />
              <span className="hidden sm:inline">Челленджи</span>
            </TabsTrigger>
            <TabsTrigger value="community" className="gap-2">
              <Icon name="Users" size={16} />
              <span className="hidden sm:inline">Сообщество</span>
            </TabsTrigger>
            <TabsTrigger value="leaderboard" className="gap-2">
              <Icon name="Trophy" size={16} />
              <span className="hidden sm:inline">Рейтинг</span>
            </TabsTrigger>
            <TabsTrigger value="materials" className="gap-2">
              <Icon name="BookOpen" size={16} />
              <span className="hidden sm:inline">Материалы</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="gap-2">
              <Icon name="User" size={16} />
              <span className="hidden sm:inline">Профиль</span>
            </TabsTrigger>
            <TabsTrigger value="shop" className="gap-2">
              <Icon name="ShoppingBag" size={16} />
              <span className="hidden sm:inline">Магазин</span>
            </TabsTrigger>
            <TabsTrigger value="events" className="gap-2">
              <Icon name="Calendar" size={16} />
              <span className="hidden sm:inline">События</span>
            </TabsTrigger>
            <TabsTrigger value="achievements" className="gap-2">
              <Icon name="Award" size={16} />
              <span className="hidden sm:inline">Достижения</span>
            </TabsTrigger>
          </TabsList>

          {/* Challenges Tab */}
          <TabsContent value="challenges" className="space-y-6 animate-fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {challenges.map((challenge) => (
                <Card key={challenge.id} className="hover-scale cursor-pointer transition-all hover:shadow-xl border-2 border-transparent hover:border-[#6366F1]">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="outline" className="bg-gradient-to-r from-[#6366F1]/10 to-[#EC4899]/10 border-[#6366F1]/20">
                        {challenge.category}
                      </Badge>
                      <div className="flex items-center gap-1 text-[#EC4899]">
                        <Icon name="Zap" size={16} />
                        <span className="font-bold">{challenge.points}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl">{challenge.title}</CardTitle>
                    <CardDescription>{challenge.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Прогресс</span>
                        <span className="font-bold text-[#6366F1]">{challenge.progress}%</span>
                      </div>
                      <Progress value={challenge.progress} className="h-2" />
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Icon name="Users" size={16} />
                        <span>{challenge.participants} участников</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Icon name="Clock" size={16} />
                        <span>{challenge.daysLeft}д</span>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-[#6366F1] to-[#EC4899] hover:opacity-90">
                      Присоединиться
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Leaderboard Tab */}
          <TabsContent value="leaderboard" className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Trophy" size={24} className="text-[#EAB308]" />
                  Топ участников
                </CardTitle>
                <CardDescription>Лидеры сообщества по количеству очков</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaderboard.map((user) => (
                    <div
                      key={user.rank}
                      className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white hover:from-[#6366F1]/5 hover:to-[#EC4899]/5 transition-all hover-scale"
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm
                        ${user.rank === 1 ? 'bg-[#EAB308] text-white' : ''}
                        ${user.rank === 2 ? 'bg-[#94A3B8] text-white' : ''}
                        ${user.rank === 3 ? 'bg-[#F97316] text-white' : ''}
                        ${user.rank > 3 ? 'bg-gray-200 text-gray-600' : ''}
                      `}>
                        {user.rank}
                      </div>
                      <Avatar className="w-12 h-12 border-2 border-[#6366F1]">
                        <AvatarFallback className="bg-gradient-to-br from-[#6366F1] to-[#EC4899] text-white font-semibold">
                          {user.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{user.name}</h3>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Icon name="Star" size={14} className="text-[#EAB308]" />
                            Уровень {user.level}
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="Award" size={14} className="text-[#EC4899]" />
                            {user.badges} бейджей
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-[#6366F1] font-bold text-lg">
                          <Icon name="Zap" size={18} />
                          {user.points}
                        </div>
                        <span className="text-xs text-gray-500">очков</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile/Achievements Tab */}
          <TabsContent value="profile" className="space-y-6 animate-fade-in">
            <div className="grid lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Avatar className="w-20 h-20 border-4 border-[#6366F1]">
                      <AvatarFallback className="bg-gradient-to-br from-[#6366F1] to-[#EC4899] text-white text-2xl font-bold">
                        ВП
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="text-2xl">Ваш профиль</CardTitle>
                      <CardDescription>Отслеживайте свой прогресс</CardDescription>
                      <div className="flex items-center gap-4 mt-4">
                        <Badge className="bg-gradient-to-r from-[#6366F1] to-[#EC4899] text-white">
                          Уровень 8
                        </Badge>
                        <div className="flex items-center gap-1 text-[#EC4899] font-bold">
                          <Icon name="Zap" size={18} />
                          1250 очков
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">До следующего уровня</span>
                      <span className="text-sm font-bold text-[#6366F1]">250 / 500 XP</span>
                    </div>
                    <Progress value={50} className="h-3" />
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-gray-100">
                    <div className="text-center p-4 rounded-xl bg-gradient-to-br from-[#6366F1]/10 to-[#EC4899]/10">
                      <div className="text-2xl font-bold text-[#6366F1]">12</div>
                      <div className="text-xs text-gray-600 mt-1">Челленджей</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-gradient-to-br from-[#EC4899]/10 to-[#F97316]/10">
                      <div className="text-2xl font-bold text-[#EC4899]">8</div>
                      <div className="text-xs text-gray-600 mt-1">Бейджей</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-gradient-to-br from-[#10B981]/10 to-[#3F3F6]/10">
                      <div className="text-2xl font-bold text-[#10B981]">45</div>
                      <div className="text-xs text-gray-600 mt-1">Дней подряд</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-gradient-to-br from-[#EAB308]/10 to-[#F97316]/10">
                      <div className="text-2xl font-bold text-[#EAB308]">#23</div>
                      <div className="text-xs text-gray-600 mt-1">В рейтинге</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Flame" size={20} className="text-[#F97316]" />
                    Активность
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Сегодня</span>
                      <Badge className="bg-[#10B981] text-white">+85 XP</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">На этой неделе</span>
                      <Badge variant="outline">420 XP</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">В этом месяце</span>
                      <Badge variant="outline">1250 XP</Badge>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <Icon name="TrendingUp" size={16} className="text-[#10B981]" />
                      <span>Ваш прогресс растёт!</span>
                    </div>
                    <p className="text-xs text-gray-500">Вы на 45% активнее чем в прошлом месяце</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Award" size={24} className="text-[#EC4899]" />
                  Ваши достижения
                </CardTitle>
                <CardDescription>Собирайте бейджи за активность в сообществе</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {badges.map((badge) => (
                    <div
                      key={badge.id}
                      className={`p-6 rounded-xl text-center transition-all cursor-pointer
                        ${badge.earned 
                          ? 'bg-gradient-to-br ' + badge.color + ' text-white hover-scale shadow-lg' 
                          : 'bg-gray-100 text-gray-400 opacity-50'
                        }`}
                    >
                      <Icon name={badge.icon as any} size={32} className="mx-auto mb-2" />
                      <div className="text-xs font-semibold">{badge.name}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Community Tab */}
          <TabsContent value="community" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>Сообщество</CardTitle>
                <CardDescription>Раздел находится в разработке</CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>

          {/* Materials Tab */}
          <TabsContent value="materials" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>Материалы</CardTitle>
                <CardDescription>Раздел находится в разработке</CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>

          {/* Shop Tab */}
          <TabsContent value="shop" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>Магазин</CardTitle>
                <CardDescription>Раздел находится в разработке</CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>События</CardTitle>
                <CardDescription>Раздел находится в разработке</CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
