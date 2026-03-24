import ContactForm from "@/components/ui/ContactForm/ContactForm";
import Sotial from "@/components/ui/Social/Social";

export const metadata = {
  title: "Contacts"
}

export default function Contacts() {
  return (
    <main>
      <section className="px-5 py-16 md:py-24 bg-[#EBF0F9] overflow-hidden">
        <div className="main-container flex flex-col md:flex-row md:gap-14">
          <div className="flex-[1.5] lg:flex-[1.8] mb-10 md:mb-0">
            <div className="flex items-center gap-6 mb-8">
              <span className="w-18 h-0.5 bg-gray-800"></span>
              <span className="text-gray-800 font-bold uppercase tracking-[2px] text-sm">
                Contact Us
              </span>
            </div>

            <h1 className="md:ps-24 text-center md:text-start text-5xl font-bold lg:text-6xl text-gray-800 leading-[67.20px] mb-8">
              We&apos;d love to hear <br className="hidden lg:block" /> from you
            </h1>

            <p className="pb-10 text-center md:text-start md:ps-24 text-zinc-600 text-base md:text-lg font-normal leading-6 md:max-w-160">
              Have any question in mind or want to enquire? Please feel free to
              contact us through the form or the following details.
            </p>
          </div>
          <div className="flex-1 grid grid-cols-1 min-[400px]:grid-cols-2 md:grid-cols-1 gap-8">
            <div>
              <h3 className="text-gray-800 font-bold text-2xl mb-2.5 leading-10">
                Let&apos;s talk!
              </h3>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 text-zinc-600 text-base font-normal leading-6"
              >
                <a
                  href="tel:+123456789"
                  className="hover:text-[#70C174] transition-colors duration-300"
                >
                  +1 23 456 789
                </a>
                <a
                  href="mailto:hello@finsweet.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#70C174] transition-colors duration-300"
                >
                  hello@finsweet.com
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-gray-800 font-bold text-2xl mb-2.5 leading-10">
                Headoffice
              </h3>
              <p className="text-zinc-600 text-sm leading-6">
                8 Brewery Drive, Hudson, NH 03051 <br /> USA
              </p>
            </div>

            <div>
              <h3 className="text-gray-800 font-bold text-2xl mb-2.5 leading-10">
                Branch Office
              </h3>
              <p className="text-zinc-600 text-sm leading-6">
                178 Marconi St., Venice, 34293 <br /> Italy
              </p>
            </div>

            <Sotial iconColor="text-gray-800" className="flex gap-6 mb-auto" />
          </div>
        </div>
      </section>

      <section>
        <div className="main-container pt-2 md:pt-4 pb-16 md:pb-24">
          <ContactForm />
        </div>
      </section>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93726.48872213847!2d-71.50192082721422!3d42.768204064445676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3b1c1b689e839%3A0x8923d81fb05a4203!2sBenson%20Park!5e0!3m2!1suk!2shr!4v1774024302964!5m2!1suk!2shr"
        width="100%"
        height="448"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </main>
  );
}
