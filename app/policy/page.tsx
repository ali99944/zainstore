"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, FileText, Lock, RefreshCw, ShieldCheck } from 'lucide-react'

export default function PolicyPage() {
  const [activeTab, setActiveTab] = useState("privacy")
  
  const tabs = [
    { id: "privacy", label: "سياسة الخصوصية", icon: <Lock className="w-5 h-5" /> },
    { id: "terms", label: "الشروط والأحكام", icon: <FileText className="w-5 h-5" /> },
    { id: "return", label: "سياسة الإرجاع", icon: <RefreshCw className="w-5 h-5" /> },
    { id: "warranty", label: "سياسة الضمان", icon: <ShieldCheck className="w-5 h-5" /> }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#1B468F] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full">
          <div className="flex gap-2 overflow-hidden py-4">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-6 h-6 rotate-45 bg-[#F15A29] opacity-10 transform -translate-y-3" />
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">سياسات معارض تمكين</h1>
            <p className="text-lg opacity-90">
              نلتزم بالشفافية والوضوح في جميع سياساتنا لضمان تجربة تسوق مريحة وآمنة
            </p>
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

      {/* Policy Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Tabs - Desktop */}
          <div className="hidden md:flex mb-8 border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 font-medium ${
                  activeTab === tab.id
                    ? "text-[#1B468F] border-b-2 border-[#1B468F]"
                    : "text-gray-600 hover:text-[#1B468F]"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tabs - Mobile */}
          <div className="md:hidden mb-8">
            <div className="relative">
              <select
                value={activeTab}
                onChange={(e) => setActiveTab(e.target.value)}
                className="w-full appearance-none bg-white border border-gray-200 rounded-md py-3 px-4 pr-10 text-gray-700 focus:outline-none focus:border-[#1B468F]"
              >
                {tabs.map((tab) => (
                  <option key={tab.id} value={tab.id}>
                    {tab.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 pointer-events-none w-5 h-5" />
            </div>
          </div>

          {/* Policy Content */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            {activeTab === "privacy" && (
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900">سياسة الخصوصية</h2>
                
                <div className="space-y-6 text-gray-700">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">1. المعلومات التي نجمعها</h3>
                    <p>
                      نحن نجمع معلومات شخصية مثل الاسم وعنوان البريد الإلكتروني ورقم الهاتف وعنوان الشحن عندما تقوم بإنشاء حساب أو إجراء عملية شراء. كما نقوم بجمع معلومات غير شخصية مثل نوع المتصفح ونظام التشغيل وعنوان IP.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">2. كيفية استخدام المعلومات</h3>
                    <p>
                      نستخدم المعلومات التي نجمعها لتوفير وتحسين خدماتنا، ومعالجة المعاملات، وإرسال إشعارات حول طلباتك، وتقديم الدعم للعملاء، وإرسال رسائل تسويقية (إذا اخترت الاشتراك).
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">3. مشاركة المعلومات</h3>
                    <p>
                      لا نبيع أو نؤجر أو نتاجر بمعلوماتك الشخصية مع أطراف ثالثة. قد نشارك معلوماتك مع مقدمي الخدمات الذين يساعدوننا في تشغيل موقعنا وإجراء أعمالنا (مثل شركات الشحن ومعالجي الدفع).
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">4. أمان المعلومات</h3>
                    <p>
                      نتخذ إجراءات أمنية معقولة لحماية معلوماتك الشخصية. نستخدم تقنيات التشفير لحماية المعلومات الحساسة المرسلة عبر الإنترنت.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">5. ملفات تعريف الارتباط</h3>
                    <p>
                      نستخدم ملفات تعريف الارتباط لتحسين تجربة المستخدم وتحليل استخدام الموقع. يمكنك ضبط متصفحك لرفض ملفات تعريف الارتباط، ولكن قد يؤثر ذلك على قدرتك على استخدام بعض ميزات موقعنا.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">6. تغييرات على سياسة الخصوصية</h3>
                    <p>
                      قد نقوم بتحديث سياسة الخصوصية الخاصة بنا من وقت لآخر. سنخطرك بأي تغييرات عن طريق نشر السياسة الجديدة على هذه الصفحة.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">7. اتصل بنا</h3>
                    <p>
                      إذا كان لديك أي أسئلة حول سياسة الخصوصية الخاصة بنا، يرجى الاتصال بنا على privacy@zainstore.com.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "terms" && (
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900">الشروط والأحكام</h2>
                
                <div className="space-y-6 text-gray-700">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">1. قبول الشروط</h3>
                    <p>
                      باستخدام موقعنا، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء من هذه الشروط، فلا يجوز لك استخدام موقعنا.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">2. التغييرات في الشروط</h3>
                    <p>
                      نحتفظ بالحق في تعديل هذه الشروط في أي وقت. ستكون التغييرات سارية المفعول فور نشرها على الموقع.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">3. استخدام الموقع</h3>
                    <p>
                      أنت توافق على استخدام الموقع فقط للأغراض القانونية وبطريقة لا تنتهك حقوق أي طرف ثالث أو تقيد أو تمنع استخدام الموقع من قبل أي طرف ثالث.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">4. دقة المعلومات</h3>
                    <p>
                      نحن نبذل قصارى جهدنا لضمان دقة المعلومات المقدمة على موقعنا. ومع ذلك، لا نضمن أن المعلومات خالية من الأخطاء أو السهو.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">5. الحسابات</h3>
                    <p>
                      عند إنشاء حساب على موقعنا، يجب عليك تقديم معلومات دقيقة وكاملة وحديثة. أنت مسؤول عن الحفاظ على سرية كلمة المرور الخاصة بك وعن جميع الأنشطة التي تحدث تحت حسابك.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">6. المنتجات والأسعار</h3>
                    <p>
                      نحتفظ بالحق في تغيير أسعار المنتجات في أي وقت دون إشعار مسبق. نحن لا نضمن توفر جميع المنتجات المعروضة على موقعنا.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">7. حقوق الملكية الفكرية</h3>
                    <p>
                      جميع المحتويات الموجودة على موقعنا، بما في ذلك النصوص والرسومات والشعارات والصور، هي ملك لنا أو للأطراف التي قدمت لنا ترخيصًا لاستخدامها.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "return" && (
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900">سياسة الإرجاع</h2>
                
                <div className="space-y-6 text-gray-700">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">1. فترة الإرجاع</h3>
                    <p>
                      يمكنك إرجاع المنتجات في غضون 14 يومًا من تاريخ الاستلام. يجب أن تكون المنتجات في حالتها الأصلية، غير مستخدمة، مع جميع الملصقات والعلامات المرفقة.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">2. كيفية الإرجاع</h3>
                    <p>
                      لبدء عملية الإرجاع، يرجى الاتصال بخدمة العملاء على الرقم 920001234 أو إرسال بريد إلكتروني إلى returns@zainstore.com. سنزودك بتعليمات مفصلة حول كيفية إرجاع المنتج.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">3. استرداد الأموال</h3>
                    <p>
                      بمجرد استلام المنتج المرتجع وفحصه، سنقوم بإخطارك بحالة طلب الاسترداد. إذا تمت الموافقة على طلبك، سيتم معالجة المبلغ المسترد تلقائيًا إلى طريقة الدفع الأصلية الخاصة بك.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">4. المنتجات المعيبة</h3>
                    <p>
                      إذا تلقيت منتجًا معيبًا، يرجى الاتصال بنا في غضون 48 ساعة من الاستلام. سنقوم بترتيب استبدال المنتج أو استرداد كامل المبلغ.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">5. تكاليف الشحن</h3>
                    <p>
                      تكاليف الشحن للمنتجات المرتجعة هي مسؤولية العميل، إلا في حالة استلام منتج معيب أو خاطئ.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">6. المنتجات غير القابلة للإرجاع</h3>
                    <p>
                      بعض المنتجات غير قابلة للإرجاع لأسباب صحية أو لحماية المستهلك، مثل سماعات الأذن والمنتجات القابلة للتلف والبرامج المفتوحة.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "warranty" && (
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900">سياسة الضمان</h2>
                
                <div className="space-y-6 text-gray-700">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">1. فترة الضمان</h3>
                    <p>
                      تأتي جميع المنتجات مع ضمان المصنع الأصلي. تختلف فترة الضمان حسب المنتج والعلامة التجارية، وتتراوح عادة بين 12 و24 شهرًا من تاريخ الشراء.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">2. ما يغطيه الضمان</h3>
                    <p>
                      يغطي الضمان عيوب التصنيع والمواد التي تظهر خلال فترة الضمان في ظل الاستخدام العادي للمنتج.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">3. ما لا يغطيه الضمان</h3>
                    <p>
                      لا يغطي الضمان الضرر الناتج عن سوء الاستخدام، أو الحوادث، أو التعديلات غير المصرح بها، أو الإصلاحات غير المصرح بها، أو التآكل العادي.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">4. كيفية المطالبة بالضمان</h3>
                    <p>
                      لتقديم مطالبة ضمان، يرجى الاتصال بخدمة العملاء على الرقم 920001234 أو إرسال بريد إلكتروني إلى warranty@zainstore.com. ستحتاج إلى تقديم إثبات الشراء (الفاتورة) ورقم الطلب.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">5. خيارات الضمان</h3>
                    <p>
                      اعتمادًا على طبيعة المشكلة، قد نقوم بإصلاح المنتج، أو استبداله، أو تقديم استرداد جزئي أو كامل.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">6. ضمان إضافي</h3>
                    <p>
                      نقدم خيارات ضمان ممتدة لبعض المنتجات مقابل رسوم إضافية. يمكن شراء هذه الضمانات في وقت الشراء أو في غضون 30 يومًا من تاريخ الشراء.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Contact Section */}
          <div className="mt-12 bg-gray-100 rounded-lg p-6 md:p-8">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">هل لديك أسئلة حول سياساتنا؟</h3>
              <p className="text-gray-700">فريق خدمة العملاء لدينا جاهز للمساعدة</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link 
                href="/store/contact" 
                className="px-6 py-3 bg-[#1B468F] text-white rounded-md text-center hover:bg-[#1B468F]/90 transition-colors"
              >
                تواصل معنا
              </Link>
              <Link 
                href="/store/faq" 
                className="px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-md text-center hover:bg-gray-50 transition-colors"
              >
                الأسئلة الشائعة
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
