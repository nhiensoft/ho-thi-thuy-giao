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
  MapPinned,
  Sparkles,
  Star,
  Target,
  Users,
} from 'lucide-react'

type TimelineItem = {
  year: string
  title: string
  description: string
}

type SiteDetail = {
  name: string
  description: string
}

type FigureItem = {
  name: string
  role: string
  contribution: string
}

type StatItem = {
  value: string
  label: string
  source: string
}

const timelineMilestones: TimelineItem[] = [
  {
    year: '1070',
    title: 'Khởi dựng Văn Miếu',
    description:
      'Vua Lý Thánh Tông cho dựng Văn Miếu, đặt nền móng cho không gian tôn vinh đạo học và hiền tài của dân tộc.',
  },
  {
    year: '1076',
    title: 'Thành lập Quốc Tử Giám',
    description:
      'Vua Lý Nhân Tông lập Quốc Tử Giám bên cạnh Văn Miếu, được xem là trường đại học đầu tiên của Việt Nam.',
  },
  {
    year: '1253',
    title: 'Mở rộng thành Quốc Học Viện',
    description:
      'Triều Trần đổi tên Quốc Tử Giám thành Quốc Học Viện, mở rộng cơ hội học tập cho cả người học giỏi xuất thân thường dân.',
  },
  {
    year: '1484',
    title: 'Dựng bia Tiến sĩ',
    description:
      'Thời Lê Thánh Tông bắt đầu dựng bia ghi danh Tiến sĩ, khắc ghi tinh thần trọng hiền tài của quốc gia.',
  },
  {
    year: '1805',
    title: 'Xây dựng Khuê Văn Các',
    description:
      'Khuê Văn Các được dựng với kiến trúc độc đáo, trở thành biểu tượng văn hiến Thăng Long – Hà Nội.',
  },
  {
    year: 'Hiện nay',
    title: 'Di sản sống trong thời đại số',
    description:
      'Không gian di tích được làm mới bằng các trải nghiệm đêm và trình chiếu 3D mapping, kết nối truyền thống với công nghệ.',
  },
]

const siteDetails: SiteDetail[] = [
  {
    name: 'Hồ Văn',
    description:
      'Không gian mặt nước phía trước Văn Miếu, tạo lớp cảnh quan mở đầu trang nghiêm; xưa là nơi tao đàn, bình văn của các nho sĩ.',
  },
  {
    name: 'Văn Miếu Môn',
    description:
      'Cổng nội đầu tiên của khu di tích, đánh dấu bước chuyển từ không gian đô thị sang không gian lễ học cổ truyền.',
  },
  {
    name: 'Đại Trung Môn',
    description:
      'Cửa tam quan mở vào lớp không gian thứ hai, biểu trưng cho sự chuẩn mực và cân bằng trong tư tưởng Nho học.',
  },
  {
    name: 'Khuê Văn Các',
    description:
      'Lầu gác nổi bật với cửa sổ tròn tượng trưng ánh sao Khuê, biểu tượng của tri thức và tinh hoa văn hiến Việt Nam.',
  },
  {
    name: 'Giếng Thiên Quang & Bia Tiến sĩ',
    description:
      'Giếng vuông ở trung tâm tạo thế “thiên quang”; hai dãy bia ghi danh tiến sĩ là kho tư liệu quý về lịch sử giáo dục khoa bảng.',
  },
  {
    name: 'Đại Thành Môn, Đại Bái, Điện Đại Thành',
    description:
      'Tổ hợp kiến trúc thờ tự quan trọng, nơi tôn vinh Khổng Tử và các bậc hiền triết, thể hiện chiều sâu của đạo lý tôn sư trọng đạo.',
  },
  {
    name: 'Đền Khải Thánh & khu Thái Học',
    description:
      'Không gian phía sau gắn với chức năng giáo dục; khu Thái Học phục dựng là nơi trưng bày, tưởng niệm và lan tỏa giá trị hiếu học.',
  },
]

const historicalFigures: FigureItem[] = [
  {
    name: 'Lý Thánh Tông',
    role: 'Vị vua khai mở không gian đạo học',
    contribution:
      'Năm 1070 cho dựng Văn Miếu, đặt viên gạch đầu tiên cho truyền thống tôn vinh hiền tài và giáo dục quốc gia.',
  },
  {
    name: 'Lý Nhân Tông (Lý Càn Đức)',
    role: 'Người mở nền giáo dục bậc cao',
    contribution:
      'Năm 1076 lập Quốc Tử Giám, tạo thiết chế đào tạo trí thức cao cấp đầu tiên của nước Việt.',
  },
  {
    name: 'Trần Thái Tông',
    role: 'Người mở rộng cơ hội học tập',
    contribution:
      'Đổi Quốc Tử Giám thành Quốc Học Viện, chủ trương chọn người có thực học, góp phần mở rộng đường học cho xã hội.',
  },
  {
    name: 'Chu Văn An',
    role: 'Biểu tượng khí tiết của nhà giáo Việt',
    contribution:
      'Giữ chức Quốc Tử Giám Tư Nghiệp, nổi tiếng thanh liêm, chính trực; là tấm gương lớn về nhân cách và đạo làm thầy.',
  },
]

const stats: StatItem[] = [
  {
    value: '1070',
    label: 'Năm khởi dựng Văn Miếu',
    source: 'Tư liệu lịch sử & hồ sơ di tích',
  },
  {
    value: '82',
    label: 'Bia Tiến sĩ còn lưu giữ',
    source: 'Khu nhà bia tại Văn Miếu',
  },
  {
    value: '1305',
    label: 'Tên Tiến sĩ được khắc trên bia',
    source: 'Nội dung bia khoa cử Lê – Mạc',
  },
  {
    value: '2010',
    label: 'Mốc UNESCO ghi danh tư liệu bia',
    source: 'Chương trình Ký ức Thế giới',
  },
]

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-black/25 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <a href="#top" className="flex items-center gap-2 text-white">
            <Landmark className="h-5 w-5" />
            <span className="text-sm font-semibold tracking-wide sm:text-base">Văn Miếu Quốc Tử Giám</span>
          </a>

          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#khoi-nguon" className="text-white/85 transition-colors hover:text-white">
              Khơi nguồn
            </a>
            <a href="#giao-thoa" className="text-white/85 transition-colors hover:text-white">
              Giao thoa
            </a>
            <a href="#su-menh" className="text-white/85 transition-colors hover:text-white">
              Sứ mệnh hiện tại
            </a>
            <a href="#loi-ket" className="text-white/85 transition-colors hover:text-white">
              Lời kết
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="relative min-h-screen overflow-hidden">
          <img
            src="/hero/van-mieu-hero.jpg"
            alt="Không gian Văn Miếu Quốc Tử Giám"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

          <div className="relative z-10 flex min-h-screen items-center">
            <div className="container mx-auto px-4 pt-20 pb-10 text-white sm:pt-24">
              <Badge className="mb-5 rounded-full border-white/30 bg-white/15 px-4 py-1 text-[11px] tracking-wide text-white">
                HÀNH TRÌNH KẾT NỐI DI SẢN & TRI THỨC
              </Badge>

              <h1 className="font-display max-w-5xl text-3xl font-bold leading-tight tracking-tight text-[#ffe4a8] drop-shadow-[0_3px_18px_rgba(0,0,0,0.55)] sm:text-5xl lg:text-6xl">
                Văn Miếu Quốc Tử Giám
                <span className="font-display mt-2 block text-2xl font-semibold text-[#fff1cf] sm:text-4xl lg:text-5xl">
                  Nơi lưu giữ truyền thống – Mở cánh cửa tương lai
                </span>
              </h1>

              <p className="font-display mt-6 max-w-3xl text-base leading-relaxed italic text-[#fff5df] drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] sm:text-lg">
                Nơi mạch nguồn hiếu học nghìn năm tuôn chảy, thắp sáng đạo lý “Tôn sư trọng đạo” và
                tiếp thêm ngọn lửa tri thức cho thế hệ hôm nay.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild size="lg" className="bg-white text-black hover:bg-white/90">
                  <a href="#khoi-nguon">Khám phá di sản</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white bg-white/10 text-white hover:bg-white/20"
                >
                  <a href="#su-menh">Viết tiếp tương lai</a>
                </Button>
              </div>
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
              Từ công trình khởi dựng thời Lý đến biểu tượng văn hiến của Thăng Long – Hà Nội hôm
              nay, Văn Miếu Quốc Tử Giám là tấm gương phản chiếu truyền thống hiếu học của dân tộc.
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
              <AccordionTrigger className="text-base">1) Di tích tiêu biểu của quần thể Văn Miếu</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-3 sm:grid-cols-2">
                  {siteDetails.map((site) => (
                    <div key={site.name} className="rounded-md border bg-muted/20 p-4">
                      <p className="font-semibold">{site.name}</p>
                      <p className="mt-2 text-sm text-muted-foreground">{site.description}</p>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="nhan-vat">
              <AccordionTrigger className="text-base">2) Nhân vật lịch sử tiêu biểu</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-3">
                  {historicalFigures.map((person) => (
                    <div key={person.name} className="rounded-md border bg-background p-4">
                      <div className="mb-2 flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                        <p className="font-semibold">{person.name}</p>
                      </div>
                      <p className="text-sm text-foreground/90">{person.role}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{person.contribution}</p>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="su-kien">
              <AccordionTrigger className="text-base">3) Sự kiện kết nối quá khứ – hiện tại</AccordionTrigger>
              <AccordionContent>
                <div className="rounded-lg border bg-muted/20 p-4">
                  <p className="text-sm text-muted-foreground">
                    Chương trình trải nghiệm đêm tại Văn Miếu – Quốc Tử Giám với điểm nhấn trình
                    chiếu <strong className="text-foreground">3D mapping “Tinh hoa đạo học”</strong>
                    {' '}đang giúp di sản đến gần hơn với công chúng trẻ bằng ngôn ngữ thị giác hiện đại.
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
                  Khép lại không gian cổ kính của Văn Miếu, hành trình được tiếp nối trong đời sống
                  đại học hiện đại. Hình tượng Khuê Văn Các và sao Khuê không chỉ là ký ức văn hiến
                  mà còn trở thành ngôn ngữ thị giác truyền cảm hứng cho nhiều thế hệ sinh viên.
                </p>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border bg-background p-5">
                    <div className="mb-2 flex items-center gap-2 font-semibold">
                      <Star className="h-4 w-4 text-primary" />
                      Hình tượng sao Khuê – ánh sáng tri thức
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Sao Khuê tượng trưng cho văn chương, học vấn và trí tuệ. Trong mạch cảm hứng
                      Việt, đó là ánh sáng dẫn đường cho hành trình lập thân bằng tri thức.
                    </p>
                  </div>

                  <div className="rounded-lg border bg-background p-5">
                    <div className="mb-2 flex items-center gap-2 font-semibold">
                      <Lightbulb className="h-4 w-4 text-primary" />
                      Logo HOU và tinh thần kế thừa
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Theo thông tin truyền thông chính thức của HOU, biểu trưng nhấn mạnh hình tượng
                      Khuê Văn Các và sao Khuê lan tỏa, gắn với sứ mạng “Mở cơ hội học tập cho mọi
                      người” và triết lý mở cơ hội, mở trí tuệ, mở tương lai.
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
              Từ di sản đạo học nghìn năm, HOU tiếp biến tinh thần hiếu học thành mô hình giáo dục mở:
              linh hoạt, kết nối, và khuyến khích học tập suốt đời trong bối cảnh chuyển đổi số.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Target className="h-4 w-4 text-primary" />
                  Mở cơ hội học tập cho mọi người
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Tạo điều kiện tiếp cận giáo dục đại học cho nhiều nhóm người học, mở rộng con đường
                phát triển cá nhân và nghề nghiệp.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Flame className="h-4 w-4 text-primary" />
                  Nuôi dưỡng khát vọng phụng sự
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Đào tạo thế hệ người học vừa có tri thức chuyên môn vừa có trách nhiệm công dân, biết
                kết hợp hiểu biết với hành động vì cộng đồng.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Users className="h-4 w-4 text-primary" />
                  Kết nối tri thức trong kỷ nguyên số
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Thúc đẩy mô hình học tập linh hoạt, mở rộng hợp tác và ứng dụng công nghệ để gia tăng
                chất lượng và khả năng tiếp cận giáo dục.
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
              Trường Đại học Mở Hà Nội, chúng ta không chỉ học để hiểu biết, chúng ta học để tự hào!”
            </blockquote>

            <Separator className="my-10" />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((item) => (
                <Card key={item.label} className="gap-2 py-4">
                  <CardContent>
                    <p className="text-2xl font-bold tracking-tight">{item.value}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
                    <p className="mt-2 text-[11px] text-muted-foreground/80">Nguồn: {item.source}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="mt-10 max-w-4xl text-sm italic text-muted-foreground sm:text-base">
              “Hiền tài là nguyên khí của quốc gia. Nguyên khí thịnh thì thế nước mạnh mà hưng thịnh.
              Nguyên khí suy thì thế nước yếu mà thấp hèn.” – Thân Nhân Trung
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <a href="#su-menh">
                  <Sparkles className="mr-1 h-4 w-4" />
                  Viết tiếp tương lai cùng HOU
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="#khoi-nguon">
                  <MapPinned className="mr-1 h-4 w-4" />
                  Xem lại hành trình di sản
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Văn Miếu Quốc Tử Giám × Trường Đại học Mở Hà Nội.
        </div>
        <div className="container mx-auto px-4 pb-8 text-center text-xs text-muted-foreground/80">
          Tư liệu biên soạn tham khảo từ cổng thông tin di sản văn hóa, nguồn thông tin công khai về
          Văn Miếu – Quốc Tử Giám và kênh truyền thông chính thức của HOU.
        </div>
      </footer>
    </div>
  )
}

export default App
