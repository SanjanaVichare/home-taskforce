import { useState } from "react";
import { Send, Phone, Mail, MapPin, ShieldCheck } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import ComplianceNavbar from "@/components/ComplianceNavbar";

const services = [
    "Industrial Compliance Cleaning",
    "Factory Deep Sanitization",
    "Hospital Hygiene Compliance",
    "Corporate Office Audit Cleaning",
    "Government Facility Cleaning",
    "Warehouse Safety Cleaning",
];

const ComplianceServices = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    source: "compliance_contact",
                }),
            });

            if (!response.ok) throw new Error();

            const whatsappMessage = `Hi, I'm ${formData.name}

Service: ${formData.service}
Phone: ${formData.phone}
Email: ${formData.email}

Message: ${formData.message}`;

            window.open(
                `https://wa.me/919702720588?text=${encodeURIComponent(
                    whatsappMessage
                )}`,
                "_blank"
            );

            toast({
                title: "Inquiry Sent",
                description: "We will contact you soon!",
            });

            setFormData({
                name: "",
                phone: "",
                email: "",
                service: "",
                message: "",
            });
        } catch {
            toast({
                title: "Error",
                description: "Could not send inquiry.",
                variant: "destructive",
            });
        }
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <ComplianceNavbar />

            <div className="pt-28 space-y-32">

                {/* ================= SERVICES SECTION ================= */}
                <section
                    id="compliance-services"
                    className="px-6 pb-12 scroll-mt-28"
                >
                    <div className="max-w-6xl mx-auto text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            Compliance Cleaning Services
                        </h1>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Government-approved cleaning solutions with proper documentation,
                            trained staff, and full audit readiness.
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center mb-5 group-hover:bg-emerald-600 transition-all duration-300">
                                    <ShieldCheck className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                                </div>

                                <h3 className="font-bold text-lg text-slate-800 mb-2">
                                    {service}
                                </h3>

                                <p className="text-slate-600 text-sm">
                                    Fully documented, safety-certified, and inspection-ready
                                    cleaning service.
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ================= CONTACT SECTION ================= */}
                <section
                    id="compliance-contact"
                    className="px-6 pb-24 scroll-mt-28 bg-gradient-to-br from-slate-50 to-slate-100"
                >
                    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">

                        {/* CONTACT INFO */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                                    Contact Compliance Team
                                </h2>
                                <p className="text-slate-600">
                                    Need audit-ready cleaning? Get in touch with us today.
                                </p>
                            </div>

                            <div className="space-y-5">

                                <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow border hover:shadow-md transition">
                                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                                        <Phone className="w-5 h-5 text-emerald-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">+91 9702720588</p>
                                        <p className="text-sm text-slate-500">Available 24/7</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow border hover:shadow-md transition">
                                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                                        <Mail className="w-5 h-5 text-emerald-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">
                                            hometaskforce5@gmail.com
                                        </p>
                                        <p className="text-sm text-slate-500">
                                            We reply within 24 hours
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow border hover:shadow-md transition">
                                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                                        <MapPin className="w-5 h-5 text-emerald-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">
                                            Vileparle West, Mumbai
                                        </p>
                                        <p className="text-sm text-slate-500">
                                            Serving across Mumbai
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* CONTACT FORM */}
                        <div className="bg-white p-8 rounded-2xl shadow-xl border">
                            <h3 className="text-2xl font-bold mb-6">
                                Get Compliance Quote
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-5">

                                <Input
                                    placeholder="Your Name *"
                                    required
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({ ...formData, name: e.target.value })
                                    }
                                />

                                <Input
                                    type="tel"
                                    placeholder="Phone *"
                                    required
                                    value={formData.phone}
                                    onChange={(e) =>
                                        setFormData({ ...formData, phone: e.target.value })
                                    }
                                />

                                <Input
                                    type="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({ ...formData, email: e.target.value })
                                    }
                                />

                                <select
                                    required
                                    value={formData.service}
                                    onChange={(e) =>
                                        setFormData({ ...formData, service: e.target.value })
                                    }
                                    className="w-full h-12 rounded-md border border-slate-200 px-3 text-sm focus:ring-2 focus:ring-emerald-500"
                                >
                                    <option value="">Select Service *</option>
                                    {services.map((service, index) => (
                                        <option key={index}>{service}</option>
                                    ))}
                                </select>

                                <Textarea
                                    placeholder="Your Message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) =>
                                        setFormData({ ...formData, message: e.target.value })
                                    }
                                />

                                <Button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-lg hover:scale-[1.02] transition-all duration-300"
                                >
                                    <Send className="mr-2 h-5 w-5" />
                                    Send Inquiry
                                </Button>

                            </form>
                        </div>

                    </div>
                </section>
            </div>
        </div>
    );
};

export default ComplianceServices;
