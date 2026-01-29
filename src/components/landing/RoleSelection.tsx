const ROLES = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD_t2bEo78z_4IBY12bOaWAl1SKYa-tkCvAjdLnn6-yZcrNg77n2ZcwgnY1jYy91vZxsmNZrARvua2GT2HeOfWIv5HxBI5SN-W004dRdWkcfNguC5roAavPx3GvwXMe6r_ggK3lQAlvWRLO0Ve4euXdN_IoFOXnHFmAqEbfRCvA4CiXAnndS9FET7HFfUtVMfpOtFvIA511s_KUQzgNB6rsizV4JDJJY7PXzTXi3YYPFm0Y89iBxrgPOY76lPpu_hG10l6xKyayFSg",
    icon: "person",
    title: "Citizen",
    description:
      "Spot waste piles? Schedule a pickup instantly, earn green points, and track your personal environmental impact score.",
    cta: "Report Waste",
    ctaClass: "bg-gc-primary text-gc-text-main hover:bg-gc-primary-dark",
    to: "/login",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAcRoX-s8uhFbr_7XyOcs_0PC8tdulXCdrXcCl1qQiUCzZi7LlW67y_bJLswLzCicOlYwBDzlBQuQoBttULdQ1wg9v884JfqAF2RcY0IjQPzCl5OtWGVo1zU4d7QBp3wZ8atJCxmPx-DOYxqmeFt5-mWdk4d0ZMnrSb5hOYUNsLzKfoEfr18EfGwpVPwsgvZ_tq_38qU53Scg--fGAJ93FCSakFi_mZsEznIx82dtQzrRDsgHxlj_BIf8MGZsqyInsJ1bWFmOJMbSQ",
    icon: "business",
    title: "Enterprise",
    description:
      "Partner with us to optimize your collection routes, manage resources efficiently, and access municipal data.",
    cta: "Join Network",
    ctaClass: "bg-white text-gc-text-main hover:bg-gray-100",
    to: "/register",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDzLY5hMg_H1UZXsFDYYaFAVKqmpcwcpwS-ONGE448BRf_brHvJLtfKZq6nHOUirb_MubbdtILfOcjnCvzPeqU2w8ot65XnpwEyCCZsBZ6YuLD2guGn10sBjhPPQuam1_mzPhr26odZDJZD10E3v67AKTVcn5swsfSqz8SgpJdojRUXeSCwGzv3mCwWQEIsceqiRi9UcZPLsrG6KPteiMzcNRuxQmNZWmWKmlr3_a6Bm702idHJcb9NhvTxBnLlrwjH-DmFFz4Suqg",
    icon: "admin_panel_settings",
    title: "Administrator",
    description:
      "System access for city officials and platform moderators. Monitor zones, verify reports, and manage users.",
    cta: "System Login",
    ctaClass: "border-2 border-white text-white hover:bg-white hover:text-gc-text-main",
    to: "/login",
  },
] as const

import { Link } from "react-router-dom"

export function RoleSelection() {
  return (
    <section className="w-full py-16 px-4 md:px-10">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gc-text-main dark:text-white">
              Choose Your Role
            </h2>
            <p className="text-gc-text-muted dark:text-gray-400 max-w-xl">
              Join the ecosystem tailored to your needs. Whether you are reporting, collecting, or managing.
            </p>
          </div>
          <Link to="/register" className="text-gc-primary font-bold hover:underline flex items-center gap-1">
            Learn more about roles <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ROLES.map(({ image, icon, title, description, cta, ctaClass, to }) => (
            <div
              key={title}
              className="group relative flex flex-col justify-end overflow-hidden rounded-2xl h-[480px] shadow-lg hover:shadow-xl transition-all"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url("${image}")` }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent" />
              <div className="relative z-10 flex flex-col gap-4 p-8">
                <div className="size-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-gc-primary border border-white/20 mb-2">
                  <span className="material-symbols-outlined text-2xl">{icon}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                  <p className="text-gray-200 text-sm leading-relaxed">{description}</p>
                </div>
                <Link
                  to={to}
                  className={`mt-2 w-full flex items-center justify-center rounded-lg h-12 text-sm font-bold tracking-wide transition-colors ${ctaClass}`}
                >
                  {cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
