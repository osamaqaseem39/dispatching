import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";
import Glows from "./Glows";

export default function AboutUs() {
  return (
    <section className="bg-black text-white relative overflow-hidden">
      <Glows count={3} colors={["blue"]} />
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Content */}
          <div className="space-y-8">
            <ScrollAnimation direction="up">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
                  About Freight Logistic LLC
                </h2>
                <p className="text-lg text-neutral-300 leading-relaxed mb-6">
                  We&apos;re a dedicated team of transportation professionals with over 15 years of experience 
                  in truck dispatching, logistics coordination, and freight management. Our mission is to 
                  help owner-operators and small fleets maximize their revenue while minimizing administrative burden.
                </p>
                <p className="text-lg text-neutral-300 leading-relaxed">
                  Founded by industry veterans who understand the challenges of independent trucking, 
                  we&apos;ve built our services around the core principle of transparency, reliability, and 
                  mutual success. Every load we book, every rate we negotiate, and every service we provide 
                  is designed to put more money in your pocket.
                </p>
              </div>
            </ScrollAnimation>

            {/* Stats */}
            <ScrollAnimation direction="up" delay={200}>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-neutral-900 rounded-xl p-6 shadow-lg text-center">
                  <div className="text-3xl font-bold text-white mb-2">500+</div>
                  <div className="text-sm text-neutral-300">Active Carriers</div>
                </div>
                <div className="bg-neutral-900 rounded-xl p-6 shadow-lg text-center">
                  <div className="text-3xl font-bold text-white mb-2">15+</div>
                  <div className="text-sm text-neutral-300">Years Experience</div>
                </div>
                <div className="bg-neutral-900 rounded-xl p-6 shadow-lg text-center">
                  <div className="text-3xl font-bold text-white mb-2">$2.5M+</div>
                  <div className="text-sm text-neutral-300">Monthly Revenue</div>
                </div>
                <div className="bg-neutral-900 rounded-xl p-6 shadow-lg text-center">
                  <div className="text-3xl font-bold text-white mb-2">98%</div>
                  <div className="text-sm text-neutral-300">On-Time Delivery</div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Values */}
            <ScrollAnimation direction="up" delay={400}>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Our Core Values</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Transparency</h4>
                      <p className="text-sm text-neutral-300">Clear communication and honest reporting on every load.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Reliability</h4>
                      <p className="text-sm text-neutral-300">Consistent service and dependable support when you need it.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Partnership</h4>
                      <p className="text-sm text-neutral-300">We succeed when you succeed - mutual success.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Innovation</h4>
                      <p className="text-sm text-neutral-300">Leveraging technology to improve your operations.</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Image */}
          <ScrollAnimation direction="right" delay={600}>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/aboutusimage.jpg" 
                  alt="Freight Logistic LLC Team" 
                  width={600} 
                  height={400} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-neutral-200 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🚛</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-neutral-900">Professional Team</div>
                    <div className="text-xs text-neutral-700">Dedicated dispatchers</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-neutral-300 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📈</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-neutral-900">Proven Results</div>
                    <div className="text-xs text-neutral-700">Higher revenue</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* CTA */}
        <ScrollAnimation direction="up" delay={800}>
            <div className="text-center mt-16">
            <div className="bg-neutral-900 rounded-2xl p-8 shadow-lg border border-neutral-800">
              <h3 className="text-2xl font-semibold mb-4 text-white">Ready to Work With Us?</h3>
              <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
                Join our growing family of successful owner-operators and small fleets. 
                Let&apos;s discuss how we can help grow your business.
              </p>
              <a 
                href="/contact" 
                  className="inline-flex items-center rounded-lg bg-white px-8 py-4 text-black text-lg font-medium hover:bg-neutral-200 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Started Today
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
