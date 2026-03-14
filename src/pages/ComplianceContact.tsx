import { useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast"; // IMPORTANT
import ComplianceNavbar from "@/components/ComplianceNavbar";

const ComplianceContact = () => {
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
            // 1️⃣ Save to database
            const response = await fetch(window.location.origin + "/api/leads", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    phone: formData.phone,
                    email: formData.email,
                    message: formData.message,
                    source: "contact_form",
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to save lead");
            }

            // 2️⃣ Create WhatsApp message
            const message = `Hi, I'm ${formData.name}

Service: ${formData.service}
Phone: ${formData.phone}
Email: ${formData.email}

Message: ${formData.message}`;

            const whatsappUrl = `https://wa.me/919702720588?text=${encodeURIComponent(
                message
            )}`;

            // 3️⃣ Open WhatsApp
            window.open(whatsappUrl, "_blank");

            // 4️⃣ Show success
            toast({
                title: "Inquiry Sent",
                description: "We will contact you soon!",
            });

            // 5️⃣ Reset form
            setFormData({
                name: "",
                phone: "",
                email: "",
                service: "",
                message: "",
            });

        } catch (error) {
            console.error(error);

            toast({
                title: "Error",
                description: "Could not send inquiry. Try again.",
                variant: "destructive",
            });
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">

            {/* ✅ Compliance Navbar */}
            <ComplianceNavbar />

            {/* Push content below fixed navbar */}
            <div className="pt-24">
                <section id="contact" className="section-padding bg-gradient-to-br from-slate-50 to-slate-100">
                    <div className="section-container">
                        {/* Header */}
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="inline-block text-sm font-semibold text-emerald-600 mb-4 uppercase tracking-wider">
                                Contact Us
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 font-heading">
                                Book Your Cleaning <span className="text-emerald-500">Today</span>
                            </h2>
                            <p className="text-lg text-slate-600">
                                Get in touch for a free quote. We'll respond within 24 hours.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12">
                            {/* Contact Info */}
                            <div className="space-y-8">
                                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                                            <Phone className="h-6 w-6 text-emerald-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-slate-900 mb-2">Call Us</h3>
                                            <a href="tel:+919702720588" className="block text-emerald-600 hover:text-emerald-700 hover:underline transition">
                                                +91 9702720588
                                            </a>
                                            <a href="tel:+919137453107" className="block text-emerald-600 hover:text-emerald-700 hover:underline transition">
                                                +91 9137453107
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                                            <Mail className="h-6 w-6 text-emerald-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-slate-900 mb-2">Email Us</h3>
                                            <a href="mailto:hometaskforce5@gmail.com" className="text-emerald-600 hover:text-emerald-700 hover:underline transition">
                                                hometaskforce5@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                                            <MapPin className="h-6 w-6 text-emerald-600" />
                                        </div>
                                        <div>

                                            <h3 className="text-lg font-semibold text-foreground mb-2">Our Office</h3>
                                            <p className="text-muted-foreground">

                                                Room No 11, Jay Ambe Mata No 6,<br />
                                                Nehru Nagar, V.M. Road,<br />
                                                Vileparle West, Mumbai
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 rounded-2xl bg-emerald-500 text-white shadow-md">
                                    <h3 className="text-lg font-semibold mb-2">GST Registered</h3>
                                    <p className="opacity-90">GST NO: 27AAICH3551J1ZE</p>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-md">
                                <h3 className="text-2xl font-bold text-slate-900 mb-6">Get Free Quote</h3>
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div>
                                        <Input
                                            placeholder="Your Name *"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            required
                                            className="h-12 border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            type="tel"
                                            placeholder="Phone Number *"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            required
                                            className="h-12 border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            type="email"
                                            placeholder="Email Address"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="h-12 border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                                        />
                                    </div>
                                    <div>
                                        <select
                                            value={formData.service}
                                            onChange={(e) =>
                                                setFormData({ ...formData, service: e.target.value })
                                            }
                                            required
                                            className="
    flex h-12 w-full rounded-md border border-slate-200
    bg-white px-3 py-2 text-sm font-normal text-slate-900
    ring-offset-background
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-emerald-500
    focus-visible:ring-offset-2
    focus-visible:border-emerald-500
    disabled:cursor-not-allowed
    disabled:opacity-50
    hover:border-slate-300
    transition
  "
                                        >


                                            <option value="">Select Service *</option>

                                            <option>Home Deep Cleaning</option>
                                            <option>Carpet Shampooing</option>
                                            <option>Sofa & Chair Cleaning</option>
                                            <option>Office Deep Cleaning</option>
                                            <option>Society Housekeeping</option>
                                            <option>Office Boy Service</option>
                                            <option>Pantry Boy Service</option>
                                            <option>Pest Control</option>
                                            <option>Bird Netting</option>

                                            <option>Gardner Services</option>
                                            <option>Carpenter Services</option>
                                            <option>Electrical Services</option>
                                            <option>Plumber Services</option>
                                            <option>Driver Services</option>
                                            <option>Painting Services</option>
                                            <option>Marble Services</option>
                                            <option>Water Tank Cleaning</option>
                                            <option>Commercial Housekeeping</option>

                                        </select>
                                    </div>

                                    <div>
                                        <Textarea
                                            placeholder="Your Message"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            rows={4}
                                            className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                                        />
                                    </div>
                                    <Button type="submit" size="lg" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-md hover:shadow-lg transition">
                                        <Send className="mr-2 h-5 w-5" />
                                        Send Inquiry via WhatsApp
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        </div>
    );
};

export default ComplianceContact;
