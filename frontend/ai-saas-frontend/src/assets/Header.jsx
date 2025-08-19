import React from "react";
import IconCube from "./IconCube.jsx";

const NavLink = ({ children }) => (
	<a href="#" className="text-sm text-zinc-700 hover:text-black">
		{children}
	</a>
);

const CTAButton = ({ children, variant = "solid" }) => {
	const base =
		"px-4 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
	const styles =
		variant === "ghost"
			? "border border-zinc-300 bg-white hover:bg-zinc-50 text-zinc-900"
			: "bg-zinc-900 text-white hover:bg-black";
	return <button className={`${base} ${styles}`}>{children}</button>;
};

const MegaMenuCard = ({ title, description }) => (
	<div className="flex items-start gap-3 p-2 rounded-md hover:bg-zinc-50 cursor-pointer">
		<IconCube />
		<div>
			<p className="text-sm font-semibold text-zinc-900">{title}</p>
			<p className="text-xs text-zinc-600">{description}</p>
		</div>
	</div>
);

const BlogItem = ({ title, description }) => (
	<div className="flex gap-4">
		<div className="w-32 h-20 bg-zinc-200 rounded-md" />
		<div>
			<p className="text-sm font-semibold text-zinc-900">{title}</p>
			<p className="text-xs text-zinc-600">{description}</p>
			<button className="text-xs text-zinc-900 font-medium underline underline-offset-2 mt-1">
				Read more
			</button>
		</div>
	</div>
);

const Header = () => {
	return (
		<header className="border-b border-zinc-200 bg-white">
			<div className="mx-auto max-w-6xl px-4">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center gap-10">
						<div className="text-2xl font-semibold tracking-wide">Logo</div>
						<nav className="hidden md:flex items-center gap-6">
							<NavLink>Tools</NavLink>
							<NavLink>Pricing</NavLink>
							<NavLink>Community</NavLink>
							<NavLink>
								<div className="inline-flex items-center gap-1">
									<span>Login/Signup</span>
									<svg
										className="w-4 h-4"
										viewBox="0 0 20 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M6 8l4 4 4-4"
											stroke="currentColor"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>
							</NavLink>
						</nav>
					</div>
					<div className="flex items-center gap-3">
						<CTAButton variant="ghost">Join</CTAButton>
						<CTAButton>Start</CTAButton>
					</div>
				</div>

				{/* Mega Menu */}
				<div className="grid grid-cols-12 gap-8 pb-10 pt-6">
					<div className="col-span-12 md:col-span-4">
						<p className="text-sm font-semibold text-zinc-900 mb-4">Quick Links</p>
						<div className="space-y-3">
							<MegaMenuCard
								title="Home"
								description="Explore our innovative AI tools today!"
							/>
							<MegaMenuCard
								title="Blog"
								description="Latest insights and updates from our community"
							/>
							<MegaMenuCard
								title="Support"
								description="Get assistance with your AI tools"
							/>
							<MegaMenuCard
								title="Contact"
								description="Reach out for inquiries and feedback"
							/>
						</div>
					</div>

					<div className="col-span-12 md:col-span-4">
						<p className="text-sm font-semibold text-zinc-900 mb-4">Featured Articles</p>
						<div className="space-y-3">
							<MegaMenuCard
								title="AI Trends"
								description="Discover the latest in AI technology"
							/>
							<MegaMenuCard
								title="Productivity Tips"
								description="Maximize your efficiency with AI tools"
							/>
							<MegaMenuCard
								title="User Stories"
								description="See how others succeed with our tools"
							/>
							<MegaMenuCard
								title="Updates"
								description="Stay informed about new features and improvements"
							/>
						</div>
					</div>

					<div className="col-span-12 md:col-span-4">
						<p className="text-sm font-semibold text-zinc-900 mb-4">From Our Blog</p>
						<div className="space-y-6">
							<BlogItem
								title="AI Innovations"
								description="Explore the future of artificial intelligence"
							/>
							<BlogItem
								title="Success Stories"
								description="Real users share their experiences with AI"
							/>
							<div className="flex items-center justify-between">
								<button className="text-sm text-zinc-900 font-medium">Button</button>
								<svg
									className="w-5 h-5 text-zinc-900"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M8 5l5 5-5 5"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;

