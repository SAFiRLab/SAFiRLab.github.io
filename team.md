---
title: Team
subtitle: The people behind the SAFiR Lab
hero_image: /assets/group/SAFiR_group_wide_2026.jpg
hide_hero: false
---

{% for group in site.data.team %}
<h2 class="title is-4 section-heading">{{ group.group }}</h2>
<div class="columns is-multiline is-mobile team-group">
  {% for member in group.members %}
  <div class="column">
    {% if member.link %}<a class="team-card team-card-link" href="{{ member.link }}" target="_blank" rel="noopener">{% else %}<div class="team-card">{% endif %}
      {% if member.photo %}
      <img class="member-photo" src="{{ member.photo | relative_url }}" alt="{{ member.name }}">
      {% endif %}
      <div class="team-card-body">
        <p class="team-name">{{ member.name }}</p>
        <p class="team-role">{% if group.alumni %}{{ member.role }} / {{ member.year }}{% else %}{{ member.role }}{% endif %}</p>
      </div>
    {% if member.link %}</a>{% else %}</div>{% endif %}
  </div>
  {% endfor %}
</div>
{% endfor %}
