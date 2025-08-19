// import React from "react";

// function CheckItem({ text }) {
//   return (
//     <li className="flex items-center gap-2">
//       <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border text-green-600">
//         ✓
//       </span>
//       <span className="text-sm text-gray-700">{text}</span>
//     </li>
//   );
// }

// function Pricing({
//   leftPlans = [
//     { title: "Starter", desc: "Perfect for trying out AI tools." },
//     { title: "Pro", desc: "Best for professionals and freelancers." },
//   ],
//   featuresLeft = ["AI Resume Builder", "Proposal Generator"],
//   featuresRight = ["Priority Support", "Advanced Templates"],
// }) {
//   return (
//     <>
//       <p className="text-sm text-gray-700 mb-10 max-w-xl">
//         Choose a plan that fits your needs and start utilizing our AI tools today!
//       </p>

//       <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start">
//         {/* Left plan descriptions */}
//         <div className="md:col-span-2 space-y-8">
//           {leftPlans.map((p, i) => (
//             <div key={i}>
//               <div className="flex items-center gap-3">
//                 <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border">
//                   ◌
//                 </span>
//                 <div className="font-semibold">{p.title}</div>
//               </div>
//               <p className="ml-9 text-sm text-gray-700">{p.desc}</p>
//             </div>
//           ))}
//         </div>

//         {/* Right pricing card */}
//         <div className="md:col-span-3">
//           <div className="rounded-2xl border p-6 shadow-sm">
//             <div className="flex items-start justify-between">
//               <div>
//                 <div className="font-semibold">Basic Plan</div>
//                 <div className="text-xs text-gray-600">
//                   ₹99/month for 16 chats
//                 </div>
//               </div>
//               <div className="text-3xl font-extrabold">₹99</div>
//             </div>

//             <hr className="my-4" />

//             <div className="text-xs text-gray-600 mb-3">Includes:</div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               <ul className="space-y-3">
//                 {featuresLeft.map((f, i) => (
//                   <CheckItem key={i} text={f} />
//                 ))}
//               </ul>
//               <ul className="space-y-3">
//                 {featuresRight.map((f, i) => (
//                   <CheckItem key={i} text={f} />
//                 ))}
//               </ul>
//             </div>

//             <hr className="my-6" />

//             <button className="w-full rounded-md bg-black py-2 text-white">
//               Upgrade Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Pricing;
import React from "react";

function CheckItem({ text }) {
  return (
    <li className="flex items-center gap-2">
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border text-green-600">
        ✓
      </span>
      <span className="text-sm text-gray-700">{text}</span>
    </li>
  );
}

function Pricing({
  leftPlans = [
    { title: "Starter", desc: "Perfect for trying out AI tools." },
    { title: "Pro", desc: "Best for professionals and freelancers." },
  ],
  pricingCards = [
    {
      name: "Basic Plan",
      price: "₹99",
      desc: "₹99/month for 16 chats",
      featuresLeft: ["AI Resume Builder", "Proposal Generator"],
      featuresRight: ["Priority Support", "Advanced Templates"],
    },
    {
      name: "Pro Plan",
      price: "₹299",
      desc: "₹299/month for unlimited chats",
      featuresLeft: ["AI Resume Builder", "Proposal Generator", "Analytics"],
      featuresRight: ["Priority Support", "Advanced Templates", "Team Access"],
    },
  ],
}) {
  return (
    <>
      <p className="text-sm text-gray-700 mb-10 max-w-xl">
        Choose a plan that fits your needs and start utilizing our AI tools today!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start">
        {/* Left plan descriptions */}
        <div className="md:col-span-2 space-y-8">
          {leftPlans.map((p, i) => (
            <div key={i}>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border">
                  ◌
                </span>
                <div className="font-semibold">{p.title}</div>
              </div>
              <p className="ml-9 text-sm text-gray-700">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Right pricing cards */}
        <div className="md:col-span-3 grid sm:grid-cols-2 gap-6">
          {pricingCards.map((plan, i) => (
            <div key={i} className="rounded-2xl border p-6 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-semibold">{plan.name}</div>
                  <div className="text-xs text-gray-600">{plan.desc}</div>
                </div>
                <div className="text-3xl font-extrabold">{plan.price}</div>
              </div>

              <hr className="my-4" />

              <div className="text-xs text-gray-600 mb-3">Includes:</div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  {plan.featuresLeft.map((f, i) => (
                    <CheckItem key={i} text={f} />
                  ))}
                </ul>
                <ul className="space-y-3">
                  {plan.featuresRight.map((f, i) => (
                    <CheckItem key={i} text={f} />
                  ))}
                </ul>
              </div>

              <hr className="my-6" />

              <button className="w-full rounded-md bg-black py-2 text-white">
                Upgrade Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Pricing;


