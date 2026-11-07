---
title: Research
subtitle: Enabling intelligent robots to better understand their environment
hero_image: /assets/robots/warthog_wide.jpeg
hero_link: /publications/
hero_link_text: Publications
---

Our mission is to enable the widespread use of intelligent robots to serve society, by enabling them to better understand their environment and react optimally to a variety of situations.

Our research covers several key areas:

{% for area in site.data.research_areas %}
<div class="research-area">
  <h3 class="title is-5">{{ area.title }}</h3>
  <p>{{ area.description }}</p>
</div>
{% endfor %}

<h2 class="title is-4 section-heading">Future projects</h2>

{% for project in site.data.projects.future %}
<div class="project-item">
  <img src="{{ project.image | relative_url }}" alt="{{ project.title }}">
  <p>{{ project.title }}</p>
</div>
{% endfor %}

<h2 class="title is-4 section-heading">Ongoing projects</h2>

{% for project in site.data.projects.ongoing %}
<div class="project-item">
  <img src="{{ project.image | relative_url }}" alt="{{ project.title }}">
  <p>{{ project.title }}</p>
</div>
{% endfor %}

<h2 class="title is-4 section-heading">Completed research projects</h2>

{% for project in site.data.projects.completed %}
<div class="project-item">
  <img src="{{ project.media | relative_url }}" alt="{{ project.title }}">
  <div>
    <p>{{ project.title }}</p>
    <p><a href="{{ project.link }}" target="_blank" rel="noopener">Read more</a></p>
  </div>
</div>
{% endfor %}

<h2 class="title is-4 section-heading">Open source</h2>

<p>Our code is available on <a href="https://github.com/SAFiRLab" target="_blank" rel="noopener">GitHub</a>. See the <a href="{{ '/open-source/' | relative_url }}">Open Source</a> page for featured projects.</p>
