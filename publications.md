---
title: Publications
subtitle: Selected publications from the SAFiR Lab
hero_image: /assets/photos/ICRA_talk.JPG
---

<div class="content pub-list">
{% assign current_year = "" %}
{% for pub in site.data.publications %}
  {% if pub.year != current_year %}
    {% assign current_year = pub.year %}
    <h2 class="title is-4 section-heading">{{ pub.year }}</h2>
  {% endif %}
  {% assign authors_html = pub.authors %}
  {% for m in site.members %}{% if m.citation_name %}{% capture linked %}<a href="{{ m.url | relative_url }}">{{ m.citation_name }}</a>{% endcapture %}{% assign authors_html = authors_html | replace: m.citation_name, linked %}{% endif %}{% endfor %}
  <div class="pub-item">
    {% if pub.image %}
    <figure class="pub-figure">
      <img src="{{ pub.image | relative_url }}" alt="{{ pub.title }}">
    </figure>
    {% endif %}
    <div class="pub-body">
      <p class="pub-title"><strong>{{ pub.title }}</strong></p>
      <p class="pub-authors">{{ authors_html }}</p>
      <p class="pub-venue">{% if pub.note %}<span class="pub-note">({{ pub.note }})</span> {% endif %}<em>{{ pub.venue }}</em></p>
      {% if pub.award %}
      <p class="pub-award"><strong>{{ pub.award }}</strong></p>
      {% endif %}
      {% if pub.links or pub.bibtex %}
      <div class="pub-links">
        {% for link in pub.links %}<a class="button is-small is-safir" href="{{ link.url }}" target="_blank" rel="noopener">{{ link.name }}</a>{% endfor %}
        {% if pub.bibtex %}
        <button type="button" class="button is-small is-safir" aria-expanded="false" aria-controls="bibtex-{{ forloop.index }}" data-bibtex-toggle>BibTeX</button>
        <button type="button" class="button is-small is-safir" aria-expanded="false" aria-controls="plain-{{ forloop.index }}" data-bibtex-toggle>Plain text</button>
        {% endif %}
      </div>
      {% endif %}
      {% if pub.bibtex %}
      <div class="pub-bibtex" id="bibtex-{{ forloop.index }}" hidden>
        <div class="pub-bibtex-header">
          <button type="button" class="button is-small is-safir pub-copy" data-copy="bibtex-{{ forloop.index }}-text">Copy</button>
        </div>
        <pre id="bibtex-{{ forloop.index }}-text"><code>{{ pub.bibtex }}</code></pre>
      </div>
      <div class="pub-bibtex" id="plain-{{ forloop.index }}" hidden>
        <div class="pub-bibtex-header">
          <button type="button" class="button is-small is-safir pub-copy" data-copy="plain-{{ forloop.index }}-text">Copy</button>
        </div>
        <pre id="plain-{{ forloop.index }}-text">{{ pub.authors }} {{ pub.title }} {% if pub.note %}({{ pub.note }}) {% endif %}{{ pub.venue }}, {{ pub.year }}.</pre>
      </div>
      {% endif %}
    </div>
  </div>
{% endfor %}
</div>
