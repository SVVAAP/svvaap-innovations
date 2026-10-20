import { Component, useEffect, useMemo, useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

const tabs = ["overview", "modules", "leads", "projects", "careers", "seo"];

const initialLead = {
	name: "",
	email: "",
	phone: "",
	company: "",
	message: "",
	source: "website",
};

const initialProject = {
	title: "",
	summary: "",
	category: "Web Development",
	status: "active",
	url: "",
	coverImage: "",
	tags: "",
};

const initialCareer = {
	title: "",
	location: "Udupi",
	type: "full-time",
	description: "",
	status: "open",
};

const initialSeo = {
	path: "/",
	title: "",
	description: "",
	keywords: "",
};

function formatDate(timestamp) {
	return new Date(timestamp).toLocaleString();
}

function AdminDashboard() {
	const [activeTab, setActiveTab] = useState("overview");
	const [pin, setPin] = useState("");
	const [isAuthenticated, setIsAuthenticated] = useState(
		localStorage.getItem("admin_auth") === "1"
	);

	const [leadForm, setLeadForm] = useState(initialLead);
	const [projectForm, setProjectForm] = useState(initialProject);
	const [careerForm, setCareerForm] = useState(initialCareer);
	const [seoForm, setSeoForm] = useState(initialSeo);

	const expectedPin = import.meta.env.VITE_ADMIN_PIN || "1234";

	const stats = useQuery(api.admin.getDashboardStats) || {
		totalLeads: 0,
		newLeads: 0,
		activeProjects: 0,
		openRoles: 0,
		seoPages: 0,
	};
	const modules = useQuery(api.admin.listModules) || [];
	const leads = useQuery(api.admin.listLeads) || [];
	const projects = useQuery(api.admin.listProjects) || [];
	const careers = useQuery(api.admin.listCareers) || [];
	const seoPages = useQuery(api.admin.listSeoPages) || [];
	const activity = useQuery(api.admin.listActivity) || [];

	const seedDashboardModules = useMutation(api.admin.seedDashboardModules);
	const toggleModule = useMutation(api.admin.toggleModule);
	const createLead = useMutation(api.admin.createLead);
	const updateLeadStatus = useMutation(api.admin.updateLeadStatus);
	const upsertProject = useMutation(api.admin.upsertProject);
	const upsertCareer = useMutation(api.admin.upsertCareer);
	const upsertSeoPage = useMutation(api.admin.upsertSeoPage);

	useEffect(() => {
		seedDashboardModules().catch(() => null);
	}, [seedDashboardModules]);

	const requirementsChecklist = useMemo(
		() => [
			"Role-based access + admin auth",
			"Lead intake + status pipeline",
			"Project portfolio management",
			"Careers and open positions",
			"SEO metadata manager",
			"Activity logs and change trace",
			"KPI overview and quick actions",
		],
		[]
	);

	const handleLogin = (event) => {
		event.preventDefault();
		if (pin === expectedPin) {
			localStorage.setItem("admin_auth", "1");
			setIsAuthenticated(true);
			return;
		}
		alert("Invalid admin PIN");
	};

	const handleLogout = () => {
		localStorage.removeItem("admin_auth");
		setIsAuthenticated(false);
	};

	if (!isAuthenticated) {
		return (
			<div className="min-h-screen bg-slate-950 p-6 text-white">
				<div className="mx-auto mt-20 max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8">
					<h1 className="text-2xl font-semibold">SVVAAP Admin Panel</h1>
					<p className="mt-2 text-sm text-slate-300">Enter admin PIN to continue.</p>
					<form onSubmit={handleLogin} className="mt-6 space-y-4">
						<input
							type="password"
							value={pin}
							onChange={(event) => setPin(event.target.value)}
							placeholder="Admin PIN"
							className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2"
						/>
						<button className="w-full rounded-lg bg-emerald-600 px-4 py-2 font-medium hover:bg-emerald-500" type="submit">
							Login
						</button>
					</form>
					<p className="mt-4 text-xs text-slate-400">Set VITE_ADMIN_PIN in .env for production.</p>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-slate-950 text-slate-100">
			<div className="border-b border-slate-800 bg-slate-900/80">
				<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
					<h1 className="text-xl font-semibold">SVVAAP Admin Dashboard</h1>
					<button className="rounded-lg border border-slate-700 px-3 py-2 text-sm" onClick={handleLogout}>
						Logout
					</button>
				</div>
			</div>

			<div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 lg:grid-cols-[220px_1fr]">
				<aside className="rounded-xl border border-slate-800 bg-slate-900 p-3">
					<div className="space-y-2">
						{tabs.map((tab) => (
							<button
								className={`w-full rounded-lg px-3 py-2 text-left text-sm capitalize ${
									activeTab === tab ? "bg-emerald-600 text-white" : "bg-slate-800 text-slate-200"
								}`}
								key={tab}
								onClick={() => setActiveTab(tab)}
							>
								{tab}
							</button>
						))}
					</div>
				</aside>

				<main className="space-y-6">
					{activeTab === "overview" && (
						<section className="space-y-6">
							<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
								<KpiCard label="Total Leads" value={stats.totalLeads} />
								<KpiCard label="New Leads" value={stats.newLeads} />
								<KpiCard label="Active Projects" value={stats.activeProjects} />
								<KpiCard label="Open Roles" value={stats.openRoles} />
								<KpiCard label="SEO Pages" value={stats.seoPages} />
							</div>

							<Panel title="Dashboard Requirements Checklist">
								<ul className="grid gap-2 sm:grid-cols-2">
									{requirementsChecklist.map((item) => (
										<li key={item} className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm">
											{item}
										</li>
									))}
								</ul>
							</Panel>

							<Panel title="Recent Activity">
								<div className="space-y-2">
									{activity.length === 0 && <p className="text-sm text-slate-400">No activity yet.</p>}
									{activity.map((item) => (
										<div key={item._id} className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm">
											<p className="font-medium">{item.action}</p>
											<p className="text-slate-300">{item.details || "No details"}</p>
											<p className="text-xs text-slate-400">{formatDate(item.createdAt)}</p>
										</div>
									))}
								</div>
							</Panel>
						</section>
					)}

					{activeTab === "modules" && (
						<Panel title="Dashboard Modules">
							<div className="space-y-3">
								{modules.map((module) => (
									<div key={module._id} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800 px-4 py-3">
										<div>
											<p className="font-medium">{module.title}</p>
											<p className="text-sm text-slate-300">{module.description}</p>
										</div>
										<button
											className={`rounded-md px-3 py-1 text-sm ${module.enabled ? "bg-emerald-600" : "bg-slate-600"}`}
											onClick={() => toggleModule({ id: module._id, enabled: !module.enabled })}
										>
											{module.enabled ? "Enabled" : "Disabled"}
										</button>
									</div>
								))}
							</div>
						</Panel>
					)}

					{activeTab === "leads" && (
						<Panel title="Leads Management">
							<div className="grid gap-6 lg:grid-cols-2">
								<form
									className="space-y-3"
									onSubmit={async (event) => {
										event.preventDefault();
										await createLead(leadForm);
										setLeadForm(initialLead);
									}}
								>
									<Input label="Name" value={leadForm.name} onChange={(value) => setLeadForm({ ...leadForm, name: value })} />
									<Input label="Email" value={leadForm.email} onChange={(value) => setLeadForm({ ...leadForm, email: value })} />
									<Input label="Phone" value={leadForm.phone} onChange={(value) => setLeadForm({ ...leadForm, phone: value })} />
									<Input label="Company" value={leadForm.company} onChange={(value) => setLeadForm({ ...leadForm, company: value })} />
									<TextArea label="Message" value={leadForm.message} onChange={(value) => setLeadForm({ ...leadForm, message: value })} />
									<button type="submit" className="rounded-md bg-emerald-600 px-4 py-2 text-sm">Add Lead</button>
								</form>
								<div className="space-y-3">
									{leads.map((lead) => (
										<div key={lead._id} className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-3 text-sm">
											<p className="font-medium">{lead.name} ({lead.email})</p>
											<p className="text-slate-300">{lead.message}</p>
											<div className="mt-2 flex items-center justify-between">
												<p className="text-xs text-slate-400">{formatDate(lead.createdAt)}</p>
												<select
													value={lead.status}
													onChange={(event) => updateLeadStatus({ id: lead._id, status: event.target.value })}
													className="rounded-md border border-slate-600 bg-slate-900 px-2 py-1"
												>
													<option value="new">new</option>
													<option value="contacted">contacted</option>
													<option value="qualified">qualified</option>
													<option value="closed">closed</option>
												</select>
											</div>
										</div>
									))}
								</div>
							</div>
						</Panel>
					)}

					{activeTab === "projects" && (
						<Panel title="Projects Management">
							<div className="grid gap-6 lg:grid-cols-2">
								<form
									className="space-y-3"
									onSubmit={async (event) => {
										event.preventDefault();
										await upsertProject({
											...projectForm,
											tags: projectForm.tags
												.split(",")
												.map((item) => item.trim())
												.filter(Boolean),
										});
										setProjectForm(initialProject);
									}}
								>
									<Input label="Title" value={projectForm.title} onChange={(value) => setProjectForm({ ...projectForm, title: value })} />
									<Input label="Category" value={projectForm.category} onChange={(value) => setProjectForm({ ...projectForm, category: value })} />
									<Input label="Status" value={projectForm.status} onChange={(value) => setProjectForm({ ...projectForm, status: value })} />
									<Input label="URL" value={projectForm.url} onChange={(value) => setProjectForm({ ...projectForm, url: value })} />
									<Input label="Cover Image URL" value={projectForm.coverImage} onChange={(value) => setProjectForm({ ...projectForm, coverImage: value })} />
									<Input label="Tags (comma-separated)" value={projectForm.tags} onChange={(value) => setProjectForm({ ...projectForm, tags: value })} />
									<TextArea label="Summary" value={projectForm.summary} onChange={(value) => setProjectForm({ ...projectForm, summary: value })} />
									<button type="submit" className="rounded-md bg-emerald-600 px-4 py-2 text-sm">Save Project</button>
								</form>
								<div className="space-y-3">
									{projects.map((project) => (
										<div key={project._id} className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-3 text-sm">
											<p className="font-medium">{project.title}</p>
											<p className="text-slate-300">{project.summary}</p>
											<p className="mt-1 text-xs text-slate-400">{project.category} | {project.status}</p>
										</div>
									))}
								</div>
							</div>
						</Panel>
					)}

					{activeTab === "careers" && (
						<Panel title="Careers Management">
							<div className="grid gap-6 lg:grid-cols-2">
								<form
									className="space-y-3"
									onSubmit={async (event) => {
										event.preventDefault();
										await upsertCareer(careerForm);
										setCareerForm(initialCareer);
									}}
								>
									<Input label="Title" value={careerForm.title} onChange={(value) => setCareerForm({ ...careerForm, title: value })} />
									<Input label="Location" value={careerForm.location} onChange={(value) => setCareerForm({ ...careerForm, location: value })} />
									<Input label="Type" value={careerForm.type} onChange={(value) => setCareerForm({ ...careerForm, type: value })} />
									<Input label="Status" value={careerForm.status} onChange={(value) => setCareerForm({ ...careerForm, status: value })} />
									<TextArea label="Description" value={careerForm.description} onChange={(value) => setCareerForm({ ...careerForm, description: value })} />
									<button type="submit" className="rounded-md bg-emerald-600 px-4 py-2 text-sm">Save Role</button>
								</form>
								<div className="space-y-3">
									{careers.map((career) => (
										<div key={career._id} className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-3 text-sm">
											<p className="font-medium">{career.title}</p>
											<p className="text-slate-300">{career.location} | {career.type}</p>
											<p className="mt-1 text-xs text-slate-400">{career.status}</p>
										</div>
									))}
								</div>
							</div>
						</Panel>
					)}

					{activeTab === "seo" && (
						<Panel title="SEO Manager">
							<div className="grid gap-6 lg:grid-cols-2">
								<form
									className="space-y-3"
									onSubmit={async (event) => {
										event.preventDefault();
										await upsertSeoPage(seoForm);
										setSeoForm(initialSeo);
									}}
								>
									<Input label="Path" value={seoForm.path} onChange={(value) => setSeoForm({ ...seoForm, path: value })} />
									<Input label="Title" value={seoForm.title} onChange={(value) => setSeoForm({ ...seoForm, title: value })} />
									<TextArea
										label="Description"
										value={seoForm.description}
										onChange={(value) => setSeoForm({ ...seoForm, description: value })}
									/>
									<TextArea
										label="Keywords"
										value={seoForm.keywords}
										onChange={(value) => setSeoForm({ ...seoForm, keywords: value })}
									/>
									<button type="submit" className="rounded-md bg-emerald-600 px-4 py-2 text-sm">Save SEO Page</button>
								</form>
								<div className="space-y-3">
									{seoPages.map((page) => (
										<div key={page._id} className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-3 text-sm">
											<p className="font-medium">{page.path}</p>
											<p className="text-slate-300">{page.title}</p>
											<p className="mt-1 text-xs text-slate-400">Updated: {formatDate(page.updatedAt)}</p>
										</div>
									))}
								</div>
							</div>
						</Panel>
					)}
				</main>
			</div>
		</div>
	);
}

function KpiCard({ label, value }) {
	return (
		<div className="rounded-xl border border-slate-800 bg-slate-900 px-4 py-3">
			<p className="text-xs uppercase tracking-wide text-slate-400">{label}</p>
			<p className="mt-1 text-2xl font-semibold">{value}</p>
		</div>
	);
}

function Panel({ title, children }) {
	return (
		<section className="rounded-xl border border-slate-800 bg-slate-900 p-4">
			<h2 className="mb-4 text-lg font-semibold">{title}</h2>
			{children}
		</section>
	);
}

function Input({ label, value, onChange }) {
	return (
		<label className="block">
			<span className="mb-1 block text-sm text-slate-300">{label}</span>
			<input
				value={value}
				onChange={(event) => onChange(event.target.value)}
				className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm"
			/>
		</label>
	);
}

function TextArea({ label, value, onChange }) {
	return (
		<label className="block">
			<span className="mb-1 block text-sm text-slate-300">{label}</span>
			<textarea
				value={value}
				onChange={(event) => onChange(event.target.value)}
				rows={3}
				className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm"
			/>
		</label>
	);
}

class AdminErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { error: null };
	}

	static getDerivedStateFromError(error) {
		return { error };
	}

	render() {
		if (!this.state.error) {
			return this.props.children;
		}

		const message = String(this.state.error?.message || this.state.error || "Unknown admin error");
		const isMissingFunction = message.includes("Could not find public function");

		return (
			<div className="flex min-h-screen items-center justify-center bg-slate-950 p-6 text-slate-100">
				<div className="max-w-2xl rounded-xl border border-amber-500/30 bg-slate-900 p-6">
					<h1 className="text-2xl font-semibold">Admin Backend Not Synced</h1>
					<p className="mt-3 text-sm text-slate-300">
						{isMissingFunction
							? "Convex is reachable, but this deployment does not have the admin functions yet."
							: "Admin route failed due to a runtime error."}
					</p>
					<ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-slate-300">
						<li>Run <span className="font-mono">npx convex dev</span> in this project and complete CLI login.</li>
						<li>Keep Convex running until it uploads <span className="font-mono">convex/admin.js</span> and <span className="font-mono">convex/schema.js</span>.</li>
						<li>Refresh this page after sync completes.</li>
					</ol>
					<p className="mt-4 rounded bg-slate-950 p-3 text-xs text-slate-400">{message}</p>
					<button
						type="button"
						onClick={() => window.location.reload()}
						className="mt-4 rounded-md bg-emerald-600 px-4 py-2 text-sm"
					>
						Retry
					</button>
				</div>
			</div>
		);
	}
}

export default function AdminPage() {
	if (!import.meta.env.VITE_CONVEX_URL) {
		return (
			<div className="flex min-h-screen items-center justify-center bg-slate-950 p-6 text-slate-100">
				<div className="max-w-xl rounded-xl border border-slate-800 bg-slate-900 p-6">
					<h1 className="text-2xl font-semibold">Admin Panel Requires Convex Setup</h1>
					<p className="mt-3 text-sm text-slate-300">
						Add VITE_CONVEX_URL and VITE_ADMIN_PIN to your .env file, then run Convex with npx convex dev.
					</p>
				</div>
			</div>
		);
	}

	return (
		<AdminErrorBoundary>
			<AdminDashboard />
		</AdminErrorBoundary>
	);
}
