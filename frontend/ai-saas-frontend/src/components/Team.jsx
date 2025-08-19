import React from "react";

const people = [
  {
	name: "Cathy Lee",
	role: "Content Creator",
	bio: "Creating engaging content to inspire and educate our users.",
  },
  {
	name: "David Kim",
	role: "Marketing Specialist",
	bio: "Helping to spread the word about our amazing AI tools.",
  },
  {
	name: "Eva Chen",
	role: "Support Expert",
	bio: "Here to assist our users with any questions or concerns.",
  },
  {
	name: "Frank White",
	role: "Data Analyst",
	bio: "Analyzing trends to improve our services and user experience.",
  },
];

function TeamCard({ name, role, bio }) {
  return (
	<div className="border rounded-lg p-6 text-center">
	  <div className="font-bold text-lg">{name}</div>
	  <div className="text-sm text-gray-500 mb-2">{role}</div>
	  <div className="text-xs text-gray-700">{bio}</div>
	</div>
  );
}

export default function Team() {
  return (
	<section className="border-b">
	  <div className="mx-auto max-w-6xl px-6 py-12">
		<div className="text-sm text-gray-500">Community</div>
		<h3 className="text-3xl font-extrabold text-center md:text-left mb-8">Our Team</h3>
		<p className="text-center md:text-left text-xs text-gray-700 mb-8">
		  Connect with like-minded individuals and grow together.
		</p>

		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
		  {people.map((p, i) => (
			<TeamCard key={i} {...p} />
		  ))}
		</div>

		<div className="mt-14 text-center">
		  <div className="font-semibold">We're Hiring!</div>
		  <p className="text-xs text-gray-700">Join our growing team and make an impact.</p>
		  <button className="mt-4 rounded-md border px-4 py-2">Open Positions</button>
		</div>
	  </div>
	</section>
  );
}
