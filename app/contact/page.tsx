"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Send, Facebook, Twitter, Instagram, Youtube, ChevronDown, Check, AlertCircle } from 'lucide-react'

// FAQ data
const faqs = [
  {
    question: "ما هي طرق الدفع المتاحة؟",
    answer:
      "نوفر عدة طرق للدفع تشمل: الدفع عند الاستلام، بطاقات الائتمان، التحويل البنكي، وخدمات التقسيط بدون فوائد عبر تمارا وتابي.",
  },
  {
    question: "كم تستغرق عملية التوصيل؟",
    answer: "يتم توصيل الطلبات داخل المدن الرئيسية خلال 2-3 أيام عمل، وللمناطق الأخرى خلال 3-5 أيام عمل.",
  },
  {
    question: "هل يمكنني استبدال أو إرجاع المنتج؟",
    answer:
      "نعم، يمكنك إرجاع أو استبدال المنتج خلال 14 يوماً من تاريخ الاستلام شرط أن يكون بحالته الأصلية وبدون أي أضرار.",
  },
  {
    question: "هل تقدمون خدمة التركيب؟",
    answer: "نعم، نقدم خدمة التركيب الاحترافية لجميع المكيفات والأجهزة المنزلية الكبيرة بواسطة فنيين معتمدين.",
  },
  {
    question: "ما هي مدة الضمان على المنتجات؟",
    answer:
      "تختلف مدة الضمان حسب المنتج والماركة، وتتراوح بين سنة إلى 10 سنوات. يمكنك الاطلاع على تفاصيل الضمان في صفحة المنتج.",
  },
]


export default function ContactUsPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    // Clear error when user types
    setFormErrors({
      ...formErrors,
      [name]: "",
    })
  }

  const validateForm = () => {
    const errors: Record<string, string> = {}

    if (!formData.name.trim()) {
      errors.name = "الرجاء إدخال الاسم"
    }

    if (!formData.email.trim()) {
      errors.email = "الرجاء إدخال البريد الإلكتروني"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "الرجاء إدخال بريد إلكتروني صحيح"
    }

    if (!formData.phone.trim()) {
      errors.phone = "الرجاء إدخال رقم الهاتف"
    }

    if (!formData.subject.trim()) {
      errors.subject = "الرجاء اختيار الموضوع"
    }

    if (!formData.message.trim()) {
      errors.message = "الرجاء إدخال الرسالة"
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      // In a real app, you would send the form data to your server here
      console.log("Form submitted:", formData)
      setFormSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      {/* Update the hero section to be more visually appealing */}
      <div className="relative h-80 md:h-96 overflow-hidden">
        <div className="absolute inset-0 bg-[#1B468F] z-10"></div>
        {/* <Image
          src="https://img.freepik.com/free-photo/customer-service-team-office-answering-calls_23-2149069776.jpg"
          alt="تواصل معنا"
          fill
          className="object-cover opacity-40"
        /> */}
        <div className="relative z-20 h-full container mx-auto px-4 flex flex-col justify-center">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded mb-4"
            >
              <h4 className="text-white font-medium">نحن هنا لمساعدتك</h4>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              تواصل معنا
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white text-opacity-90 max-w-xl text-lg"
            >
              نسعد بتواصلك معنا للإجابة على استفساراتك وتقديم الدعم الفني والمساعدة في اختيار المنتج المناسب لاحتياجاتك.
            </motion.p>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded border border-gray-100 p-4 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-[#1B468F]/10 flex items-center justify-center mb-4">
              <Phone className="w-8 h-8 text-[#1B468F]" />
            </div>
            <h3 className="text-xl font-bold text-[#1B468F] mb-2">اتصل بنا</h3>
            <p className="text-gray-500 mb-4">متاحون للرد على استفساراتك على مدار الساعة</p>
            <Link href="tel:8001234567" className="text-lg font-medium text-[#F15A29] hover:underline">
              800 123 4567
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded border border-gray-100 p-4 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-[#1B468F]/10 flex items-center justify-center mb-4">
              <Mail className="w-8 h-8 text-[#1B468F]" />
            </div>
            <h3 className="text-xl font-bold text-[#1B468F] mb-2">راسلنا</h3>
            <p className="text-gray-500 mb-4">أرسل لنا استفسارك وسنرد عليك في أقرب وقت ممكن</p>
            <Link href="mailto:store@zaindev.com" className="text-lg font-medium text-[#F15A29] hover:underline">
              store@zaindev.com
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded border border-gray-100 p-4 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-[#1B468F]/10 flex items-center justify-center mb-4">
              <MapPin className="w-8 h-8 text-[#1B468F]" />
            </div>
            <h3 className="text-xl font-bold text-[#1B468F] mb-2">زيارة معارضنا</h3>
            <p className="text-gray-500 mb-4">تفضل بزيارة أقرب فرع لك للاطلاع على منتجاتنا</p>
            <Link href="#branches" className="text-lg font-medium text-[#F15A29] hover:underline">
              عرض الفروع
            </Link>
          </motion.div>
        </div>

        {/* Contact Form and Map Section */}
        {/* Update the layout for contact form and map */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded border border-gray-100 p-6 lg:col-span-3"
          >
            <h2 className="text-2xl font-bold text-[#1B468F] mb-6">أرسل رسالة</h2>

            {formSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded p-4 flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium text-green-800 mb-1">تم إرسال رسالتك بنجاح</h3>
                  <p className="text-green-700 text-sm">
                    شكراً لتواصلك معنا. سيقوم فريقنا بالرد على استفسارك في أقرب وقت ممكن.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    الاسم الكامل <span className="text-red-500">*</span>
                  </label>
                  {/* Make form inputs smaller in size */}
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full border ${
                      formErrors.name ? "border-red-500" : "border-gray-300"
                    } rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B468F]/50`}
                    placeholder="أدخل اسمك الكامل"
                  />
                  {formErrors.name && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {formErrors.name}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      البريد الإلكتروني <span className="text-red-500">*</span>
                    </label>
                    {/* Update all other form inputs to match the smaller size */}
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full border ${
                        formErrors.email ? "border-red-500" : "border-gray-300"
                      } rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B468F]/50`}
                      placeholder="example@email.com"
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {formErrors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      رقم الهاتف <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full border ${
                        formErrors.phone ? "border-red-500" : "border-gray-300"
                      } rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B468F]/50`}
                      placeholder="05xxxxxxxx"
                    />
                    {formErrors.phone && (
                      <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {formErrors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    الموضوع <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full border ${
                      formErrors.subject ? "border-red-500" : "border-gray-300"
                    } rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B468F]/50`}
                  >
                    <option value="">اختر الموضوع</option>
                    <option value="استفسار عن منتج">استفسار عن منتج</option>
                    <option value="طلب صيانة">طلب صيانة</option>
                    <option value="شكوى">شكوى</option>
                    <option value="اقتراح">اقتراح</option>
                    <option value="أخرى">أخرى</option>
                  </select>
                  {formErrors.subject && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {formErrors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    الرسالة <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className={`w-full border ${
                      formErrors.message ? "border-red-500" : "border-gray-300"
                    } rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B468F]/50`}
                    placeholder="اكتب رسالتك هنا..."
                  ></textarea>
                  {formErrors.message && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {formErrors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1B468F] text-white py-3 rounded-md font-medium hover:bg-[#1B468F]/90 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  إرسال الرسالة
                </button>
              </form>
            )}
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded border border-gray-100 overflow-hidden lg:col-span-2"
          >
            <div className="h-[400px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.7379584890643!2d46.6883099!3d24.711590399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2z2KjYsdisINin2YTZhdmF2YTZg9ipINin2YTYqtis2KfYsdmK!5e0!3m2!1sar!2ssa!4v1658162515447!5m2!1sar!2ssa"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="خريطة الموقع"
              ></iframe>
            </div>
          </motion.div>
        </div>

        {/* Remove the branches section from the JSX */}
        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#1B468F] mb-6">الأسئلة الشائعة</h2>

          <div className="bg-white rounded border border-gray-100 overflow-hidden">
            <div className="divide-y divide-gray-100">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-100 last:border-b-0">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="flex items-center justify-between w-full p-4 text-right hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${expandedFaq === index ? "rotate-180" : ""}`}
                    />
                  </button>
                  {expandedFaq === index && (
                    <div className="p-4 pt-0 bg-gray-50">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div>
          <h2 className="text-2xl font-bold text-[#1B468F] mb-6">تابعنا على وسائل التواصل الاجتماعي</h2>

          <div className="bg-white rounded border border-gray-100 p-6">
            <div className="flex flex-wrap justify-center gap-8">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2  transition-transform"
              >
                <div className="w-16 h-16 rounded-full bg-[#1877F2] flex items-center justify-center">
                  <Facebook className="w-8 h-8 text-white" />
                </div>
                <span className="text-sm font-medium">Facebook</span>
              </Link>

              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2  transition-transform"
              >
                <div className="w-16 h-16 rounded-full bg-[#1DA1F2] flex items-center justify-center">
                  <Twitter className="w-8 h-8 text-white" />
                </div>
                <span className="text-sm font-medium">Twitter</span>
              </Link>

              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2  transition-transform"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] flex items-center justify-center">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
                <span className="text-sm font-medium">Instagram</span>
              </Link>

              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2  transition-transform"
              >
                <div className="w-16 h-16 rounded-full bg-[#FF0000] flex items-center justify-center">
                  <Youtube className="w-8 h-8 text-white" />
                </div>
                <span className="text-sm font-medium">YouTube</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
