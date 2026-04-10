import { useEffect } from "react";
import {
  Activity,
  BadgeCheck,
  Boxes,
  Briefcase,
  Building2,
  Cable,
  CloudCog,
  Cpu,
  Globe,
  HardDrive,
  Mail,
  Phone,
  Rocket,
  ScanSearch,
  Server,
  ShieldCheck,
  Timer,
} from "lucide-react";

const heroAdvantages = [
  "Поставка 1–2 недели",
  "Экономия до 70%",
  "Поддержка 24×7",
  "SLA с фиксированными метриками",
];

const sectionData = [
  {
    id: "enterprise-refurbished",
    title: "Enterprise Refurbished",
    icon: Server,
    description:
      "Enterprise Refurbished — это восстановленное и протестированное оборудование корпоративного класса, подготовленное к эксплуатации по регламенту.",
    points: [
      "Быстрая поставка 1–2 недели",
      "Цена ниже за счёт отсутствия вендорского канала",
      "Готово к работе",
    ],
    extraTitle: "Использование",
    extra: [
      "Расширение мощностей",
      "Резервные системы",
      "VDI",
      "Тестовые среды",
      "Масштабирование",
    ],
  },
  {
    id: "support-sla",
    title: "Поддержка и SLA",
    icon: ShieldCheck,
    points: [
      "Поддержка 24×7 и мониторинг",
      "Реагирование и восстановление по SLA",
      "Фиксированное время реакции и восстановления",
      "Выезд инженеров",
    ],
    extraTitle: "Отчётность",
    extra: ["Журнал инцидентов", "Выполненные работы", "Рекомендации"],
    badge: "Гарантия до 10 лет",
  },
  {
    id: "tpm",
    title: "Независимая поддержка IT-оборудования",
    icon: Activity,
    points: [
      "Экономия до 70%",
      "Поддержка после окончания гарантии",
      "Один контракт на всех вендоров",
      "Гибкие SLA",
    ],
    extraTitle: "Преимущества",
    extra: [
      "Глобальная сеть складов",
      "Быстрая замена комплектующих",
      "Инженеры высокой квалификации",
    ],
  },
  {
    id: "refurbished-servers",
    title: "Refurbished серверы",
    icon: Cpu,
    points: [
      "Экономия 40–70%",
      "Производительность корпоративного уровня",
      "Полная диагностика и тестирование",
      "Гарантия до 5 лет",
      "Быстрая поставка",
    ],
  },
  {
    id: "devops",
    title: "Услуги DevOps",
    icon: CloudCog,
    points: [
      "Автоматизация CI/CD",
      "Инфраструктура как код",
      "Kubernetes и контейнеризация",
      "Мониторинг и логирование",
      "Безопасность процессов",
      "Резервное копирование",
    ],
  },
  {
    id: "expertise",
    title: "Экспертиза",
    icon: BadgeCheck,
    points: [
      "AWS",
      "Kubernetes",
      "Автоматизация CI/CD",
      "Оптимизация инфраструктуры",
    ],
  },
  {
    id: "projects",
    title: "Проекты",
    icon: Briefcase,
    points: [
      "Банковский сектор",
      "Государственные проекты",
      "Строительство",
      "Международные проекты",
    ],
  },
  {
    id: "vendors",
    title: "Вендоры",
    icon: Boxes,
    points: [
      "HPE",
      "Dell",
      "Lenovo",
      "Huawei",
      "IBM",
      "Cisco",
      "NetApp",
      "Pure Storage",
      "Fujitsu",
      "Hitachi",
      "Juniper",
      "Fortinet",
    ],
  },
  {
    id: "buffer-stock",
    title: "Буферный склад",
    icon: HardDrive,
    points: [
      "Запас комплектующих у клиента",
      "Быстрая замена",
      "Автоматическое пополнение",
      "Минимизация простоев",
    ],
  },
];

const contactItems = [
  { icon: Mail, label: "Email", value: "sales@onepoint.support" },
  { icon: Phone, label: "Телефон", value: "+7 (800) 000-00-00" },
  { icon: Globe, label: "Сайт", value: "onepoint.support" },
];

function SectionCard({
  title,
  icon: Icon,
  description,
  points,
  extraTitle,
  extra,
  badge,
}: {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description?: string;
  points: string[];
  extraTitle?: string;
  extra?: string[];
  badge?: string;
}) {
  return (
    <article className="reveal rounded-2xl border border-white/12 bg-white/5 p-6 shadow-[0_20px_40px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:p-8">
      <div className="mb-5 flex items-center gap-3">
        <div className="rounded-xl border border-blue-400/40 bg-blue-500/10 p-2">
          <Icon className="h-5 w-5 text-blue-300" />
        </div>
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
      </div>
      {description ? <p className="mb-6 text-base text-slate-300">{description}</p> : null}
      {badge ? (
        <p className="mb-6 inline-flex rounded-full border border-violet-300/40 bg-violet-400/10 px-4 py-1 text-sm font-medium text-violet-200">
          {badge}
        </p>
      ) : null}
      <ul className="mb-6 grid gap-3 sm:grid-cols-2">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-2 text-slate-200">
            <ScanSearch className="mt-0.5 h-4 w-4 shrink-0 text-blue-300" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      {extra && extraTitle ? (
        <>
          <h3 className="mb-3 text-lg font-medium text-white">{extraTitle}</h3>
          <ul className="grid gap-2 sm:grid-cols-2">
            {extra.map((item) => (
              <li key={item} className="flex items-center gap-2 text-slate-300">
                <Cable className="h-4 w-4 text-violet-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </article>
  );
}

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");

    const nodes = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <p className="text-xl font-semibold tracking-tight text-white">Onepoint</p>
          <a
            href="#contacts"
            className="rounded-xl border border-blue-300/30 bg-blue-500/20 px-4 py-2 text-sm font-medium text-blue-100 transition hover:bg-blue-500/35"
          >
            Оставить заявку
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        <section className="reveal relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-violet-950/70 px-6 py-14 shadow-[0_20px_60px_rgba(37,99,235,0.25)] sm:px-10 sm:py-20">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/25 blur-3xl" />
          <div className="absolute -bottom-16 -left-20 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="relative z-10 max-w-3xl">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-sm text-slate-200">
              <Rocket className="h-4 w-4 text-blue-300" />
              IT-решения корпоративного уровня
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Enterprise Refurbished серверы и IT-поддержка 24×7
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-slate-300">
              Корпоративное оборудование с гарантией до 10 лет и поддержкой Onepoint
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {heroAdvantages.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100"
                >
                  <Timer className="h-4 w-4 text-blue-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contacts"
              className="mt-9 inline-flex rounded-xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
            >
              Оставить заявку
            </a>
          </div>
        </section>

        <section className="mt-10 grid gap-6">
          {sectionData.map((section) => (
            <SectionCard key={section.id} {...section} />
          ))}
        </section>

        <section
          id="contacts"
          className="reveal mt-10 rounded-2xl border border-white/12 bg-white/5 p-6 shadow-[0_20px_40px_rgba(0,0,0,0.35)] sm:p-8"
        >
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-xl border border-blue-400/40 bg-blue-500/10 p-2">
              <Building2 className="h-5 w-5 text-blue-300" />
            </div>
            <h2 className="text-2xl font-semibold text-white">Контакты</h2>
          </div>
          <p className="mb-6 text-slate-300">Свяжитесь с Onepoint для расчёта проекта и коммерческого предложения.</p>
          <div className="grid gap-4 sm:grid-cols-3">
            {contactItems.map((item) => (
              <div key={item.label} className="rounded-xl border border-white/10 bg-slate-900/70 p-4">
                <item.icon className="mb-2 h-5 w-5 text-violet-300" />
                <p className="text-sm text-slate-400">{item.label}</p>
                <p className="text-base text-slate-100">{item.value}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-6 text-center text-sm text-slate-400">
        Onepoint — корпоративные IT-решения и поддержка One Point support
      </footer>
    </div>
  );
}
