import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, MapPin, Users, Trophy, Calendar, Phone } from "lucide-react"

export default function GolfMembershipLP() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Trophy className="h-8 w-8" />
            <h1 className="text-2xl font-bold">プレミアムゴルフクラブ</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#membership" className="hover:text-accent transition-colors">
              会員制度
            </a>
            <a href="#facilities" className="hover:text-accent transition-colors">
              施設案内
            </a>
            <a href="#contact" className="hover:text-accent transition-colors">
              お問い合わせ
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-primary/90 to-primary/70 flex items-center justify-center text-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('/golf-sunrise-mist.png')",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            究極のゴルフ体験を
            <br />
            <span className="text-accent">あなたに</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            伝統と革新が融合した、日本最高峰のプライベートゴルフクラブ
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4">
            会員資格について詳しく見る
          </Button>
        </div>
      </section>

      {/* Membership Benefits */}
      <section id="membership" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-foreground mb-4">会員特典</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              プレミアム会員だけが享受できる、特別なサービスと体験をご提供いたします
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Trophy className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">プレミアムコース</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  世界的なゴルフコース設計者による18ホールのチャンピオンシップコース。四季折々の美しい景観をお楽しみいただけます。
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">専属キャディサービス</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  経験豊富な専属キャディが、コースの特徴を熟知したアドバイスで、最高のゴルフ体験をサポートいたします。
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Star className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">クラブハウス特典</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  一流シェフによる本格的な料理と、厳選されたワインコレクションを、優雅なクラブハウスでお楽しみください。
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-card-foreground mb-4">会員様の声</h3>
            <p className="text-xl text-muted-foreground">実際にご利用いただいている会員様からのお声をご紹介します</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-lg mb-4 leading-relaxed">
                  「コースの美しさと施設の充実度に感動しました。スタッフの皆様のおもてなしも素晴らしく、毎回特別な時間を過ごせています。」
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-accent">田中様</p>
                    <p className="text-sm text-muted-foreground">プレミアム会員</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-lg mb-4 leading-relaxed">
                  「ビジネスパートナーとの大切な接待にも安心して利用できます。プライベート感のある環境で、質の高いゴルフを楽しめます。」
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-accent">佐藤様</p>
                    <p className="text-sm text-muted-foreground">エグゼクティブ会員</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section id="facilities" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-foreground mb-4">施設のご案内</h3>
            <p className="text-xl text-muted-foreground">最高級の設備とサービスで、至福のひとときをお過ごしください</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-10 w-10 text-accent" />
              </div>
              <h4 className="text-lg font-semibold mb-2">18ホールコース</h4>
              <p className="text-muted-foreground">チャンピオンシップ規格の本格コース</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-10 w-10 text-accent" />
              </div>
              <h4 className="text-lg font-semibold mb-2">練習場</h4>
              <p className="text-muted-foreground">300ヤードの広々とした練習場</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-10 w-10 text-accent" />
              </div>
              <h4 className="text-lg font-semibold mb-2">レストラン</h4>
              <p className="text-muted-foreground">一流シェフによる本格料理</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-accent" />
              </div>
              <h4 className="text-lg font-semibold mb-2">ラウンジ</h4>
              <p className="text-muted-foreground">プライベート感溢れる会員専用ラウンジ</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-6">今すぐ会員資格をお申し込みください</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            限定的な会員制のため、お早めのお申し込みをお勧めいたします。
            <br />
            まずはお気軽にお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4">
              <Phone className="mr-2 h-5 w-5" />
              お電話でのお問い合わせ
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4 bg-transparent"
            >
              <Calendar className="mr-2 h-5 w-5" />
              見学予約はこちら
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Trophy className="h-6 w-6 text-accent" />
                <h4 className="text-lg font-bold">プレミアムゴルフクラブ</h4>
              </div>
              <p className="text-muted-foreground">
                日本最高峰のプライベートゴルフクラブで、
                <br />
                特別なゴルフ体験をお楽しみください。
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">お問い合わせ</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>📞 03-1234-5678</p>
                <p>📧 info@premium-golf.jp</p>
                <p>📍 東京都○○区○○1-2-3</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">営業時間</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>平日: 6:00 - 18:00</p>
                <p>土日祝: 5:30 - 18:30</p>
                <p>定休日: 毎週月曜日</p>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 プレミアムゴルフクラブ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
