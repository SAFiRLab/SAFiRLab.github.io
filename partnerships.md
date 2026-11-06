---
title: Partnerships
subtitle: Our partners and collaborators
---

We work closely with our partners to design innovative robotic solutions and generate tangible impact, both in the field and for society.

<div class="columns is-multiline is-vcentered">
{% for partner in site.data.partners %}
  <div class="column is-4-desktop is-6-tablet is-12-mobile has-text-centered">
    <a href="{{ partner.link }}" target="_blank" rel="noopener"><img src="{{ partner.logo | relative_url }}" alt="{{ partner.name }}"></a>
  </div>
{% endfor %}
</div>

Contact us to explore partnership opportunities.
