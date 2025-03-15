"use client"

import { useState } from "react"
import { Search, Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight, Plus, Minus } from 'lucide-react'

export default function ClientSupportPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  
  // FAQ categories
  const categories = [
    { id: "all", name: "جميع الأسئلة" },
    { id: "orders", name: "الطلبات والشحن" },
    { id: "returns", name: "الإرجاع والاستبدال" },
    { id: "payment", name: "الدفع والفواتير" },
    { id: "account", name: "الحساب والتسجيل" },
    { id: "products", name: "المنتجات والضمان" },
  ]

  // FAQ items
  const faqs = [
    {
      id: "1",
      category: "orders",
      question: "كيف يمكنني تتبع طلبي؟",
      answer: "يمكنك تتبع طلبك بسهولة من خلال الدخول إلى حسابك والانتقال إلى صفحة 'طلباتي'. ستجد هناك جميع طلباتك مع حالة كل طلب ورقم التتبع. يمكنك أيضًا استخدام رقم التتبع المرسل إليك عبر البريد الإلكتروني أو الرسائل النصية للتحقق من حالة الشحن مباشرة على موقع شركة الشحن."
    },
    {
      id: "2",
      category: "orders",
      question: "ما هي مدة التوصيل المتوقعة؟",
      answer: "تختلف مدة التوصيل حسب موقعك وطريقة الشحن المختارة. بشكل عام، يتم توصيل الطلبات داخل المدن الرئيسية خلال 1-3 أيام عمل. للمناطق الأخرى، قد تستغرق 3-7 أيام عمل. يمكنك الاطلاع على مدة التوصيل المتوقعة أثناء إتمام عملية الشراء."
    },
    {
      id: "3",
      category: "returns",
      question: "ما هي سياسة الإرجاع والاستبدال؟",
      answer: "نحن نقدم سياسة إرجاع مرنة تتيح لك إرجاع المنتجات غير المستخدمة خلال 14 يومًا من تاريخ الاستلام. يجب أن تكون المنتجات في حالتها الأصلية مع جميع الملحقات والتغليف. بعض المنتجات مثل الإلكترونيات المفتوحة قد تخضع لشروط خاصة. للاستبدال، يمكنك اختيار منتج بديل بنفس القيمة أو دفع الفرق إذا كان المنتج البديل أعلى سعرًا."
    },
    {
      id: "4",
      category: "returns",
      question: "كيف يمكنني إرجاع منتج؟",
      answer: "لإرجاع منتج، يرجى اتباع الخطوات التالية: 1) قم بتسجيل الدخول إلى حسابك. 2) انتقل إلى 'طلباتي' واختر الطلب المعني. 3) اضغط على 'طلب إرجاع' واتبع التعليمات. 4) ستتلقى تأكيدًا بالبريد الإلكتروني مع تعليمات الشحن. 5) قم بتغليف المنتج بشكل آمن وإرساله إلى العنوان المحدد. 6) بمجرد استلام المنتج وفحصه، سنقوم بمعالجة الاسترداد خلال 5-7 أيام عمل."
    },
    {
      id: "5",
      category: "payment",
      question: "ما هي طرق الدفع المتاحة؟",
      answer: "نحن نقبل مجموعة متنوعة من طرق الدفع لتسهيل عملية الشراء، بما في ذلك: بطاقات الائتمان (فيزا، ماستركارد، أمريكان إكسبرس)، بطاقات مدى، آبل باي، STC Pay، الدفع عند الاستلام (للطلبات التي تقل عن 1000 ريال)، والتحويل البنكي للطلبات الكبيرة. جميع المعاملات المالية عبر الإنترنت مؤمنة بتقنية التشفير المتقدمة."
    },
    {
      id: "6",
      category: "payment",
      question: "هل يمكنني الحصول على فاتورة ضريبية؟",
      answer: "نعم، نحن نصدر فواتير ضريبية لجميع المشتريات. يتم إرسال الفاتورة الضريبية تلقائيًا إلى بريدك الإلكتروني المسجل بعد إتمام الطلب. يمكنك أيضًا تحميل الفاتورة من صفحة تفاصيل الطلب في حسابك. إذا كنت بحاجة إلى فاتورة باسم شركة، يرجى إضافة بيانات الشركة والرقم الضريبي أثناء عملية الشراء."
    },
    {
      id: "7",
      category: "account",
      question: "كيف يمكنني إنشاء حساب؟",
      answer: "إنشاء حساب في زين ستور سهل وسريع. انقر على 'تسجيل' في أعلى الصفحة، ثم أدخل بريدك الإلكتروني ورقم هاتفك وكلمة المرور. يمكنك أيضًا التسجيل باستخدام حساب Google أو Apple أو حساب وسائل التواصل الاجتماعي. بعد التسجيل، ستتمكن من تتبع طلباتك وحفظ العناوين وتخزين طرق الدفع للتسوق بشكل أسرع في المستقبل."
    },
    {
      id: "8",
      category: "account",
      question: "نسيت كلمة المرور، كيف يمكنني استعادتها؟",
      answer: "إذا نسيت كلمة المرور، انقر على 'تسجيل الدخول' ثم اختر 'نسيت كلمة المرور'. أدخل بريدك الإلكتروني المسجل وسنرسل لك رابطًا لإعادة تعيين كلمة المرور. انقر على الرابط في البريد الإلكتروني وأدخل كلمة مرور جديدة. إذا لم تتلق البريد الإلكتروني، تحقق من مجلد البريد العشوائي أو اتصل بخدمة العملاء للمساعدة."
    },
    {
      id: "9",
      category: "products",
      question: "هل المنتجات تأتي مع ضمان؟",
      answer: "نعم، جميع منتجاتنا تأتي مع ضمان المصنّع الأصلي. تختلف فترة الضمان حسب المنتج والعلامة التجارية، وعادة ما تتراوح بين سنة إلى سنتين للأجهزة الإلكترونية. يمكنك الاطلاع على تفاصيل الضمان الخاصة بكل منتج في صفحة المنتج. في حالة وجود عيب مصنعي، يرجى التواصل مع خدمة العملاء مع تقديم إثبات الشراء لبدء إجراءات الضمان."
    },
    {
      id: "10",
      category: "products",
      question: "هل المنتجات أصلية؟",
      answer: "نعم، نحن نضمن أن جميع المنتجات المعروضة في زين ستور هي منتجات أصلية 100% من الشركات المصنعة. نحن نتعامل مباشرة مع الموزعين المعتمدين والوكلاء الرسميين للعلامات التجارية. نحن نأخذ مسألة أصالة المنتجات بجدية كبيرة ولدينا إجراءات صارمة للتحقق من جميع المنتجات قبل عرضها للبيع."
    },
  ]

  // Filter FAQs based on active category and search query
  const filteredFaqs = faqs.filter(faq => 
    (activeCategory === "all" || faq.category === activeCategory) &&
    (searchQuery === "" || 
     faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
     faq.answer.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  // FAQ accordion state
  const [openFaqs, setOpenFaqs] = useState<string[]>([])

  // Toggle FAQ accordion
  const toggleFaq = (id: string) => {
    if (openFaqs.includes(id)) {
      setOpenFaqs(openFaqs.filter(faqId => faqId !== id))
    } else {
      setOpenFaqs([...openFaqs, id])
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#1B468F] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">كيف يمكننا مساعدتك؟</h1>
            <p className="text-lg mb-8">ابحث عن إجابات لأسئلتك أو تواصل مع فريق الدعم</p>
            
            {/* Search Box */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="ابحث عن سؤال..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-12 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#F15A29]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-12 h-12 bg-[#1B468F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-6 w-6 text-[#1B468F]" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">اتصل بنا</h3>
            <p className="text-gray-500 mb-4">نحن متاحون للمساعدة</p>
            <p className="text-[#1B468F] font-medium">920001234</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-12 h-12 bg-[#1B468F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-6 w-6 text-[#1B468F]" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">راسلنا</h3>
            <p className="text-gray-500 mb-4">سنرد عليك في أقرب وقت</p>
            <p className="text-[#1B468F] font-medium">support@zainstore.com</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-12 h-12 bg-[#1B468F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-6 w-6 text-[#1B468F]" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">الدردشة المباشرة</h3>
            <p className="text-gray-500 mb-4">تحدث مع فريق الدعم</p>
            <button className="text-[#1B468F] font-medium flex items-center justify-center mx-auto">
              ابدأ الدردشة
              <ArrowRight className="mr-1 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">الأسئلة الشائعة</h2>
          
          {/* FAQ Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  activeCategory === category.id
                    ? "bg-[#1B468F] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => (
                <div 
                  key={faq.id} 
                  className="bg-white rounded-lg shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between p-4 text-right"
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    {openFaqs.includes(faq.id) ? (
                      <Minus className="h-5 w-5 text-[#1B468F] flex-shrink-0" />
                    ) : (
                      <Plus className="h-5 w-5 text-[#1B468F] flex-shrink-0" />
                    )}
                  </button>
                  
                  {openFaqs.includes(faq.id) && (
                    <div className="p-4 pt-0 text-gray-600 border-t border-gray-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">لم يتم العثور على نتائج مطابقة. يرجى تعديل البحث أو التواصل مع خدمة العملاء.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">معلومات التواصل</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">مركز خدمة العملاء</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-[#1B468F] mt-1 ml-3" />
                    <div>
                      <p className="font-medium text-gray-900">رقم الهاتف</p>
                      <p className="text-gray-600">920001234</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-[#1B468F] mt-1 ml-3" />
                    <div>
                      <p className="font-medium text-gray-900">البريد الإلكتروني</p>
                      <p className="text-gray-600">support@zainstore.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-[#1B468F] mt-1 ml-3" />
                    <div>
                      <p className="font-medium text-gray-900">ساعات العمل</p>
                      <p className="text-gray-600">من الأحد إلى الخميس: 9 صباحًا - 9 مساءً</p>
                      <p className="text-gray-600">الجمعة والسبت: 10 صباحًا - 6 مساءً</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">المقر الرئيسي</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-[#1B468F] mt-1 ml-3" />
                    <div>
                      <p className="font-medium text-gray-900">العنوان</p>
                      <p className="text-gray-600">طريق الملك فهد، حي العليا</p>
                      <p className="text-gray-600">الرياض، المملكة العربية السعودية</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-[#1B468F] mt-1 ml-3" />
                    <div>
                      <p className="font-medium text-gray-900">البريد الإلكتروني للأعمال</p>
                      <p className="text-gray-600">business@zainstore.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-gray-100 h-48">
                    {/* Map placeholder */}
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      خريطة الموقع
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">تواصل معنا</h2>
          <p className="text-gray-500 text-center mb-8">لديك سؤال أو استفسار؟ أرسل لنا رسالة وسنرد عليك في أقرب وقت</p>
          
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    الاسم الكامل <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1B468F] focus:border-[#1B468F]"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    البريد الإلكتروني <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1B468F] focus:border-[#1B468F]"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  الموضوع <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1B468F] focus:border-[#1B468F]"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  الرسالة <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1B468F] focus:border-[#1B468F]"
                  required
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#1B468F] text-white rounded-md font-medium hover:bg-[#1B468F]/90"
                >
                  إرسال الرسالة
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
