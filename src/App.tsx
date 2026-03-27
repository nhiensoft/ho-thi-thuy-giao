import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {
  BookOpen,
  CalendarClock,
  Flame,
  Landmark,
  Lightbulb,
  Star,
  Target,
  Trophy,
} from 'lucide-react'

const timelineMilestones = [
  {
    year: '1070',
    title: 'Khởi dựng Văn Miếu',
    description: 'Vua Lý Thánh Tông cho xây dựng Văn Miếu để tôn vinh đạo học và hiền tài.',
  },
  {
    year: '1076',
    title: 'Thành lập Quốc Tử Giám',
    description: 'Vua Lý Nhân Tông lập Quốc Tử Giám – trung tâm giáo dục cao cấp đầu tiên của nước ta.',
  },
  {
    year: 'Thời Trần',
    title: 'Mở rộng cơ hội học tập',
    description:
      'Trần Thái Tông đổi tên thành Quốc Học Viện, mở rộng cơ hội cho con em thường dân có năng lực.',
  },
  {
    year: 'Hiện đại',
    title: 'Di sản sống cùng thời đại',
    description: 'Tour đêm bằng công nghệ mapping 3D đưa Văn Miếu đến gần hơn với thế hệ trẻ.',
  },
]

const architectureHighlights = [
  'Hồ Văn',
  'Văn Miếu Môn',
  'Đại Trung Môn',
  'Khuê Văn Các',
  'Giếng Thiên Quang & Bia Tiến sĩ',
  'Đại Thành Môn & khu điện thờ',
  'Đền Khải Thánh',
]

const historicalFigures = [
  'Lý Thánh Tông: người đặt nền móng xây dựng Văn Miếu.',
  'Lý Nhân Tông (Lý Càn Đức): người lập Quốc Tử Giám.',
  'Trần Thái Tông: mở rộng tinh thần học tập cho nhiều tầng lớp xã hội.',
  'Chu Văn An: Quốc Tử Giám Tư Nghiệp, biểu tượng của khí tiết và đạo làm thầy.',
]

const stats = [
  {
    value: '1070',
    label: 'Năm khởi dựng Văn Miếu',
  },
  {
    value: '900+',
    label: 'Năm lan tỏa đạo học',
  },
  {
    value: '82',
    label: 'Bia Tiến sĩ còn lưu giữ',
  },
  {
    value: '1',
    label: 'Mạch nguồn tri thức Việt',
  },
]

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Landmark className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold tracking-wide sm:text-base">
              Văn Miếu Quốc Tử Giám × HOU
            </span>
          </div>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#khoi-nguon" className="text-muted-foreground transition-colors hover:text-foreground">
              Khơi nguồn
            </a>
            <a href="#giao-thoa" className="text-muted-foreground transition-colors hover:text-foreground">
              Giao thoa
            </a>
            <a href="#su-menh" className="text-muted-foreground transition-colors hover:text-foreground">
              Sứ mệnh
            </a>
            <a href="#loi-ket" className="text-muted-foreground transition-colors hover:text-foreground">
              Lời kết
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b bg-gradient-to-b from-muted/40 to-background">
          <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -left-20 bottom-0 h-52 w-52 rounded-full bg-primary/10 blur-3xl" />

          <div className="container mx-auto px-4 py-20 sm:py-24 lg:py-28">
            <Badge variant="secondary" className="mb-4 rounded-full px-3 py-1 text-xs">
              Dự án nội dung truyền cảm hứng
            </Badge>
            <h1 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Văn Miếu Quốc Tử Giám – nơi lưu giữ truyền thống, mở cánh cửa tương lai
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Văn Miếu Quốc Tử Giám: Nơi mạch nguồn hiếu học nghìn năm tuôn chảy, thắp sáng
              đạo lý “Tôn sư trọng đạo” và tiếp thêm ngọn lửa tri thức cho thế hệ hôm nay.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <a href="#khoi-nguon">Khám phá di sản</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#su-menh">Viết tiếp tương lai</a>
              </Button>
            </div>
          </div>
        </section>

        <section id="khoi-nguon" className="container mx-auto scroll-mt-24 px-4 py-16 sm:py-20">
          <div className="mb-8 space-y-3">
            <Badge variant="outline">PHẦN 1: KHƠI NGUỒN – DI SẢN NGÀN NĂM</Badge>
            <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">
              TỔ QUỐC TRONG TIM – NƠI ĐẠO HỌC BẮT ĐẦU
            </h2>
            <p className="max-w-3xl text-muted-foreground">
              Mục tiêu: Đánh vào lòng tự hào dân tộc và sự tôn nghiêm của đạo học.
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <CalendarClock className="h-5 w-5 text-primary" />
                Dòng thời gian hình thành và phát triển
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {timelineMilestones.map((item) => (
                  <div key={item.title} className="rounded-lg border bg-background p-4">
                    <p className="text-sm font-semibold text-primary">{item.year}</p>
                    <h3 className="mt-1 font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Accordion type="single" collapsible className="rounded-xl border px-5">
            <AccordionItem value="di-tich">
              <AccordionTrigger className="text-base">
                1) Di tích tiêu biểu của quần thể Văn Miếu
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-3 sm:grid-cols-2">
                  {architectureHighlights.map((place) => (
                    <div key={place} className="rounded-md border bg-muted/30 p-3 text-sm">
                      {place}
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Gợi ý thể hiện hình ảnh: Đại Thành Môn, khu điện thờ và Đền Khải Thánh (kèm mô
                  tả khái quát, tập trung cảm nhận không gian tôn nghiêm).
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="nhan-vat">
              <AccordionTrigger className="text-base">2) Nhân vật lịch sử tiêu biểu</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {historicalFigures.map((person) => (
                    <li key={person} className="flex items-start gap-2">
                      <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{person}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="su-kien">
              <AccordionTrigger className="text-base">3) Sự kiện kết nối quá khứ – hiện tại</AccordionTrigger>
              <AccordionContent>
                <div className="rounded-lg border bg-muted/20 p-4">
                  <p className="text-sm text-muted-foreground">
                    Tour đêm ứng dụng công nghệ <strong className="text-foreground">mapping 3D</strong>{' '}
                    là điểm chạm mới giúp thế hệ trẻ tiếp cận di sản bằng trải nghiệm sống động.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section id="giao-thoa" className="border-y bg-muted/20">
          <div className="container mx-auto scroll-mt-24 px-4 py-16 sm:py-20">
            <div className="mb-8 space-y-3">
              <Badge variant="outline">PHẦN 2: ĐIỂM CHẠM BIỂU TƯỢNG – GIAO THOA TRÍ TUỆ</Badge>
              <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">
                KẾ THỪA TỪ BIỂU TƯỢNG, VƯƠN XA BẰNG KHÁT VỌNG
              </h2>
            </div>

            <Card>
              <CardContent className="pt-6">
                <p className="leading-relaxed text-muted-foreground">
                  “Khép lại không gian cổ kính của Văn Miếu, chúng ta bắt đầu một hành trình mới –
                  nơi biểu tượng Khuê Văn Các được nâng niu trên ngực áo của hàng vạn sinh viên.
                  Hãy cùng khám phá xem, tinh thần đạo học nghìn năm đã được Đại học Mở Hà Nội kế
                  thừa và lan tỏa như thế nào trong chương tiếp theo: HÀNH TRÌNH KẾT NỐI.”
                </p>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border bg-background p-5">
                    <div className="mb-2 flex items-center gap-2 font-semibold">
                      <Star className="h-4 w-4 text-primary" />
                      Hình tượng Sao Khuê
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Sao Khuê biểu trưng cho trí tuệ, văn hiến và ánh sáng soi đường học vấn cho
                      người Việt qua nhiều thế hệ.
                    </p>
                  </div>

                  <div className="rounded-lg border bg-background p-5">
                    <div className="mb-2 flex items-center gap-2 font-semibold">
                      <Lightbulb className="h-4 w-4 text-primary" />
                      Cảm hứng trong logo HOU
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Tinh thần kế thừa được chuyển hóa thành bản sắc giáo dục hiện đại: mở,
                      kết nối, sáng tạo, và hội nhập nhưng vẫn tôn trọng cội nguồn đạo học.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="su-menh" className="container mx-auto scroll-mt-24 px-4 py-16 sm:py-20">
          <div className="mb-8 space-y-3">
            <Badge variant="outline">PHẦN 3: SỨ MỆNH HIỆN TẠI – HOU & DÒNG CHẢY MỚI</Badge>
            <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">
              Trường ĐẠI HỌC MỞ HÀ NỘI – VIẾT TIẾP CHƯƠNG MỚI CỦA TRÍ TUỆ VIỆT
            </h2>
            <p className="max-w-3xl text-muted-foreground">
              Mục tiêu: Khẳng định giá trị của nhà trường trong dòng chảy lịch sử, từ mạch nguồn
              hiếu học truyền thống đến giáo dục mở cho thế hệ hiện đại.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Target className="h-4 w-4 text-primary" />
                  Sứ mệnh mở rộng cơ hội học tập
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                HOU lan tỏa tri thức tới nhiều đối tượng người học, tiếp nối tinh thần học để phụng
                sự xã hội.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Flame className="h-4 w-4 text-primary" />
                  Nuôi dưỡng khát vọng tri thức
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Mỗi sinh viên là một điểm sáng mới, tiếp nối dòng chảy hiếu học bằng tư duy đổi
                mới và tinh thần tự chủ.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Trophy className="h-4 w-4 text-primary" />
                  Góp phần nâng tầm trí tuệ Việt
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Kết nối truyền thống với hiện đại để tạo nên thế hệ công dân học tập suốt đời, có
                năng lực và bản lĩnh hội nhập.
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="loi-ket" className="border-t bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto scroll-mt-24 px-4 py-16 sm:py-20">
            <Badge variant="outline" className="mb-4">
              PHẦN 4: LỜI KẾT – TIẾNG GỌI TỪ TRÁI TIM
            </Badge>

            <blockquote className="max-w-4xl border-l-4 border-primary pl-4 text-lg leading-relaxed font-medium sm:text-2xl">
              “Hãy để Tổ quốc trong tim dẫn lối cho hành trình chinh phục tri thức của bạn. Cùng
              trường Đại học Mở Hà Nội, chúng ta không chỉ học để hiểu biết, chúng ta học để tự
              hào!”
            </blockquote>

            <Separator className="my-10" />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((item) => (
                <Card key={item.label} className="gap-3 py-4">
                  <CardContent>
                    <p className="text-2xl font-bold tracking-tight">{item.value}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="mt-10 max-w-4xl text-sm italic text-muted-foreground sm:text-base">
              “Hiền tài là nguyên khí của quốc gia. Nguyên khí thịnh thì thế nước mạnh mà hưng
              thịnh. Nguyên khí suy thì thế nước yếu mà thấp hèn.” – Thân Nhân Trung
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <a href="#">Đăng ký hành trình tri thức</a>
              </Button>
              <Button asChild variant="outline">
                <a href="#khoi-nguon">Xem lại di sản ngàn năm</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Landing page nội dung: Văn Miếu Quốc Tử Giám × Đại học Mở Hà Nội.
        </div>
      </footer>
    </div>
  )
}

export default App
