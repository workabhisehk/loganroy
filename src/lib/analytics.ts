// Google Analytics utility functions

declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
    dataLayer: unknown[];
  }
}

/**
 * Get the Google Analytics Measurement ID from environment variables
 * Set this in Netlify environment variables as VITE_GA_MEASUREMENT_ID
 */
export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

/**
 * Initialize Google Analytics
 * Call this once when the app loads
 * Note: In production, GA script is injected via Vite plugin in index.html
 * This function ensures gtag is available and tracks the initial page view
 */
export const initGoogleAnalytics = () => {
  // Always log that we're attempting to initialize (helps debug)
  console.log("[GA] initGoogleAnalytics called");
  console.log("[GA] Environment check:", {
    hasId: !!GA_MEASUREMENT_ID,
    idValue: GA_MEASUREMENT_ID || "undefined",
    isDev: import.meta.env.DEV,
    isProd: import.meta.env.PROD,
  });

  // Only initialize if Measurement ID is provided
  if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === "G-XXXXXXXXXX") {
    console.warn(
      "[GA] Google Analytics not initialized: VITE_GA_MEASUREMENT_ID not set or invalid"
    );
    console.warn("[GA] Current value:", GA_MEASUREMENT_ID || "undefined");
    return;
  }

  // Debug log (only in production, helps verify it's working)
  if (import.meta.env.PROD) {
    console.log(`[GA] Verifying Google Analytics with ID: ${GA_MEASUREMENT_ID}`);
  }

  // Ensure dataLayer and gtag are initialized (may already be from HTML injection)
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag as Window["gtag"];
  }

  // Check if script already exists (injected by Vite plugin in production)
  const existingScript = document.querySelector(`script[src*="googletagmanager.com/gtag/js"]`);
  if (existingScript) {
    // Script already loaded via HTML injection, just ensure it's configured
    // The Vite plugin already configures it, but we can verify
    if (import.meta.env.PROD) {
      console.log("[GA] Google Analytics script found in HTML - already configured");
    }
    return;
  }

  // Fallback: Load the GA script dynamically (for dev mode or if plugin didn't inject)
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  
  // Wait for script to load before configuring
  script.onload = () => {
    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: window.location.pathname + window.location.search,
      send_page_view: true,
    });
    if (import.meta.env.PROD) {
      console.log("[GA] Google Analytics initialized successfully (dynamic load)");
    }
  };
  
  script.onerror = () => {
    console.error("[GA] Failed to load Google Analytics script");
  };
  
  document.head.appendChild(script);
};

/**
 * Track a page view
 */
export const trackPageView = (url: string, title?: string) => {
  if (
    typeof window !== "undefined" &&
    window.gtag &&
    GA_MEASUREMENT_ID &&
    GA_MEASUREMENT_ID !== "G-XXXXXXXXXX"
  ) {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
      page_title: title,
    });
  }
};

/**
 * Track a custom event
 */
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, unknown>
) => {
  if (
    typeof window !== "undefined" &&
    window.gtag &&
    GA_MEASUREMENT_ID &&
    GA_MEASUREMENT_ID !== "G-XXXXXXXXXX"
  ) {
    window.gtag("event", eventName, eventParams);
  }
};

/**
 * Track an outbound link click
 */
export const trackOutboundLink = (url: string, linkText?: string) => {
  trackEvent("click", {
    event_category: "outbound",
    event_label: linkText || url,
    transport_type: "beacon",
  });
};

/**
 * Track a download
 */
export const trackDownload = (fileName: string, fileExtension?: string) => {
  trackEvent("file_download", {
    file_name: fileName,
    file_extension: fileExtension,
  });
};

