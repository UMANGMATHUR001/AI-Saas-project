import React from "react";

export default function Hero() {
return (
<section className="border-b">
<div className="mx-auto max-w-[1200px]">
{/* big banner placeholder */}
<div className="h-[380px] w-full bg-gray-200 flex items-center justify-center">
<div className="h-24 w-40 bg-gray-300 rounded-xl flex items-center justify-center text-sm">Image</div>
</div>
</div>


<div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
<div>
<h1 className="text-4xl md:text-5xl font-black leading-tight">
Affordable AI Tools for
<br /> Students & Freelancers
</h1>
</div>
<div className="max-w-xl">
<p className="text-sm md:text-base text-gray-700">
Build resumes, generate proposals, study smarter, and grow your
freelancing career with AI. Our tools are designed to empower you and
enhance your productivity.
</p>
<div className="mt-5 flex gap-3">
<button className="rounded-md bg-black px-4 py-2 text-white">Get Started</button>
<button className="rounded-md border px-4 py-2">Explore Tools</button>
</div>
</div>
</div>
</section>
);
}