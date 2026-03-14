import { Award } from "lucide-react";

const clients = [
    "Pharmaceutical Factories",
    "Hospitals & Clinics",
    "Manufacturing Units",
    "IT Corporate Offices",
    "Government Institutions",
    "Logistics Warehouses"
];

const ComplianceClients = () => {
    return (
        <div className="min-h-screen bg-slate-50 pt-28 px-6 pb-24">

            <div className="max-w-5xl mx-auto text-center mb-16">
                <Award className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h1 className="text-4xl font-bold text-slate-900 mb-4">
                    Compliance Clients
                </h1>
                <p className="text-slate-600">
                    Trusted by industries requiring strict regulatory standards.
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
                {clients.map((client, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md text-center hover:shadow-lg transition"
                    >
                        <p className="font-semibold text-slate-800">{client}</p>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default ComplianceClients;
