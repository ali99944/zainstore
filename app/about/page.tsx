"use client"

import Image from "next/image"
import Link from "next/link"
import { Award, CheckCircle, Clock, MapPin, Phone, ShieldCheck, Star, Truck, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#1B468F] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full">
          <div className="flex gap-2 overflow-hidden py-4">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-6 h-6 rotate-45 bg-[#F15A29] opacity-10 transform -translate-y-3" />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">عن معارض تمكين</h1>
            <p className="text-xl opacity-90 mb-8">
              نحن نسعى لتوفير تجربة تسوق فريدة ومميزة لعملائنا من خلال توفير منتجات عالية الجودة بأسعار منافسة
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/store"
                className="px-6 py-3 bg-[#F15A29] text-white rounded-md hover:bg-[#F15A29]/90 transition-colors"
              >
                تسوق الآن
              </Link>
              <Link
                href="/store/contact"
                className="px-6 py-3 bg-white text-[#1B468F] rounded-md hover:bg-gray-100 transition-colors"
              >
                تواصل معنا
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full">
          <div className="flex gap-2 overflow-hidden py-4">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-6 h-6 rotate-45 bg-[#F15A29] opacity-10 transform translate-y-3" />
            ))}
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">قصتنا</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                بدأت معارض تمكين رحلتها في عام 2010 كمتجر صغير في مدينة الرياض، وسرعان ما توسعت لتصبح واحدة من أكبر
                سلاسل المتاجر في المملكة العربية السعودية.
              </p>
              <p>
                نحن نؤمن بأن كل منزل يستحق أفضل المنتجات، ولذلك نحرص على توفير مجموعة واسعة من الأجهزة المنزلية
                والإلكترونيات من أشهر العلامات التجارية العالمية.
              </p>
              <p>
                مع مرور السنوات، طورنا شبكة من الشركاء والموردين الموثوقين لضمان تقديم منتجات عالية الجودة لعملائنا
                بأسعار تنافسية.
              </p>
            </div>
          </div>
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=500&width=600&text=ZainStore+History"
              alt="قصة معارض تمكين"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">قيمنا</h2>
            <p className="text-gray-700">
              نحن نلتزم بمجموعة من القيم الأساسية التي توجه كل ما نقوم به، من اختيار المنتجات إلى خدمة العملاء
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck className="w-10 h-10" />,
                title: "الجودة",
                description: "نختار بعناية المنتجات عالية الجودة من العلامات التجارية الموثوقة",
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: "خدمة العملاء",
                description: "نضع عملاءنا في المقام الأول ونسعى دائمًا لتجاوز توقعاتهم",
              },
              {
                icon: <CheckCircle className="w-10 h-10" />,
                title: "النزاهة",
                description: "نعمل بشفافية وصدق في جميع تعاملاتنا مع العملاء والشركاء",
              },
              {
                icon: <Star className="w-10 h-10" />,
                title: "الابتكار",
                description: "نسعى دائمًا لتحسين خدماتنا وتقديم حلول مبتكرة",
              },
              {
                icon: <Award className="w-10 h-10" />,
                title: "التميز",
                description: "نسعى للتميز في كل جانب من جوانب أعمالنا",
              },
              {
                icon: <Truck className="w-10 h-10" />,
                title: "الالتزام",
                description: "نلتزم بتقديم خدمة سريعة وموثوقة لجميع عملائنا",
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-[#1B468F] mb-4 mx-auto">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "50+", label: "فرع في المملكة" },
            { number: "1000+", label: "منتج متنوع" },
            { number: "500K+", label: "عميل سعيد" },
            { number: "10+", label: "سنوات من الخبرة" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#1B468F] mb-2">{stat.number}</div>
              <div className="text-gray-700">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Team */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">فريقنا</h2>
            <p className="text-gray-700">
              يتكون فريقنا من خبراء متخصصين في مجالات مختلفة، يعملون معًا لتقديم أفضل تجربة تسوق لعملائنا
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: "أحمد الزهراني", position: "المدير التنفيذي" },
              { name: "سارة العتيبي", position: "مدير التسويق" },
              { name: "محمد القحطاني", position: "مدير المبيعات" },
              { name: "نورة السعيد", position: "مدير خدمة العملاء" },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 relative">
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=${member.name}`}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold mb-1 text-gray-900">{member.name}</h3>
                  <p className="text-gray-700">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">تواصل معنا</h2>
            <p className="text-gray-700">
              نحن هنا للإجابة على جميع استفساراتك ومساعدتك في اختيار المنتجات المناسبة لاحتياجاتك
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Phone className="w-10 h-10 text-[#1B468F] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-900">اتصل بنا</h3>
              <p className="text-gray-700">920001234</p>
              <p className="text-gray-700">+966 11 123 4567</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <MapPin className="w-10 h-10 text-[#1B468F] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-900">زورنا</h3>
              <p className="text-gray-700">الرياض، طريق الملك فهد</p>
              <p className="text-gray-700">المملكة العربية السعودية</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Clock className="w-10 h-10 text-[#1B468F] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-900">ساعات العمل</h3>
              <p className="text-gray-700">السبت - الخميس: 9 صباحًا - 11 مساءً</p>
              <p className="text-gray-700">الجمعة: 2 ظهرًا - 11 مساءً</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

