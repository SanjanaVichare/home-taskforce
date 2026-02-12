import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { Sparkles, Lock, User, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin({ onLogin }: any) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const login = async () => {
        setLoading(true);

        const res = await fetch("/api/admin/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (res.ok) {

            toast({ title: "Login successful" });

            // Redirect
            navigate("/admin/dashboard");

        } else {

            toast({
                title: "Invalid login",
                variant: "destructive",
            });
            setLoading(false);

        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            login();
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-50 relative overflow-hidden p-4">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl"></div>

            {/* Login Card */}
            <div className="relative w-full max-w-md">
                <div
                    className="bg-white/80 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-2xl border border-slate-200 relative overflow-hidden"
                    style={{
                        animation: 'fadeInUp 0.6s ease-out'
                    }}
                >
                    {/* Top gradient accent */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-500"></div>

                    {/* Logo */}
                    <div className="flex justify-center mb-8">
                        <div className="relative">
                            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-emerald-500/30">
                                <Sparkles className="w-8 h-8 text-white" strokeWidth={2.5} />
                            </div>
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
                        </div>
                    </div>

                    {/* Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                            Admin Login
                        </h2>
                        <p className="text-slate-600">
                            Sign in to access the dashboard
                        </p>
                    </div>

                    {/* Form */}
                    <div className="space-y-5">
                        {/* Username Input */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Username
                            </label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <Input
                                    placeholder="Enter your username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    className="pl-12 h-12 rounded-xl border-slate-300 focus:border-emerald-500 focus:ring-emerald-500 transition-all"
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <Input
                                    type="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    className="pl-12 h-12 rounded-xl border-slate-300 focus:border-emerald-500 focus:ring-emerald-500 transition-all"
                                />
                            </div>
                        </div>

                        {/* Login Button */}
                        <Button
                            className="w-full h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105 group"
                            onClick={login}
                            disabled={loading}
                        >
                            {loading ? (
                                <span className="flex items-center gap-2">
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    Logging in...
                                </span>
                            ) : (
                                <span className="flex items-center gap-2">
                                    Login
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            )}
                        </Button>
                    </div>

                    {/* Footer */}
                    <div className="mt-8 pt-6 border-t border-slate-200">
                        <p className="text-center text-sm text-slate-500">
                            <span className="font-semibold bg-gradient-to-r from-slate-700 to-slate-600 bg-clip-text text-transparent">
                                Home Task Facility Management
                            </span>
                            <br />
                            Secure Admin Access
                        </p>
                    </div>
                </div>

                {/* Bottom shadow decoration */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-emerald-500/10 rounded-full blur-2xl"></div>
            </div>
        </div>
    );
}