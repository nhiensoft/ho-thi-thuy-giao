import { useState, useRef } from 'react'
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
    title: 'Văn Miếu được xây dựng',
    description:
      'Vua Lý Thánh Tông cho xây dựng Văn Miếu thờ Khổng Tử, Chu Công và Tứ phối. Đây là công trình kiến trúc văn hóa đầu tiên của nền giáo dục Việt Nam.',
  },
  {
    year: '1076',
    title: 'Lập trường Quốc Tử Giám',
    description:
      'Vua Lý Nhân Tông cho lập Quốc Tử Giám bên cạnh Văn Miếu - trường đại học đầu tiên của Việt Nam, ban đầu chỉ dành cho con vua quan.',
  },
  {
    year: '1156',
    title: 'Tu sửa Văn Miếu',
    description: 'Vua Lý Anh Tông cho sửa lại Văn Miếu và chỉ thờ Khổng Tử.',
  },
  {
    year: '1253',
    title: 'Đổi thành Quốc Học viện',
    description:
      'Vua Trần Thái Tông đổi Quốc Tử Giám thành Quốc Học viện, mở rộng thu nhận cả con em thường dân có sức học xuất sắc.',
  },
  {
    year: '1314',
    title: 'Chu Văn An làm Tư nghiệp',
    description:
      'Đời Trần Minh Tông, Chu Văn An được cử làm Quốc Tử Giám Tư nghiệp và trực tiếp dạy các hoàng tử.',
  },
  {
    year: '1484',
    title: 'Dựng bia Tiến sĩ',
    description:
      'Vua Lê Thánh Tông cho dựng bia ghi danh người đỗ Tiến sĩ từ khoa 1442 trở đi; mỗi khoa một tấm bia đặt trên lưng rùa.',
  },
  {
    year: '1762',
    title: 'Sửa lại Quốc Tử Giám',
    description:
      'Vua Lê Hiển Tông cho sửa lại Quốc Tử Giám thành cơ sở đào tạo và giáo dục cao cấp của triều đình.',
  },
  {
    year: '1802',
    title: 'Ấn định Văn Miếu – Hà Nội',
    description: 'Vua Gia Long ấn định đây là Văn Miếu – Hà Nội.',
  },
  {
    year: '09/03/2010',
    title: 'UNESCO ghi danh 82 bia Tiến sĩ',
    description:
      'UNESCO chính thức công nhận 82 tấm bia tại Văn Miếu – Quốc Tử Giám là Di sản tư liệu thế giới.',
  },
  {
    year: '2010',
    title: 'Tu sửa trước Đại lễ 1000 năm Thăng Long',
    description:
      'Văn Miếu – Quốc Tử Giám tiến hành tu sửa, tôn tạo tổng thể toàn bộ khu di tích.',
  },
]

const siteDetails: SiteDetail[] = [
  {
    name: 'Hồ Văn',
    description:
      'Trước mặt Văn Miếu là hồ Minh Đường hay Văn hồ, dân gian thường gọi là hồ Giám.',
    image: '/section-images/ho-van-user.jpg',
  },
  {
    name: 'Văn Miếu Môn',
    description:
      'Là cổng ngoài cùng của khu di tích Văn Miếu – Quốc Tử Giám, Văn Miếu Môn được thiết kế theo kiến trúc tam quan cổ điển với ba lối đi và hai tầng. Tầng trên nổi bật với ba chữ Hán “Văn Miếu Môn” mang đậm dấu ấn lịch sử.',
    image: '/section-images/van-mieu-mon-user.jpg',
  },
  {
    name: 'Đại Trung Môn',
    description:
      'Cửa Đại Trung môn có kiến trúc 3 gian, xây trên một nền gạch cao, mái lợp ngói mũi hài, gồm hai hàng cột hiên trước và sau, ở giữa có một cột chống nóc. Một tấm biển nhỏ đề 3 chữ Đại Trung môn.',
    image: '/section-images/dai-trung-mon-user.jpg',
  },
  {
    name: 'Khuê Văn Các',
    description:
      'Khuê Văn Các là một công trình mang đậm dấu ấn nghệ thuật, được xây dựng vào năm 1805 dưới thời vua Gia Long. Công trình có dạng lầu vuông, cao gần 9 thước, thiết kế 8 mái chồng diêm – 4 mái trên và 4 mái dưới. Nền công trình hình vuông, mỗi cạnh dài khoảng 6,8 mét.',
    image: '/section-images/khue-van-cac-user.jpg',
  },
  {
    name: 'Giếng Thiên Quang',
    description:
      'Giếng Thiên Quang – hồ nước hình vuông tượng trưng cho mặt đất, mang ý nghĩa hòa hợp âm dương và tinh hoa hội tụ. Hồ cùng Khuê Văn Các tạo thành trục tâm linh thiêng liêng trong quần thể Văn Miếu.',
    image: '/section-images/thien-quang-user.jpg',
  },
  {
    name: 'Bia Tiến Sĩ',
    description:
      '82 tấm bia Tiến sĩ là những công trình đá quý giá trong quần thể Văn Miếu – Quốc Tử Giám. Mỗi tấm bia được đặt trên lưng rùa đá xanh – biểu tượng của sự trường tồn và trí tuệ – được chạm khắc tinh xảo, mang phong cách nghệ thuật khác nhau qua từng thời kỳ.',
    image: '/section-images/bia-tien-si-user.jpg',
  },
  {
    name: 'Đại Thành Môn',
    description:
      'Đại Thành Môn được xây dựng theo lối kiến trúc truyền thống thời Hậu Lê, gồm ba gian nối tiếp nhau. Mỗi gian đều có cửa gỗ sơn đỏ, nổi bật với các hoa văn rồng mây đặc trưng, biểu tượng cho sự linh thiêng và cao quý.',
    image: '/section-images/dai-thanh-mon-user.jpg',
  },
  {
    name: 'Đền Khải Thánh',
    description:
      'Đền Khải Thánh là nơi thờ cha mẹ Khổng Tử tức là Thúc Lương Hột và Nhan Trưng Tại. Đền Khải Thánh xưa vốn là Quốc Tử giám, nơi rèn đúc nhân tài cho nhiều triều đại.',
    image: '/section-images/den-khai-thanh-user.jpg',
  },
  {
    name: 'Nhà Thái Học',
    description:
      'Khu Thái Học được xây dựng vào năm 2000 trên nền đất cũ của Quốc Tử Giám, nhằm tái hiện không gian giáo dục xưa. Khu vực này gồm các công trình chính như: nhà Tiền Đường, nhà Hậu Đường, Tả Vu, Hữu Vu và nhà Chuông.',
    image: '/section-images/nha-thai-hoc-user.jpg',
  },
]

const historicalFigures: FigureItem[] = [
  {
    name: 'Lý Thánh Tông',
    role: 'Vị vua khai mở không gian đạo học',
    contribution:
      'Lý Thánh Tông là vị Hoàng đế thứ ba của nhà Lý. Ông trị vì từ tháng 11 năm 1054 đến khi qua đời năm 1072.',
    image: '/section-images/ly-thanh-tong-user.jpg',
  },
  {
    name: 'Lý Nhân Tông',
    role: 'Người lập Quốc Tử Giám',
    contribution:
      'Lý Nhân Tông là vị hoàng đế thứ tư của nhà Lý trong lịch sử Việt Nam. Ông trị vì Đại Việt từ 1072 - 1128, là vị vua có thời gian trị vì lâu nhất trong lịch sử phong kiến Việt Nam.',
    image: '/section-images/ly-nhan-tong-user.jpg',
  },
  {
    name: 'Lý Anh Tông',
    role: 'Người tiếp nối và tu sửa Văn Miếu',
    contribution:
      'Năm 1156 cho tu sửa Văn Miếu, góp phần duy trì không gian thờ tự và học thuật qua các triều đại.',
    image: '/section-images/ly-thanh-tong.svg',
  },
  {
    name: 'Trần Thái Tông',
    role: 'Người mở rộng cơ hội học tập',
    contribution:
      'Đổi Quốc Tử Giám thành Quốc Học Viện, tạo điều kiện mở rộng con đường học vấn cho nhiều tầng lớp.',
    image: '/section-images/tran-thai-tong.svg',
  },
  {
    name: 'Trần Minh Tông',
    role: 'Người trọng dụng hiền tài giáo dục',
    contribution:
      'Cử Chu Văn An làm Quốc Tử Giám Tư Nghiệp, củng cố vai trò của đạo học trong đời sống triều Trần.',
    image: '/section-images/tran-thai-tong.svg',
  },
  {
    name: 'Chu Văn An',
    role: 'Biểu tượng khí tiết của nhà giáo Việt',
    contribution:
      'Nổi tiếng thanh liêm, chính trực; là tấm gương lớn về nhân cách và đạo làm thầy của giáo dục Việt Nam.',
    image: '/section-images/chu-van-an.svg',
  },
  {
    name: 'Trần Nghệ Tông',
    role: 'Người tôn vinh bậc hiền nho',
    contribution:
      'Cho thờ Chu Văn An tại Văn Miếu, khẳng định truyền thống tôn sư trọng đạo và quý trọng nhân cách.',
    image: '/section-images/tran-thai-tong.svg',
  },
  {
    name: 'Lê Thánh Tông',
    role: 'Người dựng bia Tiến sĩ',
    contribution:
      'Năm 1484 cho dựng bia đề danh Tiến sĩ, để lại di sản tư liệu đặc biệt về nền khoa cử Việt Nam.',
    image: '/section-images/ly-thanh-tong.svg',
  },
  {
    name: 'Lê Hiển Tông',
    role: 'Người tu bổ Quốc Tử Giám thời Hậu Lê',
    contribution:
      'Năm 1762 cho sửa lại Quốc Tử Giám, góp phần duy trì vai trò trung tâm giáo dục cao cấp của triều đình.',
    image: '/section-images/ly-nhan-tong.svg',
  },
  {
    name: 'Vua Gia Long',
    role: 'Người ấn định Văn Miếu – Hà Nội',
    contribution:
      'Năm 1802 ấn định đây là Văn Miếu – Hà Nội, xác lập vị trí lịch sử của di tích trong giai đoạn mới.',
    image: '/section-images/di-tich-vm.jpg',
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

type KhoiNguonTab = 'hinh-thanh' | 'di-tich' | 'nhan-vat'

const INITIAL_VISIBLE_FIGURES = 4

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeKhoiNguonTab, setActiveKhoiNguonTab] = useState<KhoiNguonTab>('hinh-thanh')
  const [showAllFigures, setShowAllFigures] = useState(false)
  const khoiNguonContentRef = useRef<HTMLDivElement | null>(null)

  const handleKhoiNguonTabClick = (tab: KhoiNguonTab) => {
    setActiveKhoiNguonTab(tab)

    if (tab !== 'nhan-vat') {
      setShowAllFigures(false)
    }

    requestAnimationFrame(() => {
      khoiNguonContentRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    })
  }

  const visibleHistoricalFigures = showAllFigures
    ? historicalFigures
    : historicalFigures.slice(0, INITIAL_VISIBLE_FIGURES)

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

        <section id="khoi-nguon" className="scroll-mt-20 bg-[#fdfaf3] pt-10 pb-16 sm:pt-12 sm:pb-20">
          <div className="container mx-auto px-4">
            <div className="mb-8 space-y-3">
              <h2 className="font-display text-xl font-bold tracking-tight text-[#111111] sm:text-2xl md:text-3xl">
                TỔ QUỐC TRONG TIM – NƠI ĐẠO HỌC BẮT ĐẦU
              </h2>
              <p className="max-w-4xl whitespace-pre-line text-xs leading-6 font-light text-black/80 sm:text-sm">
                Trong tâm khảm của mỗi người con đất Việt, Tổ quốc không chỉ là dải đất hình chữ S,
                mà còn là dòng chảy trí tuệ cuộn sóng qua nghìn năm văn hiến.

                Từ mái đình cổ kính của Văn Miếu – Quốc Tử Giám, những viên gạch đầu tiên đã xây nên
                tượng đài của lòng hiếu học. Nơi đây, "Hiền tài là nguyên khí quốc gia", là ngọn lửa
                vĩnh cửu soi sáng tinh thần tự lực tự cường của dân tộc.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  id: 'hinh-thanh',
                  title: '1. Hình thành & phát triển',
                  desc: 'Dõi theo dòng thời gian từ 1070 đến hiện đại.',
                  icon: CalendarClock,
                  thumb: '',
                },
                {
                  id: 'di-tich',
                  title: '2. Di tích',
                  desc: 'Không gian kiến trúc tiêu biểu',
                  icon: MapPinned,
                  thumb: '',
                },
                {
                  id: 'nhan-vat',
                  title: '3. Nhân vật lịch sử',
                  desc: 'Các nhân vật đặt nền móng cho đạo học nước Việt.',
                  icon: Users,
                  thumb: '',
                },
              ].map((item) => {
                const isActive = activeKhoiNguonTab === item.id
                const Icon = item.icon

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleKhoiNguonTabClick(item.id as KhoiNguonTab)}
                    className={`font-ui-modern group relative overflow-hidden rounded-2xl border px-4 py-4 text-left transition-all duration-300 ${
                      isActive
                        ? 'border-[#9f6a2d] bg-gradient-to-br from-[#fff6e3] to-[#f7dfb8] text-[#4f3210] shadow-[0_18px_38px_rgba(112,78,34,0.25)]'
                        : 'border-[#d7c4a7] bg-gradient-to-br from-white/90 to-[#f8efe1] text-[#6f6251] hover:-translate-y-1 hover:border-[#c49757] hover:shadow-[0_12px_24px_rgba(112,78,34,0.18)]'
                    }`}
                  >
                    <span className="pointer-events-none absolute -top-8 -right-8 h-20 w-20 rounded-full bg-white/25 blur-xl" />

                    <div className="relative flex items-start gap-3">
                      <Icon
                        className={`mt-0.5 h-5 w-5 shrink-0 sm:h-6 sm:w-6 ${
                          isActive ? 'text-[#8a5a21]' : 'text-[#a98756] group-hover:text-[#7a5220]'
                        }`}
                      />
                      <div className="w-full">
                        <p className="text-base font-semibold tracking-tight leading-snug sm:text-[18px]">{item.title}</p>
                        <p className={`mt-1 text-sm font-medium leading-relaxed sm:text-[15px] ${isActive ? 'text-[#66461e]' : 'text-[#7b6f5e]'}`}>
                          {item.desc}
                        </p>
                        <div
                          className={`mt-3 h-[3px] rounded-full transition-all ${
                            isActive ? 'w-20 bg-[#b9853c]' : 'w-12 bg-[#d8c2a2] group-hover:w-16 group-hover:bg-[#c08a45]'
                          }`}
                        />
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>

            <div ref={khoiNguonContentRef} className="scroll-mt-24 mt-8 rounded-2xl border border-[#eadfca] bg-white/92 p-5 shadow-[0_14px_30px_rgba(98,71,32,0.09)] sm:p-6">
              {activeKhoiNguonTab === 'hinh-thanh' && (
                <div>
                  <div className="mb-6 flex items-center gap-2 text-[#4c4133]">
                    <CalendarClock className="h-5 w-5" />
                    <h3 className="font-bold sm:text-lg">Hình thành và phát triển</h3>
                  </div>

                  <div className="rounded-2xl border border-[#e9e0d2] bg-[#fdfaf3] p-4 sm:p-5">
                    <div className="relative">
                      <div className="absolute top-0 bottom-0 left-4 w-px bg-[#dfe4eb] md:left-1/2 md:-translate-x-1/2" />

                      <div className="space-y-4">
                        {timelineMilestones.map((item, index) => {
                          const isLeft = index % 2 === 0

                          return (
                            <div key={item.title} className="relative md:grid md:grid-cols-2 md:items-center md:gap-6">
                              <article
                                className={`ml-9 w-[calc(100%-2.5rem)] max-w-[280px] rounded-lg border border-[#e6ebf1] bg-white px-3 py-2.5 shadow-[0_3px_10px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_12px_rgba(15,23,42,0.08)] md:ml-0 md:w-full ${isLeft ? 'md:col-start-1 md:justify-self-end md:mr-2' : 'md:col-start-2 md:justify-self-start md:ml-2'}`}
                              >
                                <p className="font-display text-[20px] font-semibold leading-none tracking-normal text-[#b95a5a] sm:text-[22px]">
                                  {item.year}
                                </p>
                                <h4 className="mt-1.5 text-[15px] font-semibold leading-snug text-[#1f2937] sm:text-[16px]">
                                  {item.title}
                                </h4>
                                <p className="mt-1 text-[13px] leading-relaxed text-[#475569] sm:text-[14px]">
                                  {item.description}
                                </p>
                              </article>

                              <span className="absolute top-4.5 left-4 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#b78585] ring-2 ring-[#fafbfd] md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2" />
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeKhoiNguonTab === 'di-tich' && (
                <div>
                  <div className="mb-4 flex items-center gap-2 text-[#6d4b1f]">
                    <MapPinned className="h-5 w-5" />
                    <h3 className="font-medium sm:text-lg">Di tích</h3>
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
                    <h3 className="font-medium sm:text-lg">Nhân vật lịch sử</h3>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                    {visibleHistoricalFigures.map((person) => (
                      <div key={person.name} className="group relative overflow-hidden">
                        <img
                          src={person.image}
                          alt={person.name}
                          className="block h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-40 lg:h-44"
                        />

                        <div className="pointer-events-none absolute inset-0 bg-black/55 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <div className="absolute inset-x-0 bottom-0 p-3 text-white">
                            <p className="text-sm font-semibold">{person.name}</p>
                            <p className="mt-1 text-[13px]">{person.role}</p>
                            <p className="mt-1 line-clamp-3 text-[12px] opacity-90">{person.contribution}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {historicalFigures.length > INITIAL_VISIBLE_FIGURES && !showAllFigures ? (
                    <div className="mt-5 flex justify-center">
                      <Button
                        type="button"
                        onClick={() => setShowAllFigures(true)}
                        variant="outline"
                        className="rounded-full border-[#caa067] bg-[#fff8ec] px-6 text-[#7a5220] hover:bg-[#fff1d9]"
                      >
                        Hiển thị thêm nhân vật
                      </Button>
                    </div>
                  ) : null}
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
