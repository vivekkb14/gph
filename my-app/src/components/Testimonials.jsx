import { reviews } from '../data/reviews';

const Testimonials = () => {
  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-4 h-4 ${
              index < rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  const TestimonialCard = ({ review }) => {
    return (
      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 min-w-[320px] max-w-[400px] mx-4">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <img
              src={review.avatar}
              alt={review.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold text-gray-900">{review.name}</h4>
              <StarRating rating={review.rating} />
            </div>
          </div>
          <span className="text-sm text-gray-500">{review.date}</span>
        </div>

        {/* Review Text */}
        <p className="text-gray-700 leading-relaxed mb-4">
          "{review.text}"
        </p>

        {/* Google-style Verified Badge */}
        <div className="flex items-center text-sm text-green-600">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Verified Review
        </div>
      </div>
    );
  };

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="animate-fade-in">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800 mb-4">
              Testimonials
            </span>
          </div>
          <h2 className="animate-slide-up text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="animate-slide-up text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about 
            their experience working with us.
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* First Marquee */}
          <div className="flex animate-marquee space-x-4 py-4">
            {reviews.map((review) => (
              <TestimonialCard key={review.id} review={review} />
            ))}
            {/* Duplicate for seamless loop */}
            {reviews.map((review) => (
              <TestimonialCard key={`duplicate-${review.id}`} review={review} />
            ))}
          </div>

          {/* Second Marquee (reverse direction) */}
          <div className="flex animate-marquee space-x-4 py-4" style={{ animationDirection: 'reverse' }}>
            {reviews.slice().reverse().map((review) => (
              <TestimonialCard key={`reverse-${review.id}`} review={review} />
            ))}
            {reviews.slice().reverse().map((review) => (
              <TestimonialCard key={`reverse-duplicate-${review.id}`} review={review} />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">4.9</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Join Our Happy Clients
            </h3>
            <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
              Experience the difference that quality service and dedicated support can make for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary bg-white text-green-600 hover:bg-gray-100">
                Start Your Journey
              </button>
              <button className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600">
                Read More Reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 