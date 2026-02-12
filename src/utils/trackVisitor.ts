export const trackVisitor = async () => {

    try {

        const res = await fetch("https://ipapi.co/json/");
        const geo = await res.json();

        await fetch("/api/track", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                city: geo.city,
                country: geo.country_name,
                page: window.location.pathname,
                referrer: document.referrer,
            }),
        });

    } catch (err) {
        console.log("Tracking failed");
    }
};
