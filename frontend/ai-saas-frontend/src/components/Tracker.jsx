import React from "react";

export default function Tracker() {
return (
<section className="border-b">
<div className="mx-auto max-w-7xl px-6 py-12">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
<div className="rounded-xl bg-gray-200 h-80 md:h-auto md:min-h-[260px] flex items-center justify-center">Image</div>
<div className="flex flex-col justify-center">
<h3 className="text-2xl md:text-3xl font-extrabold mb-3">
Track Your Progress and
<br /> Maximize Your AI Tool Usage
</h3>
<p className="text-sm text-gray-700 max-w-md mb-6">
Stay motivated with our daily usage tracker and streak counter. Invite
friends to earn rewards and enhance your experience.
</p>
<div className="grid grid-cols-2 gap-8">
<div>
<div className="text-3xl md:text-4xl font-extrabold">75%</div>
<div className="text-xs text-gray-600">Keep track of your daily AI tool usage.</div>
</div>
<div>
<div className="text-3xl md:text-4xl font-extrabold">3</div>
<div className="text-xs text-gray-600">Invite friends and earn free credits today!</div>
</div>
</div>
</div>
</div>
</div>
</section>
);
}