import { useState } from "react";
import { Star, Send, MessageCircle, Sparkles, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

/* Demo Reviews */
const initialReviews = [
  {
    name: "Rahul Sharma",
    rating: 5,
    message: "Excellent service! My home looks brand new. Highly recommended.",
  },
  {
    name: "Neha Patel",
    rating: 4,
    message: "Very professional team and punctual. Will book again.",
  },
  {
    name: "Amit Verma",
    rating: 5,
    message: "Best cleaning service in Mumbai. Worth every rupee!",
  },
];

const Reviews = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [showAll, setShowAll] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    rating: 5,
    message: "",
  });

  /* Submit Review */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.message) return;

    const newReview = {
      name: formData.name,
      rating: formData.rating,
      message: formData.message,
    };

    // Safer update
    setReviews((prev) => [newReview, ...prev]);

    setFormData({
      name: "",
      rating: 5,
      message: "",
    });
  };


  /* Show only 3 unless expanded */
  const visibleReviews = showAll ? reviews : reviews.slice(0, 3);

  return (
    <section
      id="reviews"
      className="section-padding bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-50"
    >
      <div className="section-container">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <div className="inline-flex items-center gap-2 bg-emerald-100 border border-emerald-200 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-bold text-emerald-700 uppercase tracking-wider">
              Customer Reviews
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            What Our{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>

          <p className="text-lg text-slate-600">
            Real experiences from our happy customers.
          </p>

        </div>

        {/* Two Containers */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT: REVIEWS */}
          <div className="space-y-6">

            <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <MessageCircle className="text-emerald-600" />
              Customer Feedback
            </h3>

            {visibleReviews.map((review, index) => (
              <div
                key={index}
                className={`relative bg-white p-6 rounded-[28px] border border-emerald-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 max-w-xl
                ${index % 2 === 0 ? "ml-auto" : "mr-auto"}
                `}
              >

                {/* Bubble Tail */}
                <div
                  className={`absolute bottom-[-8px] w-4 h-4 bg-white border-l border-b border-emerald-100 rotate-45
                  ${index % 2 === 0 ? "right-10" : "left-10"}
                  `}
                ></div>

                <div className="flex items-center justify-between mb-2">

                  <h4 className="font-semibold text-slate-800">
                    {review.name}
                  </h4>

                  {/* Rating */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < review.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-slate-300"
                          }`}
                      />
                    ))}
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {review.message}
                </p>
              </div>
            ))}

            {/* Show More / Less */}
            {reviews.length > 3 && (
              <div className="text-center pt-4">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="text-emerald-600 font-semibold hover:underline"
                >
                  {showAll ? "Show Less" : "Show More"}
                </button>
              </div>
            )}

          </div>

          {/* RIGHT: FORM */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl">

            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Leave a Review
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name */}
              <div>
                <label className="text-sm font-semibold text-slate-700 mb-1 block">
                  Your Name
                </label>
                <Input
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Rating */}
              <div>
                <label className="text-sm font-semibold text-slate-700 mb-1 block">
                  Rating
                </label>

                <select
                  value={formData.rating}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      rating: Number(e.target.value),
                    })
                  }
                  className="w-full h-12 rounded-md border border-slate-200 px-3 focus:ring-2 focus:ring-emerald-500"
                >
                  <option value={5}>⭐⭐⭐⭐⭐ (5)</option>
                  <option value={4}>⭐⭐⭐⭐ (4)</option>
                  <option value={3}>⭐⭐⭐ (3)</option>
                  <option value={2}>⭐⭐ (2)</option>
                  <option value={1}>⭐ (1)</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="text-sm font-semibold text-slate-700 mb-1 block">
                  Your Review
                </label>

                <Textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Write your experience..."
                  required
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold shadow-lg hover:shadow-xl transition"
              >
                <Send className="w-4 h-4 mr-2" />
                Submit Review
              </Button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Reviews;
