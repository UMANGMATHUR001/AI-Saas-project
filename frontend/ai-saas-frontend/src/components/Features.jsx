import React from "react";

export default function Features() {
const items = [
{
title: "Empower Your Journey with Our Cutting-Edge Solutions",
desc: "Unlock your potential with our suite of AI-powered tools.",
cta: "Try Now",
},
{
title: "Resume Builder: Craft Professional Resumes Effortlessly",
desc: "Create standout resumes that get you noticed by employers.",
cta: "Try Now",
},
{
title: "Proposal Generator: Win More Clients with Tailored Proposals",
desc: "Generate compelling proposals that showcase your unique offerings.",
cta: "Try Now",
},
];


return (
<section className="border-b">
<div className="mx-auto max-w-7xl px-6 py-12">
<h2 className="text-2xl md:text-3xl font-extrabold mb-8">
Explore Our Innovative AI Tools Designed for Your Success
</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
{items.map((it, idx) => (
<div key={idx} className="">
<div className="h-8 w-8 rounded-full border flex items-center justify-center mb-4">↺</div>
<h3 className="font-semibold leading-snug">{it.title}</h3>
<p className="mt-3 text-sm text-gray-700">{it.desc}</p>
<a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold">{it.cta} <span>›</span></a>
</div>
))}
</div>
</div>
</section>
);
}