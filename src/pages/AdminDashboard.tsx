import { useEffect, useState } from "react";
import {
    Phone,
    MessageCircle,
    RefreshCcw,
    Sparkles,
    Search,
    LogOut,
    Users,
} from "lucide-react";

import { Navigate, useNavigate } from "react-router-dom";

/* ===============================
   TYPES
================================ */

interface Lead {
    id: number;
    name: string;
    phone: string;
    email: string;
    message: string;
    source: string;
    date: string;
    status?: "New" | "Called" | "Closed";
}

/* ===============================
   COMPONENT
================================ */

export default function AdminDashboard() {
    const navigate = useNavigate();

    const [leads, setLeads] = useState<Lead[]>([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);

    /* ===============================
       FETCH LEADS
    ================================ */

    const loadLeads = async () => {

        setLoading(true);

        const res = await fetch("/api/admin/leads", {
            credentials: "include"
        });

        if (res.status === 401) {
            navigate("/admin");
            return;
        }

        const data = await res.json();

        const withStatus = data.map((l) => ({
            ...l,
            status: l.status || "New",
        }));

        setLeads(withStatus);
        setLoading(false);
    };

    useEffect(() => {
        loadLeads();
    }, []);

    /* ===============================
       FILTER
    ================================ */

    const filtered = leads.filter(
        (l) =>
            l.name.toLowerCase().includes(search.toLowerCase()) ||
            l.phone.includes(search)
    );

    /* ===============================
       STATUS UPDATE (LOCAL)
    ================================ */

    const updateStatus = (id: number, status: Lead["status"]) => {
        setLeads((prev) =>
            prev.map((l) => (l.id === id ? { ...l, status } : l))
        );
    };

    /* ===============================
       UI
    ================================ */

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-50">
            {/* HEADER */}
            <div className="bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                            <Sparkles className="w-5 h-5 text-white" />
                        </div>

                        <span className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                            Home Task FM
                        </span>
                    </div>

                    {/* Logout */}
                    <button
                        onClick={async () => {

                            await fetch("/api/admin/logout", {
                                method: "POST",
                                credentials: "include"
                            });

                            navigate("/admin");
                        }}

                        className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 hover:border-emerald-500 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 transition"
                    >
                        <LogOut className="w-4 h-4" />
                        <span className="text-sm font-semibold">Logout</span>
                    </button>
                </div>
            </div>

            {/* CONTENT */}
            <div className="max-w-7xl mx-auto px-6 py-8">
                {/* Header */}
                <div className="mb-8">
                    <div className="inline-flex items-center gap-2 bg-emerald-100 border border-emerald-200 rounded-full px-4 py-2 mb-4">
                        <Users className="w-4 h-4 text-emerald-600" />
                        <span className="text-sm font-bold text-emerald-700 uppercase">
                            Admin Dashboard
                        </span>
                    </div>

                    <div className="flex justify-between flex-wrap gap-4">
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900">
                                Leads Dashboard
                            </h1>
                            <p className="text-slate-600">
                                Manage and track all inquiries
                            </p>
                        </div>

                        <div className="flex gap-3 items-center">
                            <div className="bg-white rounded-xl px-5 py-3 shadow border">
                                <span className="text-sm font-semibold text-slate-600">
                                    Total:
                                </span>{" "}
                                <span className="text-xl font-bold text-emerald-600">
                                    {filtered.length}
                                </span>
                            </div>

                            <button
                                onClick={loadLeads}
                                className="flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-700 shadow transition"
                            >
                                <RefreshCcw
                                    className={`w-4 h-4 ${loading ? "animate-spin" : ""
                                        }`}
                                />
                                Refresh
                            </button>
                        </div>
                    </div>
                </div>

                {/* Search */}
                <div className="relative mb-6">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />

                    <input
                        placeholder="Search by name or phone..."
                        className="w-full pl-12 pr-4 py-4 rounded-xl border bg-white shadow focus:ring-2 focus:ring-emerald-500"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                {/* Table */}
                <div className="rounded-xl border bg-white shadow overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead className="bg-slate-50 border-b">
                                <tr>
                                    <th className="p-4 text-left">Name</th>
                                    <th className="p-4 text-left">Phone</th>
                                    <th className="p-4 text-left">Email</th>
                                    <th className="p-4 text-left">Status</th>
                                    <th className="p-4 text-left">Actions</th>
                                    <th className="p-4 text-left">Date</th>
                                </tr>
                            </thead>

                            <tbody>
                                {filtered.map((l) => (
                                    <tr
                                        key={l.id}
                                        className="border-t hover:bg-slate-50"
                                    >
                                        <td className="p-4 font-semibold">{l.name}</td>

                                        <td className="p-4">
                                            <a
                                                href={`tel:${l.phone}`}
                                                className="text-emerald-600 hover:underline"
                                            >
                                                {l.phone}
                                            </a>
                                        </td>

                                        <td className="p-4">{l.email}</td>

                                        {/* Status */}
                                        <td className="p-4">
                                            <select
                                                value={l.status}
                                                onChange={(e) =>
                                                    updateStatus(
                                                        l.id,
                                                        e.target.value as any
                                                    )
                                                }
                                                className="border rounded px-3 py-2"
                                            >
                                                <option>New</option>
                                                <option>Called</option>
                                                <option>Closed</option>
                                            </select>
                                        </td>

                                        {/* Actions */}
                                        <td className="p-4 flex gap-2">
                                            <a
                                                href={`tel:${l.phone}`}
                                                className="p-2 bg-blue-600 text-white rounded"
                                            >
                                                <Phone className="w-4 h-4" />
                                            </a>

                                            <a
                                                href={`https://wa.me/91${l.phone}`}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="p-2 bg-green-600 text-white rounded"
                                            >
                                                <MessageCircle className="w-4 h-4" />
                                            </a>
                                        </td>

                                        <td className="p-4 text-slate-500">
                                            {l.date}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Empty */}
                    {filtered.length === 0 && !loading && (
                        <div className="text-center py-16 text-slate-500">
                            No leads found
                        </div>
                    )}
                </div>

                {/* Loader */}
                {loading && (
                    <div className="flex justify-center py-8">
                        <RefreshCcw className="w-6 h-6 animate-spin text-emerald-600" />
                    </div>
                )}
            </div>
        </div>
    );
}
