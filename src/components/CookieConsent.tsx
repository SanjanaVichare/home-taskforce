import { useEffect, useState } from "react";

type CookieChoice = "all" | "essential" | "custom";

export default function CookieConsent() {

    const [visible, setVisible] = useState(false);
    const [showPrefs, setShowPrefs] = useState(false);

    const [analytics, setAnalytics] = useState(true);
    const [marketing, setMarketing] = useState(true);

    // Check if already chosen
    useEffect(() => {
        const saved = localStorage.getItem("cookie_consent");

        if (!saved) {
            setVisible(true);
        }
    }, []);

    // Save choice
    const saveChoice = async (choice: CookieChoice, prefs?: any) => {

        const data = {
            choice,
            analytics: prefs?.analytics ?? false,
            marketing: prefs?.marketing ?? false,
        };

        // Save locally
        localStorage.setItem("cookie_consent", JSON.stringify({
            ...data,
            date: new Date().toISOString(),
        }));

        // Save to backend
        try {
            await fetch("/api/cookies/consent", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
        } catch (err) {
            console.error("Cookie save failed", err);
        }

        setVisible(false);
        setShowPrefs(false);
    };


    if (!visible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 text-white p-4 shadow-lg">

            <div className="max-w-7xl mx-auto">

                {/* Main */}
                {!showPrefs && (

                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">

                        <p className="text-sm">
                            We use cookies to improve your experience, analyze traffic, and personalize content.
                        </p>

                        <div className="flex gap-3 flex-wrap">

                            <button
                                onClick={() => saveChoice("essential")}
                                className="px-4 py-2 border border-white rounded hover:bg-gray-800"
                            >
                                Essential Only
                            </button>

                            <button
                                onClick={() => setShowPrefs(true)}
                                className="px-4 py-2 border border-white rounded hover:bg-gray-800"
                            >
                                Manage Preferences
                            </button>

                            <button
                                onClick={() => saveChoice("all", {
                                    analytics: true,
                                    marketing: true
                                })}
                                className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
                            >
                                Accept All
                            </button>

                        </div>

                    </div>
                )}

                {/* Preferences */}
                {showPrefs && (

                    <div className="space-y-4">

                        <h3 className="font-semibold text-lg">
                            Cookie Preferences
                        </h3>

                        <div className="space-y-2">

                            {/* Essential */}
                            <div className="flex justify-between items-center">
                                <span>Essential Cookies</span>
                                <span className="text-green-400">Always On</span>
                            </div>

                            {/* Analytics */}
                            <div className="flex justify-between items-center">
                                <span>Analytics Cookies</span>

                                <input
                                    type="checkbox"
                                    checked={analytics}
                                    onChange={() => setAnalytics(!analytics)}
                                    className="w-5 h-5"
                                />
                            </div>

                            {/* Marketing */}
                            <div className="flex justify-between items-center">
                                <span>Marketing Cookies</span>

                                <input
                                    type="checkbox"
                                    checked={marketing}
                                    onChange={() => setMarketing(!marketing)}
                                    className="w-5 h-5"
                                />
                            </div>

                        </div>

                        <div className="flex gap-3 pt-2">

                            <button
                                onClick={() =>
                                    saveChoice("custom", {
                                        analytics,
                                        marketing
                                    })
                                }
                                className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
                            >
                                Save Preferences
                            </button>

                            <button
                                onClick={() => setShowPrefs(false)}
                                className="px-4 py-2 border border-white rounded hover:bg-gray-800"
                            >
                                Back
                            </button>

                        </div>

                    </div>
                )}

            </div>
        </div>
    );
}
