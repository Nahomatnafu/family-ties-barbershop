import Link from 'next/link';

export default function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gold-900 via-gold-700 to-gold-900" />
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6">
          READY FOR YOUR NEXT CUT?
        </h2>
        <p className="text-xl sm:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
          Book your appointment today and experience the Family Ties difference.
        </p>
        <Link
          href="/booking"
          className="inline-block bg-black hover:bg-zinc-900 text-gold-500 font-bold text-lg px-12 py-5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
        >
          Book Now
        </Link>
      </div>
    </section>
  );
}

