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
    {% assign profile = site.members | where: "name", member.name | first %}
    {% if profile %}<a class="team-card team-card-link" href="{{ profile.url | relative_url }}">{% else %}<div class="team-card">{% endif %}
      {% if member.photo %}
      <img class="member-photo" src="{{ member.photo | relative_url }}" alt="{{ member.name }}">
      {% endif %}
      <div class="team-card-body">
        <p class="team-name">{{ member.name }}</p>
        <p class="team-role">{% if group.alumni %}{{ member.role }} ({{ member.year }}){% else %}{{ member.role }}{% endif %}</p>
      </div>
    {% if profile %}</a>{% else %}</div>{% endif %}
  </div>
  {% endfor %}
</div>
{% endfor %}

<h2 class="title is-4 section-heading">Group photos</h2>
<div class="columns is-multiline is-mobile group-photos">
  {% for photo in site.data.group_photos %}
  <div class="column is-3-desktop is-4-tablet is-6-mobile group-photo">
    <figure>
      <a href="{{ photo.photo | relative_url }}" data-lightbox title="Enlarge">
        <img src="{{ photo.photo | relative_url }}" alt="SAFiR Lab group photo, {{ photo.label }}">
      </a>
      <figcaption>{{ photo.label }}</figcaption>
    </figure>
  </div>
  {% endfor %}
</div>

