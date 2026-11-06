---
title: Publications
subtitle: Selected publications from the SAFiR Lab
---

<div class="content">
{% for pub in site.data.publications %}
  <div class="pub-item">
    <p><span class="pub-year">{{ pub.year }}</span> &middot; {{ pub.authors }}</p>
    <p><strong>{{ pub.title }}</strong></p>
    <p><em>{{ pub.venue }}</em>{% if pub.note %} &middot; <span class="pub-note">{{ pub.note }}</span>{% endif %}</p>
    {% if pub.links %}
    <p>
      {% for link in pub.links %}<a href="{{ link.url }}" target="_blank" rel="noopener">{{ link.name }}</a>{% unless forloop.last %} | {% endunless %}{% endfor %}
    </p>
    {% endif %}
  </div>
{% endfor %}
</div>
<!-- TODO1: add bibtex -->
<!-- TODO2: link publications to members of the lab so that later they appear under their profile -->