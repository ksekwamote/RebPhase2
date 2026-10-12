REB Phase 2 static website mockup

Pages:
- index.html
- about.html
- services.html
- team.html
- resources.html
- contact.html

Implementation notes:
- Static HTML/CSS/JS only; no framework/build step.
- Canva-inspired layout and REB #E96126 / black / white brand system.
- Header CTA replaced with site-wide static search.
- FAQs and Value Proposition moved to About Us.
- About Us shows Executive Team only (Paul, Thatayaone).
- Testimonials (verbatim, from reb.co.bw) added to About Us between Value Proposition and Member Associations.
- Team page contains five current profiles; Mareledi M. Fantan and Tevin Ditshweu have been removed project-wide.
- Homepage Proven Track Record uses Botswana Oil in place of Premium Nickel Resources Botswana; cards link through to projects.html.
- projects.html is a dedicated Projects page (BPC, Botswana Oil, Ambatovy, Debswana) replacing Services in the main nav; services.html remains in the project but is no longer linked from the nav.
- Contact form uses FormSubmit (AJAX) as a lightweight form-to-email endpoint with a honeypot field, inline validation and a success/error status message; one-time activation is required for info@reb.co.bw before production.
- Resources page offers the finalised Risk Readiness Checklist PDF for download (assets/REB-Risk-Checklist.pdf); the earlier Risk Assessment Mini-App placeholder has been removed.
