import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {
  CalendarClock,
  Flame,
  Lightbulb,
  MapPinned,
  Menu,
  Sparkles,
  Star,
  Target,
  Users,
  X,
} from 'lucide-react'

type TimelineItem = {
  year: string
  title: string
  description: string
}

type SiteDetail = {
  name: string
  description: string
  image: string
}

type FigureItem = {
  name: string
  role: string
  contribution: string
  image: string
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
    image: '/section-images/di-tich-vm.jpg',
  },
  {
    name: 'Văn Miếu Môn',
    description:
      'Cổng nội đầu tiên của khu di tích, đánh dấu bước chuyển từ không gian đô thị sang không gian lễ học cổ truyền.',
    image: '/section-images/di-tich-khue-van.jpg',
  },
  {
    name: 'Đại Trung Môn',
    description:
      'Cửa tam quan mở vào lớp không gian thứ hai, biểu trưng cho sự chuẩn mực và cân bằng trong tư tưởng Nho học.',
    image: '/section-images/di-tich-bia.jpg',
  },
  {
    name: 'Khuê Văn Các',
    description:
      'Lầu gác nổi bật với cửa sổ tròn tượng trưng ánh sao Khuê, biểu tượng của tri thức và tinh hoa văn hiến Việt Nam.',
    image: '/section-images/di-tich-khue-van.jpg',
  },
  {
    name: 'Giếng Thiên Quang & Bia Tiến sĩ',
    description:
      'Giếng vuông ở trung tâm tạo thế “thiên quang”; hai dãy bia ghi danh tiến sĩ là kho tư liệu quý về lịch sử giáo dục khoa bảng.',
    image: '/section-images/di-tich-bia.jpg',
  },
  {
    name: 'Đại Thành Môn, Đại Bái, Điện Đại Thành',
    description:
      'Tổ hợp kiến trúc thờ tự quan trọng, nơi tôn vinh Khổng Tử và các bậc hiền triết, thể hiện chiều sâu của đạo lý tôn sư trọng đạo.',
    image: '/section-images/di-tich-vm.jpg',
  },
  {
    name: 'Đền Khải Thánh & khu Thái Học',
    description:
      'Không gian phía sau gắn với chức năng giáo dục; khu Thái Học phục dựng là nơi trưng bày, tưởng niệm và lan tỏa giá trị hiếu học.',
    image: '/section-images/di-tich-vm.jpg',
  },
]

const historicalFigures: FigureItem[] = [
  {
    name: 'Lý Thánh Tông',
    role: 'Vị vua khai mở không gian đạo học',
    contribution:
      'Năm 1070 cho dựng Văn Miếu, đặt viên gạch đầu tiên cho truyền thống tôn vinh hiền tài và giáo dục quốc gia.',
    image: '/section-images/ly-thanh-tong.svg',
  },
  {
    name: 'Lý Nhân Tông (Lý Càn Đức)',
    role: 'Người mở nền giáo dục bậc cao',
    contribution:
      'Năm 1076 lập Quốc Tử Giám, tạo thiết chế đào tạo trí thức cao cấp đầu tiên của nước Việt.',
    image: '/section-images/ly-nhan-tong.svg',
  },
  {
    name: 'Trần Thái Tông',
    role: 'Người mở rộng cơ hội học tập',
    contribution:
      'Đổi Quốc Tử Giám thành Quốc Học Viện, chủ trương chọn người có thực học, góp phần mở rộng đường học cho xã hội.',
    image: '/section-images/tran-thai-tong.svg',
  },
  {
    name: 'Chu Văn An',
    role: 'Biểu tượng khí tiết của nhà giáo Việt',
    contribution:
      'Giữ chức Quốc Tử Giám Tư Nghiệp, nổi tiếng thanh liêm, chính trực; là tấm gương lớn về nhân cách và đạo làm thầy.',
    image: '/section-images/chu-van-an.svg',
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

const menuLinks = [
  { label: 'Trang chủ', href: '#top' },
  { label: 'Văn Miếu Quốc Tử Giám', href: '#khoi-nguon' },
  { label: 'Trường Đại học Mở Hà Nội', href: '#su-menh' },
  { label: 'Liên hệ', href: '#lien-he' },
]

type KhoiNguonTab = 'hinh-thanh' | 'di-tich' | 'nhan-vat' | 'su-kien'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeKhoiNguonTab, setActiveKhoiNguonTab] = useState<KhoiNguonTab>('hinh-thanh')

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-black/20 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-end px-4">
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Mở menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/20 bg-black/55">
            <nav className="container mx-auto flex flex-col px-4 py-3">
              {menuLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-md px-3 py-2 text-sm text-white/90 transition hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main id="top">
        <section className="relative min-h-screen overflow-hidden">
          <img
            src="/hero/van-mieu-hero.jpg"
            alt="Không gian Văn Miếu Quốc Tử Giám"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/34" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/18 via-black/20 to-black/42" />

          <div className="relative z-10 flex min-h-screen items-center">
            <div className="container mx-auto px-4 pt-20 pb-10 text-center text-white sm:pt-24">
              <h1 className="font-display mx-auto max-w-5xl text-3xl font-bold leading-tight tracking-tight text-[#ffe4a8] drop-shadow-[0_3px_18px_rgba(0,0,0,0.45)] sm:text-5xl lg:text-6xl">
                Văn Miếu Quốc Tử Giám
                <span className="font-display mt-2 block text-2xl font-semibold text-[#fff1cf] sm:text-4xl lg:text-5xl">
                  Nơi lưu giữ truyền thống – Mở cánh cửa tương lai
                </span>
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 font-light italic text-white/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.35)] sm:text-[15px]">
                Nơi mạch nguồn hiếu học nghìn năm tuôn chảy, thắp sáng đạo lý “Tôn sư trọng đạo” và
                tiếp thêm ngọn lửa tri thức cho thế hệ hôm nay.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-[#f7e4b8] px-7 text-[#3f2a00] shadow-[0_8px_24px_rgba(0,0,0,0.22)] transition-all hover:-translate-y-0.5 hover:bg-[#ffefca]"
                >
                  <a href="#khoi-nguon">Khám phá di sản</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/70 bg-white/18 px-7 text-white shadow-[0_8px_24px_rgba(0,0,0,0.18)] backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/30"
                >
                  <a href="#su-menh">Viết tiếp tương lai</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="khoi-nguon" className="scroll-mt-24 bg-[#f7f1e2] py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="mb-8 space-y-3">
              <h2 className="font-display text-xl font-medium tracking-tight text-[#6d4b1f] sm:text-2xl md:text-3xl">
                TỔ QUỐC TRONG TIM – NƠI ĐẠO HỌC BẮT ĐẦU
              </h2>
              <p className="max-w-3xl text-sm leading-relaxed text-[#6f6251] sm:text-base">
                Chọn một ô để xem nội dung chi tiết. Mỗi phần được triển khai theo đúng bố cục bạn
                yêu cầu: timeline, di tích có ảnh và hiệu ứng, nhân vật lịch sử có ảnh và mô tả khái quát.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { id: 'hinh-thanh', title: '1. Hình thành & phát triển' },
                { id: 'di-tich', title: '2. Di tích' },
                { id: 'nhan-vat', title: '3. Nhân vật lịch sử' },
                { id: 'su-kien', title: '4. Sự kiện' },
              ].map((item) => {
                const isActive = activeKhoiNguonTab === item.id
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveKhoiNguonTab(item.id as KhoiNguonTab)}
                    className={`rounded-2xl border px-4 py-4 text-left text-sm transition-all sm:text-base ${
                      isActive
                        ? 'border-[#b9853c] bg-[#fff5df] text-[#5a3a14] shadow-[0_10px_24px_rgba(105,72,27,0.18)]'
                        : 'border-[#d7c4a7] bg-white/70 text-[#6f6251] hover:-translate-y-0.5 hover:bg-white hover:shadow-md'
                    }`}
                  >
                    <span className="font-medium">{item.title}</span>
                  </button>
                )
              })}
            </div>

            <div className="mt-8 rounded-2xl border border-[#ddccb0] bg-white/80 p-5 shadow-[0_14px_30px_rgba(98,71,32,0.12)] sm:p-6">
              {activeKhoiNguonTab === 'hinh-thanh' && (
                <div>
                  <div className="mb-4 flex items-center gap-2 text-[#6d4b1f]">
                    <CalendarClock className="h-5 w-5" />
                    <h3 className="font-medium sm:text-lg">Hình thành và phát triển (Timeline)</h3>
                  </div>
                  <div className="relative ml-2 border-l-2 border-[#cfa66b]/55 pl-6">
                    {timelineMilestones.map((item) => (
                      <div key={item.title} className="relative mb-6 last:mb-0">
                        <span className="absolute -left-[33px] top-1 h-3 w-3 rounded-full bg-[#b9853c] ring-4 ring-[#f9e9ce]" />
                        <p className="text-sm font-semibold text-[#7a5220]">{item.year}</p>
                        <h4 className="mt-1 font-semibold text-[#4f3a1f]">{item.title}</h4>
                        <p className="mt-1 text-sm leading-relaxed text-[#6f6251]">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeKhoiNguonTab === 'di-tich' && (
                <div>
                  <div className="mb-4 flex items-center gap-2 text-[#6d4b1f]">
                    <MapPinned className="h-5 w-5" />
                    <h3 className="font-medium sm:text-lg">Di tích (Ảnh + mô tả khái quát)</h3>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {siteDetails.map((site) => (
                      <article
                        key={site.name}
                        className="group overflow-hidden rounded-xl border border-[#e4d2b3] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                      >
                        <div className="relative h-40 overflow-hidden">
                          <img
                            src={site.image}
                            alt={site.name}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
                          <p className="absolute right-3 bottom-3 left-3 text-sm font-semibold text-white">{site.name}</p>
                        </div>
                        <p className="p-4 text-sm leading-relaxed text-[#645845]">{site.description}</p>
                      </article>
                    ))}
                  </div>
                </div>
              )}

              {activeKhoiNguonTab === 'nhan-vat' && (
                <div>
                  <div className="mb-4 flex items-center gap-2 text-[#6d4b1f]">
                    <Users className="h-5 w-5" />
                    <h3 className="font-medium sm:text-lg">Nhân vật lịch sử (Ảnh + mô tả khái quát)</h3>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    {historicalFigures.map((person) => (
                      <article
                        key={person.name}
                        className="group overflow-hidden rounded-xl border border-[#e4d2b3] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                      >
                        <div className="h-40 overflow-hidden">
                          <img
                            src={person.image}
                            alt={person.name}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-[#4f3a1f]">{person.name}</h4>
                          <p className="mt-1 text-sm font-medium text-[#7a5220]">{person.role}</p>
                          <p className="mt-2 text-sm leading-relaxed text-[#645845]">{person.contribution}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              )}

              {activeKhoiNguonTab === 'su-kien' && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-[#6d4b1f]">
                    <Sparkles className="h-5 w-5" />
                    <h3 className="font-medium sm:text-lg">Sự kiện</h3>
                  </div>

                  <div className="rounded-xl border border-[#e4d2b3] bg-white p-5">
                    <h4 className="font-semibold text-[#4f3a1f]">Tour đêm Văn Miếu – Quốc Tử Giám</h4>
                    <p className="mt-2 text-sm leading-relaxed text-[#645845]">
                      Điểm nhấn là chương trình trình chiếu 3D mapping “Tinh hoa đạo học”, kết hợp ánh
                      sáng, âm thanh và kể chuyện di sản, giúp người xem cảm nhận chiều sâu hiếu học
                      theo ngôn ngữ trải nghiệm hiện đại.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section id="giao-thoa" className="border-y border-[#d9e1f0] bg-[#eef3fb]">
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

        <section id="su-menh" className="scroll-mt-24 bg-[#f5f7ee] py-16 sm:py-20">
          <div className="container mx-auto px-4">
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
          </div>
        </section>

        <section id="loi-ket" className="border-t border-[#ddd7cc] bg-[#faf9f5]">
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

        <section id="lien-he" className="border-t border-[#dfdacc] bg-[#f5f2ea]">
          <div className="container mx-auto scroll-mt-24 px-4 py-14">
            <Badge variant="outline" className="mb-4">LIÊN HỆ</Badge>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Thông tin liên hệ</h2>
            <p className="mt-3 max-w-3xl text-muted-foreground">
              Nội dung liên hệ chính thức (email/số điện thoại/địa chỉ) có thể cập nhật theo đơn vị quản lý.
            </p>
            <div className="mt-6">
              <Button asChild variant="outline" className="rounded-full px-6">
                <a href="#top">Quay về trang chủ</a>
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
