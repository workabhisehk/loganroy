import type { Plugin } from 'vite';

/**
 * Vite plugin to inject Google Analytics script into HTML head
 * This ensures GA loads reliably before the page renders
 */
export function googleAnalytics(): Plugin {
  let gaId: string | undefined;
  
  return {
    name: 'google-analytics',
    configResolved(config) {
      // Get the GA ID from environment variables
      gaId = config.env.VITE_GA_MEASUREMENT_ID;
    },
    transformIndexHtml(html) {
      if (!gaId || gaId === 'G-XXXXXXXXXX' || !gaId.startsWith('G-')) {
        return html;
      }

      // Inject GA script tags into the head
      const gaScript = `
    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=${gaId}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${gaId}', {
        page_path: window.location.pathname + window.location.search,
        send_page_view: true
      });
    </script>`;

      // Insert before closing </head> tag
      return html.replace('</head>', `${gaScript}\n  </head>`);
    },
  };
}

