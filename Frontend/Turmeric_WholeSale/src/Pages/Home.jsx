import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ArrowRight, BadgeIndianRupee, Boxes, HeadphonesIcon, Leaf, PackageCheck, Sparkles } from "lucide-react";
import { getImageUrl } from "../Utils/getImageUrl";
import { useEffect } from "react";
import { fetchAllProducts } from '../Redux/Slice/ProductSlice';

function Home() {
  const { user } = useSelector((state) => state.auth);
  const { products, isPreview } = useSelector((state) => state.products);
  const featuredProduct = products[0];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <div className="bg-white dark:bg-gray-950">

      <section className="relative isolate overflow-hidden bg-[#21190f] text-white">
        <div aria-hidden="true" className="absolute -right-32 -top-40 h-[34rem] w-[34rem] rounded-full bg-amber-500/10 blur-3xl" />
        <div aria-hidden="true" className="absolute -bottom-48 left-1/4 h-96 w-96 rounded-full bg-emerald-700/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-12 lg:py-24">
          <div className="max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-amber-200/20 bg-white/[0.06] px-4 py-2 text-xs font-semibold tracking-[0.16em] text-amber-200 uppercase">
              <Sparkles size={14} />
              Paka Nafsa Trading
            </div>
            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[4.25rem]">
              Good food starts
              <span className="mt-1 block font-serif italic text-amber-400">with a little hing.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-stone-300 sm:text-lg sm:leading-8">
              Explore our hing range for retailers, kitchens and spice businesses. Compare product details and find the right fit for your next order.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3.5 text-sm font-bold text-stone-950 transition hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-[#21190f]"
              >
                Explore the catalog <ArrowRight size={17} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/[0.06]"
              >
                Talk to our team
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-6 text-sm text-stone-300">
              <span className="inline-flex items-center gap-2"><PackageCheck size={17} className="text-amber-400" /> Product details upfront</span>
              <span className="inline-flex items-center gap-2"><BadgeIndianRupee size={17} className="text-amber-400" /> Wholesale catalog</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-amber-300/20 via-transparent to-emerald-400/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-gradient-to-br from-[#4a351b] to-[#1e281c] p-3 shadow-2xl shadow-black/30">
              <div className="relative aspect-[4/4.15] overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-amber-200/20 via-amber-950/30 to-emerald-950/50">
                {!featuredProduct?.image && (
                  <div aria-hidden="true" className="absolute inset-0 grid place-items-center overflow-hidden">
                    <div className="absolute h-[76%] aspect-square rounded-full border border-amber-100/20 bg-[radial-gradient(circle_at_35%_30%,rgba(245,190,88,0.38),rgba(92,59,25,0.16)_48%,rgba(18,37,25,0.2)_72%)] shadow-[0_0_90px_rgba(238,174,70,0.12)]" />
                    <div className="absolute h-[62%] aspect-square rounded-full border border-dashed border-amber-100/20" />
                    <div className="relative -rotate-6 text-center">
                      <p className="font-serif text-7xl italic tracking-tight text-amber-100/90 sm:text-8xl">hing</p>
                      <p className="mt-1 text-[10px] font-semibold tracking-[0.42em] text-amber-100/55">ASAFOETIDA</p>
                    </div>
                  </div>
                )}
                {featuredProduct?.image && (
                  <img
                    src={getImageUrl(featuredProduct.image)}
                    alt={featuredProduct.name}
                    className="absolute inset-0 h-full w-full object-cover opacity-80"
                    onError={(event) => { event.currentTarget.style.display = "none"; }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#17140f] via-[#17140f]/10 to-transparent" />
                <div aria-hidden="true" className="absolute right-8 top-8 grid h-20 w-20 place-items-center rounded-full border border-white/20 bg-white/10 text-amber-200 backdrop-blur-sm">
                  <Leaf size={32} strokeWidth={1.3} />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">A taste of the range</p>
                  <h2 className="max-w-sm text-2xl font-semibold leading-tight sm:text-3xl">
                    {featuredProduct?.name || "A distinctive ingredient. A world of flavour."}
                  </h2>
                  {featuredProduct && (
                    <p className="mt-3 text-sm text-stone-200">
                      {featuredProduct.quality || featuredProduct.productGrade || "Explore product details"}{featuredProduct.unit ? ` · Sold per ${featuredProduct.unit}` : ""}
                    </p>
                  )}
                  <Link to="/products" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-amber-300 transition hover:gap-3">
                    Browse all products <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-white/10 bg-[#30251a] px-5 py-4 shadow-xl sm:block">
              <p className="text-xs uppercase tracking-widest text-stone-400">For your business</p>
              <p className="mt-1 text-sm font-semibold text-white">Browse · Compare · Enquire</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Partner ── */}
      <section className="py-12 sm:py-16 bg-amber-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-10">
            <p className="text-xs font-semibold text-amber-700 dark:text-amber-500 uppercase tracking-widest mb-2">
              Why choose us
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Built for businesses
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { icon: <Leaf size={20} strokeWidth={1.8} />, title: "Explore the range", desc: "See the hing products currently in our catalog." },
              { icon: <BadgeIndianRupee size={20} strokeWidth={1.8} />, title: "Compare pricing", desc: "Review listed prices and bulk pricing by product." },
              { icon: <Boxes size={20} strokeWidth={1.8} />, title: "Order your way", desc: "Product pages show the minimum order and unit." },
              { icon: <HeadphonesIcon size={20} strokeWidth={1.8} />, title: "Talk to us", desc: "Have a question? Send our team an enquiry." },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-4 sm:p-5"
              >
                <div className="w-9 h-9 bg-amber-100 dark:bg-amber-900 rounded-xl flex items-center justify-center text-amber-800 dark:text-amber-300 mb-3">
                  {icon}
                </div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">{title}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features (3 big cards) ── */}
      <section className="py-12 sm:py-16 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-10">
            <p className="text-xs font-semibold text-amber-700 dark:text-amber-500 uppercase tracking-widest mb-2">
              Our advantage
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              A straightforward way to source
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: <Boxes size={24} strokeWidth={1.8} />,
                title: "Product information",
                desc: "Review grade, availability, unit and order minimums before you enquire.",
              },
              {
                icon: <BadgeIndianRupee size={24} strokeWidth={1.8} />,
                title: "Transparent pricing",
                desc: "See product and bulk prices in the catalog, with discounts where listed.",
              },
              {
                icon: <HeadphonesIcon size={24} strokeWidth={1.8} />,
                title: "Personal support",
                desc: "Contact us to discuss a product, your requirements or an order.",
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="border border-gray-100 dark:border-gray-800 rounded-2xl p-5 sm:p-6 hover:border-amber-200 dark:hover:border-amber-800 transition-all duration-200"
              >
                <div className="w-10 h-10 bg-amber-800 rounded-xl flex items-center justify-center text-amber-100 mb-4">
                  {icon}
                </div>
                <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products ── */}
      <section className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-500 uppercase tracking-widest mb-2">
                Products
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                Our range
              </h2>
            </div>
            <Link
              to="/products"
              className="text-sm text-amber-800 dark:text-amber-400 font-medium flex items-center gap-1 hover:gap-2 transition-all"
            >
              View all <ArrowRight size={14} />
            </Link>
          </div>

          {isPreview && (
            <p className="mb-5 text-sm text-gray-500 dark:text-gray-400">
              Showing the local catalog preview. Connect the backend to place orders.
            </p>
          )}

          {products.length ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {products.slice(0, 3).map((product) => (
                <article
                  key={product._id}
                  className="group overflow-hidden rounded-3xl border border-stone-200/80 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
                >
                  <Link to={`/products/${product._id}`} className="block">
                    <div className="relative h-56 overflow-hidden bg-gradient-to-br from-amber-100 to-stone-200 dark:from-amber-950 dark:to-gray-700">
                      {product.image && (
                        <img
                          src={getImageUrl(product.image)}
                          alt={product.name}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                          loading="lazy"
                          onError={(event) => { event.currentTarget.style.display = "none"; }}
                        />
                      )}
                      <span className="absolute left-4 top-4 rounded-full border border-white/60 bg-white/90 px-3 py-1 text-xs font-semibold text-stone-700 backdrop-blur">
                        {product.quality || product.productGrade || product.productType || "Hing"}
                      </span>
                    </div>
                    <div className="p-5 sm:p-6">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-lg font-semibold leading-snug text-gray-900 dark:text-white">{product.name}</h3>
                        <ArrowRight size={18} className="mt-1 shrink-0 text-amber-700 transition group-hover:translate-x-1 dark:text-amber-400" />
                      </div>
                      <p className="mt-2 line-clamp-2 min-h-10 text-sm leading-5 text-gray-500 dark:text-gray-400">
                        {product.description}
                      </p>
                      <div className="mt-5 flex items-end justify-between border-t border-gray-100 pt-4 dark:border-gray-700">
                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Starting price</p>
                          <p className="mt-1 text-xl font-bold text-amber-800 dark:text-amber-400">
                            {new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(product.price)}
                            <span className="ml-1 text-xs font-medium text-gray-500">/ {product.unit || "unit"}</span>
                          </p>
                        </div>
                        <span className="text-right text-xs text-gray-500 dark:text-gray-400">
                          Min. order<br />
                          <strong className="text-sm text-gray-800 dark:text-gray-200">{product.minOrder || product.moq || 1} {product.unit || "unit"}</strong>
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-amber-300 bg-white/70 px-6 py-12 text-center dark:border-amber-800 dark:bg-gray-800/50">
              <p className="text-lg font-semibold text-gray-900 dark:text-white">Our catalog is being updated.</p>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Contact us and we’ll help you find what you need.</p>
              <Link to="/contact" className="mt-5 inline-flex items-center gap-2 rounded-full bg-amber-800 px-5 py-2.5 text-sm font-semibold text-white hover:bg-amber-900">
                Contact us <ArrowRight size={16} />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-12 sm:py-16 bg-amber-800 dark:bg-amber-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight">
            Looking for the right hing for your business?
          </h2>
          <p className="text-amber-200 text-sm sm:text-base mb-8 max-w-md mx-auto">
            Browse the catalog or get in touch with us to discuss your requirements.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {user ? (
              <>
                <Link
                  to="/products"
                  className="bg-white text-amber-900 hover:bg-amber-50 font-semibold px-6 py-3 rounded-xl transition-all text-sm sm:text-base"
                >
                  View catalog
                </Link>
                <Link
                  to="/orders"
                  className="bg-white/15 hover:bg-white/25 border border-white/30 text-white font-medium px-6 py-3 rounded-xl transition-all text-sm sm:text-base"
                >
                  My orders
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/verify-email"
                  className="bg-white text-amber-900 hover:bg-amber-50 font-semibold px-6 py-3 rounded-xl transition-all text-sm sm:text-base"
                >
                  Create account
                </Link>
                <Link
                  to="/login"
                  className="bg-white/15 hover:bg-white/25 border border-white/30 text-white font-medium px-6 py-3 rounded-xl transition-all text-sm sm:text-base"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;