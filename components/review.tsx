import React from "react";

type Review = {
    initials: string;
    name: string;
    role: string;
    company: string;
    review: string;
    rating: number;
    location: string;
    color: string;
};

const reviews: Review[] = [
    {
        initials: "JD",
        name: "Jane Doe",
        role: "CEO",
        company: "Innovate Solutions",
        review:
            "Techbrill transformed our online presence. Their expertise and dedication are unmatched. We've seen a significant increase in engagement and conversions since partnering with them.",
        rating: 5,
        location: "Kothri Kalan, MP",
        color: "#2563eb",
    },
    {
        initials: "SM",
        name: "Sameer Malik",
        role: "Founder",
        company: "Global Reach",
        review:
            "The team at Techbrill delivered beyond our expectations. Their strategic insights and flawless execution have been instrumental in our recent growth. Highly recommended!",
        rating: 4,
        location: "New Delhi, India",
        color: "#dc2626",
    },
    {
        initials: "AS",
        name: "Ananya Sharma",
        role: "Marketing Director",
        company: "FutureTech",
        review:
            "From concept to completion, Techbrill was a pleasure to work with. Their deep understanding of technology and commitment to our vision made all the difference.",
        rating: 5,
        location: "Bengaluru, India",
        color: "#16a34a",
    },
    {
        initials: "RK",
        name: "Ravi Kumar",
        role: "CTO",
        company: "NextGen Apps",
        review:
            "Techbrill’s innovative approach streamlined our processes and improved efficiency across departments.",
        rating: 5,
        location: "Hyderabad, India",
        color: "#9333ea",
    },
    {
        initials: "NP",
        name: "Nidhi Patel",
        role: "Entrepreneur",
        company: "StartSmart",
        review:
            "Great experience working with Techbrill. Their guidance helped scale my business quickly.",
        rating: 4,
        location: "Ahmedabad, India",
        color: "#f59e0b",
    },
    // {
    //     initials: "VK",
    //     name: "Vikas Khanna",
    //     role: "Product Manager",
    //     company: "TechWave",
    //     review:
    //         "They not only delivered on time but also exceeded quality expectations. Impressive team!",
    //     rating: 5,
    //     location: "Pune, India",
    //     color: "#0ea5e9",
    // },
];

// Review Card
const ReviewCard: React.FC<Review> = ({
    initials,
    name,
    role,
    company,
    review,
    rating,
    location,
    color,
}) => {
    return (
        <div className="mb-4 dark:bg-gray-800 bg-white rounded-2xl shadow-md p-6 flex flex-col h-80 flex-1 min-w-[300px] max-w-[350px] mx-4">
            {/* Header */}
            <div className="flex  items-center gap-3 mb-3">
                <div
                    className="w-12 h-12 flex items-center justify-center text-white font-bold rounded-full"
                    style={{ backgroundColor: color }}
                >
                    {initials}
                </div>
                <div>
                    <h3 className="font-semibold dark:text-white text-gray-800">{name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        {role}, {company}
                    </p>
                </div>
            </div>

            {/* Review */}
            <p className="text-gray-700 italic mb-3 flex-1 overflow-hidden text-ellipsis dark:text-white ">
                {`"${review}"`}
            </p>

            {/* Stars */}
            <div className="flex text-yellow-500 mb-2">
                {Array.from({ length: 5 }, (_, i) => (
                    <span key={i}>{i < rating ? "★" : "☆"}</span>
                ))}
            </div>

            {/* Location */}
            <p className="text-sm text-gray-500">{location}</p>
        </div>
    );
};

// Reviews container with sliding effect
const Reviews: React.FC = () => {
    return (
        <div className="p-10 max-w-full overflow-hidden relative bg-gray-50 dark:bg-gray-900">
            <div className="text-center mb-10">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-red-600 dark:text-red-600">
                    WHAT OUR CLIENTS SAY
                </h3>
                <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                    Client Reviews, Proven Excellence                </h2>
                <div className="h-1 w-20 bg-red-600  mx-auto mt-3 mb-2 rounded-full"></div>
                <p className="text-base text-gray-600 dark:text-white max-w-2xl mx-auto mt-1 leading-relaxed">
                    See the impact directly through the voices of businesses we’ve helped empower and transform.                </p>
            </div>

            {/* Moving container */}
            <div className="flex  gap-6 animate-slide">
                {/* Duplicate list twice to create infinite loop */}
                {[...reviews, ...reviews].map((rev, idx) => (
                    <ReviewCard key={idx} {...rev} />
                ))}
            </div>

            {/* Tailwind custom animation */}
            <style>
                {`
          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-slide {
            display: flex;
            width: calc(350px * ${reviews.length * 2});
            animation: slide 40s linear infinite;
          }
        `}
            </style>
        </div>
    );
};

export default Reviews;
